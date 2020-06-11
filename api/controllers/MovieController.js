const { Movie } = require('../models');

const MovieController = {
    getAll(req, res) {
        Movie.findAll().then(movies => res.send(movies))
            .catch(error => {
                console.error(error)
                res.status(500).send({ message: 'There was a problem trying to get the movies' });
            })
    },
    create(req, res) {
        Movie.create(req.body) //insertamos una fila en la tabla movies //INSERT INTO movies.movies () values(..,..,.)
            .then(movie => res.status(201).send(movie)) //si se inserta correctamente entrará a ejecutar el callback del then
            .catch(error => {
                console.error(error)
                res.status(500).send({ message: 'There was a problem trying to add the movie' });
            }) //si hay un problema pues entrará a ejecutar el callback del catch
            // .finally(() => console.log('esto es el finally')); //el finally se ejecuta independientemente del resultado
    },
    update(req, res) {
        const { id } = req.params;
        Movie.update(req.body, {
                where: {
                    id: id
                }
            })
            .then(() => res.send({ message: 'Movie succesfully updated' }))
            .catch(error => {
                console.error(error)
                res.status(500).send({ message: 'There was a problem trying to update the movie' });
            })
    },
    delete(req, res) {
        Movie.delete({
                where: {
                    id: req.params.id
                }
            })
            .then(() => res.send({ message: 'Movie succesfully deleted' }))
            .catch(error => {
                console.error(error)
                res.status(500).send({ message: 'There was a problem trying to update the movie' });
            })
    }
}
module.exports = MovieController;