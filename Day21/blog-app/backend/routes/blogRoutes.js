import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import {
  getBlogs,
  getMyBlogs,
  getBlogById,
  createBlog,
  deleteBlog,
  updateBlog,
} from "../controller/blogController.js";

const router = express.Router();

router.get("/", getBlogs);
router.get("/my", authMiddleware, getMyBlogs);
router.post("/", authMiddleware, createBlog);
router.get("/:id", authMiddleware, getBlogById);
router.delete("/:id", authMiddleware, deleteBlog);
router.put("/:id", authMiddleware, updateBlog);

export default router;
