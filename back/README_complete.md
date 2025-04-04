# 📌 API Documentation

Este documento contém a documentação detalhada da API, listando seus endpoints, métodos, parâmetros e exemplos de requisição e resposta.

---

## 📖 Sumário

- [🛠️ Autenticação (Auth Controller)](#autenticacao-auth-controller)
  - [🔹 Login](#login)
  - [🔹 Login para Swagger](#login-para-swagger)
- [👤 Usuários (Users Controller)](#usuarios-users-controller)
  - [🔹 Criar usuário](#criar-usuario)
  - [🔹 Atualizar usuário](#atualizar-usuario)
- [📋 Clientes (Clients Controller)](#clientes-clients-controller)
  - [🔹 Criar cliente](#criar-cliente)
  - [🔹 Obter clientes por menuTitle](#obter-clientes-por-menutitle)
  - [🔹 Obter cliente por ID](#obter-cliente-por-id)
  - [🔹 Excluir cliente](#excluir-cliente)
- [📌 Boards (Boards Controller)](#boards-boards-controller)
  - [🔹 Criar board](#criar-board)
  - [🔹 Obter boards por menuTitle](#obter-boards-por-menutitle)
  - [🔹 Obter board por ID](#obter-board-por-id)
  - [🔹 Atualizar board](#atualizar-board)
  - [🔹 Excluir board](#excluir-board)
- [✅ Tarefas (Task Controller)](#tarefas-task-controller)
  - [🔹 Criar tarefa](#criar-tarefa)
  - [🔹 Obter todas as tarefas](#obter-todas-as-tarefas)
  - [🔹 Obter tarefa por ID](#obter-tarefa-por-id)
  - [🔹 Atualizar tarefa](#atualizar-tarefa)
  - [🔹 Excluir tarefa](#excluir-tarefa)
- [📌 Menus (Menu Controller)](#menus-menu-controller)
  - [🔹 Criar menu](#criar-menu)
  - [🔹 Obter menu por título](#obter-menu-por-titulo)
  - [🔹 Atualizar menu](#atualizar-menu)
  - [🔹 Excluir menu](#excluir-menu)

---

## 🛠️ **Autenticação (Auth Controller)**

### 🔹 Login
**Endpoint:**  
```http
POST /auth/login
```
**Descrição:**  
Autentica um usuário e retorna um token JWT.

**Corpo da Requisição (JSON):**
```json
{
  "email": "usuario@example.com",
  "password": "senha123"
}
```

**Resposta (200 OK):**
```json
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5..."
}
```

---

### 🔹 Login para Swagger
**Endpoint:**  
```http
POST /auth/loginSwagger
```
**Descrição:**  
Similar ao login padrão, mas utilizado para autenticação dentro do Swagger.

**Corpo da Requisição (JSON):**
```json
{
  "email": "usuario@example.com",
  "password": "senha123"
}
```

**Resposta (200 OK):**
```json
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5..."
}
```

---

## 👤 **Usuários (Users Controller)**

### 🔹 Criar usuário
**Endpoint:**  
```http
POST /users
```
**Descrição:**  
Cria um novo usuário no sistema.

**Corpo da Requisição (JSON):**
```json
{
  "name": "Novo Usuário",
  "email": "novo.usuario@example.com",
  "password": "senhaSegura123"
}
```

**Resposta (201 Created):**
```json
{
  "id": 1,
  "name": "Novo Usuário",
  "email": "novo.usuario@example.com",
  "createdAt": "2025-01-29T12:00:00Z"
}
```

---

### 🔹 Atualizar usuário
**Endpoint:**  
```http
PATCH /users/:id
```
**Descrição:**  
Atualiza os dados de um usuário específico.

**Corpo da Requisição (JSON):**
```json
{
  "name": "Usuário Atualizado",
  "email": "usuario.atualizado@example.com"
}
```

**Resposta (200 OK):**
```json
{
  "id": 1,
  "name": "Usuário Atualizado",
  "email": "usuario.atualizado@example.com"
}
```

---

## 📋 **Clientes (Clients Controller)**

### 🔹 Criar cliente
**Endpoint:**  
```http
POST /clients
```
**Descrição:**  
Cria um novo cliente no sistema.

**Corpo da Requisição (JSON):**
```json
{
  "name": "Cliente X",
  "menuTitle": "Vendas"
}
```

**Resposta (201 Created):**
```json
{
  "id": 10,
  "name": "Cliente X",
  "menuTitle": "Vendas"
}
```

---

### 🔹 Obter clientes por menuTitle
**Endpoint:**  
```http
GET /clients/:menuTitle
```
**Descrição:**  
Retorna todos os clientes vinculados a um menu.

**Resposta (200 OK):**
```json
[
  {
    "id": 1,
    "name": "Cliente A",
    "menuTitle": "Financeiro"
  },
  {
    "id": 2,
    "name": "Cliente B",
    "menuTitle": "RH"
  }
]
```

---

### 🔹 Atualizar cliente
**Endpoint:**  
```http
PATCH /clients/:id
```
**Descrição:**  
Atualiza os dados de um cliente específico.

**Corpo da Requisição (JSON):**
```json
{
  "name": "Cliente Alterado"
}
```

**Resposta (200 OK):**
```json
{
  "id": 1,
  "name": "Cliente Alterado",
  "menuTitle": "Financeiro"
}
```

---

### 🔹 Excluir cliente
**Endpoint:**  
```http
DELETE /clients/:id
```
**Descrição:**  
Remove um cliente do sistema.

**Resposta (204 No Content):**  
Nenhum corpo de resposta.

---

# 📌 Conclusão

Essa documentação contém todos os endpoints da API, listando os métodos disponíveis, exemplos de requisição e resposta.

Se precisar de mais alguma informação, estou à disposição! 🚀
