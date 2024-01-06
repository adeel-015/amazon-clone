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
            <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/itelksdgw/D98343440_Mobile_Hero_3000x1200._CB577378367_.jpg" alt="" />
          </div>
          <div>
            <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/31/Events/img23/Jupiter23/Homepage/T2_KV_Prime_Hero_PC_EN_2X._CB577195374_.jpg" alt="" />
          </div>
          <div>
            <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/vinambia/CFON55v3/D98490209_WLD---Jupiter23--realmeNarzoN55----Design-SIM_cricket-fever_PC_Hero_3000x1200_NEW._CB577111648_.jpg" alt="" />
          </div>
          <div>
            <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Home/AmazonTV/Campus_Beats/PC_Hero/3000x1200_Campus-Beats_V3._CB578732433_.jpg" alt="" />
          </div>
          <div>
            <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/AmazonPay/Jupiter23/KSD_hero/Train_Homepage_DesktopHeroTemplate_3000x1200_22June2023._CB576993133_.jpg" alt="" />
          </div>
          <div>
            <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/ACQ/Homepage_DesktopHeroTemplate_3000x1200v3._CB592770274_.jpg" alt="" />
          </div>
          <div>
            <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG23/Suma/GW/1Oct/Mi_Homepage_DesktopHeroTemplate_3000x1200_22June2023_ksd_2._CB577384471_.jpg" alt="" />
          </div>
          <div>
            <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/31/sharooq/jupiter23/Homepage_DesktopHeroTemplate_3000x1200_22June2023_ksd_Banner2._CB577378441_.jpg" alt="" />
          </div>
        </Carousel>
        <div className="home__row">
          <Product 
            id="12321341"
            title="Apple iPhone 13 (128GB) - Midnight"
            price={52499}
            max_price="₹69,900.00"
            image="https://images-eu.ssl-images-amazon.com/images/I/31tyUh1todL._AC_SX368_.jpg"
            rating={5}
          />
          <Product 
            id="49538094"
            title="Apple AirPods (3rd Generation)" 
            price={18499}
            max_price="₹20,900.00"
            rating={5}
            image="https://images-eu.ssl-images-amazon.com/images/I/615ekapl+pL._AC_UL348_SR348,348_.jpg"
          />
          <Product 
            id="4903850" 
            title="Apple AirPods Pro with MagSafe Charging Case"
            price={17990}
            max_price="₹24,900.00"
            rating={5}
            image="https://m.media-amazon.com/images/I/71bhWgQK-cL._SL1500_.jpg"
          />
          <Product 
            id="23445930"
            title="Apple AirPods Pro (2nd Generation) ​​​​​​​"
            price={21990}
            max_price="₹26,900.00"
            rating={5}
            image="https://m.media-amazon.com/images/I/61SUj2aKoEL._SL1500_.jpg"
          />
        </div>
        <div className="home__row">
          <Product 
            id="3254354345" 
            title="New Apple AirPods Max - Pink"
            price={59990}
            max_price="₹65,900.00"
            rating={5}
            image="https://m.media-amazon.com/images/I/81NIpE9-5mL._SL1500_.jpg"
          />
          <Product 
            id="49538044"
            title="Apple AirPods (2nd Generation) Case" 
            price={10999}
            max_price="₹14,900.00"
            rating={5}
            image="https://m.media-amazon.com/images/I/31Ri-FAMBUL._AC_SY400_.jpg"
          />
          <Product 
            id="49538094"
            title="Apple Lightning to 3.5mm Audio Cable (1.2m) - White" 
            price={3200}
            max_price="₹3,500.00"
            rating={5}
            image="https://m.media-amazon.com/images/I/61Ski0jm1nL._SL1500_.jpg"
          />
          <Product 
            id="49538045"
            title="Apple Wired EarPods with Lightning Connector" 
            price={1699}
            max_price="₹2,000.00"
            rating={5}
            image="https://m.media-amazon.com/images/I/418AP8pw3KL._SL1500_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
