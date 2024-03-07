import express from "express";
import { addUser, getUser } from "../controller/user.controller.js";
import { sendContact } from "../controller/Contact.controller.js";
import { getMenu } from "../controller/menu.controller.js";

const route = express.Router();

route.post('/user', addUser );
route.post('/getuser',getUser)
route.post('/contact', sendContact)
route.get('/menu', getMenu )

export default route;