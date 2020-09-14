const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

// Get back all the posts
router.get('/', async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts)
  } catch(err) {
    res.json({ message: err });
  }
});

// get specific post
router.get('/:postId', async (req, res) => {
  try {
    const post = await Post.findById(req.params.postId);
    res.json(post);
  } catch(err) {
    res.json({ message: err });
  }
});

// Submit posts
router.post('/', async (req, res) => {
  const { title, description } = req.body;
  const post = new Post({
    title,
    description
  });
  try {
    const savedPosts = await post.save();
    res.json(savedPosts);
  } catch(err) {
    res.json({ message: err });
  }
});

// Delete Specific posts
router.delete('/:postId', async (req, res) => {
  try {
    const removedPost = await Post.remove({ _id: req.params.postId });
    res.json(removedPost);
  } catch(err) {
    res.json({ message: err });
  }
});

// Update specific posts
router.patch('/:postId', async (req, res) => {
  try {
    const updatePost = await Post.updateOne({ _id: req.params.postId }, { $set: { title: req.body.title } });
    res.json(updatePost);
  } catch(err) {
    res.json({ message: err});
  }
});

module.exports = router;
