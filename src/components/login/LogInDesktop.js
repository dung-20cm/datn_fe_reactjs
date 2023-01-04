import React, { useState } from "react";
import { Formik } from "formik";
import { useDispatch } from "react-redux";
import { setTokenLogin } from "../../store/authSlice";
import authApi from "../../api/AuthService";

function LogInDesktop(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [noti, setNoti] = useState(false);
  const dispatch = useDispatch();

  const { setIsRegister } = props;
  async function loginUser(e) {
    e.preventDefault();
    try {
      let item = { username, password };
      let results = await authApi.login(item);
      console.log("--------- results: ", results);
      if (results.status === 200) {
        localStorage.setItem("user", JSON.stringify(results.data));
        const token = localStorage.getItem("user");
        const tokenString = JSON.parse(token);
        localStorage.setItem("accessToken", tokenString.accessToken);
        dispatch(setTokenLogin(results.data));
        // dispatch(setTokenLogin(tokenString.accessToken));
        window.location.reload();
      } else {
        if (!username) setUsernameError("Tên đăng nhặp không được bỏ trống!");
        if (!password) setPasswordError("Mật khẩu không được bỏ trống!");
        if (username && password) setNoti(true);
      }
    } catch (e) {
      console.log("---Erorlogin");
    }
  }

  return (
    <>
      <div className="login-content-heading">
        <h4>Đăng nhập</h4>
        <p onClick={() => setIsRegister(true)}>Đăng ký</p>
      </div>
      <Formik
        validate={() => {
          if (!username) setUsernameError("Tên đăng nhặp không được bỏ trống!");

          if (!password) setPasswordError("Mật khẩu không được bỏ trống!");
        }}
      >
        {(props) => {
          const { errors, handleBlur } = props;
          return (
            <form>
              <div className="left-content-heading-input">
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
              </div>

              <button type="submit" onClick={loginUser}>
                Tiếp tục
              </button>

              {noti === true ? (
                <>
                  <div className="unauth">Sai tên đăng nhập hoặc mật khẩu!</div>
                </>
              ) : (
                <></>
              )}
            </form>
          );
        }}
      </Formik>

      <div className="other-login">
        <div className="text">Or</div>
        <div className="widget-social">
          <ul>
            <li>
              <a href="#" className="active">
                <i className="fab fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-google-plus-g"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default LogInDesktop;
