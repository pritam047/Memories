import mongoose from 'mongoose';
import PostMessage from '../models/postMessages.js'

// GET Posts
export const getPosts = async(req, res) =>{
    try {
        const postMessages = await PostMessage.find();
                
        res.status(200).json(postMessages);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

// CREATE Posts
export const createPost = async(req, res) =>{
    const { title, message, selectedFile, creator, tags } = req.body;

    const newPostMessage = new PostMessage({ title, message, selectedFile, creator, tags })

    try {
        await newPostMessage.save();
        res.status(201).json(newPostMessage);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

// UPDATE a single Post
export const updatePost = async(req, res) =>{
    const { id } = req.params; // get id of post to update
    const { title, message, creator, selectedFile, tags } = req.body;  // get all field values to update
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`); // check if valid id exists

    const updatedPost = { creator, title, message, tags, selectedFile, _id: id };

    await PostMessage.findByIdAndUpdate(id, updatedPost, { new: true });

    res.json(updatedPost);
}

// DELETE a single Post
export const deletePost = async(req, res) =>{
    const { id } = req.params; // get id of post to update
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`); // check if valid id exists

    await PostMessage.findByIdAndRemove(id);

    res.json({'message': 'Post deleted successfully'});
}

