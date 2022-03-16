import { retrieveAllImages } from "./model.img";

/**
 * @param {http request/response} 
 * @return {Array de objetos} todos los documentos de la collection img o bien mensaje de error.
 */

 export async function getAllImages(req, res){
    const imagesFound = await retrieveAllImages()
    console.log(imagesFound)
    if(imagesFound!==null){
        res.json(imagesFound);
        
    }else{
        res.sendStatus(404);
    }
};