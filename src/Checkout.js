import React from 'react'
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';

import Subtotal from './Subtotal';

function Checkout() {
  const [{basket, user}, dispatch] = useStateValue();
  return (
    <div className='checkout'>
        <div className='checkout_left'>
            <img className='checkout_ad' src='https://easysell.in/wp-content/uploads/2021/05/banner_1_newStore.jpg' alt=''/>
            <div>
                <h3>Hello, {user?.email}</h3>
                <h2 className='checkout_title'>Your Shopping Basket</h2>

                {/* CheckoutProduct */}
                {basket.map(item => (
                  <CheckoutProduct
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}/>
                ))}
            </div>
        </div>
        <div className='checkout_right'>
            <Subtotal/>
        </div>
    </div>
  )
}

export default Checkout