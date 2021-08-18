import { Request, Response } from "express"
import { getRepository } from "typeorm";
import { Blog } from "../entity/blog"

class BlogController {

    // @desc POST blog post
    // @route /blog
    static postPost = async (req:Request, res:Response) => {
        const { author, title, content } = req.body
        if(!author || !title || !content) {
            return res.status(400).json({ success: false, message: 'Author, title and content must be provided'})
        } else {
            const blog = getRepository(Blog).create({ author, title, content });
            const result = await getRepository(Blog).save(blog) 
            return res.status(201).json(result)
        }
    };

    // @desc  GET blog post by pagination
   // @route blog
    static getPost = async (req: Request, res: Response) => {
        const result = await getRepository(Blog).find();
        return res.status(200).json(result);
    };

    // @desc GET blog post by id
    // @route blog/:id
    static getOnePost = async (req: Request, res: Response) => {
        const id = req.params.id;
        if(!id){
            return res.status(400).json({ success: 'false', message: 'id is missing'})
        } else {
            const blog = await getRepository(Blog).findOne(id);
            if(!blog) return res.status(200).json({ message: "There is no blog with such ID"})
            return res.status(200).json(blog);
        }
    };

    // @desc UPDATE blog post
   // @route blog/:id
    static updatePost = async (req: Request, res: Response) => {
        const blog = await getRepository(Blog).findOne(req.params.id);
        if (blog) {
          getRepository(Blog).merge(blog, req.body);
          const result = await getRepository(Blog).save(blog);
          return res.status(200).json(result);
        } 
        return res.status(200).json({ messag: "Post Not Found" });
      };

      // @desc DELETE blog post
     // @route blog/:id
      static deletePost = async (req: Request, res: Response) => {
        const { id } = req.params
        if(!id) {
            return res.status(400).json({ success: 'false', message: "id not found"})
        }
        const post = await getRepository(Blog).delete(req.params.id);
        return res.status(200).json(post);
      };
}

export default BlogController