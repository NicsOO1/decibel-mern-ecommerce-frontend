import api from "./api";

// fetching user wishlist
export const getWishlist = async (userId) => {
  try {
    const { data: user } = await api.get(`/users/${userId}`);
    return user.wishlist || [];
  } 
  catch (error) {
    console.error("Error while fetching wishlist", error);
    return [];
  }
};

// add or update userwishlist
export const addToWishlist = async (userId, product) => {
  const { data: user } = await api.get(`/users/${userId}`);
  const updatedWislist = [...user.wishlist, product];
  await api.patch(`/users/${userId}`, { wishlist: updatedWislist });
};

// remove from wishlist
export const removeFromWishlist = async (userId, productId) => {
  const { data: user } = await api.get(`/users/${userId}`);
  const updatedWislist = [
    ...user.wishlist.filter((item) => item.id !== productId),
  ];
  await api.patch(`/users/${userId}`, { wishlist: updatedWislist });
};
