import { useEffect, useState } from "react";
import InternList from "./components/InternList";
import AddInternForm from "./components/AddInternForm";

import {
  getInterns,
  createIntern,
  deleteIntern,
} from "./services/internService";

import "./App.css";

function App() {
  const [interns, setInterns] = useState([]);
  const [showData, setShowData] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (showData) {
      fetchInterns();
    }
  }, [showData]);

  const fetchInterns = async () => {
    try {
      setError("");
      const response = await getInterns();
      setInterns(response.data);
    } catch (error) {
      setError(
        "Unable to fetch interns. Please check if the backend server and MongoDB are connected.",
      );
    }
  };

  const handleAdd = async (intern) => {
    try {
      setError("");
      await createIntern(intern);
      await fetchInterns();
      setShowData(true);
    } catch (error) {
      setError(
        "Unable to add intern. Please check if the backend server and MongoDB are connected.",
      );
    }
  };

  const handleDelete = async (id) => {
    try {
      setError("");
      await deleteIntern(id);
      await fetchInterns();
    } catch (error) {
      setError(
        "Unable to delete intern. Please check if the backend server and MongoDB are connected.",
      );
    }
  };

  return (
    <div>
      <h1 className="title">Intern Management System</h1>

      <AddInternForm onAdd={handleAdd} />

      <div className="display-interns">
        <button
          className="display-intern-button"
          onClick={() => setShowData(!showData)}
        >
          {showData ? "Hide Intern List" : "Show Interns"}
        </button>
      </div>
      {error && <p className="error-message">{error}</p>}
      {showData && <InternList interns={interns} onDelete={handleDelete} />}
    </div>
  );
}

export default App;
