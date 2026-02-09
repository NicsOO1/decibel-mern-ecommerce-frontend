import api from "./api";

export const getWishlistApi = async () => {
  try {
    const { data } = await api.get("/wishlist");
    return data; //wishlist[]
  } catch (error) {
    console.error(error);
  }
};

export const toggleWishlistApi = async (productId) => {
  try {
    const { data } = await api.post("/wishlist", { productId });
    return data; //{message, wishlist[]}
  } catch (error) {
    console.error(error);
  }
};
