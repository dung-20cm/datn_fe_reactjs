import SideNavBar from "./SideNavBar";
import { Link, useParams } from "react-router-dom";
import authApi from "../../../api/AuthService";
import React, { useEffect, useState } from "react";
import cartApi from "../../../api/CartService";
import Skeleton from "react-loading-skeleton";
import { useTheme } from "../../../components/utils/useTheme";
import { isWideScreen } from "../../../helpers/screen";

function OrderDetail() {
  const theme = useTheme();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  let { id } = useParams();

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);

  const getUser = async () => {
    const res = await authApi.getProfile();
    if (res.status === 200) {
      setName(res.data.name);
      setAddress(res.data.address);
      setPhone(res.data.phone);
    }
  };
  const getOrderProducts = async () => {
    const response = await cartApi.getTransaction();
    response.data.map((item, index) => {
      if (item?.id == id) {
        setProductList(item?.orders);
        console.log("danh sach san pham: ", item?.orders);
      }
    });
    setLoading(false);
  };

  useEffect(() => {
    getOrderProducts();
    getUser();
  }, []);

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
                  width={1040}
                  height={70}
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
        <div className="container">
          <div className="category-title">
            <Link to="/">Trang ch???</Link>
            <img
              alt="/"
              src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNzUycHQiIGhlaWdodD0iNzUycHQiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDc1MiA3NTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8cGF0aCBkPSJtNDY3LjQgMzcxLjc0LTEwNS4xNC0xMDUuMTMtMjAuMzYzIDE5Ljg5MSA4NS4yNDYgODUuMjQyLTg1LjI0NiA4NC43NzMgMjAuMzYzIDIwLjM2MyAxMDUuMTQtMTA1LjE0Ii8+Cjwvc3ZnPgo="
            ></img>
            <h4>????n h??ng c???a t??i</h4>
          </div>
          <div className="page-container">
            {isWideScreen() && <SideNavBar />}
            <div className={`right-container ${theme}`}>
              <div className="heading-title">
                <span>Chi ti???t ????n h??ng #{id} </span>
                {/* <span className="heading-title-bold"></span> */}
              </div>
              <div className="heading-date">Ng??y ?????t h??ng: 00:00 2/11/2022</div>
              {isWideScreen() ? (
                <>
                  <div className="heading-detail">TH??NG B??O</div>
                  <div className="heading-detail-container1">
                    <div className="left-container1">00:00 15/12/2022</div>
                    <div className="right-container1">Giao h??ng th??nh c??ng</div>
                  </div>
                </>
              ) : (
                <div style={{ display: "flex" }}>
                  <div className="heading--left heading-detail">TH??NG B??O</div>
                  <div
                    className="heading-detail-right"
                    style={{ paddingLeft: 15 }}
                  >
                    Giao h??ng th??nh c??ng
                  </div>
                </div>
              )}

              <div className="heading-detail-container2">
                <div className="order-box-content">
                  <div className="box-title">?????A CH??? NG?????I NH???N</div>
                  <div className="box-content">
                    <div className="box-sub">{name}</div>
                    <div className="box-sub">?????a ch???: {address}</div>
                    <div className="box-sub">??i???n tho???i: {phone}</div>
                  </div>
                </div>
                <div className="seperate-box" />
                <div className="order-box-content">
                  <div className="box-title">H??NH TH???C GIAO H??NG</div>
                  <div className="box-content">
                    <div className="box-sub">Giao trong ng??y</div>
                    <div className="box-sub">
                      Giao tr?????c: hh:mm ng??y dd/mm/yy
                    </div>
                    <div className="box-sub">Ph?? v???n chuy???n: 30.000??</div>
                  </div>
                </div>
                <div className="seperate-box" />
                <div className="order-box-content">
                  <div className="box-title">H??NH TH???C THANH TO??N</div>
                  <div className="box-content">
                    <div className="box-sub">
                      Thanh to??n ti???n m???t khi nh???n h??ng
                    </div>
                  </div>
                </div>
              </div>

              {isWideScreen() && (
                <div className="heading-detail-container3">
                  <div className="detail-title">
                    <div className="title-tab1">
                      <span>S???n ph???m</span>
                    </div>
                    <div className="title-tab2">
                      <span>Gi??</span>
                    </div>
                    <div className="title-tab2">
                      <span>S??? l?????ng</span>
                    </div>
                    <div className="title-tab2">
                      <span>Gi???m gi??</span>
                    </div>
                    <div className="title-tab3">
                      <span>T???m t??nh</span>
                    </div>
                  </div>
                </div>
              )}

              {productList.map((item, index) =>
                item.products.map((item2, index) => (
                  <>
                    {isWideScreen() ? (
                      <div className="heading-detail-container4" key={index}>
                        <div className="title-tab1">
                          <img src={item2.pro_avatar} alt="img" />
                          <div className="tab1-text">
                            <Link
                              to={`/${item2.pro_slug}/${item2.id}`}
                              style={{ color: "black" }}
                            >
                              {item2.pro_name}
                            </Link>
                            <div className="tab1-btn">
                              <Link to={`/${item2.pro_slug}/${item2.id}`}>
                                <button>Vi???t nh???n x??t</button>
                              </Link>
                              <Link to={`/${item2.pro_slug}/${item2.id}`}>
                                <button>Mua l???i</button>
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="title-tab2">
                          <span>{item2.pro_price.toLocaleString()} ???</span>
                        </div>
                        <div className="title-tab2">
                          <span>{item.od_qty}</span>
                        </div>
                        <div className="title-tab2">
                          <span>{item2.pro_discount_value}.000 ???</span>
                        </div>
                        <div className="title-tab3">
                          <span>
                            {(item.od_price * item.od_qty).toLocaleString()} ???
                          </span>
                        </div>
                      </div>
                    ) : (
                      <>
                        <div className="product-item" style={{ padding: 15 }}>
                          <div
                            style={{
                              display: "flex",
                            }}
                          >
                            <Link to={`/${item2.pro_slug}/${id}`}>
                              <div
                                className="product-image"
                                style={{ marginRight: 15 }}
                              >
                                <img
                                  alt="sda"
                                  src={item2.pro_avatar}
                                  width="80"
                                  height="80"
                                  style={{ width: "100%", marginRight: 15 }}
                                />
                              </div>
                            </Link>
                            <div>
                              <Link to={`/${item2.pro_slug}/${id}`}>
                                <div
                                  className="product-name"
                                  style={{
                                    marginBottom: 5,
                                    color: "black",
                                    fontSize: 13,
                                  }}
                                >
                                  {item2.pro_name}
                                </div>
                              </Link>
                              <div className="product-price">
                                <span>Gi?? </span>
                                <span>
                                  {item2.pro_price.toLocaleString()} ???
                                </span>
                              </div>

                              <div
                                className="product-count"
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                }}
                              >
                                <span style={{ marginRight: 35 }}>
                                  S??? l?????ng
                                </span>
                                <span>{item.od_qty}</span>
                              </div>

                              <div className="product-quantity">
                                <span style={{ marginRight: 25 }}>
                                  Th??nh ti???n
                                </span>
                                <span>
                                  {(
                                    item.od_price * item.od_qty
                                  ).toLocaleString()}{" "}
                                  ???
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div
                          style={{
                            float: "right",
                            padding: 15,
                          }}
                          className="btn-link"
                        >
                          <Link to={`/${item2.pro_slug}/${item2.id}`}>
                            <button>Vi???t nh???n x??t</button>
                          </Link>
                          <Link to={`/${item2.pro_slug}/${item2.id}`}>
                            <button>Mua l???i</button>
                          </Link>
                        </div>
                      </>
                    )}
                  </>
                ))
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default OrderDetail;
