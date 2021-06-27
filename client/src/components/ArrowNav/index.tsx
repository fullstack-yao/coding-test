import { useContext, FC } from "react";
import { IconButton, makeStyles, SlideProps } from "@material-ui/core";
import BackIcon from "@material-ui/icons/NavigateBefore";
import ForwardIcon from "@material-ui/icons/NavigateNext";

import AppContext from '../../AppContext';
import config from '../../configuration';

interface ArrowNavProps {
  direction: 'left' | 'right';
  index: number;
  setIndex: (value: number) => void;
  setSlideDirection: (value: SlideProps["direction"]) => void;
  setSlideIn: (value: boolean) => void;
}

const ArrowNav: FC<ArrowNavProps> = ({ direction, index, setIndex, setSlideDirection, setSlideIn }) => {
  const useStyles = makeStyles(() => ({
    button: {
      padding: "2px"
    }
  }));

  const classes = useStyles();

  const { photoList } = useContext(AppContext);
  const photoNum = photoList.length;
  const cycleNavEnabled = config.FEATURES && config.FEATURES.cycleNavEnabled;

  let disabled: boolean = false;
  if (!cycleNavEnabled) {
    disabled = (index === 0 && direction === 'left') || (index === photoNum - 1 && direction === 'right');
  }

  const arrowClickhandler = (direction: 'left' | 'right') => {
    console.log(index);
    const increment = direction === 'left' ? -1 : 1;
    const newIndex = (index + increment + photoNum) % photoNum;
    const oppDirection = direction === 'left' ? 'right' : 'left';
    setSlideDirection(direction);
    setSlideIn(false);

    setTimeout(() => {
        setIndex(newIndex);
        setSlideDirection(oppDirection);
        setSlideIn(true);
    }, 250);
  }

  return (
    <div>
      <IconButton className={classes.button} disabled={disabled}>
        { direction === 'left' ? (
            <BackIcon
              fontSize="large"
              onClick={() => arrowClickhandler(direction)}
            />
          ) : (
            <ForwardIcon
              fontSize="large"
              onClick={() => arrowClickhandler(direction)}
            />
          )
        }
      </IconButton>
    </div>
  );
};

export default ArrowNav;
