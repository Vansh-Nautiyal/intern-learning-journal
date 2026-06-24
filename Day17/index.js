import express from "express";

const app = express();
const PORT = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Sample Data
let interns = [
  {
    id: 1,
    name: "Vansh",
    role: "Frontend Intern",
    status: "Active",
  },
  {
    id: 2,
    name: "Soham",
    role: "Frontend Intern",
    status: "Active",
  },
];


// GET /interns -> Fetch all interns
app.get("/interns", (req, res) => {
  res.status(200).json(interns);
});


// GET /interns/:id -> Fetch single intern
app.get("/interns/:id", (req, res) => {
  const id = Number(req.params.id);

  const intern = interns.find((intern) => intern.id === id);

  if (!intern) {
    return res.status(404).json({
      message: "Intern not found",
    });
  }

  res.status(200).json(intern);
});


// POST /interns -> Create new intern
app.post("/interns", (req, res) => {
  const { name, role, status } = req.body;

  if (!name || !role || !status) {
    return res.status(400).json({
      message: "All fields are required",
    });
  }

  const newIntern = {
    id: interns.length + 1,
    name,
    role,
    status,
  };

  interns.push(newIntern);

  res.status(201).json({
    message: "Intern created successfully",
    intern: newIntern,
  });
});


// PUT /interns/:id -> Update intern
app.put("/interns/:id", (req, res) => {
  const id = Number(req.params.id);

  const intern = interns.find((intern) => intern.id === id);

  if (!intern) {
    return res.status(404).json({
      message: "Intern not found",
    });
  }

  const { name, role, status } = req.body;

  if (name) intern.name = name;
  if (role) intern.role = role;
  if (status) intern.status = status;

  res.status(200).json({
    message: "Intern updated successfully",
    intern,
  });
});


// DELETE /interns/:id -> Delete intern
app.delete("/interns/:id", (req, res) => {
  const id = Number(req.params.id);

  const internExists = interns.some(
    (intern) => intern.id === id
  );

  if (!internExists) {
    return res.status(404).json({
      message: "Intern not found",
    });
  }

  interns = interns.filter(
    (intern) => intern.id !== id
  );

  res.status(200).json({
    message: "Intern deleted successfully",
  });
});


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});