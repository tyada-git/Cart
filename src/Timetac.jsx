import { useEffect, useState } from "react";

const TimeTac = () => {
  const [product, setProduct] = useState([]);
  const fetchProducts = async () => {
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();
    setProduct(data.products);
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <>
      My time table
      <p>Hello tv</p>
      {product.map((p) => {
        return (
          <div key={p.id}>
            <p>{p.title}</p>
            <div>{p.description}</div>
          </div>
        );
      })}
    </>
  );
};

export default TimeTac;
