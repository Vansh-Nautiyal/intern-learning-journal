function InternList({ interns, onDelete }) {
  return (
    <div className="intern-list">
      <h2>Intern List</h2>

      {interns.map((intern) => (
        <div className="intern" key={intern._id}>
          <h3>{intern.name}</h3>

          <p>ID: {intern.internID}</p>
          <p>Role: {intern.role}</p>
          <p>Status: {intern.status}</p>
        
          <button
            onClick={() =>
              onDelete(intern.internID)
            }
          >
            Delete
          </button>
          <hr />

        </div>
      ))}
    </div>
  );
}

export default InternList;