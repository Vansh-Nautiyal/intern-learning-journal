# React Fundamentals

## What is React and Why is it Used?

React is a JavaScript library developed by Meta Platforms for building user interfaces, especially for web applications. It allows developers to create reusable UI components and efficiently update the page whenever data changes. React is widely used because it improves code organization, reusability, maintainability, and application performance.

## SPA (Single Page Application)

A Single Page Application (SPA) is a web application that loads a single HTML page and dynamically updates content without reloading the entire page. Instead of requesting a new page from the server every time a user navigates, React updates only the required parts of the interface. This results in faster navigation and a smoother user experience.

Examples include Gmail, Facebook, and many modern web applications.

## Virtual DOM

The Virtual DOM is a lightweight copy of the actual browser DOM maintained by React. Whenever data changes, React first updates the Virtual DOM and compares it with the previous version using a process called reconciliation. It then updates only the changed elements in the real DOM.
This approach reduces expensive DOM operations and improves application performance.

### How React Differs from Vanilla JavaScript

Vanilla JavaScript directly manipulates the DOM using methods such as getElementById() or querySelector(). As applications grow larger, managing UI updates manually becomes difficult. React uses a component-based architecture and Virtual DOM to automatically manage UI updates. Instead of manually changing HTML elements, developers update state or props, and React handles the rendering process efficiently.

## Setting Up React

### Vite

Vite is a modern build tool used to create React applications quickly. It provides fast startup, hot module replacement (HMR), and optimized production builds.

A React project can be created using:

```bash
npm create vite@latest
```

### Benefits of Vite include

- Faster development server
- Faster builds
- Simple project setup
- Better developer experience
- Project Structure

**A typical React project created with Vite contains:**

```text
project/
│
├── node_modules/
├── public/
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   └── assets/
├── package.json
├── vite.config.js
└── index.html
```

The `src` folder contains most of the application code, while the public folder stores static assets.

### main.jsx

`main.jsx` is the entry point of a React application. It connects React to the HTML page and renders the root component.  

**Example :**

```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <App />
);
```

Here, React renders the App component inside the HTML element with id root.

### App.jsx

`App.jsx` is usually the main component of the application. It acts as the root component that contains other child components.

**Example:**

```jsx
function App() {
  return (
    <h1>Hello React</h1>
  );
}

export default App;
```

All other components are generally rendered inside App.jsx.

## JSX

### What is JSX?

JSX (JavaScript XML) is a syntax extension for JavaScript that allows developers to write HTML-like code inside JavaScript.  
It makes UI code easier to read and write compared to manually creating elements using JavaScript.

**Example:**

```jsx
const element = <h1>Hello World</h1>;
```

### Embedding JavaScript Inside JSX

JavaScript can be embedded inside JSX using curly braces {}.

**Example:**

```jsx
const name = "ABC";

function App() {
  return <h1>Hello {name}</h1>;
}
```

The expression inside braces is evaluated and its result is displayed.

### Expressions Inside JSX

Any valid JavaScript expression can be placed inside curly braces.

**Example:**

```jsx
const a = 10;
const b = 20;

<h1>{a + b}</h1>
```

**Output:**

```text
30
```

Common expressions include ***variables***, ***arithmetic operations***, ***function calls***, and ***conditional expressions***.

## Difference Between HTML and JSX

Although JSX looks similar to HTML, there are several differences.

| HTML | JSX |
| :----: | :----: |
| Uses class | Uses className |
| Uses for | Uses htmlFor |
| Can return multiple root elements | Must return a single parent element |
| Some tags may be left open | All tags must be properly closed |
| Attribute names are lowercase | Many attributes use camelCase |

JSX is ultimately converted into JavaScript by React.

### className vs class

Since `class` is a reserved keyword in JavaScript, React uses `className` instead.

**HTML :**

```html
<h1 class="title">Hello</h1>
```

**JSX:**

```jsx
<h1 className="title">Hello</h1>
```

The purpose remains the same: applying CSS classes to elements.

### Self-Closing Tags

All self-closing elements must explicitly end with /> in JSX.

**Examples:**

```jsx
<img src="image.jpg" />
<input type="text" />
<br />
<hr />
```

Writing them without / causes an error.

## Components

### What are Components?

Components are independent, reusable pieces of UI that contain their own structure, logic, and styling. They help divide large applications into smaller manageable parts.

**Example :**

```jsx
function Welcome() {
  return <h1>Welcome User</h1>;
}
```

### Why Components are Used

Components improve code organization and reusability. Instead of writing the same UI repeatedly, developers can create a component once and use it multiple times.

**Benefits include :**

- Reusability
- Better maintainability
- Easier debugging
- Cleaner code structure
- Functional Components

Functional Components are JavaScript functions that return JSX.

**Example:**

```jsx
function Header() {
  return <h1>My Website</h1>;
}
```

They are the most commonly used type of component in modern React.

Arrow function syntax is also common:

```jsx
const Header = () => {
  return <h1>My Website</h1>;
};
```

### Naming Conventions

Component names must start with an uppercase letter.

**Correct :**

```jsx
function Header() {}
function UserCard() {}
```

**Incorrect :**

```jsx
function header() {}
```

React treats lowercase names as HTML elements rather than components.

### Exporting and Importing Components

Components can be exported from one file and imported into another.

***Header.jsx***

```jsx
function Header() {
  return <h1>Header</h1>;
}

export default Header;
```

***App.jsx***

```jsx
import Header from "./Header";

function App() {
  return <Header />;
}
```

This helps organize components into separate files.

### Component Hierarchy

React applications follow a parent-child structure called a component hierarchy.

**Example :**

```text
App
├── Header
├── MainContent
│   ├── ProductCard
│   └── ProductCard
└── Footer
```

The App component is the parent, while the others are child components. Data can flow from parent to child using props.

### Reusable Components

Creating Multiple Instances of a Component

A component can be rendered multiple times with different data.

**Example :**

```jsx
function Card() {
  return <h2>Product</h2>;
}

function App() {
  return (
    <>
      <Card />
      <Card />
      <Card />
    </>
  );
}
```

React creates separate instances of the same component.

### Keeping Components Small and Reusable

A good component should have a single responsibility and perform one specific task. Large components become difficult to understand and maintain.  
Instead of creating one large component:

```text
App
```

Break it into smaller reusable components:

```text
App
├── Navbar
├── Sidebar
├── ProductList
├── ProductCard
└── Footer
```

Small components are easier to reuse, test, debug, and update. Following this approach makes React applications scalable and maintainable.
