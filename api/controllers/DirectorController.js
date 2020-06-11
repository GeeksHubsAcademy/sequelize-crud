const { Director } = require('../models');

const DirectorController = {
    async getAll(req, res) {
        try {
            const directors = await Director.findAll();
            res.send(directors);
        } catch (error) {
            console.error(error);
            res.status(500).send({ message: 'There was a problem trying to get the directors' });
        }
    }
}

module.exports = DirectorController