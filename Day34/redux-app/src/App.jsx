import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, double, half } from './redux/counter/counterSlice';
import './App.css'
import Navbar from './components/Navbar';

function App(){
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div>
      <Navbar/>
      <div className='content'>
        <h1>This is a Redux Toolkit App</h1>
        <p>Count is :  {count}</p>

        <button onClick={()=>{dispatch(increment())}}>+</button>
        <button onClick={()=>{dispatch(decrement())}}>-</button>
        <button onClick={()=>{dispatch(double())}}>*</button>
        <button onClick={()=>{dispatch(half())}}>/</button>
        </div>
    </div>
  );
}

export default App;