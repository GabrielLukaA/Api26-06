const express = require("express");
const routes = express.Router();
const Usuario = require('./models/user')
const cardPermissions = require('./models/cardPermissions');
const propertiesPermissions = require("./models/propertiesPermissions");
const groups = require("./models/groups");

function createRoute() {
    routes.post('/cardPermissions', async (req, res) => {
        console.log(req.body)
        const permissions = await Permissions.create(req.body);
        res.json([]);
    });
}

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







function createRouteCardPermissions() {
    routes.post('/cardPermissions', async (req, res) => {
        console.log(req.body)
        const permission = await cardPermissions.create(req.body);
        res.json([]);
    });
}

function findAllRouteCardPermissions() {
    routes.get('/cardPermissions', async (req, res) => {
        const cardPermissionsv = await cardPermissions.findAll()
        res.json(cardPermissionsv);
    });
}

function findByIdRouteCardPermissions() {
    routes.get('/cardPermissions/:id', async (req, res) => {
        console.log("find by id: ", req.params)

        const cardPermissionV = await cardPermissions.findOne({
            where: {
                id_usuario: req.params.id
            }
        })

        res.json(cardPermissionV);
    })
}

function updateRouteCardPermissions() {
    routes.put('/cardPermissions', async (req, res) => {
        console.log(req.body)
        const permission = await cardPermissions.update(req.body, {
            where: {
                id_usuario: req.body.id
            }
        })
        res.json(req.body);

    });
}

function removeRouteCardPermissions() {
    routes.delete('/cardPermissions/:id', async (req, res) => {
        const permission = await cardPermissions.destroy({
            where: {
                id_usuario: req.params.id
            }
        })
        res.json(permission);
    });
}










function createRoutePropertiesPermissions() {
    routes.post('/propertiesPermissions', async (req, res) => {
        console.log(req.body)
        const propertyPermission = await propertiesPermissions.create(req.body);
        res.json([]);
    });
}

function findAllRoutePropertiesPermissions() {
    routes.get('/propertiesPermissions', async (req, res) => {
        const propertiesPermissionsv = await propertiesPermissions.findAll()
        res.json(propertiesPermissionsv);
    });
}

function findByIdRoutePropertiesPermissions() {
    routes.get('/propertiesPermissions/:id', async (req, res) => {
        console.log("find by id: ", req.params)

        const propertiesPermissionsv = await propertiesPermissions.findOne({
            where: {
                id_usuario: req.params.id
            }
        })

        res.json(propertiesPermissionsv);
    })
}

function updateRoutePropertiesPermissions() {
    routes.put('/propertiesPermissions', async (req, res) => {
        console.log(req.body)
        const propertyPermission = await propertiesPermissions.update(req.body, {
            where: {
                id_usuario: req.body.id
            }
        })
        res.json(req.body);

    });
}

function removeRoutePropertiesPermissions() {
    routes.delete('/propertiesPermissions/:id', async (req, res) => {
        const permission = await propertiesPermissions.destroy({
            where: {
                id_usuario: req.params.id
            }
        })
        res.json(permission);
    });
}









function createRouteGroups() {
    routes.post('/groups', async (req, res) => {
        console.log(req.body)
        const groupsv = await groups.create(req.body);
        res.json([]);
    });
}

function findAllRouteGroups() {
    routes.get('/groups', async (req, res) => {
        const groupsv = await groups.findAll()
        res.json(groupsv);
    });
}

function findByIdRouteGroups() {
    routes.get('/groups/:id', async (req, res) => {
        console.log("find by id: ", req.params)

        const groupsv = await groups.findOne({
            where: {
                id_usuario: req.params.id
            }
        })

        res.json(groupsv);
    })
}

function updateRouteGroups() {
    routes.put('/groups', async (req, res) => {
        console.log(req.body)
        const groupsv = await groups.update(req.body, {
            where: {
                id_usuario: req.body.id
            }
        })
        res.json(req.body);

    });
}

function removeRouteGroups() {
    routes.delete('/propertiesPermissions/:id', async (req, res) => {
        const groupsv = await groups.destroy({
            where: {
                id_usuario: req.params.id
            }
        })
        res.json(groupsv);
    });
}



function registerRoutes() {
    createRoute();
    findAllRoute();
    findByIdRoute();
    updateRoute();
    removeRoute();

    createRouteCardPermissions();
    findAllRouteCardPermissions();
    findByIdRouteCardPermissions();
    updateRouteCardPermissions();
    removeRouteCardPermissions();

    createRoutePropertiesPermissions();
    findAllRoutePropertiesPermissions();
    findByIdRoutePropertiesPermissions();
    updateRoutePropertiesPermissions();
    removeRoutePropertiesPermissions();


    createRouteGroups();
    findAllRouteGroups();
    findByIdRouteGroups();
    updateRouteGroups();
    removeRouteGroups();



    return routes;
}

module.exports = registerRoutes;
