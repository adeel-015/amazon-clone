import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
      <Carousel
          showArrows={true}
          showThumbs={false}
          infiniteLoop={true}
          autoPlay={true}
          showIndicators={false}
          showStatus={false}
        >
          <div>
            <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Wireless/OnePlus/OnePlus12/Dec3/1/D108792004_WLD_OnePlus_Waffle_NewLaunch_DesktopTall_Hero_3000x1200._CB585520158_.jpg" alt="" />
          </div>
          <div>
            <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/31/2024/Gateway/January/Helmet_pc3000_X_1500._CB585791164_.jpg" alt="" />
          </div>
          <div>
            <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Home/AmazonTV/Dehati_Ladke/PC_Hero/3000x1200_V5._CB571370645_.jpg" alt="" />
          </div>
          <div>
            <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/AmazonPay/Jupiter23/phase3/Dubai_PC_Hero_3000x1200._CB574363507_.jpg" alt="" />
          </div>
          <div>
            <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/ACQ/Homepage_DesktopHeroTemplate_3000x1200v3._CB592770274_.jpg" alt="" />
          </div>
          <div>
            <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Luggage/2024/GW/ATF/6th/V1/V1_3000._CB585475260_.jpg" alt="" />
          </div>
          <div>
            <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG23/Suma/Hero/Jan/pc__tvs_under_20k_3000x1200._CB585427021_.jpg" alt="" />
          </div>
          <div>
            <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Softlines_JWL_SH_GW_Assets/jan2024/Bau/Rec/shoes/menethnic/21_pc_3000._CB585468726_.jpg" alt="" />
          </div>
        </Carousel>
        <div className="home__row">
          <Product 
            id="12321341"
            title="TVS Racing Riding Gloves for Men-Mesh for Ventilation, TPR Protection for Knuckles,Touch Screen Compatible, & Visor Wiper Fingertips"
            price={1424}
            max_price="₹1,899.00"
            image="https://m.media-amazon.com/images/I/518zO5kBwJL._SL1000_.jpg"
            rating={4}
          />
          <Product 
            id="49538094"
            title="Steelbird SBA-7 7Wings ISI Certified Flip-Up Helmet for Men and Women with Inner Smoke Sun Shield (Medium 580 MM, Dashing Black)" 
            price={1479}
            max_price="₹1,849.00"
            rating={4}
            image="https://m.media-amazon.com/images/I/61SpcDjsq8L._SL1100_.jpg"
          />
          <Product 
            id="4903850" 
            title="Spotzero by Milton Prime Spin Mop with Big Wheels and Stainless Steel Wringer, Bucket Floor Cleaning and Mopping System, 2 Microfiber Refills, Aqua Green"
            price={1399}
            max_price="₹2,999.00"
            rating={4}
            image="https://m.media-amazon.com/images/I/71AWmrdvfXL._SL1500_.jpg"
          />
          <Product 
            id="23445930"
            title="Apple iPhone 15 Pro Max (256 GB) - Blue Titanium​​​​​​​"
            price={156900}
            max_price="₹1,59,900.00"
            rating={5}
            image="https://m.media-amazon.com/images/I/81fxjeu8fdL._SL1500_.jpg"
          />
        </div>
        <div className="home__row">
          <Product 
            id="3254354345" 
            title="EMotorad EMX+ Electric Cycle 27.5 Wheel Size 21 Speed Shimano Gears 18 6061 Aluminium Alloy Split Frame Dual Suspension MTB"
            price={64999}
            max_price="₹74,999.00"
            rating={5}
            image="https://m.media-amazon.com/images/I/71LyuTwN2mL._SL1500_.jpg"
          />
          <Product 
            id="49538044"
            title="STRIFF Mpad Mouse Mat 230X190X3mm Gaming Mouse Pad, Non-Slip Rubber Base, Waterproof Surface, Premium-Textured(Universe Black)" 
            price={99}
            max_price="₹999.00"
            rating={5}
            image="https://m.media-amazon.com/images/I/61zroMjd9FL._SL1500_.jpg"
          />
          <Product 
            id="49538094"
            title="Sony Bravia 164 cm (65 inches) 4K Ultra HD Smart LED Google TV KD-65X74K (Black)" 
            price={72900}
            max_price="₹1,39,900.00"
            rating={5}
            image="https://m.media-amazon.com/images/I/81P6YFm57TL._SL1500_.jpg"
          />
          <Product 
            id="49538045"
            title="Apple 2023 MacBook Pro (16-inch, M3 Max chip with 14‑core CPU and 30‑core GPU, 36GB Unified Memory, 1TB) - Silver" 
            price={439900}
            max_price="₹5,22,000.00"
            rating={5}
            image="https://m.media-amazon.com/images/I/61RcOfisl7L._SL1500_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
