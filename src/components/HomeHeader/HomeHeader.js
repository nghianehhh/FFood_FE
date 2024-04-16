/** @format */

import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions";
import { push } from "connected-react-router";
import { LogoutOutlined, SettingFilled, UserOutlined } from "@ant-design/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";
import LogoFood from "../../assets/images/logo.png";
import XSymbol from "../../assets/images/x-symbol.svg";
import "./HomeHeader.scss";
class HomeHeader extends Component {
      constructor(props) {
            super(props);
            this.state = {
                  linkAreaCurrent: this.props.linkNameArea === undefined ? "/" : this.props.linkNameArea,
                  linkFoodCurrent: "",
                  isOpenSearch: false,
                  isOpenNotifycation: false,
                  isOpenCoverNotify: false,
                  listWrapNotifycation: [],
                  amountCart: 0,
            };
      }
      updateAmountCart = (amount) => {
            this.setState({
                  amountCart: amount,
            });
      };
      wrapNotifycation = () => {
            return (
                  <div className={`wrap-notifycation active`}>
                        <div className='content-notifycation'>
                              <div className='close-notifycation'>
                                    <img
                                          className='icon-close'
                                          src={XSymbol}
                                          alt='close-notifycation'
                                          onClick={() =>
                                                this.setState({ isOpenNotifycation: !this.state.isOpenNotifycation })
                                          }
                                    ></img>
                              </div>
                              <div className='wrap-tostify'>
                                    <div className='wrap-content'>
                                          <div className='item-content'>tostify 1</div>
                                    </div>
                                    <div className={`line ${this.state.isOpenNotifycation ? "active" : null}`}></div>
                              </div>
                        </div>
                  </div>
            );
      };
      addWrapNotifycation = () => {
            this.setState({
                  listWrapNotifycation: this.state.listWrapNotifycation.concat(
                        <this.wrapNotifycation key={this.state.listWrapNotifycation.length} />,
                  ),
            });
      };
      tostify = () => {
            this.setState({
                  isOpenCoverNotify: !this.state.isOpenCoverNotify,
            });
      };
      handleRouterArea = (area) => {
            console.log("area: " + area);
            this.setState({
                  linkAreaCurrent: area,
            });
            this.navigateArea(area);
      };

      processLogin = () => {
            const { navigate } = this.props;
            const redirectPath = "/login";
            navigate(`${redirectPath}`);
      };
      navigateRice = () => {
            let curLink = this.state.linkAreaCurrent;
            console.log(curLink);
            if (this.state.linkAreaCurrent === "/") {
                  curLink = "/area-A";
            }
            const { navigate } = this.props;
            const redirectPath = curLink + "/rice";
            navigate(`${redirectPath}`);
      };
      navigateDrink = () => {
            let curLink = this.state.linkAreaCurrent;
            console.log(curLink);
            if (this.state.linkAreaCurrent === "/") {
                  curLink = "/area-A";
            }
            const { navigate } = this.props;
            const redirectPath = curLink + "/drink";
            navigate(`${redirectPath}`);
      };
      navigateVegetable = () => {
            let curLink = this.state.linkAreaCurrent;
            if (this.state.linkAreaCurrent === "/") {
                  curLink = "/area-A";
            }
            const { navigate } = this.props;
            const redirectPath = curLink + "/vegetable";
            navigate(`${redirectPath}`);
      };
      navigateFruit = () => {
            let curLink = this.state.linkAreaCurrent;
            if (this.state.linkAreaCurrent === "/") {
                  curLink = "/area-A";
            }
            const { navigate } = this.props;
            const redirectPath = curLink + "/fruit";
            navigate(`${redirectPath}`);
      };
      navigateHotpot = () => {
            let curLink = this.state.linkAreaCurrent;
            if (this.state.linkAreaCurrent === "/") {
                  curLink = "/area-A";
            }
            const { navigate } = this.props;
            const redirectPath = curLink + "/hotpot";
            navigate(`${redirectPath}`);
      };
      navigateArea = (routerArea) => {
            console.log("routerArea", routerArea);
            const { navigate } = this.props;
            if (routerArea === "/") {
                  const redirectPath = "/";
                  navigate(`${redirectPath}`);
            } else {
                  const redirectPath = routerArea + "/rice";
                  navigate(`${redirectPath}`);
            }
      };
      navigateShoppingCart = () => {
            const { navigate } = this.props;
            const redirectPath = "/shopping-cart";
            navigate(`${redirectPath}`);
      };
      navigateLogin = () => {
            const { navigate } = this.props;
            const redirectPath = "/login";
            navigate(`${redirectPath}`);
      };
      navigateLogout = () => {
            this.props.processLogout();
            const { navigate } = this.props;
            const redirectPath = "/login";
            navigate(`${redirectPath}`);
      };
      render() {
            console.log("this.props.amountCart: ", this.props.amountCart);
            // const linkNameTypeFood = window.location.pathname.split("/")[1];
            const { userInfo } = this.props;
            // if (this.props.linkNameArea === undefined) {
            //       console.log(true);
            // }
            console.log("userInfo", userInfo);
            return (
                  <React.Fragment>
                        <div className='home-header-container'>
                              <div className='home-header-content'>
                                    <div className='left-content'>
                                          <div className='header-logo'>
                                                <img src={LogoFood} alt='Logo Food' className='img-logo-food'></img>
                                          </div>
                                          <select
                                                id='area'
                                                className='select-area'
                                                value={this.state.linkAreaCurrent}
                                                onChange={(event) => this.handleRouterArea(event.target.value)}
                                          >
                                                <option value='/' name='choose-area' className='area'>
                                                      Khu vực
                                                </option>
                                                <option
                                                      value='/area-A'
                                                      className='area'
                                                      name='/area-A'
                                                      onSelect={(event) => {
                                                            console.log("input onSelect is triggered");
                                                      }}
                                                      // selected={this.props.linkNameArea}
                                                >
                                                      Khu A
                                                </option>
                                                <option value='/area-B' className='area'>
                                                      Khu B
                                                </option>
                                          </select>
                                    </div>
                                    <div className='center-content'>
                                          <div
                                                className={`type-food rice ${
                                                      this.props.linkNameTypeFood === "rice" ? "active" : ""
                                                }`}
                                                onClick={() => this.navigateRice()}
                                          >
                                                Cơm
                                                <div
                                                      className={`line ${
                                                            this.props.linkNameTypeFood === "rice" ? "active" : ""
                                                      }`}
                                                ></div>
                                          </div>
                                          <div
                                                className={`type-food drink ${
                                                      this.props.linkNameTypeFood === "drink" ? "active" : ""
                                                }`}
                                                onClick={() => this.navigateDrink()}
                                          >
                                                Đồ uống
                                                <div
                                                      className={`line ${
                                                            this.props.linkNameTypeFood === "drink" ? "active" : ""
                                                      }`}
                                                ></div>
                                          </div>
                                          <div
                                                className={`type-food vegetable ${
                                                      this.props.linkNameTypeFood === "vegetable" ? "active" : ""
                                                }`}
                                                onClick={() => this.navigateVegetable()}
                                          >
                                                Rau Củ
                                                <div
                                                      className={`line ${
                                                            this.props.linkNameTypeFood === "vegetable" ? "active" : ""
                                                      }`}
                                                ></div>
                                          </div>
                                          <div
                                                className={`type-food fruit ${
                                                      this.props.linkNameTypeFood === "fruit" ? "active" : ""
                                                }`}
                                                onClick={() => this.navigateFruit()}
                                          >
                                                Trái cây
                                                <div
                                                      className={`line ${
                                                            this.props.linkNameTypeFood === "fruit" ? "active" : ""
                                                      }`}
                                                ></div>
                                          </div>
                                          <div
                                                className={`type-food hotpot ${
                                                      this.props.linkNameTypeFood === "hotpot" ? "active" : ""
                                                }`}
                                                onClick={() => this.navigateHotpot()}
                                          >
                                                Lẩu
                                                <div
                                                      className={`line ${
                                                            this.props.linkNameTypeFood === "hotpot" ? "active" : ""
                                                      }`}
                                                ></div>
                                          </div>
                                          {/* <div className='line'></div> */}
                                    </div>
                                    <div className='right-content'>
                                          {this.props.rightContent === false ? (
                                                <div className='house' onClick={() => this.props.navigate("/")}>
                                                      <FontAwesomeIcon
                                                            icon={icon({
                                                                  name: "arrow-left",
                                                                  style: "solid",
                                                            })}
                                                            className='icon-house'
                                                      />
                                                </div>
                                          ) : (
                                                <React.Fragment>
                                                      {userInfo !== null && userInfo.data.user !== null ? (
                                                            <div className='notifycation'>
                                                                  <FontAwesomeIcon
                                                                        icon={icon({
                                                                              name: "bell",
                                                                              style: "regular",
                                                                        })}
                                                                        className='icon-bell'
                                                                        onClick={() => this.tostify()}
                                                                  />
                                                            </div>
                                                      ) : (
                                                            <div></div>
                                                      )}
                                                      <div
                                                            className={`over-notifycation ${
                                                                  this.state.isOpenCoverNotify ? "active" : null
                                                            }`}
                                                      >
                                                            {/* <div
                                                      className={`wrap-notifycation ${
                                                            this.state.isOpenNotifycation ? "active" : null
                                                      }`}
                                                >
                                                      <div className='content-notifycation'>
                                                            <div className='close-notifycation'>
                                                                  <img
                                                                        className='icon-close'
                                                                        src={XSymbol}
                                                                        alt='close-notifycation'
                                                                        onClick={() => this.tostify()}
                                                                  ></img>
                                                            </div>
                                                            <div className='wrap-tostify'>
                                                                  <div className='wrap-content'>
                                                                        <div className='item-content'>tostify 1</div>
                                                                  </div>
                                                                  <div
                                                                        className={`line ${
                                                                              this.state.isOpenNotifycation
                                                                                    ? "active"
                                                                                    : null
                                                                        }`}
                                                                  ></div>
                                                            </div>
                                                      </div>
                                                </div> */}
                                                            <div onClick={() => this.addWrapNotifycation()}>
                                                                  ADD NOTIFY
                                                            </div>
                                                            {this.state.listWrapNotifycation}
                                                      </div>

                                                      <div className='search'>
                                                            <FontAwesomeIcon
                                                                  icon={icon({
                                                                        name: "magnifying-glass",
                                                                  })}
                                                                  className='icon-search'
                                                                  onClick={() =>
                                                                        this.setState({
                                                                              isOpenSearch: !this.state.isOpenSearch,
                                                                        })
                                                                  }
                                                            ></FontAwesomeIcon>
                                                            <div
                                                                  className={`over-screen ${
                                                                        this.state.isOpenSearch ? "active" : null
                                                                  }`}
                                                            >
                                                                  <div
                                                                        className={`wrap-search ${
                                                                              this.state.isOpenSearch ? "active" : null
                                                                        }`}
                                                                  >
                                                                        <div className='search'>
                                                                              <input
                                                                                    type='text'
                                                                                    className='search-input'
                                                                                    placeholder='Tim kiem'
                                                                              ></input>
                                                                        </div>
                                                                        <div className='search-quickly'>
                                                                              <p>tim kiem nhanh</p>
                                                                        </div>
                                                                  </div>
                                                                  <div
                                                                        className='cancel-search'
                                                                        onClick={() =>
                                                                              this.setState({
                                                                                    isOpenSearch:
                                                                                          !this.state.isOpenSearch,
                                                                              })
                                                                        }
                                                                  ></div>
                                                            </div>
                                                      </div>
                                                      {userInfo !== null && userInfo.data.user !== null ? (
                                                            <div className='cart'>
                                                                  <FontAwesomeIcon
                                                                        icon={icon({ name: "cart-shopping" })}
                                                                        className='icon-cart'
                                                                        onClick={() => this.navigateShoppingCart()}
                                                                  ></FontAwesomeIcon>
                                                                  <div className='cart-items-value'>
                                                                        {this.props.amountCart}
                                                                  </div>
                                                            </div>
                                                      ) : (
                                                            <div></div>
                                                      )}
                                                      <div className='btn'>
                                                            {userInfo !== null && userInfo.data.user != null ? (
                                                                  <div className='user-setting'>
                                                                        <div>Hello, {userInfo.data.user.firstName}</div>
                                                                        <FontAwesomeIcon
                                                                              icon={icon({
                                                                                    name: "user",
                                                                              })}
                                                                              className='icon-user'
                                                                        />
                                                                        <div className='option-setting'>
                                                                              <div
                                                                                    className='option-profile'
                                                                                    style={{
                                                                                          color:
                                                                                                // linkName === "change-profile"
                                                                                                //       ? "blue"
                                                                                                //       :
                                                                                                "rgb(85, 83, 83)",
                                                                                    }}
                                                                                    onClick={this.navigateChangeProfile}
                                                                              >
                                                                                    <UserOutlined
                                                                                          style={{
                                                                                                fontSize: "20px",
                                                                                                color: "rgb(85, 83, 83)",
                                                                                                marginRight: "8px",
                                                                                          }}
                                                                                    />
                                                                                    <div
                                                                                          className='setting-profile'
                                                                                          style={{
                                                                                                fontSize: "16px",
                                                                                          }}
                                                                                    >
                                                                                          Thay đổi thông tin
                                                                                    </div>
                                                                              </div>
                                                                              <div
                                                                                    className='option-password'
                                                                                    style={{
                                                                                          color:
                                                                                                // linkName === "change-password"
                                                                                                //       ? "blue"
                                                                                                //       :
                                                                                                "rgb(85, 83, 83)",
                                                                                    }}
                                                                                    onClick={
                                                                                          this.navigateChangePassword
                                                                                    }
                                                                              >
                                                                                    <SettingFilled
                                                                                          style={{
                                                                                                fontSize: "20px",
                                                                                                color: "rgb(85, 83, 83)",
                                                                                                marginRight: "8px",
                                                                                          }}
                                                                                    />
                                                                                    <div
                                                                                          className='setting-password'
                                                                                          style={{
                                                                                                fontSize: "16px",
                                                                                          }}
                                                                                    >
                                                                                          Thay đổi mật khẩu
                                                                                    </div>
                                                                              </div>
                                                                              <div
                                                                                    className='btn-logout'
                                                                                    onClick={() =>
                                                                                          this.navigateLogout()
                                                                                    }
                                                                              >
                                                                                    <LogoutOutlined
                                                                                          style={{
                                                                                                fontSize: "20px",
                                                                                                color: "rgb(85, 83, 83)",
                                                                                                marginRight: "8px",
                                                                                          }}
                                                                                    />
                                                                                    <div
                                                                                          className='logout'
                                                                                          style={{
                                                                                                fontSize: "16px",
                                                                                          }}
                                                                                    >
                                                                                          Đăng suất
                                                                                    </div>
                                                                              </div>
                                                                        </div>
                                                                  </div>
                                                            ) : (
                                                                  <div
                                                                        className='btn-login'
                                                                        onClick={this.processLogin}
                                                                  >
                                                                        <div className='login'>Login</div>
                                                                  </div>
                                                            )}
                                                      </div>
                                                      <div className='language'>
                                                            <div className='language-vi'>VI</div>
                                                            <div className='language-en'>EN</div>
                                                      </div>
                                                </React.Fragment>
                                          )}
                                    </div>
                              </div>
                        </div>
                  </React.Fragment>
            );
      }
}

const mapStateToProps = (state) => {
      return {
            isLoggedIn: state.user.isLoggedIn,
            lang: state.app.language,
            userInfo: state.user.userInfo,
      };
};

const mapDispatchToProps = (dispatch) => {
      return {
            navigate: (path) => dispatch(push(path)),
            processLogout: () => dispatch(actions.processLogout()),
      };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);
