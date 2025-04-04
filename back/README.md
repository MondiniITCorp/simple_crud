# 📌 API Documentation

Este documento contém a documentação detalhada da API, listando seus endpoints, métodos, parâmetros e exemplos de requisição e resposta.

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
  "username": "usuario@example.com",
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
  "username": "usuario@example.com",
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
Cria um novo usuário na plataforma.

**Corpo da Requisição (JSON):**
```json
{
  "name": "string",
  "email": "string",
  "password": "string",
  "accountName": "string",
  "selectionAccountType": "string",
  "selectionManagement": "string",
  "selectionPriority": "string"
}
```

**Resposta (201 Created):**
```json
{
  "name": "string",
  "email": "string",
  "accountName": "string",
  "accountType": "string",
  "management": "string",
  "priority": "string",
  "password": "string",
  "id": number
}
```

---

## 📋 **Clientes (Clients Controller)**

### 🔹 Obter clientes por menuTitle
**Endpoint:**  
```http
GET /clients/:menuTitle
```
**Descrição:**  
Retorna uma lista de clientes associada a um menu específico.

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

### 🔹 Obter cliente por ID
**Endpoint:**  
```http
GET /clients/:id
```
**Descrição:**  
Retorna os detalhes de um cliente específico.

**Resposta (200 OK):**
```json
{
  "id": 1,
  "name": "Cliente A",
  "email": "cliente.a@example.com",
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
Exclui um cliente pelo ID.

**Resposta (204 No Content):**  
Nenhum corpo de resposta.

---

## 📌 **Boards (Boards Controller)**

### 🔹 Obter boards por menuTitle
**Endpoint:**  
```http
GET /boards/:menuTitle
```
**Descrição:**  
Retorna todos os boards vinculados a um menu específico.

**Resposta (200 OK):**
```json
[
  {
    "id": 1,
    "title": "Board de Marketing",
    "menuTitle": "Marketing"
  },
  {
    "id": 2,
    "title": "Board de Tecnologia",
    "menuTitle": "TI"
  }
]
```

---

### 🔹 Obter board por ID
**Endpoint:**  
```http
GET /boards/:id
```
**Descrição:**  
Retorna os detalhes de um board específico.

**Resposta (200 OK):**
```json
{
  "id": 1,
  "title": "Board de Marketing",
  "description": "Planejamento de campanhas",
  "menuTitle": "Marketing"
}
```

---

### 🔹 Excluir board
**Endpoint:**  
```http
DELETE /boards/:id
```
**Descrição:**  
Remove um board pelo ID.

**Resposta (204 No Content):**  
Nenhum corpo de resposta.

---

## ✅ **Tarefas (Task Controller)**

### 🔹 Obter todas as tarefas
**Endpoint:**  
```http
GET /task/
```
**Descrição:**  
Retorna uma lista com todas as tarefas do sistema.

**Resposta (200 OK):**
```json
[
  {
    "id": 1,
    "title": "Revisar documentação",
    "status": "pendente"
  },
  {
    "id": 2,
    "title": "Publicar atualização",
    "status": "concluído"
  }
]
```

---

### 🔹 Obter tarefa por ID
**Endpoint:**  
```http
GET /task/:id
```
**Descrição:**  
Retorna os detalhes de uma tarefa específica.

**Resposta (200 OK):**
```json
{
  "id": 1,
  "title": "Revisar documentação",
  "description": "Revisar a documentação da API e atualizar informações.",
  "status": "pendente"
}
```

---

### 🔹 Excluir tarefa
**Endpoint:**  
```http
DELETE /task/:id
```
**Descrição:**  
Exclui uma tarefa do sistema.

**Resposta (204 No Content):**  
Nenhum corpo de resposta.

---

## 📌 **Menus (Menu Controller)**

### 🔹 Obter menu por título
**Endpoint:**  
```http
GET /menu/:title
```
**Descrição:**  
Retorna informações sobre um menu específico.

**Resposta (200 OK):**
```json
{
  "id": 1,
  "title": "Dashboard",
  "description": "Painel de controle principal"
}
```

---

### 🔹 Excluir menu
**Endpoint:**  
```http
DELETE /menu/:title
```
**Descrição:**  
Remove um menu pelo título.

**Resposta (204 No Content):**  
Nenhum corpo de resposta.

---

# 📌 Conclusão

Essa documentação apresenta todos os endpoints disponíveis, detalhando os métodos suportados, os parâmetros necessários e exemplos de requisição e resposta.

