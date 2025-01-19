// import http from "http";
import "dotenv/config";
import app from "./src/app.js";

const PORT = 3000;

app.listen(PORT, () => {
    console.log("servidor escutando");
});

// rotas sem express
// const rotas = {
//     "/": "Curso de Node.js",
//     "/livros": "Entrei em livros"
// };

// const server = http.createServer((req, res)=> {
//     res.writeHead(200, {"Content-Type": "text/plain"});
//     res.end(rotas[req.url])
// });

// server.listen(PORT, () => {
//     console.log("servidor escutando");
// });