
import express from "express";
import { getMovieById, deleteMovieById, addMovies, updateMovieById,getAllMovies } from "../helper.js";
import {auth} from "../middleware/auth.js";

const router=express.Router();

router.get("/", async (request, response) => {
    // const { language, rating } = request.query;
    if (request.query.rating) {
      request.query.rating = +request.query.rating
    }
    console.log(request.query);
    const movie = await getAllMovies(request)
    // .db("movies")
    // .collection("movie")
    //   // .find({language:language, rating:rating})
    //   .find(request.query)
    //   .toArray();
    response.send(movie)
  });
  
  
  // app.get("/movies", (request, response) => {
  //   const { language } = request.query;
  //   console.log(request.query,language);
 
  //   response.send(movies.filter(mv=>mv.language === language));
  
  // });
  
  
  
 router.get("/:id", async (request, response) => {
    const { id } = request.params;
    // const movie = movies.find((mv) => mv.id === id);
    const movie = await getMovieById(id);
    movie ? response.send(movie) : response.status(404).send({ message: "No Movie Found" });
    // res.send('id: ' + req.params.id);
  });
  
  
  
router.post("/", async (request, response) => {
    const newMovie = request.body;
    // console.log(newMovie);
    const result = await addMovies(newMovie)
    response.send(result);
  });
  
  
  
  
 router.delete("/:id", async (request, response) => {
    const { id } = request.params;
    // const movie = movies.find((mv) => mv.id === id);
    const movie = await deleteMovieById(id);
    response.send(movie);
    // res.send('id: ' + req.params.id);
  });
  
 router.put("/:id", async (request, response) => {
     const { id } = request.params;
    const updatedMovie = request.body;
    console.log(updatedMovie);
    
    const result = await updateMovieById(updatedMovie,id);
    response.send(result);
    // res.send('id: ' + req.params.id);
  });
  
  

  export const moviesRouter=router