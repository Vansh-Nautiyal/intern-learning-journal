import { useState } from "react";

function EditTask({ task, editTask }) {
  const [editing, setEditing] = useState(false);
  const [title, setTitle] = useState(task.title);

  const handleSave = () => {
    editTask(task.id, title);
    setEditing(false);
  };

  if (editing) {
    return (
      <>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button className="save-btn"
        onClick={handleSave}>
          Save
        </button>
      </>
    );
  }

  return (
    <button className="edit-btn"
    onClick={() => setEditing(true)}>
      Edit
    </button>
  );
}

export default EditTask;