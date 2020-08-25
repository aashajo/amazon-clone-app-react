import React from 'react';
import "./Home.css";
import Product from "./Product";

function Home() {
    return (
        
        <div className="home">
            <img className="home_image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="" />
            
            <div className="home_row">
            <Product id="1101" 
            title="Start With Why: How Great Leaders Inspire Everyone To Take Action Paperback – 7 November 2011" 
            price={17.93} rating={5} 
            image="https://images-na.ssl-images-amazon.com/images/I/41oKiltofGL._SX323_BO1,204,203,200_.jpg" />

            <Product id="1102" 
            title="Fitbit Versa 2 Special Edition Health & Fitness Watch with Heart Rate, Music, Alexa Built-In, Sleep & Swim Tracking - Smoke" 
            price={317.07} rating={4} 
            image="https://images-na.ssl-images-amazon.com/images/I/61FgNBfXzOL._AC_SL1500_.jpg" />

            </div>

            <div className="home_row">
            <Product id="1103" title="FREEFLOW Fitness Resistance Bands - Set Of Exercise Workout Loop Exercise Bands for Arms Shoulders Legs And Butt | 5 Resistance Levels Stretch Strength"
            price={11.11}  rating={3} 
            image="https://images-na.ssl-images-amazon.com/images/I/71xe7zm31FL._AC_SL1500_.jpg" />

            <Product id="1104" title="Echo Dot (3rd Gen) – Smart speaker with Alexa - Charcoal Fabric" 
            price={79.00} rating={4} 
            image="https://images-na.ssl-images-amazon.com/images/I/61Vn6E887GL._AC_SL1000_.jpg" />

            <Product id="1105" title="Apple iPAD 2nd A1395 16GB WiFi 9.7 Space Grey (Renewed)" 
            price={169.00} rating={5} 
            image="https://images-na.ssl-images-amazon.com/images/I/41TXSIc7%2BEL._AC_.jpg" />

            </div>

            <div className="home_row">
            <Product id="1106" title="Wireless Earbuds, TaoTronics Bluetooth Headphones Smart AI Noise Reduction Technology for Clear Calls, Single/Twin Mode, 30H Playtime, USB Type C, IPX8 Waterproof" 
            price={56.99} rating={5} 
            image="https://images-na.ssl-images-amazon.com/images/I/717fORr2gdL._AC_SL1500_.jpg" />
            </div>
        </div>
    )
}

export default Home
