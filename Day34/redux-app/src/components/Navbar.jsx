import { useSelector } from "react-redux";

export default function Navbar(){
    const count = useSelector((state)=>state.counter.value);
    return(
        <div className="navbar">
            <h1>Navbar</h1>
            <p>Counter = {count}</p>
        </div>
    );
}