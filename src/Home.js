import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
  return (
    <div className='home'>
        <div className='home_container'>
            <img className='home_image' src='https://m.media-amazon.com/images/I/61jovjd+f9L._SX3000_.jpg' 
            alt=''/>
        </div>

        <div className='home_row'>
            <Product 
            id="1234"
            title="Samsung Galaxy A12 (A125M) 64GB Dual SIM, GSM Unlocked, (CDMA Verizon/Sprint Not Supported) Smartphone Latin American Version No Warranty (White)"
            price={172.50}
            rating={5}
            image='https://m.media-amazon.com/images/I/61Sa0nFJFxL._AC_SY550_.jpg' />
            <Product />
        </div>

        <div className='home_row'>
            <Product />
            <Product />
            <Product />
        </div>

        <div className='home_row'>
            <Product />
        </div>
    </div>
  )
}

export default Home