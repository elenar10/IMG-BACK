import express from 'express';
import multer from 'multer';
import { getAllImagesByUser, setNewFavorite } from './controller.img.js';

const router = express.Router();

const storage = multer.diskStorage({ 
      destination:'images/',   
      filename:(req, file, cb) =>{
            const request = req.body;
            const imagenRequest = req.file;
            console.log('router entrando en diskStorage', request)
            console.log('en router diskStorage imagenRequest', imagenRequest )
            console.log('en router diskStorage imagenRequest', file.originalname )
    
          cb(null, file.originalname)
  }})



const upload = multer({
      storage,
      dest: 'public/images/', // dest es la ruta que multer dará a la carpeta donde se guardarán las imágenes. Multer la crea donde especifiquemos, pero si no le damos un destination además del dest nos las guardará como archivos temporales.
      limits: {fileSize: 1000000} // esto sería 1MB
      }).single('imagen'); // imagen es el name que le he dado al input de que carga la imagen 

router.route('/')
      .get(getAllImagesByUser)
      .post(upload, setNewFavorite);
   

export default router;