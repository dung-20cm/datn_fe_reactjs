import React from "react";
import { Link } from "react-router-dom";
import { isWideScreen } from "../../helpers/screen";

import { useTheme } from "../utils/useTheme";
import PlupinChat from "./PlupinChat";
import CallPhone from "./CallPhone";

export default function Footers() {
  // const cate = Array.from(Array(10).keys());

  const EmailContact = () => {
    return (
      <div className="cm-width">
        <div className={`new-letter`}>
          <div className="new-letter-content">
            <h3 className="heading">Liên hệ với chúng tôi</h3>
            <p className="sub-heading">
              Để lại những trải nghiệm mua hàng của bạn nhé!!!
            </p>
          </div>
          <div className="new-letter-input">
            <div className="form-subcribe">
              <form
                id="subscribe-form"
                action="#"
                method="GET"
                acceptCharset="utf-8"
                className="form-submit"
              >
                <input
                  name="email"
                  value=""
                  className="email"
                  type="email"
                  placeholder="Nhập địa chỉ email của bạn"
                  required
                  readOnly
                />
                <button
                  name="submit"
                  type="submit"
                  id="submit"
                  className="sc-button "
                >
                  <span>Browse More</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const theme = useTheme();
  return (
    <>
      {isWideScreen() && <EmailContact />}

      <footer className={theme}>
        <div className="style-information">
          <div className="cm-width d-flexs">
            <div className="block">
              <h4>Hỗ trợ khách hàng</h4>
              <p className="hot-line">
                Hotline: <Link to="/">0385044649</Link>
                <span className="small-text1">
                  (1000 đ/phút, 8-21h kể cả T7, CN)
                </span>
              </p>
              <Link to="/askFrequenty" className="small-text">
                Các câu hỏi thường gặp
              </Link>
              <Link to="/requireSup" className="small-text">
                Gửi yêu cầu hỗ trợ
              </Link>
              <Link to="/orderingGuide" className="small-text">
                Hướng dẫn đặt hàng
              </Link>
              <Link to="/" className="small-text">
                Phương thức vận chuyển
              </Link>
              <Link to="/" className="small-text">
                Chính sách đổi trả
              </Link>
              <Link to="/" className="small-text">
                Hướng dẫn trả góp
              </Link>
              <Link to="/" className="small-text">
                Chính sách hàng nhập khẩu
              </Link>
            </div>
            <div className="block">
              <h4>Về chúng tôi</h4>

              <Link to="/" className="small-text">
                Địa chỉ: 55 Giải Phóng, Đồng Tâm, Hai Bà Trưng, Hà Nội.
              </Link>
              <Link to="/" className="small-text">
                Số điện thoại: 0385044649
              </Link>
              <Link to="/" className="small-text">
                Email: laithedung28563@gmail.com
              </Link>
            </div>
            <div className="block">
              <h4>Hợp tác và liên hệ</h4>
              <Link to="/" className="small-text">
                Quy chế hoạt động Sàn GDTMĐT
              </Link>
              <Link to="/" className="small-text">
                Bán hàng cùng Hasaki
              </Link>
              <h4>Chứng nhận bởi</h4>
              <div className="d-flex">
                <Link to="/">
                  <img
                    src="https://frontend.tikicdn.com/_desktop-next/static/img/footer/bo-cong-thuong-2.png"
                    width="32"
                    height="32"
                    alt="12"
                  />
                </Link>
                <Link to="/">
                  <img
                    src="https://frontend.tikicdn.com/_desktop-next/static/img/footer/bo-cong-thuong.svg"
                    width="83"
                    height="32"
                    alt="test"
                  />
                </Link>
              </div>
            </div>
            <div className="block">
              <h4>Phương thức thanh toán</h4>
              <p className="small-text">Thanh toán khi nhận hàng</p>
              <p className="small-text">
                Kiểm tra sản phẩm trước khi nhận hàng
              </p>

              <h4>Dịch vụ giao hàng</h4>
            </div>
            <div className="block">
              <h4>Kết nối với chúng tôi</h4>

              <div className="widget-social">
                <ul style={{ color: "#fff" }}>
                  <li>
                    <a
                      href="https://www.facebook.com/laidung0506"
                      target="_blank"
                    >
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.tiktok.com/@laidung0506"
                      target="_blank"
                    >
                      <i className="fab fa-tiktok"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.youtube.com/channel/UCBEKR_dweKvZK2lAdnJ073Q"
                      target="_blank"
                    >
                      <i className="fab fa-youtube"></i>
                    </a>
                  </li>
                </ul>
              </div>

              <h4 className="store-title">Tải ứng dụng trên điện thoại</h4>
              <div className="d-flex"></div>
            </div>
          </div>
        </div>
      </footer>

      <CallPhone />
    </>
  );
}
