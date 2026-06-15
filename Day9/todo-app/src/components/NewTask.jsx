import { useState } from "react";

function NewTask({addNewTask}){
    const [taskTitle, setTaskTitle] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();

        if (!taskTitle.trim()) return;
        
        addNewTask(taskTitle);
        setTaskTitle("");
    }
    
    return(
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Add new task" value={taskTitle} onChange={(e)=>setTaskTitle(e.target.value)}/>
            <button type="submit">Add</button>
        </form>
    );
}
export default NewTask;