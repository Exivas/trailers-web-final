

import {MovieCrud} from "../func/Crud.js"

const crud=new MovieCrud();

document.addEventListener("DOMContentLoaded", function () {
    const edit = document.getElementById("editar-form");
  
    edit.addEventListener("submit", function (event) {
    event.preventDefault();
      const id = document.getElementById("id");


        crud.Remove(id.value);
      console.log(datos);
        location.reload();
    });
  });


  
  async function fetchData() {
    const url = "http://localhost:3000/api/trailers";
    try {
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  }
  async function main() {
    try {
      const movieData = await fetchData(); // Espera a que se obtengan los datos
      const movieContainer = document.getElementById("editar-container");
  
      function createMovieArticle(movie) {
        const article = document.createElement("article");

        const link = document.createElement("a");
        link.href = "https://www.youtube.com/watch?v="+movie.Link;

        const iframe = document.createElement("iframe");
        iframe.width = "420";
        iframe.height = "240";
        iframe.src = "https://www.youtube.com/embed/" + movie.Link;
        iframe.frameBorder = "0";
        iframe.allowFullscreen = true;



        const id=document.createElement("p");
        id.textContent="ID:"+movie.ID;
        const image = document.createElement("img");
        image.src = movie.Imagen;
        image.alt = movie.Titulo;
      
        const title = document.createElement("h2");
        title.textContent = movie.Titulo;

        const actores=document.createElement("p");
        actores.textContent="Actores:"+movie.Actores;

        const año=document.createElement("p");    
        año.textContent="Año:"+movie.Año;

        const Director=document.createElement("p");
        Director.textContent="Director:"+movie.Director;

        const descripcion=document.createElement("h4");
        descripcion.textContent="Reseña";

        const description=document.createElement("p");
        description.textContent=movie.Reseña;

        link.appendChild(id);
        link.appendChild(image);
        link.appendChild(title);
        link.appendChild(actores);
        link.appendChild(año);
        link.appendChild(Director);
        link.appendChild(descripcion);
        link.appendChild(description);
        link.appendChild(iframe);
        article.appendChild(link);
        
        return article;
      }
      
      for (const movie of movieData) {
        const movieArticle = createMovieArticle(movie);
        movieContainer.appendChild(movieArticle);
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  }
  
  main();