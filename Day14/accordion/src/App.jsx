import Accordion from "./components/Accordion";
import "./App.css"
function App() {
  const accordionData = [
    {
      id: 1,
      title: "What is React?",
      content:
        "React is a JavaScript library used for building user interfaces."
    },
    {
      id: 2,
      title: "What is JSX?",
      content:
        "JSX allows you to write HTML-like syntax inside JavaScript."
    },
    {
      id: 3,
      title: "What are Hooks?",
      content:
        "Hooks let functional components use state and other React features."
    }
  ];

  return (
    <div>
      <h1>React Accordion </h1>
      <Accordion items={accordionData} />
    </div>
  );
}

export default App;