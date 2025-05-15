const supabaseCli = require("../services/supabase.service");

const getPostsFromDB = async () => {
    console.log("Fetching posts from DB");
    const { data, error } = await supabaseCli
        .from("posts")
        .select()
        .like('title', '%tutorial%');
    if (error) {
        console.error(error);
        return error;
    }
    return data;
}

module.exports = {
    getPostsFromDB,
};