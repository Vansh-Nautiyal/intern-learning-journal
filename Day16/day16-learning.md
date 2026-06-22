# Day 16 : Introduction to Backend

## What is Backend ?

The **backend** is the part of an application that works behind the scenes. It handles business logic, database operations, authentication, API creation, and communication with the frontend.

### Responsibilities of Backend

- Store and retrieve data from databases
- Process user requests
- Authenticate users
- Perform calculations and validations
- Send responses to the frontend

**Example :**

When a user logs into Netflix:

**Frontend :**

- Shows login form
- Collects email and password

**Backend :**

- Verifies credentials
- Checks database
- Creates user session/token
- Sends success/failure response

#### Common Backend Technologies

- Node.js
- Express.js
- Django
- Spring Boot
- ASP.NET

---

## What is a Server ?

A **server** is a computer or software that listens for requests and sends responses.

### Restaurant Analogy

| Component | Equivalent |
| -------- | --------- |
| Customer | Client |
| Waiter | API |
| Kitchen | Server |
| Food | Response |

The customer requests food.

The kitchen processes the request and sends food back.

Similarly:

```text
Client → Request → Server
Client ← Response ← Server
```

### Types of Servers

- Web Server
- Database Server
- File Server
- Application Server

---

## Client vs Server

### Client

The client is the application used by the user.

Examples:

- Chrome Browser
- React App
- Mobile App

### Server

The server processes requests and returns data.

Examples:

- Node.js Server
- Express Server

### Communication Flow

```text
Client
   |
   | Request
   ↓
Server
   |
   | Response
   ↓
Client
```

**Example :**

React App:

```jsx
fetch("http://localhost:5000/users");
```

Backend:

```js
app.get("/users", (req, res) => {
    res.send("User List");
});
```

---

## Request and Response

Communication between client and server happens using **Request** and **Response**.

### Request

Sent by client to server.

Contains:

- URL
- Method
- Headers
- Body

**Example :**

```http
GET /users
```

**Response :**

Sent by server to client.

Contains:

- Status Code
- Data
- Headers

**Example :**

```json
{
  "message": "Success"
}
```

### Flow

```text
Client ---- Request ----> Server
Client <--- Response ---- Server
```

---

## REST API Basics

REST stands for:

**Representational State Transfer

REST APIs follow standard rules for communication.

### Features of REST API

- Uses HTTP
- Stateless
- Resource Based
- Uses URLs

#### Example Resource

Users:

```text
/users
```

Single User:

```text
/users/5
```

#### REST API Examples

Get all users:

```http
GET /users
```

Create user:

```http
POST /users
```

Delete user:

```http
DELETE /users/5
```

---

## HTTP Methods

HTTP methods define what operation should be performed.

### GET

Used to fetch data.

**Example :**

```http
GET /users
```

```js
app.get("/users", (req, res) => {
    res.send("All Users");
});
```

### POST

Used to create new data.

**Example :**

```http
POST /users
```

```js
app.post("/users", (req, res) => {
    res.send("User Created");
});
```

### PUT

Used to update an entire resource.

**Example :**

```http
PUT /users/1
```

```js
app.put("/users/:id", (req, res) => {
    res.send("User Updated");
});
```

### PATCH

Used to update a partial resource.

**Example :**

```http
PATCH /users/1
```

Only selected fields are updated.

**DELETE :**

Used to remove data.

**Example :**

```http
DELETE /users/1
```

```js
app.delete("/users/:id", (req, res) => {
    res.send("User Deleted");
});
```

---

## HTTP Status Codes

Status codes tell whether a request succeeded or failed.

### 200 OK

Request successful.

```js
res.status(200).send("Success");
```

### 201 Created

New resource created.

```js
res.status(201).send("User Created");
```

### 400 Bad Request

Client sent invalid data.

```js
res.status(400).send("Invalid Input");
```

### 404 Not Found

Resource not found.

```js
res.status(404).send("User Not Found");
```

### 500 Internal Server Error

Server-side issue.

```js
res.status(500).send("Something went wrong");
```

---

## Express.js Introduction

**Express.js** is a lightweight Node.js framework used to build web servers and APIs.

### Why Express?

Without Express:

```js
const http = require("http");
```

Lots of manual coding is required.

With Express:

```js
const express = require("express");
```

Routes and APIs become much easier.

### Features of Express.js

- Routing
- Middleware
- REST APIs
- Request Handling
- Easy Database Integration

---

## Setting up Node.js Project

### Step 1: Create Project Folder

```bash
mkdir backend
cd backend
```

### Step 2: Initialize Node Project

```bash
npm init -y
```

Creates:

```text
package.json
```

### Step 3: Install Express

```bash
npm install express
```

### Step 4: Create server.js

```js
const express = require("express");

const app = express();

app.listen(5000, () => {
    console.log("Server Running");
});
```

### Step 5: Run Server

```bash
node server.js
```

Output:

```text
Server Running
```

---

## Creating Routes

Routes determine what happens when a URL is visited.

### Route Syntax

```js
app.method(path, callback)
```

**Example :**

```js
app.get("/", (req, res) => {
    res.send("Home Page");
});
```

#### Multiple Routes

```js
app.get("/about", (req, res) => {
    res.send("About");
});

app.get("/contact", (req, res) => {
    res.send("Contact");
});
```

---

## Reading Request Body

Request body contains data sent from client.

### Enable JSON Parsing

```js
app.use(express.json());
```

**Example :**

Client sends:

```json
{
  "name": "Vansh"
}
```

Backend:

```js
app.post("/users", (req, res) => {
    console.log(req.body);
    res.send("Received");
});
```

Access data:

```js
req.body.name
```

---

## Route Parameters

Route parameters are dynamic values inside a URL.

**Example URL :**

```http
/users/5
```

**Route Example :**

```js
app.get("/users/:id", (req, res) => {
    res.send(req.params.id);
});
```

Output:

```text
5
```

### Multiple Parameters

```js
app.get("/users/:id/posts/:postId", (req, res) => {
    console.log(req.params);
});
```

URL:

```http
/users/10/posts/7
```

Output:

```js
{
  id: "10",
  postId: "7"
}
```

---

## Query Parameters

Used for filtering or searching.

**Example URL :**

```http
/users?city=Delhi
```

**Route Example :**

```js
app.get("/users", (req, res) => {
    console.log(req.query);
});
```

Output:

```js
{
  city: "Delhi"
}
```

### Multiple Query Parameters

```http
/users?city=Delhi&age=20
```

Output:

```js
{
  city: "Delhi",
  age: "20"
}
```

---

## Middleware Basics

Middleware is a function that executes before the route handler.

### Middleware Flow

```text
Request
   ↓
Middleware
   ↓
Route
   ↓
Response
```

### Middleware Syntax

```js
function logger(req, res, next) {
    console.log("Request Received");
    next();
}
```

### Using Middleware

```js
app.use(logger);
```

**Example :**

```js
app.use((req, res, next) => {
    console.log(req.method);
    next();
});
```

## CRUD Operations

CRUD stands for:

| Operation | Method |
| ---------- | ------- |
| Create | POST |
| Read | GET |
| Update | PUT / PATCH |
| Delete | DELETE |

### Create

```js
app.post("/users", (req, res) => {
    res.send("User Created");
});
```

### Read

```js
app.get("/users", (req, res) => {
    res.send("All Users");
});
```

### Update

```js
app.put("/users/:id", (req, res) => {
    res.send("User Updated");
});
```

**Delete :**

```js
app.delete("/users/:id", (req, res) => {
    res.send("User Deleted");
});
```

---

## API Testing using Postman / Thunder Client

API testing helps verify that routes work correctly.

### Postman

A desktop application used for API testing.

### Thunder Client

A VS Code extension similar to Postman.

### Testing GET Request

**Method :**

```http
GET
```

#### URL

```http
http://localhost:5000/users
```

Click **Send**.

### Testing POST Request

**Method :**

```http
POST
```

#### Body

```json
{
  "name": "Vansh",
  "age": 20
}
```

**Response :**

```json
{
  "message": "User Created"
}
```

### Testing PUT Request

```http
PUT /users/1
```

Update data in the body and send.

### Testing DELETE Request

```http
DELETE /users/1
```

Response:

```json
{
  "message": "Deleted"
}
```
