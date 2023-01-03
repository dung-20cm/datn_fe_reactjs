import React, { useState, useEffect } from "react";
import SideNavBar from "./SideNavBar";
import { Link } from "react-router-dom";
import Popup from "reactjs-popup";
import UpdatePhoneNum from "./UpdatePhoneNum";
import UpdateEmail from "./UpdateEmail";
import UpdatePassword from "./UpdatePassword";
import UpdatePin from "./UpdatePin";
// import AccountInfoMob from "./mobile/AccountInfoMob";
import { isWideScreen } from "../../../helpers/screen";
import AccountSetting from "./mobile/AccountSetting";
import Skeleton from "react-loading-skeleton";
import { BASE_URL, useTheme } from "../../../components/utils/useTheme";

function AccountInfo() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [user, setUser] = useState([]);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(true);

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
        setName(res.data.name);
        setAddress(res.data.address);
        setPhone(res.data.phone);
        setEmail(res.data.email);
        setLoading(false);
      });
    });
  }

  useEffect(() => {
    getUser();
  }, []);

  async function updateInfo(e) {
    e.preventDefault();
    let item = { name, address };
    fetch(`${BASE_URL}/user/update-info`, {
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
  }

  const theme = useTheme();
  return (
    <>
      {isWideScreen() && loading === true ? (
        <>
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
              <Skeleton
                height={300}
                width={180}
                style={{ marginTop: "10px" }}
              />
              <div className="right-container">
                <div className="heading-title">
                  <Skeleton
                    count={1}
                    width={300}
                    height={40}
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
        </>
      ) : (
        <>
          <div className={`container ${theme}`}>
            <div className="page-container">
              <div className="category-title">
                <Link to="/">Trang chủ</Link>
                <img
                  alt="/"
                  src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNzUycHQiIGhlaWdodD0iNzUycHQiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDc1MiA3NTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8cGF0aCBkPSJtNDY3LjQgMzcxLjc0LTEwNS4xNC0xMDUuMTMtMjAuMzYzIDE5Ljg5MSA4NS4yNDYgODUuMjQyLTg1LjI0NiA4NC43NzMgMjAuMzYzIDIwLjM2MyAxMDUuMTQtMTA1LjE0Ii8+Cjwvc3ZnPgo="
                ></img>
                <h4>Thông tin tài khoản</h4>
              </div>
              <SideNavBar />

              <div className="right-container">
                <div className="heading-title">Thông tin tài khoản</div>
                <div className="info-page">
                  <div className="info-container">
                    <div className="info-left">
                      <span className="info-title">Thông tin cá nhân</span>
                      <div className="info-form">
                        <form onSubmit={updateInfo}>
                          <div className="form-info">
                            <div className="form-avatar">
                              <div className="avatar-view">
                                <img
                                  src="https://salt.tikicdn.com/cache/512x512/ts/avatar/b9/42/e9/5d6bd301d4a6fb334877b9ae5082f483.jpg"
                                  alt="avatar"
                                />
                                <div className="avatar-edit">
                                  <img
                                    src="https://frontend.tikicdn.com/_desktop-next/static/img/account/edit.png"
                                    alt="edit"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="form-name">
                              <div className="form-control">
                                <label>Họ & Tên</label>
                                <div className="input-label">
                                  <input
                                    className="input"
                                    type="text"
                                    name="fullName"
                                    maxLength="128"
                                    placeholder="Thêm họ tên"
                                    defaultValue={name}
                                    onChange={(e) => setName(e.target.value)}
                                  />
                                </div>
                              </div>
                              <div className="form-control">
                                <label className="input-label">Địa chỉ</label>
                                <input
                                  className="input"
                                  type="text"
                                  name="userName"
                                  maxLength="128"
                                  placeholder="Nhập địa chỉ"
                                  defaultValue={address}
                                  onChange={(e) => setAddress(e.target.value)}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="form-control">
                            <label className="input-label1">Ngày sinh</label>
                            <div className="form-select">
                              <select name="day">
                                <option value="0">Ngày</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                                <option value="11">11</option>
                                <option value="12">12</option>
                                <option value="13">13</option>
                                <option value="14">14</option>
                                <option value="15">15</option>
                                <option value="16">16</option>
                                <option value="17">17</option>
                                <option value="18">18</option>
                                <option value="19">19</option>
                                <option value="20">20</option>
                                <option value="21">21</option>
                                <option value="22">22</option>
                                <option value="23">23</option>
                                <option value="24">24</option>
                                <option value="25">25</option>
                                <option value="26">26</option>
                                <option value="27">27</option>
                                <option value="28">28</option>
                                <option value="29">29</option>
                                <option value="30">30</option>
                                <option value="31">31</option>
                              </select>
                              <select name="month">
                                <option value="0">Tháng</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                                <option value="11">11</option>
                                <option value="12">12</option>
                              </select>
                              <select name="year">
                                <option value="0">Năm</option>
                                <option value="1990">1990</option>
                                <option value="1991">1991</option>
                                <option value="1992">1992</option>
                                <option value="1993">1993</option>
                                <option value="1994">1994</option>
                                <option value="1995">1995</option>\
                                <option value="1996">1996</option>
                                <option value="1997">1997</option>
                                <option value="1998">1998</option>
                                <option value="1999">1999</option>
                                <option value="2000">2000</option>
                                <option value="2001">2001</option>
                                <option value="2002">2002</option>
                                <option value="2003">2003</option>
                                <option value="2004">2004</option>
                                <option value="2005">2005</option>
                                <option value="2006">2006</option>
                                <option value="2007">2007</option>
                                <option value="2008">2008</option>
                                <option value="2009">2009</option>
                                <option value="2010">2010</option>
                                <option value="2011">2011</option>
                                <option value="2012">2012</option>
                                <option value="2013">2013</option>
                                <option value="2014">2014</option>
                                <option value="2015">2015</option>
                                <option value="2016">2016</option>
                                <option value="2017">2017</option>
                                <option value="2018">2018</option>
                                <option value="2019">2019</option>
                                <option value="2020">2020</option>
                                <option value="2021">2021</option>
                                <option value="2022">2022</option>
                              </select>
                            </div>
                          </div>
                          <div className="form-control">
                            <label className="input-label1">Giới tính</label>
                            <label className="check-label">
                              <input
                                className="check-input"
                                type="radio"
                                name="gender"
                                defaultValue="male"
                              />
                              <span className="span-input">Nam</span>
                            </label>
                            <label className="check-label">
                              <input
                                className="check-input"
                                type="radio"
                                name="gender"
                                defaultValue="female"
                              />
                              <span className="span-input">Nữ</span>
                            </label>
                            <label className="check-label">
                              <input
                                className="check-input"
                                type="radio"
                                name="gender"
                                defaultValue="other"
                              />
                              <span className="span-input">Khác</span>
                            </label>
                          </div>
                          <div className="form-control">
                            <label className="input-label1">Quốc tịch</label>
                            <div className="input-region">
                              <input
                                className="input-with-icon-right"
                                name="nationality"
                                maxLength="128"
                                placeholder="Chọn quốc tịch"
                                readOnly=""
                                defaultValue="Việt Nam"
                              ></input>
                              <svg
                                className="icon-right"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M3.30806 6.43306C3.55214 6.18898 3.94786 6.18898 4.19194 6.43306L10 12.2411L15.8081 6.43306C16.0521 6.18898 16.4479 6.18898 16.6919 6.43306C16.936 6.67714 16.936 7.07286 16.6919 7.31694L10.4419 13.5669C10.1979 13.811 9.80214 13.811 9.55806 13.5669L3.30806 7.31694C3.06398 7.07286 3.06398 6.67714 3.30806 6.43306Z"
                                  fill="#808089"
                                ></path>
                              </svg>
                            </div>
                          </div>
                          <div className="form-control">
                            <label className="input-label1">&nbsp;</label>
                            <button type="submit" onClick={updateInfo}>
                              Lưu thay đổi
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                    <div className="info-vertical" />
                    <div className="info-right">
                      <span className="info-title">Số điện thoại và Email</span>
                      <div className="list-container">
                        <div className="listitem">
                          <div className="listitem-info">
                            <img
                              src="https://frontend.tikicdn.com/_desktop-next/static/img/account/phone.png"
                              alt="sad"
                              width="24"
                              height="24"
                            />
                            <div className="listitem-info-detail">
                              <span>Số điện thoại</span>
                              <span>{phone}</span>
                            </div>
                          </div>
                          <div className="listitem-status">
                            <span />
                            <Popup modal trigger={<button>Cập nhật</button>}>
                              <UpdatePhoneNum />
                            </Popup>
                          </div>
                        </div>
                        <div className="listitem">
                          <div className="listitem-info">
                            <img
                              src="https://frontend.tikicdn.com/_desktop-next/static/img/account/email.png"
                              alt="sad"
                              width="24"
                              height="24"
                            />
                            <div className="listitem-info-detail">
                              <span>Địa chỉ email</span>
                              <span>{email}</span>
                            </div>
                          </div>
                          <div className="listitem-status">
                            <span />
                            <Popup modal trigger={<button>Cập nhật</button>}>
                              <UpdateEmail />
                            </Popup>
                          </div>
                        </div>
                      </div>
                      <span className="info-title">Bảo mật</span>
                      <div className="list-container">
                        <div className="listitem">
                          <div className="listitem-info">
                            <img
                              src="https://frontend.tikicdn.com/_desktop-next/static/img/account/lock.png"
                              alt="sad"
                              width="24"
                              height="24"
                            />
                            <div className="listitem-info-detail">
                              <span>Đổi mật khẩu</span>
                            </div>
                          </div>
                          <div className="listitem-status">
                            <span />
                            <Popup modal trigger={<button>Cập nhật</button>}>
                              <UpdatePassword />
                            </Popup>
                          </div>
                        </div>
                        <div className="listitem">
                          <div className="listitem-info">
                            <img
                              src="https://salt.tikicdn.com/ts/upload/99/50/d7/cc0504daa05199e1fb99cd9a89e60fa5.jpg"
                              alt="sad"
                              width="24"
                              height="24"
                            />
                            <div className="listitem-info-detail">
                              <span>Thiết lập mã PIN</span>
                            </div>
                          </div>
                          <div className="listitem-status">
                            <span />
                            <Popup modal trigger={<button>Cập nhật</button>}>
                              <UpdatePin />
                            </Popup>
                          </div>
                        </div>
                      </div>
                      <span className="info-title">Liên kết mạng xã hội</span>
                      <div className="list-container">
                        <div className="listitem">
                          <div className="listitem-info">
                            <img
                              src="https://frontend.tikicdn.com/_desktop-next/static/img/account/facebook.png"
                              alt="sad"
                              width="24"
                              height="24"
                            />
                            <div className="listitem-info-detail">
                              <span>Facebook</span>
                            </div>
                          </div>
                          <div className="listitem-status">
                            <span />
                            <button>Cập nhật</button>
                          </div>
                        </div>
                        <div className="listitem">
                          <div className="listitem-info">
                            <img
                              src="https://frontend.tikicdn.com/_desktop-next/static/img/account/google.png"
                              alt="sad"
                              width="24"
                              height="24"
                            />
                            <div className="listitem-info-detail">
                              <span>Google</span>
                            </div>
                          </div>
                          <div className="listitem-status">
                            <span />
                            <button>Cập nhật</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {!isWideScreen() && <AccountSetting />}
    </>
  );
}

export default AccountInfo;
