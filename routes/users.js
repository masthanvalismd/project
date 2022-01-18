import express from "express";
import { genPassword,createUser,getUserByName } from "../helper.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const router = express.Router();

router.post("/signup", async (request, response) => {
    const { username,password} = request.body;
    console.log(username,password);
    const isUserExist =await getUserByName(username);
    console.log(isUserExist);
    if (isUserExist) {
        response.status(400).send({ message: "Username already taken" })
        return;
    }

    if (
        !/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@!#%&]).{8,}$/g.test(password)
    ) {
        response.status(400).send({ message: "Password deoes'nt match" })
        return;
    }
    const hashedPassword = await genPassword(password);
    const result =await createUser(username, hashedPassword)
    response.send(result);
});


router.post("/login", async (request, response) => {
    const { username,password} = request.body;
    console.log(username,password);
;

    const UserFromDB =await getUserByName(username);
    console.log(UserFromDB);
    if (!UserFromDB) {
        response.status(400).send({ message: "Invalid credentials" });
        return;
    }

    const storedDBPassword = UserFromDB.password;
    const isPasswordMatch = await bcrypt.compare(password, storedDBPassword)
    if (!isPasswordMatch) {
        response.status(400).send({ message: "Invalid credentials" });
        return;
    }

    const token = jwt.sign({ id: UserFromDB._id }, process.env.SECRET_KEY);
    
    response.send({message: "Successfull login",token: token});
});



export const usersRouter = router;