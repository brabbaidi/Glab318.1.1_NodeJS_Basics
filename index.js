// console.log("Hello World");
// console.log(7+3);
// console.log("My favorite superhero was Green Lantern");
const http = require('http');

const hostname = '127.0.0.1'

const PORT = 3000;
// const server = http.createServer((rep, res) => {
//     res.statusCode = 200
//     res.setHeader('Content-Type', 'text/plain')
//     res.end('Hello World')
// })
const server = http.createServer((rep, res) => {
        res.statusCode = 200
        res.setHeader('Content-Type', 'text/html')
        res.write('<h1 style="color: red"> Platypus</h1>')
        res.end(); 
    })

server.listen(PORT, hostname, ()=>{
    console.log(`Server is running on http://${hostname}:${PORT}`);
})