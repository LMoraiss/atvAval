const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

let estudantes = [];
let livros = [];
let alugueis = [];

app.post("/estudantes", (req, res) => {
    const {id, nome, matricula, curso, ano } = req.body
    const estudante = {id: estudantes.length + 1 , nome, matricula, curso, ano}
    estudantes.push(estudante);
    res.status(201).json(estudante);
})

app.get ("/estudantes", (req,res) => {
    res.json(estudantes);
});

app.post("/livros", (req, res) => {
    const {id, titulo, autor, ano, genero} = req.body
    const livro = {id : livros.length +1, titulo, autor, ano, genero}
    livros.push(livro);
    res.status(201).json(livro)
})

app.get ("/livros", (req, res) => {
    res.json(livros);
});

app.post("/alugueis", (req, res) => {
    const {id, livro_id, estudante_id, data_aluguel, data_devolução} = req.body
    const aluguel = {id: alugueis.length +1, livro_id, estudante_id, data_aluguel, data_devolução};
    algueis.push(aluguel);
    res.status(201).json(aluguel);
});

app.get("/alugueis", (req, res) => {
    res.json(alugueis);
});