import React from "react";
import Price from "./Price";
import Product from "./Product";

export default function Cart(props) {
  const { products, onAdd, onRemove, cartItems } = props;

  return (
    <div>
      <div>
        {products.map((product) => (
          <Product
            onAdd={onAdd}
            onRemove={onRemove}
            key={product.id}
            id={products.id}
            product={product}
            cartItems={cartItems}
          />
        ))}
      </div>
      <div>
        <Price cartItems={cartItems} />
      </div>
    </div>
  );
}
