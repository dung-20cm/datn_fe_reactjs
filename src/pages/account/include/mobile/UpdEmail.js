import React from "react";
import { Link } from "react-router-dom";

function UpdEmail() {
    return (
        <>
            <header className="header-as-title">
                <Link to="/infomob" >
                    <button className="btn-back">
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" size="30" height="30" width="30" xmlns="http://www.w3.org/2000/svg"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path></svg>    
                    </button>    
                </Link>  
                <div className="mob-as-title">Địa chỉ email</div>
                <Link to="" className="img-cart">
                    <img alt="." src="https://frontend.tikicdn.com/_mobile-next/static/img/icons/cart.svg"/>
                </Link>
            </header>
            <div className="update-container">
                <form>
                    <div className="form-container">
                        <label>Địa chỉ email</label>
                        <div className="form-input">
                            <img src='https://frontend.tikicdn.com/_mobile-next/static/img/icons/account/email.png' alt="ds" width="24" height="24"/>
                            <input className="form-upd-phonenum" name="fullName" maxlength="128" placeholder="Nhập địa chỉ email" focused="true"/>
                            <div className="clear"/>
                        </div>
                        <div className="mess-hint">Mã xác thực (OTP) sẽ được gửi đến email này để xác minh email là của bạn</div>
                    </div>
                    <button type="submit">Lưu thay đổi</button>
                </form>
            </div>
        </>
    )

}

export default UpdEmail;