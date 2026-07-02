import { useState } from "react";

function AddInternForm({ onAdd }) {
  const [formData, setFormData] = useState({
    internID: "",
    name: "",
    role: "",
    status: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onAdd(formData);

    setFormData({
      internID: "",
      name: "",
      role: "",
      status: "",
    });
  };

  return (
    <div className="input-form">
      <form onSubmit={handleSubmit} >
        <input
          name="internID"
          placeholder="Intern ID"
          value={formData.internID}
          onChange={handleChange}
        />

        <input
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />

        <input
          name="role"
          placeholder="Role"
          value={formData.role}
          onChange={handleChange}
        />

        <input
          name="status"
          placeholder="Status"
          value={formData.status}
          onChange={handleChange}
        />

        <button type="submit">Add Intern</button>
      </form>
    </div>
  );
}

export default AddInternForm;
