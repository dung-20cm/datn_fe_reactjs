import { Link, useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { isWideScreen } from "../../../helpers/screen";
import React, { useState, useEffect, useRef } from "react";
import { addToCart } from "../../../store/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import Skeleton from "react-loading-skeleton";
import Login from "../../../components/login/LogIn";
import Popup from "reactjs-popup";

function Product({ products, pro_price, loading }) {
  let { id } = useParams();
  const [count, setCount] = useState(1);
  const dispatch = useDispatch();
  // const dataToken = useSelector((state) => state.authReduce.token);
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    setAdded(!added);
    addToCartRedux();
  };

  const addToCartRedux = async () => {
    // if (!dataToken || !dataToken.accessToken) {
    //   alert(" Đăng nhập để có thể mua hàng");
    //   return;
    // }
    products.quantity = count;
    dispatch(addToCart(products));
    setCount(1);
    console.log(products);
  };

  useEffect(() => {
    setCount(1);
  }, [id]);

  let price = pro_price?.replace(/,/g, "");
  console.log("countefajkjksh192349803", count);
  console.log(
    "price1SP99999999999",

    Number(price)
  );
  return (
    <>
      {loading === true ? (
        <div className="product-detail">
          <Skeleton height={400} width={500} style={{ margin: "10px" }} />
          <div>
            <Skeleton height={30} width={700} style={{ marginTop: "10px" }} />
            <Skeleton height={30} width={400} style={{ marginTop: "10px" }} />
            <Skeleton height={30} width={300} style={{ marginTop: "10px" }} />
          </div>
        </div>
      ) : (
        <div className="product-detail">
          <div className="product-img">
            <>
              <div className="group-img">
                {<img alt="/" src={products?.pro_avatar} /> || (
                  <Skeleton height={100} />
                )}
              </div>
              <div className="share-product">
                <div className="share-text">Chia sẻ:</div>
                <img
                  alt="/"
                  src="https://frontend.tikicdn.com/_desktop-next/static/img/pdp_revamp_v2/social-facebook.svg"
                />
                <img
                  alt="/"
                  src="https://frontend.tikicdn.com/_desktop-next/static/img/pdp_revamp_v2/social-messenger.svg"
                />
                <img
                  alt="/"
                  src="https://frontend.tikicdn.com/_desktop-next/static/img/pdp_revamp_v2/social-pinterest.svg"
                />
                <img
                  alt="/"
                  src="https://frontend.tikicdn.com/_desktop-next/static/img/pdp_revamp_v2/social-twitter.svg"
                />
                <img
                  alt="/"
                  src="https://frontend.tikicdn.com/_desktop-next/static/img/pdp_revamp_v2/social-copy.svg"
                />
              </div>
            </>
          </div>

          <div className="seperate" />

          <div className="product-content">
            <div className="content-header">
              <div className="product-brand">
                <span>
                  <h6>Thương hiệu:</h6>
                  <Link to=""> Hasaki</Link>
                </span>
              </div>

              <h1 className="product-title">
                {products?.pro_name || <Skeleton count={1} />}
              </h1>
              <div className="below-title">
                <div className="below-rate">
                  <div className="star-on">
                    &#9733;&#9733;&#9733;&#9733;&#9733;
                  </div>
                  <Link to="*">(Xem 11 đánh giá)</Link>
                  <div className="below-seperate" />
                  <div className="sold">Đã bán 65</div>
                </div>
              </div>
            </div>

            <div className="content-body">
              <div className="content-body-left">
                <div className="price-and-icon">
                  <div className="price-">
                    <div className="current-price">
                      {
                        // pro_price
                        (price * count).toLocaleString() || (
                          <Skeleton count={1} />
                        )
                      }{" "}
                      ₫
                    </div>
                    <div className="last-price">
                      {products?.pro_discount_value !== 0 ? "20.000 đ" : null}
                    </div>
                    <div className="discount-rate">
                      {products?.pro_discount_value !== 0
                        ? products?.pro_discount_value + "%"
                        : null}
                    </div>
                  </div>
                </div>

                <div className="addtocart">
                  {isWideScreen() ? (
                    <div className="count">
                      <p>Số Lượng</p>
                      <div className="group-input">
                        <button
                          disabled={`${count < 2 ? "{true}" : ""}`}
                          className={`${count < 2 ? "disable" : "enable"}`}
                          onClick={() => setCount(count - 1)}
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
                          value={count}
                          className="input"
                          readOnly
                        ></input>
                        <button
                          className="enable"
                          onClick={() => setCount(count + 1)}
                        >
                          <img
                            alt="/"
                            src="https://frontend.tikicdn.com/_desktop-next/static/img/pdp_revamp_v2/icons-add.svg"
                            width="20"
                            height="20"
                          />
                        </button>
                      </div>
                      {localStorage.getItem("accessToken") ? (
                        <div className="group-button">
                          <button
                            className={`add-to-cart ${added && "added"} btnadd`}
                            onClick={handleAdd}
                          >
                            <div className="default">Add to cart</div>
                            <div className="success">Added</div>
                            <div className="cart">
                              <div>
                                <div></div>
                                <div></div>
                              </div>
                            </div>
                            <div className="dots"></div>
                          </button>
                        </div>
                      ) : (
                        <div>
                          <Popup
                            modal
                            trigger={
                              <div className="group-button">
                                <button className="add-to-cart">
                                  <div className="default">Add to cart</div>
                                  <div className="success">Added</div>
                                  <div className="cart">
                                    <div>
                                      <div></div>
                                      <div></div>
                                    </div>
                                  </div>
                                  <div className="dots"></div>
                                </button>
                              </div>
                            }
                          >
                            <Login />
                          </Popup>
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="count mobile">
                      <div className="quantity">
                        <p>Số Lượng:</p>
                        <div className="group-input">
                          <button
                            disabled={`${count < 2 ? "{true}" : ""}`}
                            className={`${count < 2 ? "disable" : "enable"}`}
                            onClick={() => setCount(count - 1)}
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
                            value={count}
                            className="input"
                            readOnly
                          ></input>
                          <button
                            className="enable"
                            onClick={() => setCount(count + 1)}
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
                      {localStorage.getItem("accessToken") ? (
                        <div className="group-button">
                          <button
                            className={`add-to-cart ${added && "added"} btnadd`}
                            onClick={handleAdd}
                          >
                            <div className="default">Add to cart</div>
                            <div className="success">Added</div>
                            <div className="cart">
                              <div>
                                <div></div>
                                <div></div>
                              </div>
                            </div>
                            <div className="dots"></div>
                          </button>
                        </div>
                      ) : (
                        <div>
                          <Popup
                            modal
                            trigger={
                              <div className="group-button">
                                <button className="add-to-cart">
                                  <div className="default">Add to cart</div>
                                  <div className="success">Added</div>
                                  <div className="cart">
                                    <div>
                                      <div></div>
                                      <div></div>
                                    </div>
                                  </div>
                                  <div className="dots"></div>
                                </button>
                              </div>
                            }
                          >
                            <Login />
                          </Popup>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Product;
