import { MovieCrud } from "./Crud.js";
const CrudMovie= new MovieCrud();

const Movie = {
    Titulo: "El señor",
    Año: "2001",
    Director: "",
    Actores: "Elijah Wood, Ian McKellen, Orlando Bloom",
    Reseña: "Un gran señor",
    Imagen:"https://upload.wikimedia.org/wikipedia/commons/e/ef/One_ring.png",
    Link: "Fbco3lb9M5o",
  };


/*for(let i=0;i<22;i++){
  CrudMovie.Remove(i)
}*/
//CrudMovie.Add(Movie);
CrudMovie.Update(1,Movie)