import React from 'react'
import { Link } from 'react-router-dom';
import "./Checkout.css";
import Subtotal from './Subtotal';

function Checkout() {
  return (
    <div className='checkout'>
        <div className='checkout_left'>
            <Link to="/">
                <img className='checkout_ad'
                src='https://images-na.ssl-images-amazon.com/images/G/01/warehouse-deals/1500x150_second_banner.jpg'
                alt='' />
            </Link>

            <div>
                <h2 className='checkout_title'>
                    Your shopping Basket
                </h2>

                {/* BasketItem */}
            </div>
        </div>

        <div className='checkout_right'>
            <Subtotal />
            <h2>The subtotal wil go here </h2> 
        </div>

        
    </div>
  )
}

export default Checkout;