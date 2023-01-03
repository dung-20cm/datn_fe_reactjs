import React from "react";
import { Link } from "react-router-dom";
import "./supUser.scss";
import { LikeOutlined, DislikeOutlined } from "@ant-design/icons";

const RequireSupPage = () => {
  return (
    <div className="sup-user">
      <div className="require-sup widthCustom">
        <h2>4 Cách Gửi Yêu Cầu Hỗ Trợ</h2>
        <p>
          Khi bạn mua hàng với Hasaki và bạn cần các yêu cầu hỗ trợ thì bạn có
          thể thực hiện theo những cách sau:
        </p>
        <div className="steps">Cách 1: Liên hệ qua Messenger </div>
        <p>
          Khi truy cập vào website hasaki của cửa hàng bạn có thể thấy icon
          Messenger ở góc dưới bên trái màn hình. Đảm bảo bạn đã có tài khoản và
          đăng nhập vào hệ thống để liên hệ với shop
        </p>
        <img src="" alt="imgMessenger" />
        <div className="steps">Cách 2: Liên hệ qua số điện thoại </div>
        <p>
          - Gọi điện trực tiếp để trao đổi với shop: Bạn có thể goi điện với
          shop khi click vào icon điện thoại ở góc màn hình
        </p>
        <img src={"/img/supUser/phone.jpg"} alt="imgSĐT" />
        <p>- Copy số điện thoại ở trên cùng để tìm kiếm và chat bên zalo: </p>
        <div className="img-2">
          <img src={"/img/supUser/copy.jpg"} alt="imgcopysđt" />
          <img src={"/img/supUser/copied.jpg"} alt="imgcopiedsđt" />
        </div>
        <div className="steps">
          Cách 3: Liên hệ với shop bằng email, facebook, tiktok , youtobe
        </div>
        <div className="img-2">
          <img src={"/img/supUser/email.jpg"} alt="imgemalFooter" />
          <img src={"/img/supUser/connect.jpg"} alt="imgconnectFooter" />
        </div>
        <div className="img-3">
          <img src={"/img/supUser/facebook.jpg"} alt="imgFaceBookFooter" />
          <img src={"/img/supUser/tiktok.jpg"} alt="imgtiktokFooter" />
          <img src={"/img/supUser/youtobe.jpg"} alt="imgYoutobeFooter" />
        </div>
        <div className="steps">Cách 4: Liên hệ với shop tại cửa hàng </div>
        <p>
          Nếu bạn đang ở tại Hà Nội, bạn có thể di chuyển đến địa chỉ của Shop
          để dễ trao đổi khi cần.
        </p>
        <img src={"/img/supUser/address.jpg"} alt="imgaddressFooter" />
        <h2>Chúc bạn 1 ngày mua sắm vui vẻ!!!</h2>
        <div className="box-feel">
          <div>
            --------------------------------------------------------------------***---------------------------------------------------------------
          </div>
          <div className="ask-feel">Bài viết có hữu ích cho bạn không?</div>
          <div className="question-feel">
            <button>
              <DislikeOutlined /> Có
            </button>
            <button>
              <LikeOutlined /> Không
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequireSupPage;
