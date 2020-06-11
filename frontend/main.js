fetch('http://localhost:3000/movies') //Hace un GET a la url especificada
    .then(res => res.json()) //parsea la respuesta que viene en json
    .then(movies => console.log(movies));