const express = require("express");
const cors = require("cors")
const app = express();
app.use(express.json());
app.use(cors());

const router = require('./routes')
app.use(router)


app.listen(4300, () => {
    console.log("Servidor Rodando");
}); 
