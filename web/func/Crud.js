import addM from "./create.js";  
import  Remove  from "./remove.js"; 
import updateMovie from "./update.js";




export class MovieCrud {
    constructor() {

    }
  
    Add(newMovie) {
        addM(newMovie); 
    }
    Remove(id) {
        Remove(id); 
    }
    Update(id,newMovie) {
        updateMovie(id,newMovie); 
    
    }

  }