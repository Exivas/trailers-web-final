import {MovieCrud} from "../func/Crud.js"

const crud=new MovieCrud();

document.addEventListener("DOMContentLoaded", function () {
    const edit = document.getElementById("add-form");
  
    edit.addEventListener("submit", function (event) {
    event.preventDefault();
      const titulo = document.getElementById("Titulo");
      const year=document.getElementById("Año");
      const director=document.getElementById("Director");
      const actores=document.getElementById("Actores");
      const resena=document.getElementById("Reseña");
      const imagen=document.getElementById("Imagen");
      const link=document.getElementById("Link");

        const datos={
            Titulo:titulo.value,
            Año:year.value,
            Director:director.value,
            Actores: actores.value,
            Reseña:resena.value,
            Imagen:imagen.value,
            Link:link.value
        }
        crud.Add(datos)
        location.reload();
      console.log(datos);
    });
  });