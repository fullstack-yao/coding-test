import React, { useState, FC } from "react";
import { Slide, makeStyles, SlideProps, Grid } from "@material-ui/core";

import ArrowNav from "../ArrowNav";
import PhotoCard from "../PhotoCard";

const PhotoCarousel: FC = (props: any) => {
  const useStyles = makeStyles(() => ({
    container: {
      marginTop: "50px"
    },
    arrowLeft: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end'
    },
    arrowRight: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-start'
    },
  }));

  const classes = useStyles();

  const [index, setIndex] = useState<number>(0);

  const [slideIn, setSlideIn] = useState(true);
  const [slideDirection, setSlideDirection] = useState<SlideProps["direction"]>("left");

  const arrowNavProps = {
    index,
    setIndex,
    setSlideDirection,
    setSlideIn
  };

  return (
    <Grid container >
      <Grid item xs={1} sm={2} md={3} lg={4} xl={4} className={classes.arrowLeft}>
        <ArrowNav
          direction='left'
          {...arrowNavProps}
        />
      </Grid>
      <Grid item xs={10} sm={8} md={6} lg={4} xl={4}>
        <Slide in={slideIn} direction={slideDirection} >
          <div>
              <PhotoCard index={index}/>
          </div>
        </Slide>
      </Grid>
      <Grid item xs={1} sm={2} md={3} lg={4} xl={4} className={classes.arrowRight}>
        <ArrowNav
          direction='right'
          {...arrowNavProps}
        />
      </Grid>
    </Grid>
  );
};

export default PhotoCarousel;
