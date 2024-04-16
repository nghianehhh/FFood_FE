/** @format */

import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions";
import { push } from "connected-react-router";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import CustomScrollbars from "../../components/CustomScrollbars";
import "./Banner.scss";
import "../Base.scss";

import iconComTam from "../../assets/iconComtam.jpg";
import iconComCa from "../../assets/iconComCa.jpg";
import iconComGa from "../../assets/iconComGa.png";
import iconComDauHu from "../../assets/iconComDauHuNhoiThit.jpg";
import iconComTom from "../../assets/iconComTom.png";
import iconComThitKho from "../../assets/iconComThitKho.png";
import iconComMuopDang from "../../assets/iconComMuopDangNhoiThit.png";

import comtam1 from "../../assets/comtam/comtam1.jpg";
import star from "../../assets/star.svg";
class Banner extends Component {
      constructor(props) {
            super(props);
            this.state = {
                  tabs: [],
                  panes: [],
            };
      }
      componentDidMount() {
            const $ = document.querySelector.bind(document);
            const $$ = document.querySelectorAll.bind(document);
            this.setState({
                  tabs: $$(".tab-item"),
                  panes: $$(".tab-pane"),
            });
      }
      tabNext = () => {
            this.state.tabs.forEach((tab, index) => {
                  const pane = this.state.panes[index];
                  tab.onclick = function () {
                        const $ = document.querySelector.bind(document);
                        $(".tab-item.active").classList.remove("active");
                        $(".tab-pane.active").classList.remove("active");

                        tab.classList.add("active");
                        pane.classList.add("active");
                  };
            });
      };
      render() {
            let settings = {
                  dots: false,
                  infinite: false,
                  speed: 500,
                  slidesToShow: 2,
                  slidesToScroll: 2,
                  initialSlide: 0,
                  responsive: [
                        {
                              breakpoint: 1024,
                              settings: {
                                    slidesToShow: 3,
                                    slidesToScroll: 3,
                                    infinite: true,
                                    dots: false,
                              },
                        },
                        {
                              breakpoint: 600,
                              settings: {
                                    slidesToShow: 2,
                                    slidesToScroll: 2,
                                    initialSlide: 2,
                              },
                        },
                        {
                              breakpoint: 480,
                              settings: {
                                    slidesToShow: 1,
                                    slidesToScroll: 1,
                              },
                        },
                  ],
            };
            return (
                  <React.Fragment>
                        <div className='wrap-banner'>
                              <div className='banner'>
                                    <div className='wrap-tabs'>
                                          <CustomScrollbars>
                                                <div className='tabs'>
                                                      <div className='row-tab'>
                                                            <div className='tab-item active'>
                                                                  <img
                                                                        src={iconComTam}
                                                                        alt='icon-com-tam'
                                                                        className='icon-tab icon-com-tam'
                                                                  ></img>
                                                                  <p className='food-name'>Cơm tấm</p>
                                                            </div>
                                                            <div
                                                                  className='tab-item tab-item-1'
                                                                  onClick={this.tabNext("tab-item-1")}
                                                            >
                                                                  <img
                                                                        src={iconComCa}
                                                                        alt='icon-com-tam'
                                                                        className='icon-tab icon-com-tam'
                                                                  ></img>
                                                                  <p className='food-name'>Cơm Cá</p>
                                                            </div>
                                                      </div>
                                                      <div className='row-tab'>
                                                            <div
                                                                  className='tab-item tab-item-2'
                                                                  onClick={() => this.tabNext("tab-item-2")}
                                                            >
                                                                  <img
                                                                        src={iconComGa}
                                                                        alt='icon-com-tam'
                                                                        className='icon-tab icon-com-tam'
                                                                  ></img>
                                                                  <p className='food-name'>Cơm gà</p>
                                                            </div>
                                                            <div
                                                                  className='tab-item tab-item-3'
                                                                  onClick={() => this.tabNext("tab-item-3")}
                                                            >
                                                                  <img
                                                                        src={iconComDauHu}
                                                                        alt='icon-com-tam'
                                                                        className='icon-tab icon-com-tam'
                                                                  ></img>
                                                                  <p className='food-name'>Cơm đậu hũ</p>
                                                            </div>
                                                      </div>
                                                      <div className='row-tab'>
                                                            <div
                                                                  className='tab-item tab-item-4'
                                                                  onClick={() => this.tabNext("tab-item-4")}
                                                            >
                                                                  <img
                                                                        src={iconComTom}
                                                                        alt='icon-com-tam'
                                                                        className='icon-tab icon-com-tam'
                                                                  ></img>
                                                                  <p className='food-name'>Cơm Tôm</p>
                                                            </div>
                                                            <div
                                                                  className='tab-item tab-item-5'
                                                                  onClick={() => this.tabNext("tab-item-5")}
                                                            >
                                                                  <img
                                                                        src={iconComThitKho}
                                                                        alt='icon-com-tam'
                                                                        className='icon-tab icon-com-tam'
                                                                  ></img>
                                                                  <p className='food-name'>Cơm thịt kho</p>
                                                            </div>
                                                      </div>
                                                      <div className='row-tab'>
                                                            <div
                                                                  className='tab-item tab-item-6'
                                                                  onClick={() => this.tabNext("tab-item-6")}
                                                            >
                                                                  <img
                                                                        src={iconComMuopDang}
                                                                        alt='icon-com-tam'
                                                                        className='icon-tab icon-com-tam'
                                                                  ></img>
                                                                  <p className='food-name'>Cơm mướp đắng</p>
                                                            </div>
                                                      </div>
                                                      {/* <div className='line'></div> */}
                                                </div>
                                          </CustomScrollbars>
                                    </div>

                                    <div className='tab-content'>
                                          <div className='tab-pane active'>
                                                <div className='wrap-items'>
                                                      <Slider {...settings}>
                                                            <div className='item-product'>
                                                                  <img
                                                                        src={comtam1}
                                                                        alt='PC'
                                                                        className='image-product'
                                                                  ></img>
                                                                  <div className='name-product'>Cơm sườn</div>
                                                                  <div className='info-eatery'>
                                                                        <img
                                                                              className='avatar-eatery'
                                                                              src={comtam1}
                                                                              alt='avatar-eatery'
                                                                        ></img>
                                                                        <div className='eatery'>
                                                                              <h5>Quán cơm A</h5>
                                                                              <h6>
                                                                                    Địa chỉ: số 12 đường Lương Đình
                                                                                    Của,Đông Hòa,Dĩ An, Bình Dương
                                                                              </h6>
                                                                        </div>
                                                                  </div>

                                                                  <div className='desc-food'>
                                                                        <p>
                                                                              <span
                                                                                    style={{
                                                                                          fontWeight: "600",
                                                                                          fontSize: "1.2rem",
                                                                                    }}
                                                                              >
                                                                                    Mô tả
                                                                              </span>
                                                                              <span
                                                                                    style={{
                                                                                          fontSize: "1.2rem",
                                                                                    }}
                                                                              >
                                                                                    : Cơm sườn chua ngọt thơm ngon, thịt
                                                                                    mới chế biến, cà chua tươi, dưa leo
                                                                                    sạch thêm chút mỡ hành béo ngậy thơm
                                                                                    phức, ...
                                                                              </span>
                                                                              <span style={{ color: "#0077ed" }}>
                                                                                    Xem thêm
                                                                              </span>
                                                                        </p>
                                                                        <div className='rate'>
                                                                              <img
                                                                                    src={star}
                                                                                    alt='rate-star'
                                                                                    className='rate-star'
                                                                              ></img>
                                                                              <img
                                                                                    src={star}
                                                                                    alt='rate-star'
                                                                                    className='rate-star'
                                                                              ></img>
                                                                              <img
                                                                                    src={star}
                                                                                    alt='rate-star'
                                                                                    className='rate-star'
                                                                              ></img>
                                                                              <img
                                                                                    src={star}
                                                                                    alt='rate-star'
                                                                                    className='rate-star'
                                                                              ></img>
                                                                              <img
                                                                                    src={star}
                                                                                    alt='rate-star'
                                                                                    className='rate-star'
                                                                              ></img>
                                                                        </div>
                                                                  </div>
                                                                  <hr
                                                                        style={{
                                                                              color: "black",
                                                                              width: "100%%",
                                                                              height: "1px",
                                                                              margin: "4px",
                                                                        }}
                                                                  ></hr>
                                                                  <div className='price-buy'>
                                                                        <p className='price'>Giá : xx.xxx đ</p>
                                                                        <button className='btn-buy'>Mua ngay</button>
                                                                        <button className='btn-buy'>
                                                                              Thêm vào giỏ
                                                                        </button>
                                                                  </div>
                                                            </div>
                                                            <div className='item-product'>
                                                                  <img
                                                                        src={comtam1}
                                                                        alt='PC'
                                                                        className='image-product'
                                                                  ></img>
                                                                  <div className='name-product'>Cơm sườn</div>
                                                                  <div className='info-eatery'>
                                                                        <img
                                                                              className='avatar-eatery'
                                                                              src={comtam1}
                                                                              alt='avatar-eatery'
                                                                        ></img>
                                                                        <div className='eatery'>
                                                                              <h5>Quán cơm A</h5>
                                                                              <h6>
                                                                                    Địa chỉ: số 12 đường Lương Đình
                                                                                    Của,Đông Hòa,Dĩ An, Bình Dương
                                                                              </h6>
                                                                        </div>
                                                                  </div>

                                                                  <div className='desc-food'>
                                                                        <p>
                                                                              <span
                                                                                    style={{
                                                                                          fontWeight: "600",
                                                                                          fontSize: "1.2rem",
                                                                                    }}
                                                                              >
                                                                                    Mô tả
                                                                              </span>
                                                                              <span
                                                                                    style={{
                                                                                          fontSize: "1.2rem",
                                                                                    }}
                                                                              >
                                                                                    : Cơm sườn chua ngọt thơm ngon, thịt
                                                                                    mới chế biến, cà chua tươi, dưa leo
                                                                                    sạch thêm chút mỡ hành béo ngậy thơm
                                                                                    phức, ...
                                                                              </span>
                                                                              <span style={{ color: "#0077ed" }}>
                                                                                    Xem thêm
                                                                              </span>
                                                                        </p>
                                                                        <div className='rate'>
                                                                              <img
                                                                                    src={star}
                                                                                    alt='rate-star'
                                                                                    className='rate-star'
                                                                              ></img>
                                                                              <img
                                                                                    src={star}
                                                                                    alt='rate-star'
                                                                                    className='rate-star'
                                                                              ></img>
                                                                              <img
                                                                                    src={star}
                                                                                    alt='rate-star'
                                                                                    className='rate-star'
                                                                              ></img>
                                                                              <img
                                                                                    src={star}
                                                                                    alt='rate-star'
                                                                                    className='rate-star'
                                                                              ></img>
                                                                              <img
                                                                                    src={star}
                                                                                    alt='rate-star'
                                                                                    className='rate-star'
                                                                              ></img>
                                                                        </div>
                                                                  </div>
                                                                  <hr
                                                                        style={{
                                                                              color: "black",
                                                                              width: "100%%",
                                                                              height: "1px",
                                                                              margin: "4px",
                                                                        }}
                                                                  ></hr>
                                                                  <div className='price-buy'>
                                                                        <p className='price'>Giá : xx.xxx đ</p>
                                                                        <button className='btn-buy'>Mua ngay</button>
                                                                        <button className='btn-buy'>
                                                                              Thêm vào giỏ
                                                                        </button>
                                                                  </div>
                                                            </div>
                                                            <div className='item-product'>
                                                                  <img
                                                                        src={comtam1}
                                                                        alt='PC'
                                                                        className='image-product'
                                                                  ></img>
                                                                  <div className='name-product'>ISMART PLAY 9 / 9S</div>
                                                                  <div className='price-buy'>
                                                                        <p className='price'>Giá : xx.xxx.xxx đ</p>
                                                                        <button className='btn-buy'>Mua</button>
                                                                  </div>
                                                            </div>
                                                            <div className='item-product'>
                                                                  <img
                                                                        src={comtam1}
                                                                        alt='PC'
                                                                        className='image-product'
                                                                  ></img>
                                                                  <div className='name-product'>ISMART PLAY 9 / 9S</div>
                                                                  <div className='price-buy'>
                                                                        <p className='price'>Giá : xx.xxx.xxx đ</p>
                                                                        <button className='btn-buy'>Mua</button>
                                                                  </div>
                                                            </div>
                                                            <div className='item-product'>
                                                                  <img
                                                                        src={comtam1}
                                                                        alt='PC'
                                                                        className='image-product'
                                                                  ></img>
                                                                  <div className='name-product'>ISMART PLAY 9 / 9S</div>
                                                                  <div className='price-buy'>
                                                                        <p className='price'>Giá : xx.xxx.xxx đ</p>
                                                                        <button className='btn-buy'>Mua</button>
                                                                  </div>
                                                            </div>
                                                      </Slider>
                                                </div>
                                          </div>
                                          <div className='tab-pane'>2</div>
                                          <div className='tab-pane'>3</div>
                                          <div className='tab-pane'>4</div>
                                          <div className='tab-pane'>5</div>
                                          <div className='tab-pane'>6</div>
                                          <div className='tab-pane'>7</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Banner);
