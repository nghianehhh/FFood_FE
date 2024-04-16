/** @format */

import React, { Component } from "react";
import { Switch } from "antd";
import { push } from "connected-react-router";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";

import { Fragment } from "react";
class RegisterJob extends Component {
      constructor(props) {
            super(props);
            this.state = {};
      }
      render() {
            return (
                  <Fragment>
                        <div className='users-container mx-4'>
                              <div className="switch-page mt-3">
                                    <button className="">
                                          Đăng kí chuyển đồ ăn
                                    </button>
                                    <button>
                                          Đăng kí giao đồ ăn
                                    </button>
                              </div>

                              <div className="d-flex">
                                    <div className="warning-register w-50">
                                          <div className="d-block bg-white p-3 my-3">
                                                <p>{"Nguyễn Văn A"}</p>
                                                <p>Vui lòng chọn khu vực <span className="fw-semibold">{"Khu A"}</span></p>
                                                <p>Tuần làm việc:</p>
                                          </div>
                                          <div className="d-block border border-dark-subtle p-3">
                                                <p className="fw-semibold">Shipper vui lòng tuân thủ các quy định đăng kí công việc sau đây:</p>
                                                <p>- Shipper đã chọn công việc bắt buộc phải đi làm vào ngày đăng kí nếu không...</p>
                                          </div>
                                    </div>
                                    <div className="table-register w-50 d-flex justify-content-center">
                                          <table className="w-75 border border-dark-subtle">
                                                <thead  className="text-center">
                                                      <td></td>
                                                      <td>Thứ 2</td>
                                                      <td>Thứ 3</td>
                                                      <td>Thứ 4</td>
                                                      <td>Thứ 5</td>
                                                      <td>Thứ 6</td>
                                                      <td>Thứ 7</td>
                                                      <td>Chủ Nhật</td>
                                                </thead>
                                                <tbody>
                                                      <tr className="text-center">
                                                            <td>Ca 1</td>
                                                            <td>x</td>
                                                            <td>x</td>
                                                            <td>x</td>
                                                            <td>x</td>
                                                            <td>x</td>
                                                            <td>x</td>
                                                            <td>x</td>
                                                      </tr>
                                                      <tr  className="text-center">
                                                      <td>Ca 2</td>
                                                            <td>x</td>
                                                            <td>x</td>
                                                            <td>x</td>
                                                            <td>x</td>
                                                            <td>x</td>
                                                            <td>x</td>
                                                            <td>x</td>
                                                      </tr>
                                                      <tr className="text-center">
                                                      <td>Ca 3</td>
                                                            <td>x</td>
                                                            <td>x</td>
                                                            <td>x</td>
                                                            <td>x</td>
                                                            <td>x</td>
                                                            <td>x</td>
                                                            <td>x</td>
                                                      </tr>
                                                      <tr className="text-center">
                                                      <td>Ca 4</td>
                                                            <td>x</td>
                                                            <td>x</td>
                                                            <td>x</td>
                                                            <td>x</td>
                                                            <td>x</td>
                                                            <td>x</td>
                                                            <td>x</td>
                                                      </tr>
                                                </tbody>
                                          </table>
                                    </div>
                              </div>
                        </div>

                        <div className="d-flex bg-info mt-3">
                              <p className="flex-grow-1">Vui lòng xem kĩ trước khi bấm xác nhận!</p>
                              <button className="m-2">Xác nhận</button>
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

export default connect(mapStateToProps, mapDispatchToProps)(RegisterJob);
