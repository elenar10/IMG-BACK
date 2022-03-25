import { deleteOneFavoriteById, retrieveAllImagesByEmail, findUserBySucessEmail, createFavorite, retrieveAllFavorites, retrieveOneFavoriteById } from "./model.img.js";



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
/**TODOS LOS DOCUMENTOS DE FAVORITES
 * @param {http request/response} 
 * @return {Array de objetos} todos los documentos de la collection PRODUCTOS o bien mensaje de error.
 */

 export async function getAllFavorites(req, res){
    const favoritesFound = await retrieveAllFavorites()
 
    if(favoritesFound!==null){
        console.log("hasta aquí", favoritesFound)
        res.json(favoritesFound);
        
    }else{
        res.sendStatus(404);
    }
  };


  /** RECUPERA UN DOCUMENTO DE FAVORITES POR ID
 * @param {http request/response} body de request es un string con el id
 * @return {objeto} todo el documento de la collection PRODUCTOS o bien mensaje de error.
 */

 export async function getOneImageById(req, res){
    console.log('esta es la imagen', req.params.id)
   const favoriteFound = await retrieveOneFavoriteById(req.params.id)
   if(favoriteFound!==null){
       favoriteFound;
       res.json([favoriteFound]);
   }else{
       res.sendStatus(404);
   }
};


  /** BORRA UN DOCUMENTO DE FAVORITES POR ID
 * @param {http request/response} body de request es un string con el id
 * @return {objeto} ok o bien mensaje de error.
 */
 export async function deleteOneFavorite(req, res){
    console.log('esta es la imagen líena 87', req.body.id)
    const productId = req.body.id
    console.log('datos', productId)
   const favoriteDeleted = await deleteOneFavoriteById(productId)
   console.log('este es el favorito borrado', favoriteDeleted)
   if(favoriteDeleted!==null){
       res.json([favoriteDeleted]);
   }else{
       res.sendStatus(404);
   }
};

