import React, { useState, useEffect } from "react";
import SideNavBar from "./SideNavBar";
import { Link } from "react-router-dom";
import cartApi from "../../../api/CartService";
import Skeleton from "react-loading-skeleton";

function OrderManagement() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [tabs, setTabs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [del, setDel] = useState(true);
  const [viewMore, setViewMore] = useState(false);
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    let data = [
      {
        id: 1,
        title: "Tất cả đơn",
        status: true,
      },
      {
        id: 2,
        title: "Chờ thanh toán",
        status: false,
      },
      {
        id: 3,
        title: "Đang xử lý",
        status: false,
      },
      {
        id: 4,
        title: "Đang vận chuyển",
        status: false,
      },
      {
        id: 5,
        title: "Đã giao",
        status: false,
      },
      {
        id: 6,
        title: "Đã hủy",
        status: false,
      },
    ];
    setTabs(data);
  }, []);

  const [orderList, setOrderList] = useState([]);

  const getOrderList = async () => {
    const response = await cartApi.getTransaction();
    console.log("--------- response: ", response);
    if (response.status === 200) {
      setLoading(false);
      setOrderList(response.data);
    }
  };

  const removeOrder = async (id) => {
    const response = await cartApi.deleteTransaction(id);
    if (response.status === 200) {
      setDel(!del);
      setIsShow(true);
    }
  };

  const handleClose = () => {
    setIsShow(false);
  };

  useEffect(() => {
    getOrderList();
  }, [del]);

  function changeTab(tabNumber) {
    let tab = tabs.map((item, index) => {
      item.status = item.id === tabNumber ? true : false;
      setTabs(tabNumber);
      return item;
    });
    setTabs(tab);
  }

  return (
    <>
      {loading === true ? (
        <div className="container">
          <div className="page-container">
            <div className="category-title">
              <Skeleton
                count={1}
                width={180}
                height={30}
                style={{ marginLeft: "-15px", marginTop: "20px" }}
              />
            </div>
            <Skeleton height={300} width={180} style={{ marginTop: "10px" }} />
            <div className="right-container">
              <div className="heading-title">
                <Skeleton
                  count={1}
                  width={300}
                  height={40}
                  style={{ marginLeft: "20px" }}
                />
              </div>
              <div className="info-page">
                <Skeleton
                  width={1040}
                  height={500}
                  style={{ marginLeft: "20px" }}
                />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="container">
            <div className="category-title">
              <Link to="/">Trang chủ</Link>
              <img
                alt="/"
                src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNzUycHQiIGhlaWdodD0iNzUycHQiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDc1MiA3NTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8cGF0aCBkPSJtNDY3LjQgMzcxLjc0LTEwNS4xNC0xMDUuMTMtMjAuMzYzIDE5Ljg5MSA4NS4yNDYgODUuMjQyLTg1LjI0NiA4NC43NzMgMjAuMzYzIDIwLjM2MyAxMDUuMTQtMTA1LjE0Ii8+Cjwvc3ZnPgo="
              ></img>
              <h4>Đơn hàng của tôi</h4>
            </div>
            <div className="page-container">
              <SideNavBar />
              <div className="right-container">
                <div className="heading-title">Đơn hàng của tôi</div>
                <div className="order-tablist">
                  {tabs.map((item, index) => (
                    <div
                      className={`order-tab${item.status ? "-active" : ""}`}
                      key={index}
                      onClick={() => changeTab(item.id)}
                    >
                      {item.title}
                    </div>
                  ))}
                </div>

                <div className="order-search-input">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 24 24"
                    color="#808089"
                    className="icon-left"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
                  </svg>
                  <input
                    className="search-input-bar"
                    name="search"
                    placeholder="Tìm đơn hàng theo Mã đơn hàng, Nhà bán hoặc Tên sản phẩm"
                    type="search"
                  ></input>
                  <div className="search-input-right">Tìm đơn hàng</div>
                </div>
                <div className="order-container">
                  {orderList.length > 0 ? (
                    orderList.map((item, index) => (
                      <>
                        <div className="list-item" key={index}>
                          <div className="list-order">
                            <span>Đơn hàng số {item.id}</span>
                          </div>
                          {item.orders.map((item2, index) =>
                            viewMore === true
                              ? item2.products.map((item3, index) => (
                                  <div key={index}>
                                    <div className="list-product">
                                      <div className="list-product-info">
                                        <img
                                          src={item3.pro_avatar}
                                          alt="z"
                                          width="100px"
                                          height="100px"
                                        />
                                        <div className="list-product-name">
                                          <span>
                                            <Link
                                              to={`/${item3.pro_slug}/${item3.id}`}
                                              style={{ color: "black" }}
                                            >
                                              {item3.pro_name}
                                            </Link>
                                          </span>
                                          <span className="number">
                                            x{item2.od_qty}
                                          </span>
                                        </div>
                                      </div>
                                      <div className="list-product-price">
                                        <span>
                                          {(
                                            item2.od_price * item2.od_qty
                                          ).toLocaleString()}{" "}
                                          ₫
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                ))
                              : index < 2 &&
                                item2.products.map((item3, index) => (
                                  <div key={index}>
                                    <div className="list-product">
                                      <div className="list-product-info">
                                        <img
                                          src={item3.pro_avatar}
                                          alt="z"
                                          width="100px"
                                          height="100px"
                                        />
                                        <div className="list-product-name">
                                          <span>
                                            <Link
                                              to={`/${item3.pro_slug}/${item3.id}`}
                                              style={{ color: "black" }}
                                            >
                                              {item3.pro_name}
                                            </Link>
                                          </span>
                                          <span className="number">
                                            x{item2.od_qty}
                                          </span>


                                        </div>
                                      </div>
                                      <div className="list-product-price">
                                        <span>
                                          {(
                                            item2.od_price * item2.od_qty
                                          ).toLocaleString()}{" "}
                                          ₫
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                ))
                          )}
                          {item.orders.length - 2 > 0 && viewMore === false ? (
                            <>
                              <div className="view-more">
                                <button onClick={() => setViewMore(true)}>
                                  Xem thêm {item.orders.length - 2} sản phẩm
                                </button>
                              </div>
                            </>
                          ) : (
                            <></>
                          )}
                          <div className="list-total">
                            <span>Tổng tiền:</span>{" "}
                            {item.t_total_money.toLocaleString()} ₫
                          </div>
                          <div className="group-btn-order">
                            <button
                              className="btn-order"
                              onClick={() => removeOrder(item.id)}
                            >
                              Xóa
                            </button>
                            <Link to="">
                              <button className="btn-order">Mua lại</button>
                            </Link>
                            <Link to={`./orderdetail/id=${item.id}`}>
                              <button className="btn-order">
                                Xem chi tiết
                              </button>
                            </Link>
                          </div>
                          <div className="list-seperate" />
                        </div>
                      </>
                    ))
                  ) : (
                    <>
                      <img
                        className="empty-icon"
                        src="https://frontend.tikicdn.com/_desktop-next/static/img/account/empty-order.png"
                        alt="empty"
                      />
                      <div className="empty-order">Chưa có đơn hàng</div>
                    </>
                  )}
                </div>
              </div>
            </div>
            {isShow === true && (
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
                      <h4>Xóa thành công</h4>
                    </div>
                    <button className="button-close1" onClick={handleClose}>
                      Đóng
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </>
      )}
    </>
  );
}

export default OrderManagement;
