import React, { useState } from "react";
import RegisterDesktop from "./RegisterDesktop";
import LogInDesktop from "./LogInDesktop";
import { useTheme } from "../utils/useTheme";

export default () => {
  const [isShow, setIsShow] = useState(true);
  const [isRegister, setIsRegister] = useState(false);

  const theme = useTheme();
  return (
    <>
      {isShow ? (
        <div className={`login ${theme}`}>
          <div className="login-container">
            <div className="login-content">
              <button className="button-close" onClick={() => setIsShow(false)}>
                <img
                  src="https://salt.tikicdn.com/ts/upload/fe/20/d7/6d7764292a847adcffa7251141eb4730.png"
                  alt="sdf"
                />
              </button>
              <div className="login-left">
                <div className="login-left-content">
                  {isRegister === false ? (
                    <>
                      <LogInDesktop />
                      <p className="login-with-login">
                        Bạn chưa có tài khoản?{" "}
                        <p onClick={() => setIsRegister(true)}>Đăng ký</p>
                      </p>
                    </>
                  ) : (
                    <>
                      <RegisterDesktop />
                      <p className="login-with-login">
                        <p onClick={() => setIsRegister(false)}>
                          Đăng nhập bằng email
                        </p>
                      </p>
                    </>
                  )}
                </div>
              </div>
              <div className="login-right">
                <img src={"/img/img-login.jpeg"} alt="decorLogin" />
                {/* <div className="login-right-content">
                  <h4>Mua sắm tại Hasaki</h4>
                  <span>Siêu ưu đãi mỗi ngày</span>
                </div>
                <div className="login-right-footer">
                  <p className="login-footer-text1">
                    <span>Hoặc tiếp tục bằng</span>
                  </p>
                  <ul>
                    <li>
                      <img
                        src="https://salt.tikicdn.com/ts/upload/3a/22/45/0f04dc6e4ed55fa62dcb305fd337db6c.png"
                        alt="ads"
                        width="38"
                        height="38"
                      />
                    </li>
                    <li>
                      <img
                        src="https://salt.tikicdn.com/ts/upload/1c/ac/e8/141c68302262747f5988df2aae7eb161.png"
                        alt="ads"
                        width="38"
                        height="38"
                      />
                    </li>
                  </ul>
                  <p className="note">
                    Bằng việc tiếp tục, bạn đã chấp nhận{" "}
                    <Link to="/">điều khoản sử dụng</Link>
                  </p>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};
