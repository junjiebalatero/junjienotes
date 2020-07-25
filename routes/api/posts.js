const express = require('express');
const router = express.Router();
// posts Model
const Posts = require('../../models/Posts');

// @routes Get api/posts
// @desc Get  All post
router.get('/', async (req, res) => {
	try {
		const posts = await Posts.find();
		if(!posts) throw Error('No Items ');

		res.status(200).json(posts);
		
	} catch (err) {
		res.status(400).json({ msg: err });
	}
});

// @routes Get api/posts/:id
// @desc Get  one post
router.get('/:id', async (req, res) => {
	try {
		const post = await Posts.findById(req.params.id);
		if(!post) throw Error('No Items ');

		res.status(200).json(post);
		
	} catch (err) {
		res.status(400).json({ msg: err });
	}
});

// @routes POST api/posts
// @desc Create An post
router.post('/', async (req, res) => {
	const newPost = new Posts(req.body);
 	try {
		 const post = await newPost.save();
		 if(!post) throw Error('Something went wrong while saving the post');

		 res.status(200).json(post);
		 
 	} catch (err) {
 		res.status(400).json({ msg: err })
 	}
});

// @routes update api/posts/:id
// @desc update  A post
router.patch('/:id', async (req, res) => {
	try {
		const post = await Posts.findByIdAndUpdate(req.params.id, req.body);
		if(!post) throw Error('Something went wrong when updating the post!');

		res.status(200).json({ success: true})
		
	} catch (err) {
		res.status(400).json({ msg: err })
	}
});

// @routes delete api/posts/:id
// @desc delete  A post
router.delete('/:id', async (req, res) => {
	try {
		const post = await Posts.findByIdAndDelete(req.params.id);
		if(!post) throw Error('No post found!');

		res.status(200).json({ success: true})
		
	} catch (err) {
		res.status(400).json({ msg: err })
	}
});

module.exports = router;

