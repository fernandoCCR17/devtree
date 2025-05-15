import express from "express";

const app = express();

//Routing
app.get("/", (req, res) => {
    res.send("Hola mundo en Express")
})

const puerto = process.env.PORT ?? 4000;

app.listen(puerto, () => {
    console.log("Servidor funcionando");
});