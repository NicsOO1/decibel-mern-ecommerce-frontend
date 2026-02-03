import { useNavigate } from "react-router-dom";

export const useAppNavigation = () => {
  const navigate = useNavigate();

  const goHome = () => navigate("/");
  const goProducts = () => navigate("/products");
  const goWishlist = () => navigate("/wishlist");
  const goCart = () => navigate("/cart");
  const goDetails = (id) => navigate(`/product/${id}`);
  const goUser = (id) => navigate(`/user/${id}`);
  const goCheckout = () => navigate(`/checkout`);
  const goOrders = (orderId) => navigate(`/orders/${orderId}`);
  const goPayment = () => navigate(`/payment/razorpay`);
  const goLogin = () => navigate("/login");
  const goRegister = () => navigate("/register");

  return {
    goHome,
    goProducts,
    goWishlist,
    goCart,
    goDetails,
    goUser,
    goCheckout,
    goOrders,
    goPayment,
    goLogin,
    goRegister,
  };
};
