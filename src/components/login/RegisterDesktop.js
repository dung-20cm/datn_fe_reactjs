import React, { useState } from "react";
import { Formik } from "formik";
import * as EmailValidator from "email-validator";
import authApi from "../../api/AuthService";
// import * as Yup from "yup";

function RegisterDesktop() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [addressError, setAddressError] = useState("");
  const [noti, setNoti] = useState(false);

  async function signUp(e) {
    e.preventDefault();
    try {
      let item = { name, email, username, phone, password, address };
      let result = await authApi.register(item);

      if (result.status === 200 && result.status !== 500) {
        localStorage.setItem("user", JSON.stringify(result.data));
        const token = localStorage.getItem("user");
        const tokenString = JSON.parse(token);
        localStorage.setItem("accessToken", tokenString.accessToken);
        window.location.reload();
      } else {
        if (!name) setNameError("Tên không được bỏ trống!");
        if (!email) setEmailError("Email không được bỏ trống!");
        if (!username) setUsernameError("Tên đăng nhập không được bỏ trống!");
        if (!phone) setPhoneError("Số điện thoại không được bỏ trống!");
        if (!password) setPasswordError("Mật khẩu không được bỏ trống!");
        if (!address) setAddressError("Địa chỉ không được bỏ trống!");
        if (name && email && username && phone && password && address) {
          setNoti(true);
          localStorage.clear();
        }
        console.log("ádasd");
      }
    } catch (e) {
      console.log("Dang ky that bai");
    }
  }

  return (
    <>
      <div className="login-left-content-heading">
        <h4>Xin chào,</h4>
        <p>Đăng nhập hoặc Tạo tài khoản</p>
      </div>
      <Formik
        validate={() => {
          if (!name) setNameError("Họ và tên không được bỏ trống!");
          if (!username) setUsernameError("Tên đăng nhập không được bỏ trống!");
          if (!address) setAddressError("Địa chỉ không được bỏ trống!");
          const phoneRegex = /[0-9]/;
          if (!phone) setPhoneError("Số điện thoại không được bỏ trống!");
          else if (phone.length < 10 || !phoneRegex.test(phone))
            setPhoneError("Số điện thoại không hợp lệ!");
          if (!email) {
            setEmailError("Email không được bỏ trống!");
          } else if (!EmailValidator.validate(email)) {
            setEmailError("Invalid email address");
          }

          const passwordRegex = /(?=.*[0-9])/;
          if (!password) {
            setPasswordError("Mật khẩu không được bỏ trống!");
          } else if (password.length < 8) {
            setPasswordError("Password must be 8 characters long.");
          } else if (!passwordRegex.test(password)) {
            setPasswordError("Invalida password. Must contain one number");
          }
        }}
      >
        {(props) => {
          const { errors } = props;
          return (
            <form>
              <div className="left-content-heading-input">
                <label className="text-title" htmlFor="name">
                  Họ và tên
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder="Nhập họ và tên"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    setNameError("");
                  }}
                  className={nameError && "error"}
                />
                {nameError && <div className="input-feedback">{nameError}</div>}
                <label className="text-title" htmlFor="username">
                  Tên đăng nhập
                </label>
                <input
                  name="username"
                  type="text"
                  placeholder="Nhập tên đăng nhập"
                  value={username}
                  onChange={(e) => {
                    setUsername(e.target.value);
                    setUsernameError("");
                  }}
                  className={usernameError && "error"}
                />
                {usernameError && (
                  <div className="input-feedback">{usernameError}</div>
                )}
                <label className="text-title" htmlFor="password">
                  Mật khẩu
                </label>
                <input
                  name="password"
                  type="password"
                  placeholder="Nhập mật khẩu"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setPasswordError("");
                  }}
                  className={passwordError && "error"}
                />
                {passwordError && (
                  <div className="input-feedback">{passwordError}</div>
                )}
                <label className="text-title" htmlFor="email">
                  Email
                </label>
                <input
                  name="email"
                  type="text"
                  placeholder="Nhập email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setEmailError("");
                  }}
                  className={emailError && "error"}
                />
                {emailError && (
                  <div className="input-feedback">{emailError}</div>
                )}
                <label className="text-title" htmlFor="phone">
                  Số điện thoại
                </label>
                <input
                  name="phone"
                  type="text"
                  placeholder="Nhập số điện thoại"
                  value={phone}
                  onChange={(e) => {
                    setPhone(e.target.value);
                    setPhoneError("");
                  }}
                  className={phoneError && "error"}
                />
                {phoneError && (
                  <div className="input-feedback">{phoneError}</div>
                )}
                <label className="text-title" htmlFor="address">
                  Địa chỉ
                </label>
                <input
                  name="address"
                  type="text"
                  placeholder="Nhập địa chỉ"
                  value={address}
                  onChange={(e) => {
                    setAddress(e.target.value);
                    setAddressError("");
                  }}
                  className={addressError && "error"}
                />
                {addressError && (
                  <div className="input-feedback">{addressError}</div>
                )}
              </div>
              <button type="submit" onClick={signUp}>
                Tiếp tục
              </button>

              {noti === true ? (
                <>
                  <div className="unauth">
                    Thông tin chưa đúng hoặc đã tồn tại. Vui lòng nhập lại!
                  </div>
                </>
              ) : (
                <></>
              )}
            </form>
          );
        }}
        {/* <div className="left-content-heading-input">
                    <label className="text-title">Họ và tên</label>
                    <input
                        type="name"
                        value={name}
                        placeholder="Nhập họ và tên"
                        onChange={(e) => setName(e.target.value)}
                        maxlength="50"
                    />
                    <label className="text-title">Email</label>
                    <input
                        type="email"
                        value={email}
                        placeholder="Nhập email"
                        onChange={(e) => setEmail(e.target.value)}
                        maxlength="50"
                    />
                    <label className="text-title">Tên đăng nhập</label>
                    <input
                        type="username"
                        value={username}
                        placeholder="Nhập tên đăng nhập"
                        onChange={(e) => setUsername(e.target.value)}
                        maxlength="50"
                    />
                    <label className="text-title">Số điện thoại</label>
                    <input
                        type="phone"
                        value={phone}
                        placeholder="Nhập số điện thoại"
                        onChange={(e) => setPhone(e.target.value)}
                        maxlength="10"
                    />
                    <label className="text-title">Mật khẩu</label>
                    <input
                        type="password"
                        value={password}
                        placeholder="Nhập mật khẩu"
                        onChange={(e) => setPassword(e.target.value)}
                        maxlength="20"
                    />
                    <label className="text-title">Địa chỉ</label>
                    <input
                        type="address"
                        value={address}
                        placeholder="Nhập địa chỉ"
                        onChange={(e) => setAddress(e.target.value)}
                        maxlength="10"
                    />
                </div>
                <button type="submit" onClick={signUp}>
                    Tiếp tục
                </button> */}
      </Formik>
    </>
  );
}

export default RegisterDesktop;
