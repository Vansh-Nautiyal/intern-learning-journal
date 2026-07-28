import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  double,
  half,
  clear,
} from "./redux/counter/counterSlice";
import "./App.css";
import Navbar from "./components/Navbar";
import MessageBox from "./components/MessageBox";

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div>
      <Navbar />
      <div className="app-container">
        <div className="counter-div">
          <h2>Counter Example</h2>
          <p>Count is : {count}</p>
          <div className="buttons-div">
            <button
              onClick={() => {
                dispatch(increment());
              }}
            >
              +
            </button>
            <button
              onClick={() => {
                dispatch(decrement());
              }}
            >
              -
            </button>
            <button
              onClick={() => {
                dispatch(double());
              }}
            >
              *2
            </button>
            <button
              onClick={() => {
                dispatch(half());
              }}
            >
              /2
            </button>
          </div>
          <button
            className="clear-button"
            onClick={() => {
              dispatch(clear());
            }}
          >
            Clear
          </button>
        </div>
        <MessageBox />
      </div>
    </div>
  );
}

export default App;
