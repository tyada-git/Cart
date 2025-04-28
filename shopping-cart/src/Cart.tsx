import React, { useEffect, useState } from "react";

type cartItem = {
  productId: number;
  price: number;
  title: string;
};

const Cart: React.FC = () => {
  const [itemInCart, setItem] = useState<cartItem[]>([]);
  useEffect(() => {
    fetch("http://localhost:3001/show-item")
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, []);
  console.log(itemInCart);
  // const showName = localStorage.getItem(firstName);
  return (
    <>
      {" "}
      {/* {showName} */}
      <h2>Items in Your Cart TYPESCRIPT</h2>
      {itemInCart.map((p) => (
        <div key={p.productId} className="product-tile">
          <div>Price: {p.price}</div>
          <div>Product: {p.title}</div>
        </div>
      ))}
      <button className="btn-product"> Checkout Button</button>
    </>
  );
};

export default Cart;
