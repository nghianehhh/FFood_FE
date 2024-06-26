/** @format */

import React, { Component } from "react";
// import { FormattedMessage } from 'react-intl';
import _ from "lodash";
import * as actions from "../../../store/actions";

import { connect } from "react-redux";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
class ModalEditUser extends Component {
      constructor(props) {
            super(props);
            this.state = {
                  id: -1,
                  email: "",
                  password: "",
                  firstName: "",
                  lastName: "",
                  phoneNumber: "",
                  address: "",
                  access_token: this.props.userInfo.data.access_token,
            };
      }

      componentDidMount() {
            let user = this.props.currentUser;
            if (user && !_.isEmpty(user)) {
                  this.setState({
                        id: user.id,
                        email: user.email,
                        password: "123",
                        firstName: user.firstName,
                        lastName: user.lastName,
                        phoneNumber: user.phoneNumber,
                        address: user.address,
                  });
            }
      }

      toggle = () => {
            this.props.toggleFromParent();
      };

      handleOnChangeInput = (e, type) => {
            let copyState = { ...this.state };
            copyState[type] = e.target.value;
            this.setState({
                  ...copyState,
            });
      };

      checkValidateInput = () => {
            let isValid = true;
            let arrInput = ["email", "password", "firstName", "lastName", "phoneNumber", "address"];
            for (let i = 0; i < arrInput.length; i++) {
                  if (!this.state[arrInput[i]]) {
                        isValid = false;
                        alert("please enter: " + arrInput[i]);
                        break;
                  }
            }
            return isValid;
      };

      handleEditUser = async () => {
            let isValid = this.checkValidateInput();
            if (isValid) {
                  await this.props.updateUser(this.state, this.state.access_token);
                  this.props.toggleFromParent();
            }
      };

      render() {
            return (
                  <div>
                        <Modal
                              isOpen={this.props.isOpen}
                              toggle={() => this.toggle()}
                              className='modal-user-container'
                              size='lg'
                        >
                              <ModalHeader toggle={() => this.toggle()}>
                                    <div>
                                          <h3
                                                style={{
                                                      margin: "0px",
                                                      textAlign: "center",
                                                      textTransform: "uppercase",
                                                }}
                                          >
                                                Edit User
                                          </h3>
                                    </div>
                              </ModalHeader>
                              <ModalBody>
                                    <div className='input-container'>
                                          <div className='form-group'>
                                                <label htmlFor='firstName'>First name: </label>
                                                <input
                                                      type='text'
                                                      onChange={(event) => {
                                                            this.handleOnChangeInput(event, "firstName");
                                                      }}
                                                      placeholder='First name enter...'
                                                      value={this.state.firstName}
                                                      name='fisrtName'
                                                ></input>
                                          </div>
                                          <div className='form-group'>
                                                <label htmlFor='lastName'>Last name: </label>
                                                <input
                                                      type='text'
                                                      onChange={(event) => {
                                                            this.handleOnChangeInput(event, "lastName");
                                                      }}
                                                      placeholder='Last name enter...'
                                                      value={this.state.lastName}
                                                      name='lastName'
                                                ></input>
                                          </div>
                                    </div>
                                    <div className='input-container'>
                                          <div className='form-group'>
                                                <label htmlFor='phoneNumber'>Phone number: </label>
                                                <input
                                                      type='text'
                                                      onChange={(event) => {
                                                            this.handleOnChangeInput(event, "phoneNumber");
                                                      }}
                                                      placeholder='Phone number enter...'
                                                      value={this.state.phoneNumber}
                                                      name='phonenumber'
                                                ></input>
                                          </div>
                                          <div className='form-group'>
                                                <label htmlFor='address'>Address: </label>
                                                <input
                                                      type='text'
                                                      onChange={(event) => {
                                                            this.handleOnChangeInput(event, "address");
                                                      }}
                                                      placeholder='address enter...'
                                                      value={this.state.address}
                                                      name='address'
                                                ></input>
                                          </div>
                                    </div>
                              </ModalBody>
                              <ModalFooter>
                                    <Button
                                          color='primary'
                                          className='create-btn'
                                          onClick={() => this.handleEditUser()}
                                    >
                                          Save changes
                                    </Button>
                                    <Button color='secondary' className='cancel-btn' onClick={() => this.toggle()}>
                                          Cancel
                                    </Button>
                              </ModalFooter>
                        </Modal>
                  </div>
            );
      }
}

const mapStateToProps = (state) => {
      return {
            userInfo: state.user.userInfo,
      };
};

const mapDispatchToProps = (dispatch) => {
      return {
            updateUser: (user, access_token) => dispatch(actions.updateUserStart(user, access_token)),
      };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalEditUser);
