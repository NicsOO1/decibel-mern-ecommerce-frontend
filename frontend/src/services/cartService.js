import api from "./api";

// fetching cartitems
export const getCartItems = async (userId) => {
  try {
    const { data: user } = await api.get(`/users/${userId}`);
    return user.cart || [];
  } catch (error) {
    console.error("Error while fetching cart items", error);
    return [];
  }
};

// add to cart
export const addToCart = async (userId, product) => {
  try {
    const { data: user } = await api.get(`/users/${userId}`);
    const updatedCart = [...user.cart, product];
    await api.patch(`/users/${userId}`, { cart: updatedCart });
  } catch (error) {
    console.error("Error while adding items to cart", error);
  }
};

// remove from cart
export const removeFromCart = async (userId, productId) => {
  const { data: user } = await api.get(`/users/${userId}`);
  const updatedCart = [...user.cart.filter((item) => item.id !== productId)];
  await api.patch(`/users/${userId}`, { cart: updatedCart });
};

// clear cart
export const clearCart = async (userId) => {
  await api.patch(`/users/${userId}`, { cart: [] });
};
