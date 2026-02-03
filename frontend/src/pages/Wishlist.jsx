import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import SubHead from "../components/SubHead";
import Footer from "../components/Footer";
import Card from "../components/Card";
import EmptyMessage from "../components/EmptyMessage";
import { useWishlistCart } from "../context/WishlistCartContext";
import { mirage } from "ldrs";
mirage.register();

const Wishlist = () => {
  const { wishlist, loading } = useWishlistCart();

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
            <SubHead head="My Wishlist" />
            <div className="bg-brand h-[1.5px]" />
          </div>
        </div>
        {wishlist.length == 0 && <EmptyMessage messageType="Wishlist" />}
        <div className="mt-6 lg:mt-12 grid grid-cols-1 lg:grid-cols-4 gap-5 lg:gap-10 w-[1fr, 1fr, 1fr, 1fr]">
          {wishlist.map((item) => {
            return (
              <Card
                key={item.id}
                id={item.id}
                productName={item.productName}
                type={item.type}
                price={item.price}
                img={item.img}
              />
            );
          })}
        </div>
{/* 
        <div className="w-full mx-auto pt-12 lg:pt-24">
          <Footer />
        </div> */}
      </div>
    </div>
  );
};

export default Wishlist;
