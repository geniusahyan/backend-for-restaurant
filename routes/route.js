import express from "express";
import { addUser, getUser } from "../controller/user.controller.js";
import { sendContact } from "../controller/Contact.controller.js";
import { getMenu } from "../controller/menu.controller.js";

const route = express.Router();

route.post('/api/user', addUser );
route.post('/api/getuser',getUser)
route.post('/api/contact', sendContact)
route.get('/api/menu', getMenu )

export default route;