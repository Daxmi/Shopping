import React from "react";

export default function Price(props) {
  const { cartItems} = props;
  const totalPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
  return (
    <div className="totalDetail">
      <div className="smallPrice">${totalPrice}</div>
      <div className="bigPrice">
        <div className="total">
          <div className="totalName">
            <h1>Sub-total</h1>
          </div>
          <div className="totalPrice">${totalPrice}</div>
        </div>
        <div className="total">
          <div className="totalName">
            <h1>Sub-total</h1>
          </div>
          <div className="totalPrice">${totalPrice}</div>
        </div>
      </div>
    </div>
  );
}
