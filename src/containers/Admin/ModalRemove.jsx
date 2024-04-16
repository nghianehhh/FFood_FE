/** @format */

import { Modal } from "antd";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";

const ModalRemove = ({ isModalRemoveOpen, handleCancelRemove, handleRemove }) => {
      console.log(isModalRemoveOpen);
      return (
            <Modal
                  open={isModalRemoveOpen}
                  onCancel={handleCancelRemove}
                  width='450px'
                  footer={[
                        <button
                              key='back'
                              onClick={handleCancelRemove}
                              className='rounded-lg mx-3'
                              style={{
                                    backgroundColor: "#059669",
                                    border: "none",
                                    borderRadius: "8px",
                                    height: "50px",
                              }}
                        >
                              <p className='py-3 px-4 font-semibold text-white'>Hủy</p>
                        </button>,
                        <button
                              key='submit'
                              onClick={handleRemove}
                              className='rounded-lg mx-3'
                              style={{
                                    backgroundColor: "#DF2910",
                                    border: "none",
                                    borderRadius: "12px",
                                    height: "50px",
                              }}
                        >
                              <p className='py-3 mx-4 font-semibold text-white'>Xóa</p>
                        </button>,
                  ]}
            >
                  <div className='modal-remove' style={{ display: "flex" }}>
                        <FontAwesomeIcon
                              icon={icon({
                                    name: "triangle-exclamation",
                              })}
                              style={{ fontSize: "1.4rem", color: "#ffd600", marginRight: "8px" }}
                        />
                        <div>
                              <p style={{ fontSize: "14px", fontWeight: 550 }}>Bạn có chắc chắn muốn xóa không?</p>
                              <p style={{ fontSize: "14px", color: "#626262" }}>
                                    Sau khi xóa không thể khôi phục dữ liệu!
                              </p>
                        </div>
                  </div>
            </Modal>
      );
};

export default ModalRemove;
