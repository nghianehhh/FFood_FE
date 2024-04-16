/** @format */

import React, { Component } from "react";
import { Switch } from "antd";
import { push } from "connected-react-router";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";
import "./HomeShop.scss";
import HeaderSystem from "../../../components/HeaderSystem/HeaderSystem";
import { Fragment } from "react";
class HomeShop extends Component {
      constructor(props) {
            super(props);
            this.state = {};
      }
      componentDidMount() {
            console.log("this.props.userInfo.data.user.roleId: ", this.props.userInfo.data.user.roleId);
            if (this.props.userInfo.data.user.roleId !== "SHOP") {
                  const { navigate } = this.props;
                  navigate("/page-not-found");
            }
      }
      render() {
            console.log("arrUsers: ", this.props.userInfo);
            return (
                  <Fragment>
                        <div className='shop-container-infor mx-4'>
                              <div className='wrap-container mx-4'>
                                    <div className='attraction'>
                                          <div className='avatar-shop'>
                                                <div className='avatar'>avatar shop</div>
                                                <div className='update-new-avatar-shop'>Cập nhật ảnh mới</div>
                                          </div>
                                          <div className='desc-attract'>Mô tả shop nhằm thu hút khách hàng</div>
                                    </div>
                                    <div className='more-infor-shop'>
                                          <div className='detail-infor-shop'>
                                                <div className='wrap-more-image-desc'>
                                                      <div className='more-image-shop'>
                                                            hình ảnh hoặc null thì chỉ có mô tả, tuy nhiên khuyến cáo có
                                                            ảnh, nêu ảnh null thì lấy 1 hình ảnh trắng thay thế
                                                      </div>
                                                      <div className='more-desc-shop'>
                                                            Mô tả cho bức ảnh đó, ví dụ không gian quán, bàn ghế, phục
                                                            vụ ...
                                                      </div>
                                                </div>
                                                <div className='wrap-button-remove-update'>
                                                      <button className='remove-infor-shop'>
                                                            nút để xóa thông tin này
                                                      </button>
                                                      <button className='update-infor-shop'>
                                                            nút để chỉnh sửa thông tin này
                                                      </button>
                                                </div>
                                          </div>
                                    </div>
                                    <button className='btn-add-more-infor'>
                                          thêm thông tin cho shop, có nút để thêm
                                    </button>
                                    <div style={{ height: "300px" }}>Nothing</div>
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
      };
};

const mapDispatchToProps = (dispatch) => {
      return {
            navigate: (path) => dispatch(push(path)),
      };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeShop);
