import express from 'express';


import { getAllImages } from './controller.img';

const router = express.Router();

router.route('/')
      .get(getAllImages);
   

export default router;