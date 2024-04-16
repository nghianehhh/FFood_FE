/** @format */

import React, { Component } from "react";

import { push } from "connected-react-router";
import * as actions from "../../store/actions";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";
import "./AllFoodItem.scss";

import { Fragment } from "react";
class AllFoodItem extends Component {
      constructor(props) {
            super(props);
            this.state = {
                  isOpen: false,
                  priceItem: "",
                  foodName: "",
                  descItem: "",
                  previewImage: "",
                  imageItem: "",
                  isExpanded: false,
                  allCart: 0,
            };
      }
      changeAmounCartHeader = (amount) => {
            console.log(amount);
            this.props.parentAmountCartCallback(amount);
      };

      async componentDidMount() {
            await this.props.getAllProductByBuyer();
            this.setState({
                  allCart: this.props.allCart,
            });
      }

      openPreview = () => {
            if (!this.state.previewImage) return;
            this.setState({
                  isOpen: true,
            });
      };
      handleAddFoodToCart = async (product) => {
            var currentdate = new Date();
            var datetime =
                  "Last Sync: " +
                  currentdate.getDate() +
                  "/" +
                  (currentdate.getMonth() + 1) +
                  "/" +
                  currentdate.getFullYear() +
                  " @ " +
                  currentdate.getHours() +
                  ":" +
                  currentdate.getMinutes() +
                  ":" +
                  currentdate.getSeconds();
            //
            const amountFood = 1;
            let access_token = this.props.userInfo.data.access_token;
            let data = {
                  idFood: product.id,
                  idShop: product.idShop,
                  amountFood: amountFood,
                  timeAt: datetime,
                  access_token: access_token,
            };
            console.log(data, access_token);
            // console.log(idFood);

            await this.props.addFoodToCart(data);
            this.changeAmounCartHeader(this.props.allCart.length);
            // this.setState({
            //       allCart: this.props.allCart.length,
            // });
      };

      render() {
            const { dataProduct } = this.props;
            return (
                  <Fragment>
                        <div className='wrap-container-product'>
                              <div className='row-foods'>
                                    {dataProduct &&
                                          dataProduct.length > 0 &&
                                          dataProduct.map((product) => {
                                                let imageBase64 = "";
                                                if (product.primaryImage) {
                                                      imageBase64 = new Buffer(product.primaryImage, "base64").toString(
                                                            "binary",
                                                      );
                                                }
                                                return (
                                                      <span className='col-food' key={product.id}>
                                                            <div
                                                                  className={`image-description product-${product.id}`}
                                                                  style={{
                                                                        backgroundImage: `url('${imageBase64}')`,
                                                                  }}
                                                            ></div>
                                                            <div className='descFood'>
                                                                  <p>
                                                                        {product.foodName} | {product.descFood}
                                                                  </p>
                                                                  {/* 
                                                                  <button onClick={() => this.toggleExpand()}>
                                                                        {this.state.isExpanded ? "Thu gọn" : "Xem thêm"}
                                                                  </button> */}
                                                            </div>
                                                            <div>
                                                                  <span>
                                                                        <FontAwesomeIcon
                                                                              className='icon-star'
                                                                              icon={icon({
                                                                                    name: "star",
                                                                              })}
                                                                              style={{ color: "#ffc400" }}
                                                                        />
                                                                  </span>
                                                                  <span>
                                                                        <FontAwesomeIcon
                                                                              className='icon-star'
                                                                              icon={icon({
                                                                                    name: "star",
                                                                              })}
                                                                              style={{ color: "#ffc400" }}
                                                                        />
                                                                  </span>
                                                                  <span>
                                                                        <FontAwesomeIcon
                                                                              className='icon-star'
                                                                              icon={icon({
                                                                                    name: "star",
                                                                              })}
                                                                              style={{ color: "#ffc400" }}
                                                                        />
                                                                  </span>
                                                                  <span>
                                                                        <FontAwesomeIcon
                                                                              className='icon-star'
                                                                              icon={icon({
                                                                                    name: "star",
                                                                              })}
                                                                              style={{ color: "#ffc400" }}
                                                                        />
                                                                  </span>
                                                                  <span>
                                                                        <FontAwesomeIcon
                                                                              className='icon-star'
                                                                              icon={icon({
                                                                                    name: "star",
                                                                              })}
                                                                              style={{ color: "#ffc400" }}
                                                                        />
                                                                  </span>
                                                                  <span>| Lượt mua: 123</span>
                                                            </div>
                                                            <div style={{ fontSize: "16px" }}>
                                                                  Giá: {product.price} <sup>₫</sup>
                                                            </div>
                                                            <div className='btn-delete-update'>
                                                                  <button
                                                                        style={{ color: "red" }}
                                                                        onClick={() =>
                                                                              this.handleAddFoodToCart(product)
                                                                        }
                                                                  >
                                                                        Add to cart
                                                                  </button>
                                                                  <button
                                                                        style={{ color: "#ffc400" }}
                                                                        onClick={() =>
                                                                              this.toggleUpdateItemProduct(product.id)
                                                                        }
                                                                  >
                                                                        Mua
                                                                  </button>
                                                            </div>
                                                      </span>
                                                );
                                          })}
                              </div>
                        </div>
                  </Fragment>
            );
      }
}

const mapStateToProps = (state) => {
      return {
            isLoggedIn: state.user.isLoggedIn,
            lang: state.app.language,
            userInfo: state.user.userInfo,
            dataProduct: state.buyer.dataProduct,
            allCart: state.buyer.allCart,
      };
};

const mapDispatchToProps = (dispatch) => {
      return {
            getAllProductByBuyer: () => dispatch(actions.fetchAllItemProductByBuyerStart()),
            addFoodToCart: (data) => dispatch(actions.fetchAddFoodToCartStart(data)),
            getAllCart: (access_token) => dispatch(actions.fetchAllCartStart(access_token)),
            navigate: (path) => dispatch(push(path)),
      };
};

export default connect(mapStateToProps, mapDispatchToProps)(AllFoodItem);
