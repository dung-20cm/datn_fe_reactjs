import React, { useState } from "react";
import { BASE_URL } from "../../../components/utils/useTheme";

function UpdatePassword() {
  const [isShow, setIsShow] = useState(true);

  const [user, setUser] = useState([]);
  const [password, setPassword] = useState("");

  async function getUser() {
    fetch(`${BASE_URL}/auth/profile`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("accessToken"),
      },
    }).then((result) => {
      result.json().then((res) => {
        setUser(res);
        setPassword(res.data.password);
      });
    });
  }

  const [password_old, setPassword_old] = useState("");
  const [password_new, setPassword_new] = useState("");
  const [password_confirm, setPassword_confirm] = useState("");

  async function updatePassword() {
    let item = { password_old, password_new, password_confirm };
    fetch(`${BASE_URL}/user/update-password`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("accessToken"),
      },
      body: JSON.stringify(item),
    }).then((result) => {
      result.json().then(() => {
        getUser();
      });
    });
    window.location.reload();
  }

  const [showPass, setShowPass] = useState(false);

  function ShowPassword() {
    setShowPass(!showPass);
  }

  return (
    <>
      {isShow ? (
        <div className="right-container">
          <div className="info-popup">
            <div className="up-phone-container">
              <button className="button-close" onClick={() => setIsShow(false)}>
                <img
                  src="https://salt.tikicdn.com/ts/upload/fe/20/d7/6d7764292a847adcffa7251141eb4730.png"
                  alt="sdf"
                />
              </button>
              <span>
                <p>Đổi mật khẩu</p>
              </span>
              <form className="form-phonenum" onSubmit={updatePassword}>
                <div className="form-pass-control">
                  <label className="input-pass-label">Mật khẩu hiện tại</label>
                  <div className="input-pass-box">
                    <input
                      className="input-pass-box1"
                      placeholder="Nhập mật khẩu hiện tại"
                      type={showPass ? "text" : "password"}
                      value={password_old}
                      onChange={(e) => setPassword_old(e.target.value)}
                    />
                    <img
                      onClick={ShowPassword}
                      className="img-pass"
                      src="https://frontend.tikicdn.com/_desktop-next/static/img/account/eye.png"
                      alt="ds"
                      width="24"
                      height="24"
                    />
                  </div>
                </div>
                <div className="form-pass-control">
                  <label className="input-pass-label">Mật khẩu mới</label>
                  <div className="input-pass-box">
                    <input
                      className="input-pass-box1"
                      placeholder="Nhập mật khẩu mới"
                      type={showPass ? "text" : "password"}
                      value={password_new}
                      onChange={(e) => setPassword_new(e.target.value)}
                    />
                    <img
                      onClick={ShowPassword}
                      className="img-pass"
                      src="https://frontend.tikicdn.com/_desktop-next/static/img/account/eye.png"
                      alt="ds"
                      width="24"
                      height="24"
                    />
                  </div>
                  <div className="hint-pass-new">
                    {" "}
                    Mật khẩu phải dài từ 8 đến 32 ký tự, bao gồm chữ và số
                  </div>
                </div>
                <div className="form-pass-control">
                  <label className="input-pass-label">
                    Nhập lại mật khẩu mới
                  </label>
                  <div className="input-pass-box">
                    <input
                      className="input-pass-box1"
                      placeholder="Nhập lại mật khẩu mới"
                      type={showPass ? "text" : "password"}
                      value={password_confirm}
                      onChange={(e) => setPassword_confirm(e.target.value)}
                    />
                    <img
                      onClick={ShowPassword}
                      className="img-pass"
                      src="https://frontend.tikicdn.com/_desktop-next/static/img/account/eye.png"
                      alt="ds"
                      width="24"
                      height="24"
                    />
                  </div>
                </div>
                <button
                  className="btn-pass"
                  type="submit"
                  onClick={updatePassword}
                >
                  {" "}
                  Lưu thay đổi
                </button>
              </form>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}

export default UpdatePassword;
