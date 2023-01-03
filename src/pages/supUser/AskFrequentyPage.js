import React from "react";
import { Link } from "react-router-dom";
import "./supUser.scss";
import { LikeOutlined, DislikeOutlined } from "@ant-design/icons";
import { useTheme } from "../../components/utils/useTheme";

const AskFrequentyPage = () => {
  const theme = useTheme();
  return (
    <div className="sup-user">
      <div className={`ask-frequenty widthCustom ${theme}`}>
        <h2>Các câu hỏi thường gặp trên Hasaki</h2>
        <div className="ask">1. Làm sao để mua hàng trên Hasaki?</div>
        <p>
          Để xem hướng dẫn chi tiết đặt hàng, bạn vui lòng truy cập &nbsp;
          <span>
            <Link to="/askFrequenty">tại đây!!!</Link>
          </span>
        </p>
        <div className="ask">2. Làm thế nào để liên hệ với Hasaki?</div>
        <p>
          Vui lòng xem &nbsp;
          <span>
            <Link to="/">hướng dẫn chi tiết!!!</Link>
          </span>
        </p>
        <div className="ask">3. Làm thế nào để trả giá/mặc cả với Shop?</div>
        <p>
          Xem&nbsp;
          <span>
            <Link to="/">hướng dẫn </Link>
          </span>
          chi tiết!!!
        </p>
        <div className="ask">
          4. Tôi có thể thay đổi số lượng/phân loại sản phẩm sau khi đã đặt hàng
          không?
        </div>
        <ul>
          <li>
            Không. Bạn không thể thay đổi số lượng/phân loại sản phẩm sau khi đã
            đặt hàng thành công
          </li>
          <li>
            Vui lòng kiểm tra kỹ số lượng/phân loại sản phẩm quyết định đặt
            trước khi bấm thanh toán
          </li>
        </ul>
        <div className="ask">
          5. Làm thế nào để đảm bảo hàng hóa tôi nhận được sẽ đúng như mong đợi?
        </div>
        <p>
          Shopee khuyến khích bạn nên Chat với Người bán trước khi quyết định
          đặt hàng để{" "}
        </p>
        <ul>
          <li>Hỏi thêm thông tin về mẫu mã, kích thước, chủng loại hàng hóa</li>
          <li>Yêu cầu Người bán cung cấp ảnh chụp thật của sản phẩm</li>
        </ul>
        <p>
          Xem chi tiết hướng dẫn&nbsp;
          <span>
            <Link to="/">Chat/Gọi điện với Shop </Link>
          </span>
        </p>

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

export default AskFrequentyPage;
