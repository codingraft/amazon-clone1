import React from "react";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";
import Subtotal from "./Subtotal";


function Checkout() {
  const [{ basket }] = useStateValue();

  return (
    <div className="checkout">
        <div className="checkout__left">
      <img
        className="checkout__ad"
        src="https://m.media-amazon.com/images/I/61aUfpZteZL._SX3000_.jpg"
        alt=""
      />
      {basket?.length === 0 ? (
        <div>
          <h2>Your Shopping Cart is empty</h2>
          <p>
            You have no items in your basket.To buy one or more items,click 'Add
            to cart' next to the item.{" "}
          </p>
        </div>
      ) : (
        <div>
          <h2 className="checkout__title">Your Shopping Cart</h2>
          {basket?.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      )}
      </div>
      {basket.length > 0 && (
          <div className="checkout__right">
            <Subtotal />
          </div>
      )}
    </div>
  );
}

export default Checkout;
