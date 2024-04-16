/** @format */

import React, { Component } from "react";
import { connect } from "react-redux";
import HomeHeader from "../HomeHeader/HomeHeader";
import Banner from "../Banner/Banner";
import "./BackgroundImage.scss";
import * as actions from "../../store/actions";
class BackgroundImage extends Component {
      constructor(props) {
            super(props);
            this.state = {
                  amountCart: 0,
            };
      }
      componentDidUpdate(prevProps, prevState, snapshot) {
            if (this.state.amountCart !== this.props.amountCart) {
                  console.log("check prevProps.allCart !== this.props.allCart");
                  this.updateAmount();
            }
      }
      async componentDidMount() {
            const access_token = localStorage.getItem("access_token");
            await this.props.getAllCart(access_token);
            let amount = this.props.allCart.length;
            this.setState({
                  amountCart: amount,
            });
            console.log("amount: ", amount);
      }
      updateAmount() {
            let amount;
            console.log(this.props.amountCart);
            if (this.props.amountCart !== 0) {
                  amount = this.props.amountCart;
                  this.setState({
                        amountCart: amount,
                  });
            } else {
            }
      }

      render() {
            const linkNameTypeFood = this.props.linkNameTypeFood;
            const linkNameArea = this.props.linkNameArea;
            console.log("check background");
            return (
                  <div className='wrap-background-image'>
                        <div className='background-image'>
                              <HomeHeader
                                    linkNameTypeFood={linkNameTypeFood}
                                    linkNameArea={linkNameArea}
                                    amountCart={this.state.amountCart}
                              />
                              <Banner />
                        </div>
                  </div>
            );
      }
}

const mapStateToProps = (state) => {
      return {
            isLoggedIn: state.user.isLoggedIn,
            lang: state.app.language,
            userInfo: state.user.userInfo,
            allCart: state.buyer.allCart,
      };
};

const mapDispatchToProps = (dispatch) => {
      return {
            getAllCart: (access_token) => dispatch(actions.fetchAllCartStart(access_token)),
      };
};

export default connect(mapStateToProps, mapDispatchToProps)(BackgroundImage);
