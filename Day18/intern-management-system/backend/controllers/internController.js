import Intern from "../models/Intern.js";

export const getAllInterns = async (req, res) => {
  try {
    const interns = await Intern.find();

    res.status(200).json(interns);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const getInternById = async (req, res) => {
  try {
    const intern = await Intern.findOne({
      internID: req.params.id,
    });

    if (!intern) {
      return res.status(404).json({
        message: "Intern not found",
      });
    }

    res.status(200).json(intern);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const createIntern = async (req, res) => {
  try {
    const { internID, name, role, status } = req.body;

    if (!internID || !name || !role || !status) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    const newIntern = await Intern.create({
      internID,
      name,
      role,
      status,
    });

    res.status(201).json({
      message: "Intern created successfully",
      intern: newIntern,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const updateIntern = async (req, res) => {
  try {
    const updatedIntern =
      await Intern.findOneAndUpdate(
        { internID: req.params.id },
        req.body,
        {
          new: true,
          runValidators: true,
        }
      );

    if (!updatedIntern) {
      return res.status(404).json({
        message: "Intern not found",
      });
    }

    res.status(200).json({
      message: "Intern updated successfully",
      intern: updatedIntern,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const deleteIntern = async (req, res) => {
  try {
    const deletedIntern =
      await Intern.findOneAndDelete({
        internID: req.params.id,
      });

    if (!deletedIntern) {
      return res.status(404).json({
        message: "Intern not found",
      });
    }

    res.status(200).json({
      message: "Intern deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};