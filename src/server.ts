// const express = require("express") //Common Js
import express from "express"; //EcmaScrip Module
import 'dotenv/config'
import router from "./router";
import { connectDB } from "./config/db";

const app = express();

connectDB();

//Leer los datos del formulario 
app.use(express.json());

app.use('/', router);

export default app;