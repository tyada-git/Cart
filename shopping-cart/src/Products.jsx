import React, { useEffect, useState } from 'react';

const Products = ({setItemInCart}) => {
    const [productsList, setProductList] = useState([]);

    useEffect(() => {
        const res = [];
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(data => setProductList(data.products));
    }, [])

    const addToCart = async (title, price) => {
        try {
          const response = await fetch('http://localhost:3001/cart', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ title, price }), // or any data you want to send
          });
      
          const data = await response.json();
        //   setItemInCart(data);
          console.log('Server Response:', data);
        } catch (error) {
          console.error('Error adding to cart:', error);
        }
      };
      

    return (
        <>Welcome to Products
            <div >
                {productsList.map((product) =>
                    <div
                        key={product.id}
                        className='product-tile'>Product : {product.title}
                        <p>Price: {product.price}</p>
                        <button className='btn-product' onClick={()=>addToCart(product.title,product.price)}> Add to Cart</button>
                    </div>)}
            </div>

        </>
    )
}

export default Products;