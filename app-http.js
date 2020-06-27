import http from 'http';

http
  .createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'application/json'})
    let salida = {
      nombre: 'Ernesto',
      edad: 32,
      url: req.url
    }
    res.write(JSON.stringify(salida))
    // res.write('Hola mundo');
    res.end();
  })
  .listen(8080);

console.log('Escuchando 8080');
