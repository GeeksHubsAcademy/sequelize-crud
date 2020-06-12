const express = require('express');
const app = express();
const moviesRouter = require('./routes/movies');
const directorsRouter = require('./routes/directors');
const actorsRouter = require('./routes/actors');
const PORT = 3000
app.use(express.json()); //parseamos el body de la petición a json sino req.body es undefined
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next(); //imprescindible next para que ejecute la siguiente función
});
app.get('/', (req, res) => res.send('hola'))
app.use('/movies', moviesRouter);
app.use('/directors', directorsRouter);
app.use('/actors', actorsRouter);
app.listen(PORT, () => console.log('server running on port ' + PORT))