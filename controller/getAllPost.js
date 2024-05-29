const Post = require('../model/noticeModel');

const getAllPost = async (req, res) => {
    try {
        const posts = await Post.find().exec();
        res.json({
            data: posts,
        });
    } catch (err) {
        console.error("Error while fetching posts:", err);
        return res.status(400).json({
            error: "Error while Fetching Post"
        });
    }
}

module.exports = getAllPost;
