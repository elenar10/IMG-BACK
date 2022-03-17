import express from 'express';
import favoritesRouter from './src/IMG/router.img.js';
import cors from 'cors';

const PORT = 4030;

const app = express();
app.use(express.json());

app.use(cors());

app.use('/favorites', favoritesRouter);
 app.listen(PORT, ()=> console.log('servidor levantado en puerto: ', PORT ));