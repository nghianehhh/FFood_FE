/** @format */

import React, { Component, useState } from "react";

import { Switch } from "antd";
import { push } from "connected-react-router";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";

import Modal from 'react-bootstrap/Modal';
import comtam from "../../../../assets/comtam/comtam1.jpg"

import "../../ManageOrder/MangeOrder.scss";

import { Fragment } from "react";
// class ManageOrdered extends Component {
function ManageOrdered() {
    const [show, setShow] = useState(false);
    const [infor, setInfor] = useState("");

    const handleClose = () => setShow(false);
    const handleShow = (i) => {
        setShow(true);
        // console.log(i)
        setInfor(i);
    }

    const [orderItems,setOrderItems] = useState([1,2,3,4,5,6,7,8,9,10,11,12])

    // render() {
        return (
            <Fragment>
                <div className='wrap-container-product'>
                    <div className='row-orders'>
                        {
                            orderItems.map((orderItem) => 
                                <div className='col-order'>
                                    <div className="user-order fs-5 fw-semibold pt-1">
                                        <p className="pt-1">{"Người đặt"}</p>
                                    </div>

                                    <div className="img-order">
                                        <img src={comtam} alt=""/>
                                        <div className="order-infor">
                                            <p className="fw-semibold fs-5">{"Cơm gà chiên nước mắm"}</p>
                                            <p>Phần: {"30.000"} VNĐ</p>
                                            <p>Số lượng: x{"3"}</p>
                                        </div>
                                    </div>

                                    <div className="func-order">
                                        <button className="bg-danger bg-gradient">
                                            Giao hàng
                                        </button>

                                        <button className="bg-primary bg-gradient" onClick={(e) => handleShow(orderItem, e)}>
                                            Thông tin
                                        </button>
                                    </div>
                                </div>
                            )
                        }
                    </div>

                    <Modal size="lg" show={show} onHide={handleClose} animation={false} backdrop="static" keyboard={false}>
                        <div className="modal-header">
                            {/* <div className="d-flex"> */}
                                {/* <button className="btn-close ml-1"  onClick={handleClose}/> */}
                                <button className="btn-close"  onClick={handleClose}></button>
                                {/* <p className="h4 m-0 p-0">Modal title</p> */}
                            {/* </div> */}
                        </div>
                        <Modal.Body>
                            <div className="d-flex">
                                <img className="w-50" src={comtam} alt=""/>
                                <div className="w-50 px-3">
                                    {/* <p className="text-center">{infor}</p> */}
                                    <p className="fw-semibold fs-5">{"Cơm gà chiên nước mắm"}</p>
                                    <p>Phần: {"30.000"} VNĐ</p>
                                    <p>Số lượng: x{"3"}</p>

                                    <p className="fw-semibold fs-5">{"Người mua A"}</p>
                                    <p>Ghi chú: {"Giao KTX khu B 12h, cơm thêm"}</p>
                                    <p>Số điện thoại: {"0233-2333"}</p>

                                    <p className="fw-semibold fs-5">{"Shipper A"}</p>
                                    <p>Số điện thoại: {"0233-2333"}</p>
                                </div>
                            </div>
                        </Modal.Body>
                        <Modal.Footer>
                            <button className="btn btn-primary px-3">Xem khách hàng</button>
                            <button className="btn btn-primary px-3">Xem Shipper</button>
                        </Modal.Footer>
                    </Modal>

                    

                    {/* <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                ...
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary">Save changes</button>
                            </div>
                            </div>
                        </div>
                    </div> */}
                </div>
            </Fragment>
        );
    // }
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

export default connect(mapStateToProps, mapDispatchToProps)(ManageOrdered);
