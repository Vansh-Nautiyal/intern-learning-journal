# Day 9 : Props, State and Hooks in React

## Props in React

### What are Props?

Props (short for properties) are a mechanism used in React to pass data from a parent component to a child component. They allow components to become reusable and dynamic by receiving different values instead of relying on hardcoded content. Props are passed as attributes when a component is rendered and are received as an object in the child component.

A React application is usually built using multiple components, and props help these components communicate with each other. They make it possible for a parent component to provide data, configuration, or functionality to its child components.

```jsx
function Profile(props) {
  return <h1>Hello {props.name}</h1>;
}

function App() {
  return <Profile name="ABC" />;
}
```

In this example, `"ABC"` is passed from the parent component (App) to the child component (Profile) using props.

### Passing Data from Parent to Child Component

Data always flows in a one-way direction in React, from parent to child. The parent component passes values through props, and the child component receives and uses them.

```jsx
function Student(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>{props.course}</p>
    </div>
  );
}

function App() {
  return (
    <Student
      name="Vansh"
      course="React Development"
    />
  );
}
```

The child component can access the values using `props.name` and `props.course`.

### Props are Read-Only

Props are immutable, meaning a child component cannot modify the props it receives. They are controlled entirely by the parent component.

**Incorrect :**

```jsx
function Profile(props) {
  props.name = "John";
}
```

**Correct :**

```jsx
function Profile(props) {
  return <h1>{props.name}</h1>;
}
```

If data needs to change, the parent component should update it and pass the new value down.

### Passing Different Types of Data as Props

#### Strings

```jsx
<Profile name="Vansh" />
```

#### Numbers

```jsx
<Profile age={21} />
```

#### Booleans

```jsx
<Profile isStudent={true} />
```

#### Arrays

```jsx
<Profile skills={["HTML", "CSS", "React"]} />
```

#### Objects

```jsx
<Profile user={{
  name: "Vansh",
  age: 21
}} />
```

#### Functions

Functions can also be passed as props, which allows child components to communicate with parent components.

```jsx
function App() {
  const showMessage = () => {
    alert("Button clicked");
  };

  return <Button onClick={showMessage} />;
}

function Button(props) {
  return (
    <button onClick={props.onClick}>
      Click Me
    </button>
  );
}
```

This technique is commonly used for handling events.

### Props Destructuring

Instead of using props.name, you can destructure props directly.

```jsx
function Profile({ name, age }) {
  return (
    <h2>
      {name} - {age}
    </h2>
  );
}
```

Destructuring makes code cleaner and easier to read.

## State in React

### What is State?

State is a built-in React feature used to store information that can change over time. Whenever state changes, React automatically re-renders the component and updates the UI. Unlike props, state belongs to the component itself and can be modified.

### Why State is Used

State is used whenever a component needs to remember information and update the interface based on user actions or application events.

**Common examples include :**

- Counter values
- Form inputs
- Toggle buttons
- User authentication status
- API data
- Shopping cart items

Without state, React applications would only display static content.

### How State Helps Update UI Dynamically

React watches for state changes. When state changes, React updates only the necessary parts of the UI.

```jsx
function Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </>
  );
}
```

When the button is clicked, the state changes and the displayed value updates automatically.

### Using `useState` Hook

The useState hook is used to create state variables in functional components.

```jsx
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return <h1>{count}</h1>;
}
```

***Syntax***

```jsx
const [stateVariable, setStateVariable] = useState(initialValue);
```

- `stateVariable` → current value
- `setStateVariable` → updates value
- `initialValue` → starting value

### Updating State Correctly

***Incorrect :***

```jsx
count = count + 1;
```

React will not detect this change.

***Correct :***

```jsx
setCount(count + 1);
```

Always use the `setter function` provided by useState.

***For updates based on previous values :***

```jsx
setCount(prevCount => prevCount + 1);
```

This is safer because React updates state asynchronously.

### State with Different Data Types

#### String State

```jsx
const [name, setName] = useState("Vansh");
```

#### Number State

```jsx
const [count, setCount] = useState(0);
```

#### Boolean State

```jsx
const [isDarkMode, setIsDarkMode] =  useState(false);
```

#### Toggle example

```jsx
setIsDarkMode(!isDarkMode);
Array State
const [skills, setSkills] = useState([
  "HTML",
  "CSS"
]);
```

### Adding new items

```jsx
setSkills([...skills, "React"]);
```

The spread operator creates a new array.

### Object State

```jsx
const [user, setUser] = useState({
  name: "Vansh",
  age: 21
});
```

### Updating object properties

```jsx
setUser({
  ...user,
  age: 22
});
```

Always create a new object instead of modifying the existing one.

### Difference Between Props and State

Props and state are both used to store data in React, but they serve different purposes.

| Props | State |
| :---: | :---: |
| Passed from parent to child | Managed within the component |
| Read-only | Can be updated |
| Used for communication | Used for dynamic data |
| Controlled by parent | Controlled by component |
| External data | Internal data |

Props are used when data comes from another component, while state is used when a component needs to manage and update its own data.

## React Hooks

### What are Hooks?

Hooks are special React functions that allow functional components to use React features such as state, lifecycle methods, context, and references. Before hooks were introduced, many of these features were only available in class components. Hooks made functional components much more powerful and easier to write.

### Why Hooks Were Introduced

Hooks were introduced to:

- Reduce the need for class components
- Simplify state management
- Reuse logic between components
- Improve code readability
- Reduce complexity caused by lifecycle methods

Today, hooks are the standard way of writing React components.

### Rules of Hooks

React hooks must follow two important rules:

1. #### Only Call Hooks at the Top Level

    **Correct**

    ```jsx
    const [count, setCount] = useState(0);
    ```

    **Incorrect**

    ```jsx
    if (condition) {
    useState(0);
    }
    ```

    Hooks should never be inside loops, conditions, or nested functions.

2. #### Only Call Hooks Inside React Functions

    Hooks can be used:

    - Inside React components
    - Inside custom hooks

    They should not be used in regular JavaScript functions.

### Common React Hooks

#### `useState()`

`useState` allows functional components to store and update state.

```jsx
const [count, setCount] = useState(0);
```

Whenever `setCount()` is called, React re-renders the component.

#### `useEffect()`

`useEffect` is used to perform side effects in a component.

**Examples :**

- API calls
- Timers
- Event listeners
- DOM updates

```jsx
useEffect(() => {
  console.log("Component rendered");
});
```

***Run Once***

```jsx
useEffect(() => {
  console.log("Component mounted");
}, []);
```

The empty dependency array `[]` means the effect runs only once after the initial render.

***Run When State Changes***

```jsx
useEffect(() => {
  console.log("Count changed");
}, [count]);
```

The effect runs whenever `count` changes.

#### `useRef()`

`useRef` creates a mutable reference that persists between renders without causing re-renders.

```jsx
const inputRef = useRef();
```

**Example :**

`inputRef.current.focus();`

##### Common uses

- Accessing DOM elements
- Storing values between renders
- Managing timers

#### `useMemo()`

`useMemo` is used to memoize expensive calculations.

```jsx
const total = useMemo(() => {
  return calculateTotal(items);
}, [items]);
```

React recalculates the value only when dependencies change.

**Benefits:**

- Better performance
- Avoids unnecessary computations

#### `useCallback()`

useCallback memoizes functions.

```jsx
const handleClick = useCallback(() => {
  console.log("Clicked");
}, []);
```

**Benefits:**

- Prevents unnecessary function recreation
- Useful when passing functions to child components

#### `useContext()`

`useContext` allows components to access shared data without prop drilling.

```jsx
const ThemeContext =
  createContext();
```

**Provider:**

```jsx
<ThemeContext.Provider value="dark">
```

**Consumer:**

```jsx
const theme = useContext(ThemeContext);
```

**Useful for:**

- Themes
- Authentication
- User preferences
- Global settings

#### useReducer()`

`useReducer()` is an alternative to useState for managing complex state logic.

```jsx
const [state, dispatch] =
  useReducer(reducer, initialState);
```

**Example:**

```jsx
dispatch({ type: "increment" });
```

**Useful when:**

- Multiple state values exist
- State transitions are complex
- Redux-like patterns are needed

#### `useLayoutEffect()`

`useLayoutEffect()` works similarly to useEffect but runs synchronously before the browser paints the screen.

```jsx
useLayoutEffect(() => {
  console.log("Runs before paint");
}, []);
```

**Use cases:**

- Measuring DOM elements
- Preventing visual flickering
- Layout calculations

Use sparingly because it can block rendering.

#### `useId()`

`useId()` generates unique IDs for accessibility and form elements.

```jsx
const id = useId();
```

**Example:**

```jsx
<label htmlFor={id}>Name</label>
<input id={id} />
```

**Benefits:**

- Prevents ID collisions
- Improves accessibility
- Useful for reusable form components
