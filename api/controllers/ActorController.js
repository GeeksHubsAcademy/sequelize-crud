const { Actor } = require('../models');

const ActorController = {
    async create(req, res) {
        try {
            const actor = await Actor.create(req.body);
            res.status(201).send(actor);
        } catch (error) {
            console.error(error);
            res.status(500).send({
                message: 'There was a problem trying to create the Actor'
            })
        }
    }
}
module.exports = ActorController