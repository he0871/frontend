import React, {useState, useEffect} from 'react';
import Layout from '../Layout';
import CartItem from '../component/CartItem';
import axios from '../commons/axios';
import {formatPrice} from '../commons/helper'


const Cart =  async() =>{
    const [carts, setCarts] = useState([]);

    useEffect(()=>{
        axios.get('/carts').then(res=> setCarts(res.data));
    })

    const totalPrice = () =>{
        const totalprice = carts.map(cart => cart.mount * parseInt(cart.price))
        .reduce((a, value) => a + value, 0)
        return formatPrice(totalprice)
    }

    return (<Layout>
        <div className="cart-page">
            <span className="cart-title">Shopping Cart</span>
            <div className="cart-list">
             {
                    carts.map(cart=> (
                    <CartItem key={cart.id} cart={cart}/>
                    ))
                }
            </div>
            <div className="cart-total">
                total:
            <span className="total-price">{totalPrice()}</span>
            </div>
        </div>
    </Layout>)
}
   
   


export default Cart