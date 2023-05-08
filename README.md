# JSCRUD

![Generic badge](https://img.shields.io/badge/version-1.0.0-orange.svg)
![Generic badge](https://img.shields.io/badge/NodeJs-blue.svg)
![Generic badge](https://img.shields.io/badge/Express-blue.svg)
![Generic badge](https://img.shields.io/badge/Firebase-blue.svg)

## Description
Projeto de CRUD em Express com integração do Firebase

## Usage

### version 1
---

# Descrição das rotas 
### GET - /alunos/:index
	Rota para encontrar aluno pelo index do parametro.

### GET - /alunos
	Rota para encontrar todos os alunos cadastrados.

### POST - /alunos
	Rota para cadastrar aluno informando via body "nome" e "idade"

### PATCH - /alunos/:index
	Rota para atualizar aluno informando seu index no parametro passar as novas informaçoes de body "nome" e "idade"

### DELETE - /alunos/:index
	Rota para deletar aluno informando o index via parametro



## Running application

# VARIAVEIS
```
Adicione suas credenciais do Firebase em "FirebaseKey.json"
{
  "type": "service_account",
  "project_id": "crud-ef500",
  "private_key_id": "51c********3",
  "private_key": "******",
  "client_email": "******",
  "client_id": "****",
  "auth_uri": "****",
  "token_uri": "****",
  "auth_provider_x509_cert_url": "****",
  "client_x509_cert_url": "****",
}
```

Fazer start da aplicação local
```
npm install
node index.js
```
