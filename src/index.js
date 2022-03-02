const http = require('./app');

http.listen(80, () => {
    console.log('Servidor en el puerto 80');
})