import { useEffect, useState, FC } from 'react';
import { makeStyles, Grid } from '@material-ui/core';

import AppContext from './AppContext';
import config from './configuration';
import PhotoCarousel from './components/Carousel';
import TopBar from './components/TopBar';

interface AppDataType {
  photoList: string[];
  photoCategory: string;
  setPhotoCategory: (value: string) => void;
}

const App: FC = () => {
  const useStyles = makeStyles(() => ({
    root: {
      margin: 'auto',
      width: '100%'
    },
    gridItem: {
      marginTop: '50px'
    }
  }));

  const classes = useStyles();

  const { PHOTOS_URI, DEFAULT_PHOTO_CATEGORY, PHOTO_CATEGORIES } = config;
  const [ photoCategory, setPhotoCategory ] = useState<string>(DEFAULT_PHOTO_CATEGORY);
  const [ appData, setAppData ] = useState<AppDataType>({
    photoList: [],
    photoCategory,
    setPhotoCategory
  });

  useEffect(() => {
    const loadPhotos = () => {
      let url = PHOTOS_URI;
      if (PHOTO_CATEGORIES.includes(photoCategory)) {
        url += `?category=${encodeURIComponent(photoCategory)}`;
      }

      fetch(url)
      .then(res => res.json())
      .then(
        result => {
          console.log(result);
          setAppData({
            photoList: result,
            photoCategory,
            setPhotoCategory
          });
        },
        error => {
          console.log(error);
        }
      )
    };

    loadPhotos();
  }, [PHOTOS_URI, DEFAULT_PHOTO_CATEGORY, PHOTO_CATEGORIES, photoCategory]);

  return (
    <AppContext.Provider value={appData}>
      <Grid container spacing={1} className={classes.root} justify="center">
        <Grid item xs={12} className={classes.gridItem}>
          <TopBar />
        </Grid>
        <Grid item xs={12} className={classes.gridItem}>
          <PhotoCarousel />
        </Grid>
      </Grid>
    </AppContext.Provider>
  );
}

export default App;
