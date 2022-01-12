import { client } from "./index.js";

export async function getMovieById(id) {
  return await client
    .db("movies")
    .collection("movie")
    .findOne({ id: id });
}
export async function deleteMovieById(id) {
  return await client
    .db("movies")
    .collection("movie")
    .deleteOne({ id: id });
}
export async function addMovies(newMovie) {
  return await client
    .db("movies")
    .collection("movie")
    .insertMany(newMovie);
}
export async function updateMovieById(updatedMovie,id) {
  return await client
    .db("movies")
    .collection("movie")
    .updateOne({id:id},{$set:updatedMovie});
}
