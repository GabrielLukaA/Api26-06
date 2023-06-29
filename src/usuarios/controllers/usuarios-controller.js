const express = require("express");
const routes = express.Router();
const Usuario = require('./models/user')

function createRoute() {
    routes.post('/usuarios', async (req, res) => {
        console.log(req.body)
        const usuario = await Usuario.create(req.body);
        res.json([]);
    });
}

function findAllRoute() {
    routes.get('/usuarios', async (req, res) => {
        const usuarios = await Usuario.findAll()
        res.json(usuarios);
    });
}

function findByIdRoute() {
    routes.get('/usuarios/:id', async (req, res) => {
        console.log("find by id: ", req.params)

        const usuario = await Usuario.findOne({
            where: {
                id: req.params.id
            }
        })

        res.json(usuario);
    })
}


// function findByIdRoute() {
//     routes.get('/usuarios/:meuParametro', (req, res) => {
//         console.log(req.params)
//         res.json([]);
//     });
// }

function updateRoute() {
        routes.put('/usuarios', async (req, res) => {
            console.log(req.body)
            const usuario = await Usuario.update(req.body, {
                where: {
                    id: req.body.id
                }
            })
            console.log(usuario.name)

            res.json(req.body);

    });
}

function removeRoute() {
    routes.delete('/usuarios/:id', async (req, res) => {
        const usuario = await Usuario.destroy({
            where: {
                id: req.params.id
            }
        })
        res.json(usuario);
    });
}

function registerRoutes() {
    createRoute();
    findAllRoute();
    findByIdRoute();
    updateRoute();
    removeRoute();
    return routes;
}

module.exports = registerRoutes;
