import { Router } from "express";
import BlogController from "../controllers/BlogController";

const router = Router();

router.post('/blog', BlogController.postPost)
router.get("/blog", BlogController.getPost);
router.get("/blog/:id", BlogController.getOnePost);
router.put("/blog/:id", BlogController.updatePost);
router.delete("/blog/:id", BlogController.deletePost);

export default router;