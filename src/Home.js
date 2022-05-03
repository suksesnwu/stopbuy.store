import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
  return (
    <div className='home'>
        <div className='home_container'>
            <img className='home_image' src='https://m.media-amazon.com/images/I/61jovjd+f9L._SX3000_.jpg' 
            alt=''/>

            <div className='home_row'>
                <Product 
                    id="1234"
                    title="Samsung Galaxy A12 (A125M) 64GB Dual SIM, GSM Unlocked, (CDMA Verizon/Sprint Not Supported) Smartphone Latin American Version No Warranty (White)"
                    price={172.50}
                    rating={5}
                    image='https://m.media-amazon.com/images/I/61Sa0nFJFxL._AC_SY550_.jpg' />

                <Product 
                    id="4321"
                    title="Gaming PC Desktop Computer by Alarco Intel i5 3.10GHz,8GB Ram,1TB Hard Drive,Windows 10 pro,WiFi Ready,Video Card Nvidia GTX 650 1GB, 3 RGB Fans with Remote"
                    price={499.99}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/71z7ztyH1LL._AC_SY355_.jpg"/>
            </div>

            <div className='home_row'>
                <Product
                    id="1357"
                    title="SAMSUNG Odyssey G3 Series 24-Inch FHD 1080p Gaming Monitor, 144Hz, 1ms, 3-Sided Border-Less, VESA Compatible, Height Adjustable Stand, FreeSync Premium (LF24G35TFBNXZA)"
                    price={229.99}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/81XKPle6OAL._AC_SX355_.jpg" />

                <Product 
                    id="9876"
                    title="Xbox Series S"
                    price={294.00}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/71NBQ2a52CL._SX342_.jpg"/>

                <Product 
                    id="3579"
                    title='Acer Predator Helios 300 PH315-54-760S Gaming Laptop | Intel i7-11800H | NVIDIA GeForce RTX 3060 Laptop GPU | 15.6" Full HD 144Hz 3ms IPS Display | 16GB DDR4 | 512GB SSD | Killer WiFi 6 | RGB Keyboard'
                    price={1233.78}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/71nz3cIcFOL._AC_SX425_.jpg"/>
            </div>

            <div className='home_row'>
                <Product
                    id="9753"
                    title="LG 34WP65C-B 34-Inch 21:9 Curved UltraWide QHD (3440x1440) VA Display with sRGB 99% Color Gamut and HDR 10 and 3-Side Virtually Borderless Display with Tilt/Height Adjustable Stand -Black"
                    price={499.96}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/716OFWNyB4S._AC_SX425_.jpg" />
            </div>
        </div>  
    </div>
  )
}

export default Home;