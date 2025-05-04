import React, { useEffect, useState } from "react";

const Products = () => {
  const [productsList, setProductList] = useState([]);
  const [filteredProductList, setFiltered] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProductList(data.products);
        setFiltered(data.products);
      });
  }, []);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await fetch('url');
  //     const data = await response.json();
  //     setData(data);
  //   };
  //   fetchData();
  // }, []);

  const addToCart = async (title, price) => {
    try {
      const response = await fetch("http://localhost:3001/cart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, price }), // or any data you want to send
      });

      const data = await response.json();
      //   setItemInCart(data);
      console.log("Server Response:", data);
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  };

  const handleFilter = (e) => {
    console.log("normal", productsList);
    const filteredProduct = productsList.filter((p) =>
      p.title.toLowerCase().includes(e.target.value)
    );
    setFiltered(filteredProduct);
  };
  return (
    <>
      Welcome to Products
      <div>
        <div>
          <input type="text" onChange={handleFilter} />
        </div>
        {filteredProductList.length == 0
          ? "No results found"
          : filteredProductList.map((product) => (
              <div key={product.id} className="product-tile">
                Product : {product.title}
                <p>Price: {product.price}</p>
                <button
                  className="btn-product"
                  onClick={() => addToCart(product.title, product.price)}
                >
                  {" "}
                  Add to Cart
                </button>
              </div>
            ))}
      </div>
    </>
  );
};

export default Products;
