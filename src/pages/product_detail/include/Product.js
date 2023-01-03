import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { isWideScreen } from "../../../helpers/screen";
import React, { useState } from "react";
import { addToCart } from "../../../store/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import Skeleton from "react-loading-skeleton";

function Product({ products, pro_price, loading }) {
  const [count, setCount] = useState(1);
  const dispatch = useDispatch();
  const dataToken = useSelector((state) => state.authReduce.token);

  const addToCartRedux = async () => {
    if (!dataToken || !dataToken.accessToken) {
      alert(" Đăng nhập để có thể mua hàng");
      return;
    }
    products.quantity = count;
    dispatch(addToCart(products));
    setCount(1);
    console.log(products);
  };

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
            {/* {isWideScreen() && ( */}
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
            {/* // )} */}
            {/* {!isWideScreen() && (
              <>
                <div className="review-img1">
                  <Swiper
                    spaceBetween={5}
                    slidesPerView={1}
                    speed={500}
                    navigation={true}
                    pagination={{ clickable: true }}
                    className="review-swiper"
                  >
                    <div className="swiper-button-prev" />
                    <SwiperSlide>
                      <img
                        alt="/"
                        src="https://salt.tikicdn.com/cache/750x750/ts/product/67/cc/b0/df989a25d152811771de83e135022d4c.png.webp"
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img
                        alt="/"
                        src="https://salt.tikicdn.com/cache/750x750/ts/product/2a/3b/a1/694060a125c0d42ba5d2fafc511b6ec3.jpg.webp"
                      />
                    </SwiperSlide>
                    <div className="swiper-button-next" />
                  </Swiper>
                </div>
              </>
            )} */}
          </div>

          <div className="seperate" />

          <div className="product-content">
            <div className="content-header">
              {/* {isWideScreen() && */}
              <>
                <div className="product-brand">
                  <span>
                    <h6>Thương hiệu:</h6>
                    <Link to=""> Hasaki</Link>
                  </span>
                </div>
              </>
              {/* } */}
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
                      {pro_price || <Skeleton count={1} />} ₫
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
                {/*<div className="coupon-seperate"/>*/}
                {/*<div className="coupon">*/}
                {/*    <div className="coupon-text">8 Mã giảm giá</div>*/}
                {/*    <div className="coupon-tags">*/}
                {/*        <div className="coupon-tag">Giảm 45K</div>*/}
                {/*        <div className="coupon-tag">Giảm 200K</div>*/}
                {/*        <div className="coupon-tag">Giảm 300K</div>*/}
                {/*        <img alt="/" src="https://salt.tikicdn.com/ts/upload/63/43/b6/472934eece91531f0855b86a00a3b1a1.png"/>*/}
                {/*    </div>*/}
                {/*</div>*/}

                {/* <div className="addr-deli"> */}
                {/* <div className="change-addr">*/}
                {/*    <div>*/}
                {/*        <span>Giao đến </span>*/}
                {/*        <span className="Adress">Q. Hoàn Kiếm, P. Hàng Trống, Hà Nội</span>*/}
                {/*        <span> - </span>*/}
                {/*        <span className="addr-change">Đổi địa chỉ</span>*/}
                {/*    </div>*/}
                {/*</div>*/}
                {/*<div className="deli-inner">*/}
                {/*    <div className="shipping-info">*/}
                {/*        <div className="info-header">*/}
                {/*            <img alt="/" src="https://salt.tikicdn.com/ts/upload/67/e4/c2/02b5400b39bb3371e06d33c1e9f4d854.png"/>*/}
                {/*            <div className="divider"></div>*/}
                {/*            <div className="info-highlight">Thứ 2, ngày 17/10</div>*/}
                {/*        </div>*/}
                {/*    </div>*/}

                {/*    <div className="shipping-fee">*/}
                {/*        <div className="fee-name">Vận chuyển: </div>*/}
                {/*        <div className="fee-current"> 338.000₫</div>*/}
                {/*        <div className="fee-origin">358.000đ </div>*/}
                {/*    </div>*/}
                {/*</div> */}

                {/* {isWideScreen() &&
                                    <>
                                        <div className="btnchat">
                                            <span>Chat với nhà bán về cách lắp đặt</span>
                                            <img alt="/" src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/arrow-right-blue.svg" width="12" height="12" />
                                        </div>
                                    </>}
                                {!isWideScreen && <div></div>}
                            </div> */}

                {/* {isWideScreen() && ( */}
                <>
                  <div className="addtocart">
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
                      <div className="group-button">
                        <button className="btnadd" onClick={addToCartRedux}>
                          Chọn Mua
                        </button>
                        {/*<button className="btnpay">*/}
                        {/*    Trả góp*/}
                        {/*    <span>454.166 đ/tháng</span>*/}
                        {/*</button>*/}
                      </div>
                    </div>
                  </div>
                </>
                {/* )} */}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Product;
