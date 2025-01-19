import express from "express";
import conectaNaDatabase from "./config/dbConnect.js";
import routes from "./routes/index.js";

const conexao = await conectaNaDatabase();

conexao.on("error", (erro) => {
    console.error("erro de conexão", erro);
});

conexao.once("open", () => {
    console.log("Conexão no banco com sucesso");
});

const app = express();
routes(app);

export default app

// const livros = [
//     {
//         id: 1,
//         titulo: "O senhor dos anéis"
//     },
//     {
//         id: 2,
//         titulo: "O Hobbit"
//     }
// ]

// // Rota para acessar um livro específico pelo ID - : quer dizer que é variável
// app.get("/livros/:id", (req, res) => {
//     const { id } = req.params;  // Obtém o 'id' da URL
//     const livro = livros.find(livro => livro.id === parseInt(id)); // Encontra o livro pelo 'id'

//     if (livro) {
//         res.status(200).json(livro);  // Retorna o livro encontrado
//     } else {
//         res.status(404).send("Livro não encontrado");  // Caso o livro não exista
//     }
// });

// app.get("/", (req, res) => {
//     res.status(200).send("Curso de Node.js");
// })

// app.get("/livros", async (req, res) => {
//     const listaLivros = await livro.find({}); // find é do mongoose e livro é o model
//     res.status(200).json(listaLivros);
// });

// function buscaLivro(id) {
//     return livros.findIndex(livro => {
//         return livro.id === Number(id);
//     })
// }

// app.post("/livros", (req, res) => {
//     livros.push(req.body);
//     res.status(201).send("livro cadastrado com sucesso");
// })

// app.get("/livros/:id", (req, res) => {
//     const index = buscaLivro(req.params.id);
//     const livro = livros[index];

//     if (livro) {
//         res.status(200).json(livro);
//     } else {
//         res.status(404).send("Livro não encontrado");
//     }
// });

// app.patch("/livros/:id", (req, res) => {
//     const index = buscaLivro(req.params.id);

//     if (index !== -1) {
//         const livro = livros[index].titulo = req.body.titulo;
//         res.status(200).send("título alterado com sucesso");
//     } else {
//         res.status(404).send("livro não encontrado");
//     }
// });

// app.delete("/livros/:id", (req,res) => {
//     const index = buscaLivro(req.params.id);
//     if (index !== -1) {
//         livros.splice(index,1)
//         res.status(200).send("livro deletado com sucesso");
//     } else {
//         res.status(404).send("livro não encontrado");
//     }
    
//     });