import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import {getBlogs, getBlogById, createBlog, deleteBlog, updateBlog} from "../controller/blogController.js";

const router = express.Router();

router.get('/',authMiddleware,getBlogs);
router.post('/',authMiddleware,createBlog);
router.get("/:id",authMiddleware, getBlogById);
router.delete("/:id",authMiddleware, deleteBlog);
router.put("/:id",authMiddleware, updateBlog);

export default router;