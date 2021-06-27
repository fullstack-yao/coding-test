import { useEffect, useState, FC } from 'react';
import { makeStyles, Grid, CircularProgress } from '@material-ui/core';

import AppContext from './AppContext';
import config from './configuration';
import PhotoCarousel from './components/Carousel';
import TopBar from './components/TopBar';

interface AppDataType {
  photoList: string[];
}

const App: FC = () => {
  const useStyles = makeStyles(() => ({
    root: {
      margin: 'auto',
      width: '100%'
    },
    gridItem: {
      marginTop: '30px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    spinner: {
      display: 'flex',
      alignItems: 'center',
      height: '250px'
    }
  }));

  const classes = useStyles();

  const { PHOTOS_URI, DEFAULT_PHOTO_CATEGORY, PHOTO_CATEGORIES } = config;
  const [ photoCategory, setPhotoCategory ] = useState<string>(DEFAULT_PHOTO_CATEGORY);
  const [ appData, setAppData ] = useState<AppDataType>({photoList: []});
  const [ isLoading, setIsLoading ] = useState<boolean>(true);

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
          setAppData({
            photoList: result
          });
          setTimeout(() => {
            setIsLoading(false);
          }, 500);
        },
        error => {
          setIsLoading(false);
          setAppData({
            photoList: []
          });
        }
      )
    };

    loadPhotos();
  }, [PHOTOS_URI, DEFAULT_PHOTO_CATEGORY, PHOTO_CATEGORIES, photoCategory]);

  return (
    <AppContext.Provider value={appData}>
      <Grid container spacing={1} className={classes.root} justify="center">
        <Grid item xs={12} className={classes.gridItem}>
          <TopBar
            photoCategory={photoCategory}
            setPhotoCategory={setPhotoCategory}
          />
        </Grid>
        <Grid item xs={12} className={classes.gridItem}>
          {isLoading ? (
            <div className={classes.spinner}>
              <CircularProgress size={30}/>
            </div>
          ) : (
            <PhotoCarousel />
          )}
        </Grid>
      </Grid>
    </AppContext.Provider>
  );
}

export default App;
