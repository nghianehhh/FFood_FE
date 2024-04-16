/** @format */

import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { ConnectedRouter as Router } from "connected-react-router";
import { history } from "../redux";
import { ToastContainer } from "react-toastify";
import { userIsAuthenticated, userIsNotAuthenticated } from "../hoc/authentication";
import { path } from "../utils";
import ScrollToTop from "../components/ScrollToTop";
import Product from "../components/Product/Product";

//////////////////////
import Home from "../containers/Pages/Home";
import RicePage from "../containers/Pages/RicePage/RicePage";
import DrinkPage from "../containers/Pages/DrinkPage/DrinkPage";
import FruitPage from "../containers/Pages/FruitPage/FruitPage";
import HotpotPage from "../containers/Pages/HotpotPage/HotpotPage";
import VegetablePage from "../containers/Pages/VegetablePage/VegetablePage";
import HistoryOrder from "../components/HistoryOrder/HistoryOrder";
import CustomTable from "../containers/Pages/CustomTable/CustomTable";
import Account from "../containers/Pages/Account/Account";
import Password from "../containers/Pages/Password/Password";

//Begin Component management of admin
import Admin from "../containers/Admin/Admin";
//End Component management of admin
//----------------------------------------------------------------
//Begin Component management of Shop
import Shop from "../containers/Shop/Shop";
//End Component management of Shop
//----------------------------------------------------------------
//Begin Component management of Shop
import Shipper from "../containers/Shipper/Shipper";
//End Component management of Shop
import PageNotFound from "../containers/Pages/PageNotFound";
import Login from "../containers/Auth/Login";
import CustomScrollbars from "../components/CustomScrollbars";
import ShoppingCart from "../containers/Pages/ShoppingCart/ShoppingCart";

class App extends Component {
      handlePersistorState = () => {
            const { persistor } = this.props;
            let { bootstrapped } = persistor.getState();
            if (bootstrapped) {
                  if (this.props.onBeforeLift) {
                        Promise.resolve(this.props.onBeforeLift())
                              .then(() => this.setState({ bootstrapped: true }))
                              .catch(() => this.setState({ bootstrapped: true }));
                  } else {
                        this.setState({ bootstrapped: true });
                  }
            }
      };

      componentDidMount() {
            this.handlePersistorState();
      }

      render() {
            console.log(123);
            return (
                  <Fragment>
                        <Router history={history}>
                              <div className='main-container'>
                                    {/* {this.props.isLoggedIn && <Header />} */}

                                    <div className='content-container'>
                                          <CustomScrollbars style={{ height: "100vh" }}>
                                                <ScrollToTop />
                                                <Switch>
                                                      <Route path={path.HOME} exact component={Home} />
                                                      {/*page  khu A */}
                                                      <Route path={path.RICEPAGEA} exact component={RicePage} />
                                                      <Route path={path.DRINKPAGEA} exact component={DrinkPage} />
                                                      <Route
                                                            path={path.VEGETABLEPAGEA}
                                                            exact
                                                            component={VegetablePage}
                                                      />
                                                      <Route path={path.FRUITPAGEA} exact component={FruitPage} />
                                                      <Route path={path.HOTPOTPAGEA} exact component={HotpotPage} />
                                                      {/* Page khu B */}
                                                      <Route path={path.RICEPAGEB} exact component={RicePage} />
                                                      <Route path={path.DRINKPAGEB} exact component={DrinkPage} />
                                                      <Route
                                                            path={path.VEGETABLEPAGEB}
                                                            exact
                                                            component={VegetablePage}
                                                      />
                                                      <Route path={path.FRUITPAGEB} exact component={FruitPage} />
                                                      <Route path={path.HOTPOTPAGEB} exact component={HotpotPage} />
                                                      {/* ------------------------------- */}

                                                      <Route path={path.HISTORYORDER} exact component={HistoryOrder} />
                                                      <Route path={path.ACCOUNT} exact component={Account} />
                                                      <Route path={path.PASSWORD} exact component={Password} />
                                                      {/* ------------------------------- */}
                                                      <Route
                                                            path={path.LOGIN}
                                                            component={userIsNotAuthenticated(Login)}
                                                      />
                                                      {/* ------------------------------- */}
                                                      <Route path={"/admin"} component={userIsAuthenticated(Admin)} />
                                                      {/* ------------------------------- */}
                                                      <Route path={"/shop"} component={userIsAuthenticated(Shop)} />
                                                      {/* ------------------------------- */}
                                                      <Route
                                                            path={"/shipper"}
                                                            component={userIsAuthenticated(Shipper)}
                                                      />
                                                      {/* ------------------------------- */}
                                                      <Route path={"/custom-table"} exact component={CustomTable} />
                                                      {/* router page not found */}
                                                      <Route path={"/page-not-found"} exact component={PageNotFound} />
                                                      <Route path={"/product"} exact component={Product} />
                                                      <Route path={"/shopping-cart"} exact component={ShoppingCart} />
                                                      <Route path={"/shopping-cart"} exact component={ShoppingCart} />
                                                </Switch>
                                          </CustomScrollbars>
                                    </div>

                                    <ToastContainer
                                          // className="toast-container"
                                          // toastClassName="toast-item"
                                          // bodyClassName="toast-item-body"
                                          // autoClose={false}
                                          // hideProgressBar={true}
                                          // pauseOnHover={false}
                                          // pauseOnFocusLoss={true}
                                          // closeOnClick={false}
                                          // draggable={false}
                                          // closeButton={<CustomToastCloseButton />}
                                          position='bottom-right'
                                          autoClose={5000}
                                          hideProgressBar={false}
                                          newsOpTop={false}
                                          closeOnClick
                                          rtl={false}
                                          pauseOnFocusLoss
                                          draggable
                                          pauseOnHover
                                    />
                              </div>
                        </Router>
                  </Fragment>
            );
      }
}

const mapStateToProps = (state) => {
      return {
            started: state.app.started,
            isLoggedIn: state.user.isLoggedIn,
      };
};

const mapDispatchToProps = (dispatch) => {
      return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
