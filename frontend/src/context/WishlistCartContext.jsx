import { createContext, useContext, useEffect, useState } from "react";
import { getWishlistApi, toggleWishlistApi } from "../services/wishlistService";
import {
  addToCart,
  getCartItems,
  removeFromCart,
  clearCart,
} from "../services/cartService";
import { useAuth } from "./AuthContext";
import { toast, Slide } from "react-toastify";

const WishlistCartContext = createContext();

export const WishlistCartProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();

  // fetch user wishlistCart datas
  useEffect(() => {
    const fetchWishlistCartDatas = async () => {
      if (!user) {
        setWishlist([]);
        return;
      }

      try {
        setLoading(true);

        // fetching wishlist
        const data = await getWishlistApi();
        const cleanWishlist = Array.isArray(data)
          ? data.filter((item) => item !== null)
          : [];
        setWishlist(cleanWishlist);

        // // fetching cart
        // const cart = await getCartItems(user.id);
        // setCart(cart);
      } catch (error) {
        console.error(error);
        toast.error("Failed to fetch");
      } finally {
        setLoading(false);
      }
    };

    fetchWishlistCartDatas();
  }, [user]);

  const handleToggleWishlist = async (product) => {
    if (!user) return;

    try {
      const { message } = await toggleWishlistApi(product._id);

      const updatedWishlist = await getWishlistApi();
      const cleanWishlist = Array.isArray(updatedWishlist)
        ? updatedWishlist.filter((item) => item !== null)
        : [];

      setWishlist(cleanWishlist);
      toast.success(message);
    } catch (error) {
      console.error(error);
      toast.error("Action Failed");
    }
  };

  // add to cart
  const handleAddToCart = async (product) => {
    if (!user) return;

    // adding quantity object with product
    setLoading(true);
    await addToCart(user.id, { ...product, quantity: 1 });
    setCart((prev) => [...prev, { ...product, quantity: 1 }]);

    setLoading(false);
    toast.dismiss();
    toast.success("Product added to cart");
  };

  // update quantity
  const handleUpdateQuantity = (productId, newQty) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === productId ? { ...item, quantity: newQty } : item,
      ),
    );
  };

  //  subtotal
  const subTotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  // total
  const gst = subTotal * 0.18;
  const total = (subTotal + gst).toFixed(2);

  // remove from cart
  const handleRemoveFromCart = async (productId) => {
    setLoading(true);
    await removeFromCart(user.id, productId);

    setCart((prev) => prev.filter((item) => item.id !== productId));

    setLoading(false);
    toast.dismiss();
    toast.info("Product removed from the cart");
  };

  // clear cart
  const handleClearCart = () => {
    clearCart(user.id);
    setCart([]);
  };

  return (
    <WishlistCartContext.Provider
      value={{
        cart,
        handleAddToCart,
        handleRemoveFromCart,
        handleClearCart,
        wishlist,
        handleToggleWishlist,
        handleUpdateQuantity,
        subTotal,
        gst,
        loading,
        total,
      }}
    >
      {children}
    </WishlistCartContext.Provider>
  );
};

export const useWishlistCart = () => useContext(WishlistCartContext);
