# Day 2 : Internet Client Server Architecture

## Internet Client-Server Architecture

Client-Server Architecture is a model in which two components communicate over a network.

- `Client` → Requests service or resources
- `Server` → Provides service or resources

The client is actually the user-facing application such as a browser or mobile app, while the server handles processing, storage, authentication, and data management.Examples:

Browser ↔ Web Server
Mobile App ↔ Backend Server
ATM ↔ Bank Server

## What is Client–Server Architecture?

A client–server system divides work between two components:

## Client

A client is the application or device used by the user.

Examples:  

- Web browsers
- Mobile applications
- Desktop software

### Responsibilities of Client

- Taking user input
- Displaying user interface
- Sending requests
- Showing responses

## Server

A server is a system that provides services or resources to clients.

### Responsibilities of Server

- Processing requests
- Accessing databases
- Authenticating users
- Returning responses
- Handling security and business logic

---

## Basic Architecture Diagram

```text
+-----------+         Internet         +------------+
|  Client   |  <------------------->  |   Server   |
| (Browser) |       HTTP/HTTPS        | (Backend)  |
+-----------+                         +------------+
```

---

## How the Web Works (End-to-End Flow)

When a user enters a website URL such as:

```text
https://google.com
```

the following steps occur:

### Step 1: URL Entered

The browser receives the URL from the user.

### Step 2: DNS Lookup

The browser asks DNS to convert the domain name into an IP address.

Example:

```text
google.com → 142.250.xx.xx
```

### Step 3: Connection Established

The browser establishes a TCP connection with the server. If HTTPS is used, TLS encryption is also established.

### Step 4: HTTP Request Sent

Example:

```http
GET / HTTP/1.1
Host: google.com
```

### Step 5: Server Processes Request

The server processes the request, accesses required resources, and prepares a response.

### Step 6: HTTP Response Returned

Example:

```http
HTTP/1.1 200 OK
Content-Type: text/html
```

### Step 7: Browser Renders the Page

The browser interprets HTML, CSS, and JavaScript and displays the webpage.

---

## HTTP Basics

HTTP stands for HyperText Transfer Protocol. It is the protocol used for communication between clients and servers on the web.

## Common HTTP Methods

| Method | Purpose |
| --- | --- |
| GET | Retrieve data |
| POST | Send or create data |
| PUT | Update complete data |
| PATCH | Partially update data |
| DELETE | Remove data |

---

## HTTP Status Codes

| Status Code | Meaning |
| --- | --- |
| 200 | Success |
| 201 | Resource Created |
| 400 | Bad Request |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Not Found |
| 500 | Internal Server Error |

Example:

```http
HTTP/1.1 404 Not Found
```

---

## Client vs Server Responsibilities

| Client Responsibilities | Server Responsibilities |
| --- | --- |
| Display UI | Process logic |
| Take user input | Authenticate users |
| Send requests | Access databases |
| Render webpages | Return responses |
| Store temporary data | Handle security |

---

## Stateless Nature of HTTP

HTTP is stateless, meaning each request is treated independently.

The server does not automatically remember previous requests from a client.

For example, when requesting:

```text
/profile
```

the server does not know whether the user previously logged in unless additional mechanisms are used.

## Maintaining State

Websites maintain state using:

- Cookies
- Sessions
- JWT Tokens

After login, the browser stores a session ID or token and sends it with future requests.

---

## Introduction to APIs (REST Basics)

API stands for Application Programming Interface. APIs allow applications to communicate with each other.

A frontend application communicates with a backend server using APIs.

---

## REST API

REST (Representational State Transfer) is a common architectural style for APIs.

### Features of REST APIs

- Resource-based URLs
- Uses HTTP methods
- Usually transfers data in JSON format

Examples of resources:

```text
/users
/products
/orders
```

---

## REST Operations

| HTTP Method | Operation |
| --- | --- |
| GET | Read |
| POST | Create |
| PUT | Update |
| DELETE | Delete |

---

## Example JSON Response

```json
{
  "name": "Vansh",
  "age": 20
}
```

---

## DNS and IP Address Concept

### IP Address

An IP address uniquely identifies a device on a network.

Example:

```text
192.168.1.1
```

---

### Domain Names

Humans cannot easily remember IP addresses, so domain names are used.

Example:

```text
google.com
```

---

## DNS

DNS (Domain Name System) converts domain names into IP addresses.

Example:

```text
google.com → 142.250.xx.xx
```

DNS works like an internet phonebook.

---

## HTTP vs HTTPS

| HTTP | HTTPS |
| --- | --- |
| Not secure | Secure |
| Data sent in plain text | Data encrypted |
| Uses port 80 | Uses port 443 |

---

## HTTPS

HTTPS is HTTP with SSL/TLS encryption.

It protects:  

- Passwords
- Payment information
- Personal data

The lock icon in a browser indicates HTTPS is being used.

---

## Basic Request–Response Flow (Login Example)

### Step 1: User Enters Credentials

```text
Email + Password
```

---

### Step 2: Client Sends Request

```http
POST /login
```

Request body:

```json
{
  "email": "user@gmail.com",
  "password": "123456"
}
```

---

### Step 3: Server Verifies Credentials

The server checks the database and verifies the password.

---

### Step 4: Server Sends Response

### Success

```http
200 OK
```

The server sends a session cookie or authentication token.

### Failure

```http
401 Unauthorized
```

---

### Step 5: Browser Stores Authentication Data

The browser stores the cookie or JWT token.

---

### Step 6: Future Requests are Authenticated

The browser sends the stored token/cookie with future requests so the server can identify the user.

---

## Summary

- Client–Server Architecture forms the foundation of the web.
- Clients send requests and servers process them.
- HTTP is the communication protocol used on the web.
- DNS converts domain names into IP addresses.
- APIs enable communication between software systems.
- HTTP is stateless, so cookies and tokens are used to maintain state.
- HTTPS secures communication using encryption.
