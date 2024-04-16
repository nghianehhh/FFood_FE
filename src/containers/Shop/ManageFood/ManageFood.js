/** @format */

import React, { Component } from "react";
import { Switch } from "antd";

import { push } from "connected-react-router";
import * as actions from "../../../store/actions";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";
import CommonUtils from "../../../utils/CommonUtils";
import ModalRemove from "../../Admin/ModalRemove";
import "./ManageFood.scss";

import { getItemProduct } from "../../../services/shopService";

import { Fragment } from "react";
class ManageFood extends Component {
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

                  isModalRemoveOpen: false,
                  idProductDeleted: "",

                  isUpdateItem: false,
                  idItemUpdate: "",
            };
      }

      async componentDidMount() {
            const access_token = this.props.userInfo.data.access_token;
            await this.props.getAllProduct(access_token);
      }
      toggleExpand = () => {
            this.setState({ expanded: !this.state.expanded });
      };
      handleCheckIvalide = () => {
            let isValid = true;
            const arrInput = ["priceItem", "foodName", "imageItem", "descItem"];
            for (let i = 0; i < arrInput.length; i++) {
                  if (!this.state[arrInput[i]]) {
                        isValid = false;
                        alert("Missing parameter: " + arrInput[i]);
                        break;
                  }
            }
            return isValid;
      };

      handleCreateItem = async () => {
            const check = this.handleCheckIvalide();
            if (check === false) return;
            const access_token = this.props.userInfo.data.access_token;
            console.log(this.state.descItem);
            await this.props.createItemProduct(
                  {
                        priceItem: this.state.priceItem,
                        foodName: this.state.foodName,
                        descItem: this.state.descItem,
                        imageItem: this.state.imageItem,
                        access_token: access_token,
                  },
                  access_token,
            );
            this.setState({
                  descItem: "",
                  priceItem: "",
                  foodName: "",
                  imageItem: "",
                  previewImage: "",
            });
      };
      handleUpdateItemProduct = async () => {
            const access_token = this.props.userInfo.data.access_token;
            let dateItem = {
                  id: this.state.idItemUpdate,
                  priceItem: this.state.priceItem,
                  foodName: this.state.foodName,
                  descItem: this.state.descItem,
                  imageItem: this.state.imageItem,
                  access_token: access_token,
            };
            await this.props.updateItemProduct(dateItem);
            this.setState({
                  idItemUpdate: "",
                  descItem: "",
                  priceItem: "",
                  foodName: "",
                  imageItem: "",
                  previewImage: "",
            });
      };
      toggleUpdateItemProduct = async (id) => {
            let access_token = this.props.userInfo.data.access_token;
            const item = await getItemProduct(id, access_token);
            console.log("item :", item);
            // console.log('check user data take from child:', userData);
            let imageBase64 = "";
            if (item.item.primaryImage) {
                  imageBase64 = new Buffer(item.item.primaryImage, "base64").toString("binary");
            }
            this.setState({
                  isUpdateItem: true,
                  id: item.item.id,
                  priceItem: item.item.price,
                  foodName: item.item.foodName,
                  descItem: item.item.descFood,
                  previewImage: imageBase64,
                  imageItem: item.item.imageItem,
                  idItemUpdate: id,
            });
      };
      handleCancel = () => {
            this.setState({
                  descItem: "",
                  priceItem: "",
                  foodName: "",
                  imageItem: "",
                  previewImage: "",
                  isUpdateItem: false,
            });
      };
      handleDeleteProduct = async () => {
            try {
                  const idProductDeleted = this.state.idProductDeleted;
                  const access_token = this.props.userInfo.data.access_token;
                  await this.props.deleteProduct(idProductDeleted, access_token);
                  this.setState({
                        isModalRemoveOpen: false,
                  });
                  this.getId.current = null;
            } catch (e) {
                  console.log(e);
            }
      };
      handleCancelRemove = () => {
            this.setState({
                  isModalRemoveOpen: false,
            });
            this.getId.current = null;
      };

      openPreview = () => {
            if (!this.state.previewImage) return;
            this.setState({
                  isOpen: true,
            });
      };

      handleChangeInput = (event, id) => {
            let copyState = { ...this.state };
            copyState[id] = event.target.value;
            this.setState({
                  ...copyState,
            });
      };

      handleChooseAvatar = async (event) => {
            // const btn = document.querySelector("#choose-avatar");
            console.log("chossing image");
            let file = event.target.files[0];
            if (file) {
                  let base64 = await CommonUtils.getBase64(file);
                  const objectURL = URL.createObjectURL(file);
                  this.setState({
                        previewImage: objectURL,
                        imageItem: base64,
                  });
            }
      };

      render() {
            const { dataProduct } = this.props;
            // const tokent = localStorage.getItem("access_token")
            console.log(localStorage.getItem("access_token"));
            return (
                  <Fragment>
                        <div className='wrap-container-product'>
                              <div className='wrap-add-item-food mx-2 my-4'>
                                    <div className='create-new-item-food'>
                                          <div className='wrap-content-item'>
                                                <div className='choose-image-item-food'>
                                                      <div className='text-image-new-item'>
                                                            Chọn ảnh sản phẩm mới thêm vào
                                                      </div>
                                                      <div className='image-new-item'>
                                                            <div className='form-group' style={{ height: "100%" }}>
                                                                  <div className='wrap-choose-item'>
                                                                        <div className='contain-image-item'>
                                                                              <div
                                                                                    className='image-item'
                                                                                    style={{
                                                                                          backgroundImage: `url('${this.state.previewImage}')`,
                                                                                          cursor: !this.state
                                                                                                .previewImage
                                                                                                ? ""
                                                                                                : "pointer",
                                                                                    }}
                                                                                    onClick={() => this.openPreview()}
                                                                              ></div>
                                                                        </div>
                                                                        <label
                                                                              htmlFor='choose-item'
                                                                              className='upload-item'
                                                                        >
                                                                              <FontAwesomeIcon
                                                                                    className='icon-upload'
                                                                                    icon={icon({
                                                                                          name: "upload",
                                                                                    })}
                                                                              />
                                                                        </label>
                                                                        <input
                                                                              onChange={(e) =>
                                                                                    this.handleChooseAvatar(e)
                                                                              }
                                                                              type='file'
                                                                              id='choose-item'
                                                                              name='choose-item'
                                                                              hidden
                                                                        ></input>
                                                                  </div>
                                                            </div>
                                                      </div>
                                                </div>
                                                <div className='wrap-nFood-price' style={{ fontSize: "1.4rem" }}>
                                                      <div className='input-price-item' style={{ marginTop: "24px" }}>
                                                            <label>Nhập giá</label>
                                                            <input
                                                                  value={this.state.priceItem}
                                                                  id='priceItem'
                                                                  onChange={(event) =>
                                                                        this.handleChangeInput(event, "priceItem")
                                                                  }
                                                            ></input>
                                                      </div>
                                                      <div className='input-name-food' style={{ marginTop: "24px" }}>
                                                            <label>Tên món</label>
                                                            <input
                                                                  value={this.state.foodName}
                                                                  id='foodName'
                                                                  onChange={(event) =>
                                                                        this.handleChangeInput(event, "foodName")
                                                                  }
                                                            ></input>
                                                      </div>
                                                </div>
                                                <div className='wrap-desc-item-food'>
                                                      <div className='text-desc-new-item'>Mô tả sả phẩm ngắn gọn</div>
                                                      <textarea
                                                            value={this.state.descItem}
                                                            id='descItem'
                                                            onChange={(event) =>
                                                                  this.handleChangeInput(event, "descItem")
                                                            }
                                                            className='desc-item-food'
                                                      ></textarea>
                                                </div>
                                          </div>
                                          <div className='btn'>
                                                <div className='btn-create-item'>
                                                      {this.state.isUpdateItem === false ? (
                                                            <button onClick={() => this.handleCreateItem()}>
                                                                  create new item
                                                            </button>
                                                      ) : (
                                                            <div>
                                                                  <button
                                                                        onClick={() => this.handleUpdateItemProduct()}
                                                                  >
                                                                        Update Item
                                                                  </button>
                                                            </div>
                                                      )}
                                                </div>
                                                {(this.state.descItem !== "" ||
                                                      this.state.imageItem !== "" ||
                                                      this.state.priceItem !== "") && (
                                                      <div className='btn-cancel'>
                                                            <button onClick={() => this.handleCancel()}>cancel</button>
                                                      </div>
                                                )}
                                          </div>
                                    </div>
                                    <div className='history-item-just-new-add'>
                                          <div className='image-item-just-new-add'>
                                                <span>Sản phẩm thêm vào gần nhất</span>
                                                <div class='image'>1 of 2</div>
                                          </div>
                                          <div className='wrap-btn'>
                                                <button className='remove'>Xóa</button>
                                                <button className='edit'>chỉnh sửa</button>
                                          </div>
                                    </div>
                              </div>
                              <div class='row-foods'>
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
                                                      <span class='col-food' key={product.id}>
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
                                                                              this.setState({
                                                                                    isModalRemoveOpen: true,
                                                                                    idProductDeleted: product.id,
                                                                              })
                                                                        }
                                                                  >
                                                                        delete
                                                                  </button>
                                                                  <button
                                                                        style={{ color: "#ffc400" }}
                                                                        onClick={() =>
                                                                              this.toggleUpdateItemProduct(product.id)
                                                                        }
                                                                  >
                                                                        update
                                                                  </button>
                                                            </div>
                                                      </span>
                                                );
                                          })}
                              </div>
                              {this.state.isModalRemoveOpen && (
                                    <ModalRemove
                                          isModalRemoveOpen={this.state.isModalRemoveOpen}
                                          handleCancelRemove={this.handleCancelRemove}
                                          handleRemove={this.handleDeleteProduct}
                                    />
                              )}
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
            dataProduct: state.shop.dataProduct,
      };
};

const mapDispatchToProps = (dispatch) => {
      return {
            createItemProduct: (data, access_token) => dispatch(actions.fetchCreateItemProduct(data, access_token)),
            getAllProduct: (access_token) => dispatch(actions.fetchAllItemProductStart(access_token)),
            deleteProduct: (idProduct, access_token) => dispatch(actions.deleteProductStart(idProduct, access_token)),
            updateItemProduct: (dataItemProduct) => dispatch(actions.updateProductStart(dataItemProduct)),
            navigate: (path) => dispatch(push(path)),
      };
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageFood);
