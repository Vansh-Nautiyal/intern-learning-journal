import {
  createContext,
  useContext,
  useEffect,
  useRef
} from "react";

const ThemeContext = createContext("Dark");

function App() {
  return (
    <ThemeContext.Provider value="Dark">
      <Profile />
    </ThemeContext.Provider>
  );
}

function Profile() {
  const theme = useContext(ThemeContext);
  const inputRef = useRef();

  useEffect(() => {
    console.log("Component Mounted");
  }, []);

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <h2>Theme: {theme}</h2>

      <input
        ref={inputRef}
        placeholder="Enter Name"
      />

      <button onClick={focusInput}>
        Focus Input
      </button>
    </div>
  );
}

export default App;