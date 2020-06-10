const express = require('express');
const { Movie } = require('./models');
const app = express();
const PORT = 3000
app.use(express.json()); //parseamos el body de la petición a json
app.get('/movies', (req, res) => {
    Movie.findAll().then(movies => res.send(movies))
})
app.post('/movies', (req, res) => {
    Movie.create(req.body) //insertamos una fila en la tabla movies //INSERT INTO movies.movies () values(..,..,.)
        .then(movie => res.status(201).send(movie)) //si se inserta correctamente entrará a ejecutar el callback del then
        .catch(error => {
            console.error(error)
            res.status(500).send({ message: 'There was a problem trying to add the movie' });
        }) //si hay un problema pues entrará a ejecutar el callback del catch
        // .finally(() => console.log('esto es el finally')); //el finally se ejecuta independientemente del resultado
});
app.listen(PORT, () => console.log('server running on port ' + PORT))