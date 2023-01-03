import React from "react";
import { Link } from "react-router-dom";

function UpdPass() {
    return (
        <>
            <header className="header-as-title">
                <Link to="/infomob" >
                    <button className="btn-back">
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" size="30" height="30" width="30" xmlns="http://www.w3.org/2000/svg"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path></svg>
                    </button>
                </Link>
                <div className="mob-as-title">Đổi mật khẩu</div>
                <Link to="" className="img-cart">
                    <img alt="." src="https://frontend.tikicdn.com/_mobile-next/static/img/icons/cart.svg" />
                </Link>
            </header>
            <div className="update-container">
                <form>
                    <div className="form-pass-control">
                        <label className="input-pass-label">
                            Mật khẩu hiện tại
                        </label>
                        <div className="input-pass-box">
                            <input className="input-pass-box1" placeholder="Nhập mật khẩu hiện tại" type="search"></input>
                            <img className="img-pass" src='https://frontend.tikicdn.com/_desktop-next/static/img/account/eye.png' alt="ds" width="24" height="24" />
                        </div>
                    </div>
                    <div className="form-pass-control">
                        <label className="input-pass-label">
                            Mật khẩu mới
                        </label>
                        <div className="input-pass-box">
                            <input className="input-pass-box1" placeholder="Nhập mật khẩu mới" type="search"></input>
                            <img className="img-pass" src='https://frontend.tikicdn.com/_desktop-next/static/img/account/eye.png' alt="ds" width="24" height="24" />
                        </div>
                        <div className="hint-pass-new"> Mật khẩu phải dài từ 8 đến 32 ký tự, bao gồm chữ và số</div>

                    </div>
                    <div className="form-pass-control">
                        <label className="input-pass-label">
                            Nhập lại mật khẩu mới
                        </label>
                        <div className="input-pass-box">
                            <input className="input-pass-box1" placeholder="Nhập lại mật khẩu mới" type="search"></input>
                            <img className="img-pass" src='https://frontend.tikicdn.com/_desktop-next/static/img/account/eye.png' alt="ds" width="24" height="24" />
                        </div>
                    </div>
                    <button type="submit">Lưu thay đổi</button>
                </form>
            </div>
        </>
    )

}

export default UpdPass;