const { Director } = require('../models');

const DirectorController = {
    async getAll(req, res) {
        try {
            const directors = await Director.findAll();
            res.send(directors);
        } catch (error) {
            console.error(error);
            res.status(500).send({
                message: 'There was a problem trying to get the directors'
            });
        }
    },
    async create(req, res) {
        try {
            const director = await Director.create(req.body);
            res.status(201).send(director);
        } catch (error) {
            console.error(error);
            res.status(500).send({
                message: 'There was a problem trying to create the director'
            })
        }
    },
    async update(req, res) {
        try {
            const id = req.params.id;
            await Director.update(req.body, {
                where: {
                    id // lo mismo que id:id
                }
            })
            res.send({ message: 'Director succesfully updated' })
        } catch (error) {
            console.error(error)
            res.status(500).send({
                message: 'There was a problem trying to update the director'

            })
        }
    },
    async delete(req, res) {
        try {
            const id = req.params.id;
            await Director.destroy({
                where: {
                    id // lo mismo que id:id
                }
            })
            res.send({ message: 'Director succesfully deleted' })
        } catch (error) {
            console.error(error)
            res.status(500).send({
                message: 'There was a problem trying to delete the director'

            })
        }
    }
}

module.exports = DirectorController