import {MongoClient, ObjectId} from 'mongodb';
import { urlBBDD } from '../../config/BBDD.config.js';

const URI= urlBBDD;
const client = new MongoClient(URI);



// TODOS LOS DOCUMENTOS DE UNA COLECCIÓN
/**
 * @return {Array de objetos} todos los documentos de la collection images.
 */
 export async function retrieveAllImages(){
    try{
        await client.connect(); 
        const db = client.db('IMG');
        const allImages = db.collection('images'); 
        const listImages = await allImages.find({}).toArray(); 
        return listImages
    } catch (err){
        console.log(err);
    } finally {
        await client.close();
    }
};


// // ENCONTRAR UN DOCUMENTO POR NOMBRE
// /**
//  * @param {string} propiedad name del documento a recuperar de la collection PRODUCTOS.
//  * @return {object} documento de la collection PRODUCTOS o null.
//  */
//  export async function findOneProductByName(name){
   
//     try{
//         await client.connect();
//         const db = client.db('TIENDA-PATI');
//         const allProducts = db.collection('PRODUCTOS');
//         console.log('model, parametro nombre recibido', name)
//         const oneProduct = await allProducts.findOne({name});
//         console.log('encontrado', oneProduct)
//         return oneProduct

//     } catch (err){
//         console.log(err);
//     } finally {
//         await client.close();
//     }
// }