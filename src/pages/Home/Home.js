import React from "react";
import Product from "../../components/Product/Product";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <img className="home__image" src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2020/CyberMonday/Fuji_TallHero_CM_v2_en_US_1x._CB414209152_.png"></img>
      <div className="home__row">
        <Product
          id="132654123"
          title="product name"
          price={11.96}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/81TVgHanENL.jpg"
        />
        <Product
          id="132654123"
          title="product name"
          price={11.96}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/81TVgHanENL.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="132654123"
          title="product name"
          price={11.96}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/81TVgHanENL.jpg"
        />
        <Product
          id="132654123"
          title="product name"
          price={11.96}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/81TVgHanENL.jpg"
        />
        <Product
          id="132654123"
          title="product name"
          price={11.96}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/81TVgHanENL.jpg"
        />
      </div>
    </div>

  );
};

export default Home;
