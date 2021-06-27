import { useContext, FC } from "react";
import { Card, CardMedia, makeStyles } from "@material-ui/core";

import AppContext from '../../AppContext';

interface IPhotoCard {
  index: number;
}

const PhotoCard: FC<IPhotoCard> = ({index}) => {
  const useStyles = makeStyles(() => ({
    card: {
      margin: 'auto',
      maxWidth: '400px'
    },
    media: {
      borderRadius: 5,
      height: "250px"
    }
  }));

  const classes = useStyles();

  const { photoList } = useContext(AppContext);

  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={photoList[index]}
      />
    </Card>
  );
};

export default PhotoCard;
