import express from 'express';
import photosHandler from '../handlers/photosHandler.js';

const router = express.Router();

router.get('/', photosHandler.getPhotos);

export default router;
