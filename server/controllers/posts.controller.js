const { getPostsFromDB } = require("../db/posts.db");

const getPosts = async (req, res) => {
    console.log("Fetching posts");
    const response = await getPostsFromDB();
    res.send(response);
};

module.exports = {
    getPosts,
};