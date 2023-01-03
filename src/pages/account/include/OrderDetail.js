import SideNavBar from "./SideNavBar";
import { Link, useParams } from "react-router-dom";
import authApi from "../../../api/AuthService";
import React, { useEffect, useState } from "react";
import cartApi from "../../../api/CartService";
import Skeleton from "react-loading-skeleton";

function OrderDetail() {
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
    response.data.forEach((item, index) => {
      if (item.id === id) {
        setProductList(item.orders);
        console.log("danh sach san pham: ", item.orders);
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
              <div className="heading-title">
                <span>Chi tiết đơn hàng #{id} </span>
                <span className="heading-title-bold"></span>
              </div>
              <div className="heading-date">Ngày đặt hàng: 00:00 2/11/2022</div>
              <div className="heading-detail">THÔNG BÁO</div>
              <div className="heading-detail-container1">
                <div className="left-container1">00:00 15/12/2022</div>
                <div className="right-container1">Giao hàng thành công</div>
              </div>
              <div className="heading-detail-container2">
                <div className="order-box-content">
                  <div>ĐỊA CHỈ NGƯỜI NHẬN</div>
                  <div className="box-content">
                    <div className="box-main">{name}</div>
                    <div className="box-sub">Địa chỉ: {address}</div>
                    <div className="box-sub">Điện thoại: {phone}</div>
                  </div>
                </div>
                <div className="seperate-box" />
                <div className="order-box-content">
                  <div>HÌNH THỨC GIAO HÀNG</div>
                  <div className="box-content">
                    <div className="box-sub">Giao trong ngày</div>
                    <div className="box-sub">
                      Giao trước: hh:mm ngày dd/mm/yy
                    </div>
                    <div className="box-sub">Phí vận chuyển: 15.000đ</div>
                  </div>
                </div>
                <div className="seperate-box" />
                <div className="order-box-content">
                  <div>HÌNH THỨC THANH TOÁN</div>
                  <div className="box-content">
                    <div className="box-sub">
                      Thanh toán tiền mặt khi nhận hàng
                    </div>
                  </div>
                </div>
              </div>
              <div className="heading-detail-container3">
                <div className="detail-title">
                  <div className="title-tab1">
                    <span>Sản phẩm</span>
                  </div>
                  <div className="title-tab2">
                    <span>Giá</span>
                  </div>
                  <div className="title-tab2">
                    <span>Số lượng</span>
                  </div>
                  <div className="title-tab2">
                    <span>Giảm giá</span>
                  </div>
                  <div className="title-tab3">
                    <span>Tạm tính</span>
                  </div>
                </div>
              </div>

              {productList.map((item, index) =>
                item.products.map((item2, index) => (
                  <>
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
                              <button>Viết nhận xét</button>
                            </Link>
                            <Link to={`/${item2.pro_slug}/${item2.id}`}>
                              <button>Mua lại</button>
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="title-tab2">
                        <span>{item2.pro_price.toLocaleString()} ₫</span>
                      </div>
                      <div className="title-tab2">
                        <span>{item.od_qty}</span>
                      </div>
                      <div className="title-tab2">
                        <span>{item2.pro_discount_value} ₫</span>
                      </div>
                      <div className="title-tab3">
                        <span>
                          {(item.od_price * item.od_qty).toLocaleString()} ₫
                        </span>
                      </div>
                    </div>
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
