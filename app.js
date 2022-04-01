import express from 'express';
import favoritesRouter from './src/IMG/router.img.js';
import cors from 'cors';

// const PORT = 4030;

const app = express();
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb', extended: true}));

app.use(cors());

app.use('/public', express.static('images')); // tenemos que indicar a express que la carpeta 'images' está expuesta para poder acceder a ella. Podemos indicar de forma opcional con '/public' un path previo a images para evitar que pueda haber conflictos en las rutas. 


app.use('/favorites', favoritesRouter);

const PORT = process.env.PORT || 4030
 app.listen(PORT, ()=> console.log('servidor levantado en el puerto: ', PORT ));