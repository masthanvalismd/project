import { client } from "./index.js";
import bcrypt from "bcrypt";


export async function getAllMovies() {
  return await client
    .db("movies")
    .collection("movie")
    .findOne( );
}
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


export async function genPassword(password) {
  const salt = await bcrypt.genSalt(10) //bcrypt.gen(no. of rounds)
  console.log(salt)
  const hashedPassword = await bcrypt.hash(password, salt)
  console.log(hashedPassword);
  return hashedPassword;
}

console.log(genPassword("pasword@123"));

export async function createUser(username,hashedPassword) {
  return await client
    .db("movies")
    .collection("users")
    .insertOne({ username: username, password: hashedPassword });
}

export async function getUserByName(username) {
  return await client
    .db("movies")
    .collection("users")
    .findOne({ username:username });
}