const supabaseCli = require("../services/supabase.service");
const { getCurrentUser } = require("./users.db");

const getAllProducts = async () => {
    const { data, error } = await supabaseCli
        .from("products")
        .select();
    if (error) {
        console.error(error);
        return error;
    }
    return data;
};

const getProductsCurrentUser = async () => {
    const currentUser = getCurrentUser();
    const { data, error } = await supabaseCli
        .from("products")
        .select()
        .eq("user_id", currentUser.id);
    if (error) {
        console.error(error);
        return error;
    }
    return data;
};

const getProductsPrice = async () => {
    const { data, error } = await supabaseCli
        .from("products")
        .select()
        .lt("price", 50);
    if (error) {
        console.error(error);
        return error;
    }
    return data;
};

const getProductsCategory = async (category) => {
    const { data, error } = await supabaseCli
        .from("products")
        .select()
        .eq("category", category)
        .gte("price", 30);
    if (error) {
        console.error(error);
        return error;
    }
    return data;
}

const getProductsByRange = async (rangeStart, rangeEnd) => {
    const { data, error } = await supabaseCli
        .from("products")
        .select()
        .range(rangeStart, rangeEnd);
    if (error) {
        console.error(error);
        return error;
    }
    return data;
}

module.exports = {
    getAllProducts,
    getProductsCurrentUser,
    getProductsPrice,
    getProductsCategory,
    getProductsByRange,
};