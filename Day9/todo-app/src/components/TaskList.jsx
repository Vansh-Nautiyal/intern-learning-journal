import EditTask from "./EditTask";
import CompleteTask from "./CompleteTask";

function TaskList({ tasks, completeTask, editTask }) {
  return (
    <div className="task-list">
      {tasks.map((task) => (
        <div className="task-card" key={task.id}>
          <span className="task-title">
            {task.title}
          </span>

          <div className="task-actions">
            <EditTask
              task={task}
              editTask={editTask}
            />

            <CompleteTask
              taskId={task.id}
              completeTask={completeTask}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default TaskList;