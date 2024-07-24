import React, { useEffect, useState } from 'react';
import '../App.css';

const ProductPage = () => {
    const [AddCartData, setAddCartData] = useState([]);

    const Data = {
        "data": [
            {
                "name": "Cosmetics",
                "productList": [
                    {
                        "name": "Hair Oil",
                        "price": 122
                    },
                    {
                        "name": "Face wash",
                        "price": 123
                    }
                ]
            },
            {
                "name": "Household",
                "productList": [
                    {
                        "name": "Hair Oil",
                        "price": 1222
                    },
                    {
                        "name": "Face wash",
                        "price": 1233
                    }
                ]
            }
        ]
    }

    // add to cart function handler
    const AddCartHandler = (cartData) => {
        setAddCartData((prev) => [...prev, cartData]);
    }

    useEffect(() => {
        
            console.log(AddCartData);
          

    }, [AddCartData]);
    
    // remove card handler 

    const cartRemoveHandler = () => {
        setAddCartData([])
    }

    return (
        <>
            <div className='container'>
                {Data.data.map((newdata) => {
                    return (
                        <div key={newdata.name}>
                            <h1>{newdata.name}</h1>
                            <div className='product_container'>
                                {newdata.productList.map((productData) => {
                                    return (
                                        <div className='product_cart' key={productData.name}>
                                            <h3>Name : {productData.name}</h3>
                                            <h3>Price : {productData.price}</h3>
                                            <button onClick={() => { AddCartHandler(productData) }}>Add to cart</button>
                                            <button onClick={() =>{cartRemoveHandler(productData.price)}}>Remove to cart</button>

                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    )

                })}
            </div>
        </>
    )
}

export default ProductPage;