const { Router } = require('express');
const router = Router();

router.post('/', async (req,res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });
    try {
        const savedPost = await post.save();

        res.json(savedPost);
    }catch (error) {
        res.json({message:error});
    }
});
//consultar post
router.get('/:postId', async (req, res) => {
    try {
        const post = await Post.findById(req.params.postId);
        res.json(post);
    } catch (error) {
        res.json({message: error});
    }
});

//eliminar post
router.delete('/:postId', async (req, res) => {
    try {
        const removedPost = await Post.remove({_id:req.params.postId});
        res.json(removedPost);
    }catch (error) {
        res.json({message: error});
    }
});

//actualizar post
router.patch('/:postId', async (req, res) => {
    try {
        const updatePost = await Post.updateOne(
            {_id: req.params.postId},
            {$set: {title: req.body.title}});
        res.json(updatePost);
    } catch ( error ){
        res.json({message:error});
    }
});

module.exports = router;