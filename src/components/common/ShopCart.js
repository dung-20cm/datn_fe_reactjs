import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { Provider, useDispatch, useSelector } from "react-redux";
import {
  decrementQuantity,
  incrementQuantity,
  removeItem,
  removeAll,
} from "../../store/cartSlice";
import { store } from "../../store/store";
import authApi from "../../api/AuthService";
import cartApi from "../../api/CartService";
import { useTheme } from "../utils/useTheme";
import { isWideScreen } from "../../helpers/screen";

function ShopCart() {
  const cart = useSelector((state) => state.cartReduce.listCart);
  let price_total = 0;
  const dispatch = useDispatch();
  const [isShow, setIsShow] = useState(false);
  const [alert, setAlert] = useState(false);
  const [userLogin, setUserLogin] = useState(null);

  function getTotal() {
    cart.map((item) => {
      price_total += item.quantity * item.pro_price;
    });
    console.log("Total = ", price_total);
    return price_total.toLocaleString();
  }

  const fetchUserLogin = async () => {
    const user = await authApi.getProfile();
    if (user.status === 200) {
      setUserLogin(user.data);
    }
    console.log("---------------- user: ", user);
  };

  useEffect(() => {
    fetchUserLogin().then((r) => {});
  }, []);

  const Order = async () => {
    let order = {};
    let transactions = [];
    console.log("------------- cart: ", cart);
    let total = 0;
    cart.forEach((item, index) => {
      transactions.push({
        id: item.id,
        name: item.pro_name,
        quantity: item.quantity,
        discount_type: "money",
        discount_value: 0,
        price: item.pro_price,
        total_price: item.pro_price,
      });

      total += item.pro_price * item.quantity;
    });

    const getUser = await authApi.getProfile();
    console.log("----------- getUser: ", getUser);
    if (getUser.status === 200) {
      order.name = getUser.data?.name;
      order.phone = getUser.data?.phone;
      order.address = getUser.data?.address;
    }

    order.products = transactions;
    order.note = "abc";
    order.total_price = total;
    console.log("order -----------: ", order);

    const createCart = await cartApi.createTransaction(order);
    if (createCart.status === 200) {
      setIsShow(true);
      dispatch(removeAll());
    } else {
      setAlert(true);
    }
    if (createCart.status === 500 && createCart.message === "error") {
      console.log("Error create!!!");
    }
  };

  // const navigate = useNavigate();

  const handleClose = () => {
    setIsShow(false);
  };

  const theme = useTheme();

  return (
    <Provider store={store}>
      <div className={`sc-container ${theme}`}>
        <div className="main-title">
          <h4>Gi??? h??ng</h4>
        </div>
        <div className="content">
          {isWideScreen() ? (
            <div className="left-content">
              <div className="left-content-header">
                <label>
                  <span>S???n ph???m</span>
                </label>
                <span>????n gi??</span>
                <span>S??? l?????ng</span>
                <span>Th??nh ti???n</span>
                <span>
                  <img
                    className="delete-icon"
                    onClick={() => dispatch(removeAll())}
                    src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/trash.svg"
                    alt="deleted"
                  />
                </span>
              </div>
              <div className="left-content-container">
                <div className="list-cart">
                  {cart ? (
                    cart.map((item, index) => (
                      <>
                        <div className="product-item" key={index}>
                          <div className="row">
                            <div className="col1">
                              <div className="product-detail">
                                <Link to={`/${item.pro_slug}/${item.id}`}>
                                  <img
                                    alt="sda"
                                    src={item.pro_avatar}
                                    width="80"
                                    height="80"
                                  />
                                </Link>
                                <div className="product-content">
                                  <Link
                                    to={`/${item.pro_slug}/${item.id}`}
                                    className="product-name"
                                  >
                                    {item.pro_name}
                                  </Link>
                                </div>
                              </div>
                            </div>
                            <div className="col2">
                              <span>{item.pro_price.toLocaleString()} ???</span>
                            </div>
                            <div className="col3">
                              <div className="count">
                                <div className="group-input">
                                  <button
                                    disabled={`${
                                      item.quantity < 2 ? "{true}" : ""
                                    }`}
                                    className={`${
                                      item.quantity < 2 ? "disable" : "enable"
                                    }`}
                                    onClick={() =>
                                      dispatch(decrementQuantity(item))
                                    }
                                  >
                                    <img
                                      alt="/"
                                      src="https://frontend.tikicdn.com/_desktop-next/static/img/pdp_revamp_v2/icons-remove.svg"
                                      width="20"
                                      height="20"
                                    />
                                  </button>
                                  <input
                                    type="text"
                                    value={item.quantity}
                                    className="input"
                                    readOnly
                                  ></input>
                                  <button
                                    className="enable"
                                    onClick={() =>
                                      dispatch(incrementQuantity(item))
                                    }
                                  >
                                    <img
                                      alt="/"
                                      src="https://frontend.tikicdn.com/_desktop-next/static/img/pdp_revamp_v2/icons-add.svg"
                                      width="20"
                                      height="20"
                                    />
                                  </button>
                                </div>
                              </div>
                            </div>
                            <div className="col4">
                              <span>
                                {(
                                  item.pro_price * item.quantity
                                ).toLocaleString()}{" "}
                                ???
                              </span>
                            </div>
                            <div className="col5">
                              <span>
                                <img
                                  src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/trash.svg"
                                  alt="deleted"
                                  onClick={() => dispatch(removeItem(item))}
                                />
                              </span>
                            </div>
                          </div>
                        </div>
                      </>
                    ))
                  ) : (
                    <></>
                  )}
                </div>
              </div>
            </div>
          ) : (
            <div className="left-content mobile">
              <div className="left-content-container">
                <div className="list-cart">
                  {cart ? (
                    cart.map((item, index) => (
                      <>
                        <div className="product-item" key={index}>
                          <div
                            style={{
                              display: "flex",
                            }}
                          >
                            <Link to={`/${item.pro_slug}/${item.id}`}>
                              <div
                                className="product-image"
                                style={{ marginRight: 15 }}
                              >
                                <img
                                  alt="sda"
                                  src={item.pro_avatar}
                                  width="80"
                                  height="80"
                                  style={{ width: "100%", marginRight: 15 }}
                                />
                              </div>
                            </Link>
                            <div>
                              <Link to={`/${item.pro_slug}/${item.id}`}>
                                <div
                                  className="product-name"
                                  style={{
                                    marginBottom: 5,
                                    color: "black",
                                    fontSize: 13,
                                  }}
                                >
                                  {item.pro_name}
                                </div>
                              </Link>
                              <div className="product-price">
                                <span>{item.pro_price.toLocaleString()} ???</span>
                              </div>
                            </div>
                          </div>
                          <div
                            className="product-count"
                            style={{
                              marginTop: 10,
                              display: "flex",
                              alignItems: "center",
                            }}
                          >
                            <span style={{ marginRight: 35 }}>S??? l?????ng</span>
                            <div className="count" style={{ width: 250 }}>
                              <div className="group-input">
                                <button
                                  disabled={`${
                                    item.quantity < 2 ? "{true}" : ""
                                  }`}
                                  className={`${
                                    item.quantity < 2 ? "disable" : "enable"
                                  }`}
                                  onClick={() =>
                                    dispatch(decrementQuantity(item))
                                  }
                                >
                                  <img
                                    alt="/"
                                    src="https://frontend.tikicdn.com/_desktop-next/static/img/pdp_revamp_v2/icons-remove.svg"
                                    width="20"
                                    height="20"
                                  />
                                </button>
                                <input
                                  type="text"
                                  value={item.quantity}
                                  className="input"
                                  readOnly
                                  style={{
                                    width: 36,
                                    height: 23,
                                    textAlign: "center",
                                  }}
                                ></input>
                                <button
                                  className="enable"
                                  onClick={() =>
                                    dispatch(incrementQuantity(item))
                                  }
                                >
                                  <img
                                    alt="/"
                                    src="https://frontend.tikicdn.com/_desktop-next/static/img/pdp_revamp_v2/icons-add.svg"
                                    width="20"
                                    height="20"
                                  />
                                </button>
                              </div>
                            </div>
                          </div>

                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                            }}
                          >
                            <div
                              className="product-quantity"
                              style={{ marginTop: 10 }}
                            >
                              <span style={{ marginRight: 25 }}>
                                Th??nh ti???n
                              </span>
                              <span>
                                {(
                                  item.pro_price * item.quantity
                                ).toLocaleString()}{" "}
                                ???
                              </span>
                            </div>
                            <div className="product-removeProduct">
                              <span>
                                <img
                                  src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/trash.svg"
                                  alt="deleted"
                                  onClick={() => dispatch(removeItem(item))}
                                />
                              </span>
                            </div>
                          </div>
                        </div>
                      </>
                    ))
                  ) : (
                    <></>
                  )}
                </div>
              </div>
            </div>
          )}

          <div className="right-content">
            <div className="right-inner">
              <div className="delivery">
                <div className="delivery-container">
                  <div className="header">
                    <h3>Giao t???i</h3>
                    <Link to="/cart" className="link">
                      Thay ?????i
                    </Link>
                  </div>
                  <div className="info">
                    <p>{userLogin?.name}</p>
                    <i />
                    {/*<p>491515</p>*/}
                  </div>
                  <div className="address">{userLogin?.address}</div>
                </div>
              </div>
              <div className="calculate-price">
                <ul>
                  <li>
                    <div className="price-text">T???m t??nh</div>
                    <div className="price-value">0 ??</div>
                  </li>
                  <li>
                    <div className="price-text">Gi???m gi??</div>
                    <div className="price-value">0 ??</div>
                  </li>
                </ul>
                <div className="price-total">
                  <span>T???ng ti???n</span>
                  <div className="price-content">
                    <span>{getTotal() + " ??"}</span>
                    <span className="price-note">(???? bao g???m VAT n???u c??)</span>
                  </div>
                </div>
              </div>
              <button className="btn-buy" onClick={Order}>
                ?????t h??ng
              </button>
              {isShow ? (
                <div className="alert-cart">
                  <div className="alert-cart-container">
                    <div className="alert-cart-content">
                      <div>
                        <img
                          width="20"
                          height="20"
                          alt="sc"
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL3KoNpySX6KZDN0GJtebbCnuYtu2FIClZGA&usqp=CAU"
                        />
                        <h4>?????t h??ng th??nh c??ng</h4>
                      </div>
                      <button className="button-close1" onClick={handleClose}>
                        ????ng
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <>
                  {alert ? (
                    <div className="alert-cart">
                      <div className="alert-cart-container">
                        <div className="alert-cart-content">
                          <img
                            width="20"
                            height="20"
                            alt="sc"
                            src="https://cdn-icons-png.flaticon.com/512/6659/6659895.png"
                          />
                          <h4>?????t h??ng th???t b???i</h4>
                          <button
                            className="button-close2"
                            onClick={() => {
                              setIsShow(false);
                              setAlert(false);
                            }}
                          >
                            ????ng
                          </button>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <></>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default ShopCart;
