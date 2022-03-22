import { retrieveAllImagesByEmail, findUserBySucessEmail, createFavorite } from "./model.img.js";



/**RECUPERA TODOS LOS DOCUMENTOS DE UN USUARIO
 * @param {http request/response} req.body.email
 * @return {Array de objetos} todos los documentos de la collection img o bien mensaje de error.
 */

 export async function getAllImagesByUser(req, res){
   
    const imagesFound = await retrieveAllImagesByEmail(req.body.email)
    console.log(imagesFound)
    if(imagesFound!==null){
        res.json(imagesFound);
        
    }else{
        res.sendStatus(404);
    }
};


/** CREA UN FAVORITO TRAS COMPROBAR QUE EL USER EXISTE Y EL IMG DE LA IMAGEN NO
 * @param {http request/response} 
 * @return {objeto} 
 */

export async function setNewFavorite(req, res){
    console.log('request en setNewFavorite', req)
    const userFound = await findUserBySucessEmail(req.body.email)

    // const {name, type, imagen, email} = req.body
    // const cleanRequest = {name, type, imagen, email}
    const cleanRequest = req.body
    console.log('cleanRequest', cleanRequest)
    // if(userFound != null){ condición para cuando la app tenga registro y login
    if(userFound === userFound){
        const favoriteCreated = await createFavorite(cleanRequest);
        
        console.log("en setNewFavorite controller devuelve function", favoriteCreated)
        
        res.json(favoriteCreated)
    }else{
        res.sendStatus(401)
    }
}