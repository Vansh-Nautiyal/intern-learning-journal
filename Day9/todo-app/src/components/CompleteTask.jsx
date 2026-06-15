function CompleteTask({ taskId, completeTask }) {
  return (
    <button
      className="complete-btn"
      onClick={() => completeTask(taskId)}
    >
      Complete
    </button>
  );
}

export default CompleteTask;