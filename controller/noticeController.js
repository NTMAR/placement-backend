const Post = require('../model/noticeModel');

const createPost = async (req, res) => {
    try {
        const { companyName, date,  time, venue, description } = req.body;
        const post = new Post({ companyName, date,  time, venue, description });
        const savedPost = await post.save();
        res.json({
            // post: savedPost,
            message: "Notice create successfully"
        });
    } catch (err) {
        console.error("Error while creating post:", err);
        return res.status(400).json({
            error: "Error While Creating Post"
        });
    }
}



module.exports = createPost;
