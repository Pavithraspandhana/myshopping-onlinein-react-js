import React from "react";
import "./Home.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="12321341"
            title="PERFECT WEAR WOMEN'S ETHNIC WEAR BANARASI COTTON SILK SAREE. (AAKSARA)
            5.0 out of 5 stars    1 rating "
            price={999}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/91Ggz%2BE6uNL._AC_UY741_.jpg"
          />
          <Product
            id="49538094"
            title="Dennis Lingo Men's Solid Slim Fit Casual Shirt
                4 out of 5 stars    3,253 ratings "
            price={2500}
            rating={4}
            image="https://m.media-amazon.com/images/I/41e5eWf0olL._AC_SR160,200_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="enovo Tab M10 FHD Plus Tablet (10.3-inch, 2GB, 32GB, Wi-Fi + LTE, Volte Calling), Platinum Grey
            Visit the Lenovo Store
             4.2 out of 5 stars    2,065 rating"
            price={13999}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/51wunDO3FLL._AC_SL1000_.jpg"
          />
          <Product
            id="23445930"
            title="Dell G3 3500 Gaming Laptop with 15.6 Inch 120 Hz FHD Display (10th Gen i5-10300H/ 8 GB/ 1TB+256 SSD/ Win 10/ NVIDIA GTX 1650 4GB Graphics)
             4.1 out of 5 stars    229 ratings"
            price={72000}
            rating={5}
            image="https://m.media-amazon.com/images/I/81pezrPSgOL._AC_UY218_.jpg"
          />
          <Product
            id="3254354345"
            title="Sukkhi Ethnic Gold Plated Kundan Multi-String Set of 3 Necklace Combo for Women (SKR48716)
            3.3 out of 5 stars    1,373 ratings "
            price={500}
            rating={4}
            image="https://m.media-amazon.com/images/I/71qsZwPnzOL._AC_UL320_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="90829332"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={30000}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />
        </div>
      </div>
    </div>
  );
}
export default Home;
