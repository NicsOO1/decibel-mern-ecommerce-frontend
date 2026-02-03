import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SubHead from "../components/SubHead";
import { FiMinus, FiPlus } from "react-icons/fi";
import { MdDeleteOutline } from "react-icons/md";
import { useWishlistCart } from "../context/WishlistCartContext";
import EmptyMessage from "../components/EmptyMessage";
import { mirage } from "ldrs";
import { useAppNavigation } from "../hooks/useAppNavigation";
mirage.register();

const Cart = () => {
  const {
    cart,
    handleRemoveFromCart,
    handleUpdateQuantity,
    subTotal,
    total,
    loading,
    gst,
  } = useWishlistCart();

  const { goCheckout, goDetails } = useAppNavigation();

  const onDelete = async (productId) => {
    await handleRemoveFromCart(productId);
  };

  if (loading) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <l-mirage size="60" speed="2.5" color="black"></l-mirage>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen w-full lg:pt-24 pb-12 lg:pb-24">
      <Header />
      <div className="w-11/12 mx-auto pt-6 lg:pt-12">
        <div className="w-full flex justify-between items-center">
          <div className="w-fit">
            <SubHead head="My Cart" />
            <div className="bg-brand h-[1.5px]" />
          </div>
        </div>

        {cart.length == 0 && <EmptyMessage messageType={"Cart"} />}

        <div
          className={
            cart.length > 0
              ? "mt-6 lg:mt-12 flex justify-between gap-8"
              : "hidden"
          }
        >
          <div className="w-[75%] flex flex-col gap-4" id="left">
            {/* item */}
            {cart.map((product) => {
              return (
                <div
                  key={product.id}
                  id="item"
                  className="w-full flex justify-between p-4 items-center border-2 border-gray-200/70 rounded-xl"
                >
                  <div id="l" className="flex gap-6 items-center">
                    <div id="img-box" className="h-32 w-32 rounded-2xl">
                      <img
                        className="h-full w-full object-cover rounded-2xl cursor-pointer"
                        src={product.img}
                        alt={product.img}
                        onClick={() => goDetails(product.id)}
                      />
                    </div>

                    <div id="item-details" className="flex flex-col gap-3">
                      <h3 className="text-xl font-semibold">
                        {product.productName}
                      </h3>
                      <p className="text-sm text-gray-400">{product.type}</p>
                      <p className="text-xl font-semibold text-blue-500">
                        ₹{product.price}
                      </p>
                    </div>
                  </div>
                  <div id="r" className="flex flex-col items-center gap-6">
                    {/* counter */}
                    <div className="flex items-center gap-4">
                      <div className="flex justify-between items-center gap-2 border border-gray-300 rounded-lg">
                        <button
                          className="hover:bg-gray-100 rounded-l-lg p-3"
                          onClick={() =>
                            handleUpdateQuantity(
                              product.id,
                              product.quantity > 1 ? product.quantity - 1 : 1
                            )
                          }
                        >
                          <FiMinus />
                        </button>
                        <span className="px-2">{product.quantity}</span>
                        <button
                          className="hover:bg-gray-100 rounded-r-lg p-3"
                          onClick={() =>
                            handleUpdateQuantity(
                              product.id,
                              product.quantity + 1
                            )
                          }
                        >
                          <FiPlus />
                        </button>
                      </div>

                      <MdDeleteOutline
                        onClick={() => onDelete(product.id)}
                        className="text-2xl text-red-400 cursor-pointer"
                      />
                    </div>

                    <div className="w-full flex items-center justify-end">
                      <p className="text-2xl font-bold">
                        ₹{product.price * product.quantity}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div
            id="right"
            className="w-[25%] max-h-80 p-4 border-2 border-gray-200/70 rounded-xl"
          >
            <h3 className="hh1 text-2xl font-semibold">Order Summary</h3>

            <div className="mt-6 flex flex-col gap-3">
              <div className="flex justify-between">
                <p>Subtotal</p>
                <p className="font-semibold">₹{subTotal}</p>
              </div>
              <div className="flex justify-between">
                <p>Shipping</p>
                <p className="text-gray-500">Free</p>
              </div>
              <div className="flex justify-between">
                <p>GST (18%)</p>
                <p className="text-gray-500">+ ₹{gst.toFixed(2)}</p>
              </div>

              <div className="h-[2px] w-full bg-gray-100"></div>

              <div className="flex justify-between">
                <p className="hh1 text-2xl font-semibold">Total</p>
                <p className="hh1 text-2xl font-semibold">₹{total}</p>
              </div>

              <button
                onClick={goCheckout}
                className="mt-3 bg-black p-3 text-white rounded-lg font-semibold hover:bg-gray-900"
              >
                Checkout
              </button>
            </div>
          </div>
        </div>

        {/* <div className="w-full mx-auto pt-12 lg:pt-60">
          <Footer />
        </div> */}
      </div>
    </div>
  );
};

export default Cart;
