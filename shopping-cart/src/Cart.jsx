import React, { useEffect, useState } from 'react';


const Cart = () => {
    const [itemInCart, setItem] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3001/show-item')
            .then(res => res.json())
            .then(data => setItem(data));
    }, [])
    console.log(itemInCart)
    return (
        <> <h2>Items in Your Cart</h2>
            {itemInCart.map((p) => (
                <div key={p.productId}>
                    <checkbox></checkbox>
                    <div>Price: {p.price}</div>
                    <div>Product: {p.title}</div>
                </div>
            ))}
            <button className='btn-product'> Checkout Button</button>
        </>
    )
}


export default Cart;