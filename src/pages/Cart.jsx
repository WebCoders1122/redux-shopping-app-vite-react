import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";

const Cart = () => {
  const cartProducts = useSelector((state) => state.cart.cartProducts);
  console.log(cartProducts);
  return (
    <div className='flex flex-wrap justify-center items-center gap-5 m-5'>
      {cartProducts && cartProducts.length
        ? cartProducts?.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))
        : null}
    </div>
  );
};

export default Cart;
