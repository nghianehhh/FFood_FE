/** @format */

import React, { Component, Fragment, useState } from "react";
import BackgroundImage from "../../components/BackgroundImage/BackgroundImage";
import AllFoodItem from "../../components/AllFoodItem/AllFoodItem";
import Footer from "../../components/Footer/Footer";
const Home = () => {
      const [amount, setAmount] = useState(0);
      const amountCartCallback = (amount) => {
            setAmount(amount);
      };
      console.log("message amount: ", amount);
      return (
            <Fragment>
                  <BackgroundImage amountCart={amount} />
                  <AllFoodItem parentAmountCartCallback={amountCartCallback} />
                  <span className='introduce'>Chào mừng bạn đến với FFood.</span>
                  <Footer />
            </Fragment>
      );
};
export default Home;
