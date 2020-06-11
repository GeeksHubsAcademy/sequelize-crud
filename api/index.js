const express = require('express');
const app = express();
const moviesRouter = require('./routes/movies')
const directorsRouter = require('./routes/directors')
const PORT = 3000
app.use(express.json()); //parseamos el body de la petición a json sino req.body es undefined
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next(); //imprescindible next para que ejecute la siguiente función
});
app.use('/movies', moviesRouter);
app.use('/directors', directorsRouter);
app.listen(PORT, () => console.log('server running on port ' + PORT))