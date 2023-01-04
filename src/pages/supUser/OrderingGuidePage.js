import React from "react";
import { Link } from "react-router-dom";
import "./supUser.scss";
import { LikeOutlined, DislikeOutlined } from "@ant-design/icons";
import { useEffect } from "react";

const OrderingGuidePage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="sup-user">
      {/* Page Hướng dẫn đặt hàng */}
      <div className="orderring-guide widthCustom">
        <p>
          Mua hàng online đang ngày càng phổ biến tại Việt Nam hiện nay. Hasaki
          là một trong những trang thương mại điện tử được nhiều khách hàng tin
          tưởng và lựa chọn. Tuy nhiên, vẫn còn có nhiều người chưa biết cách
          mua hàng trên Hasaki. Bài viết này, chúng mình sẽ hướng dẫn cho bạn
          từng bước cụ thể để đặt mua được một món đồ trên Hasaki nhanh chóng và
          đơn giản nhất nha.
        </p>
        <h2>Hướng Dẫn Cách Mua Hàng Trên Hasaki</h2>
        <p>
          Điều kiện cần thiết đầu tiên để có thể mua hàng trên Hasaki là bạn
          phải có tài khoản Hasaki để đăng nhập vào hệ thống. Nếu bạn chưa có
          tài khoản thì hãy tự tạo cho mình một cái nhé. Các bước để đăng ký tài
          khoản Hasaki cũng vô cùng nhanh chóng và thuận lợi. Nếu bạn chưa biết
          cách tạo tài khoản Hasaki để mua hàng, hãy đọc ngay bài hướng dẫn chi
          tiết này.
          <p>
            Sau khi có tài khoản Hasaki rồi, bạn chỉ cần lần lượt làm theo 6
            bước sau để đặt hàng trên Hasaki:
          </p>
          <div className="steps">Bước 1: Đăng nhập tài khoản</div>
          <p>
            Đầu tiên, bạn truy cập ứng dụng Hasaki bằng cách bấm vào link này
            ⇒https:/hasaki.vn Tiếp theo, bạn chọn Đăng nhập như hình dưới, bạn
            nhập tài khoản Hasaki để bắt đầu mua hàng.
          </p>
          <img src={"/img/supUser/login.jpg"} alt="imgLogin" />
          <div className="steps">Bước 2: Tìm kiếm sản phẩm</div>
          <p>
            Để chọn được sản phẩm bạn muốn mua trên Hasaki, bạn có thể làm theo
            2 cách sau:
          </p>
          <div className="away">
            Cách 1: Dùng thanh tìm kiếm để tìm sản phẩm
          </div>
          <p>
            Bạn nhập tên sản phẩm vào thanh tìm kiếm của Hasaki, sau đó nhấn
            Enter hoặc nhấn tìm kiếm. Trường hợp này thường áp dụng khi bạn đã
            biết tên sản phẩm cụ thể. Hoặc ít nhất bạn cũng đã biết được mình
            muốn mua món gì rồi.
          </p>
          <img src={"/img/supUser/search.jpg"} alt="imgSearch" />
          <div className="away">Cách 2: Tìm ở danh mục sản phẩm</div>
          <p>
            Hasaki đã sắp xếp tất cả các sản phẩm vào từng danh mục brand cụ thể
            để bạn dễ dàng tìm kiếm. Ví dụ: giày Nike, giày Adidas, giày Fila,
            giày Converse…. Bạn muốn mua sản phẩm thuộc danh mục nào thì hãy
            chọn danh mục đó và tìm kiếm nha.
          </p>
          <img src={"/img/supUser/category.jpg"} alt="imgCategory" />
          <p>Hoặc có thể tìm kiếm các sản phẩm theo giá khi bạn cần:</p>
          <img src={"/img/supUser/categoryPrice.jpg"} alt="imgCategorySort" />
          <div className="steps">Bước 3: Xem chi tiết sản phẩm</div>
          <p>
            Sau khi tìm thấy sản phẩm, bạn có thể xem chi tiết sản phẩm đã được
            mô tả. Hoặc bạn cũng có thể tham khảo đánh giá, bình luận của khách
            hàng khác về sản phẩm đó.
          </p>
          <img src={"/img/supUser/productDetail.jpg"} alt="imgDetailProduct" />
          <ul>
            <li>
              Nếu có thắc mắc gì về sản phẩm trước khi bạn muốn mua hàng trên
              Hasaki. Bạn có thể Chat trực tiếp với người bán. Bạn chỉ cần bấm
              chọn vào Ký hiệu Messenger Ngay như trên hình.
            </li>
            <li>
              Nếu bạn định mua sản phẩm đó và muốn chọn thêm sản phẩm khác, bạn
              chọn CHỌN MUA để thêm vào giỏ hàng.
            </li>
            <li>
              Bạn cũng có thể xem thêm mô tả chi tiết sản phẩm khi kéo xuống
              (hình bên phải). Bên cạnh đó những nhận xét & đánh giá của các
              khách hàng khác bạn cũng nên đọc qua. Vì những người này đã mua
              hàng trên Hasaki và sử dụng rồi nên sẽ cho bạn nhận xét khách quan
              hơn về sản phẩm.
            </li>
            <li>
              Chú ý: Bạn có thể chọn mua số lượng tùy thích trước khi đặt hàng
              nhé.!!!
            </li>
          </ul>
          <img src={"/img/supUser/soluong.jpg"} alt="imgSOLuong" />
          <div className="steps">Bước 4: Đặt hàng</div>
          <p>
            Bạn chọn Chọn mua thì hệ thống sẽ chuyển sản phẩm bạn vừa chọn vào
            giỏ hàng, còn không thì bạn cứ back ra rồi tìm kiếm những sản phẩm
            cần thiết khác nữa. Sau đó vào lại giỏ hàng và tiến hành thanh toán.
            Bạn đánh dấu những sản phẩm cần mua, sau đó thực hiện các bước tiếp
            theo bên dưới.
          </p>
          <div className="steps">Bước 5: Nhập địa chỉ nhận hàng</div>
          <p>
            Bạn nhìn thấy mục địa chỉ nhận hàng không? Chỗ này sẽ hiển thị địa
            chỉ mặc định của bạn khi đăng ký tài khoản Hasaki. Nhưng nếu bạn
            muốn thay đổi địa chỉ nhận hàng, bạn nhấn vào đó vào rồi thay đổi
            địa chỉ nhận hàng nhé.
          </p>
          <div className="steps"> Bước 6: Xác nhận đặt hàng</div>
          <p>
            Sau khi bạn đã thực hiện xong các bước trên thì bạn chỉ cần nhấn nút
            “Mua ngay” nữa là hoàn tất thanh toán thôi. Bạn thấy sao? Cách mua
            hàng trên Hasaki thật quá đơn giản phải không nào? Đến đây bạn đã
            hoàn thành các bước để mua đồ trên Hasaki rồi. Nếu bạn có bất cứ
            thắc mắc hoặc cần tư vấn hỗ trợ thêm, hãy để lại comment bên dưới
            bài viết này nhé. Chúc các bạn mua hàng online trên Hasaki thành
            công và tiết kiệm.
          </p>
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

export default OrderingGuidePage;
