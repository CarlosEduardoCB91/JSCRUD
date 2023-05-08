const express = require("express");
const server = express();
const porta = 3000;
const { db } = require("./firebase.js");

server.use(express.json());

// retorna um
server.get("/alunos/:index", async (req, res) => {
  const { index } = req.params;
  
  if (!index) res.status(400).send("Documento não informado.");

  const cityRef = db.collection("alunos").doc(index);
  const doc = await cityRef.get();

  if (!doc.exists) res.status(404).send("Documento não encontrado.");
  
  res.status(200).send(doc.data());
});

// retorna todos
server.get("/alunos", async (req, res) => {
  const alunosRef = db.collection("alunos");
  const snapshot = await alunosRef.get();
  if (snapshot.empty) res.status(404).send("Documento não encontrado.");
  
  let resp = [];
  snapshot.forEach((doc) => {
    resp.push(doc.data());
  });
  
  res.status(200).send(resp);
});

// criar um novo
server.post("/alunos", async (req, res) => {
  const { nome, idade } = req.body;
  const id = Date.now() + "";
  const alunosRef = db.collection("alunos").doc(id);
  await alunosRef.set(
    {
      nome,
      idade,
    },
    { merge: true }
  );
  res.status(200).send("Criado com sucesso");
});

// atualiza
server.patch("/alunos/:index", async (req, res) => {
  const { index } = req.params;
  const { nome, idade } = req.body;
  const alunosRef = db.collection("alunos").doc(index);
  await alunosRef.update(
    {
      nome,
      idade,
    },
    { merge: true }
  );
  res.status(200).send("Atualizado com sucesso");
});

// deleta
server.delete("/alunos/:index", async (req, res) => {
  const { index } = req.params;
  await db.collection("alunos").doc(index).delete();
  res.status(200).send("Deletado com sucesso");
});

server.listen(porta, () => console.log(`Server startou na porta: ${porta}`));
