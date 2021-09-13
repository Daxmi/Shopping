import React from "react";

export default function Product(props) {
  const { product, onAdd, onRemove, cartItems } = props;

  return (
    <div className="cart">
      <div className="cartDetails">
        <div className="cartImage">
          <img className="" src={product.image} alt={product.name} />
        </div>
        <div className="cartInfo">
          <h1 className="cartName">{product.name}</h1>
          <h1 className="cartPrice">${product.price}</h1>
          <h1 className="cartSize">{product.size}</h1>
          <div className="button">
            <div onClick={() => onAdd(product)} className="add">
              +
            </div>
            <div className="count">
              {cartItems.find((x) => x.id === product.id) ? (
                <div> {cartItems.find((x) => x.id === product.id).qty}</div>
              ) : (
                0
              )}
            </div>
            <div onClick={() => onRemove(product)} className="remove">
              -
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
