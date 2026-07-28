import { useSelector } from "react-redux";

export default function Navbar(){
    const count = useSelector((state)=>state.counter.value);
    const message = useSelector((state)=>state.message.content);
    return(
        <div className="navbar">
            <h1>Navbar</h1>
            <pgi>Counter = {count}</p>
            <p>Message = {message}</p>
        </div>
    );
}