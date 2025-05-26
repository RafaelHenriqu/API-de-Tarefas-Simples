# 📝 API de Tarefas Simples

Uma API RESTful feita com **Node.js**, **Express** e **MySQL** que permite adicionar e listar tarefas.  
Ideal para praticar o básico de back-end, rotas HTTP (`GET` e `POST`) e integração com banco de dados.

## 🚀 Tecnologias utilizadas

- Node.js
- Express
- MySQL (usando o pacote `mysql2`)
- dotenv (para variáveis de ambiente)

---

## 📦 Instalação

1. Clone o repositório:

```bash
git clone https://github.com/RafaelHenriqu/API-de-Tarefas-Simples
cd API-de-Tarefas-Simples

## Instale as dependências:
npm install

## Crie um arquivo .env na raiz do projeto com suas credenciais do MySQL:

host=localhost
port=3306
user=SEU_USUARIO
password=SUA_SENHA
database=SEU_BANCO

## Certifique-se de que você já tenha uma tabela chamada tarefas com a seguinte estrutura:

CREATE TABLE tarefas (
    _ID INT AUTO_INCREMENT PRIMARY KEY,
    _Title VARCHAR(255),
    _Description TEXT
);


## Inicie a API:
node index.js

```
# 📌 Endpoints disponíveis
➕ POST /add 
Adiciona uma nova tarefa.

## Corpo da requisição (JSON):

````

{
  "Title": "Estudar Node.js",
  "Desc": "Aprender a criar uma API com Express"
}

````

## 📄 GET /get
Retorna todas as tarefas salvas no banco de dados.


# 🧠 Objetivo
Esse projeto faz parte da minha jornada de aprendizado em back-end.
Estou criando projetos do básico ao avançado para construir um portfólio sólido e entrar no mercado como desenvolvedor.

# 📚 Próximos passos
* Adicionar validação de dados

* Adicionar filtros de busca e ordenação

# 📌 Autor

Feito com dedicação por Rafael ou [LinkedIn.](https://www.linkedin.com/in/rafaelhenrique0/)
Este é apenas o começo da minha jornada como desenvolvedor! 🚀

