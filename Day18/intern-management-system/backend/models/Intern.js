import mongoose from "mongoose";

const internSchema = new mongoose.Schema({
  internID: {
    type: String,
    required: true,
    unique: true,
  },

  name: {
    type: String,
    required: true,
  },

  role: {
    type: String,
    required: true,
  },

  status: {
    type: String,
    required: true,
  },
});

const Intern = mongoose.model(
  "Intern",
  internSchema
);

export default Intern;