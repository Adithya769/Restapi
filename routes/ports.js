const express= require('express'); 
const router= express.Router();
 const Post= require('../module/port'); 
  // getting all posts 
  router.get('/', async(req,res) =>{ try{ const posts = await Post.find(); res.json(posts);
}catch (err){ res.json({message:err}); } });

// getting a post by id

router.get('/:postid', async(req,res) =>{ try{ const post = await Post.findById(req.params.postid); res.json(post); }catch(err){ res.json({message:err}); } })

// deleting a post

router.delete('/:postid', async(req,res) =>{ try{ const removepost = await Post.deleteOne({_id: req.params.postid}); res.json(removepost); }catch(err){ res.json({message:err}); } } ); 

// updating a post by id

 router.patch('/:postid', async(req,res) =>{ try{ const editpost = await Post.updateOne({_id: req.params.postid}); res.json(editpost); }catch(err){ res.json({message:err}); } });

 module.exports= router;