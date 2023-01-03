import React, { useState} from 'react';
import {BASE_URL} from '../../../components/utils/useTheme';


function UpdatePhoneNum() {
  const [isShow, setIsShow] = useState(true);

  const [user, setUser] = useState([]);
  const [phone, setPhone] = useState("");

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
        setPhone(res.data.phone);
      });
    });
  }


  async function updatePhone() {
    let item = { phone };
    fetch(`${BASE_URL}/user/update-phone`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("accessToken"),
      },
      body: JSON.stringify(item),
    }).then((result) => {
      result.json().then((res) => {
        getUser(res);
      });
    });
    window.location.reload();
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
                <p>Cập Nhật Số Điện Thoại</p>
              </span>
              <form className="form-phonenum" onSubmit={updatePhone}>
                <div className="form-pn-control">
                  <label className="input-pn-label">Số điện thoại</label>
                  <div className="input-pn-box">
                    <img
                      src="https://frontend.tikicdn.com/_desktop-next/static/img/account/phone.png"
                      alt="ds"
                      width="24"
                      height="24"
                    />
                    <input
                      maxlength="10"
                      placeholder="Nhập số điện thoại"
                      type="search"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                  <button type="submit" onClick={updatePhone}>
                    Lưu thay đổi
                  </button>

  
                </div>
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

export default UpdatePhoneNum;
