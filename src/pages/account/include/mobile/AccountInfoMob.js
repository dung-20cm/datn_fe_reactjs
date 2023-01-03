import React from 'react';
import {Link } from 'react-router-dom';

function AccountInfoMob() {
    return (
        <>
            <header className="header-as-title">
                <Link to="/accsetting" >
                    <button className="btn-back">
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" size="30" height="30" width="30" xmlns="http://www.w3.org/2000/svg"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path></svg>    
                    </button>    
                </Link>  
                <div className="mob-as-title">Thông Tin Tài Khoản</div>
                <Link to="" className="img-cart">
                    <img alt="." src="https://frontend.tikicdn.com/_mobile-next/static/img/icons/cart.svg"/>
                </Link>
            </header>
            <main className="main-as">
                <div className="header-avatar">
                    <input type="file" id="myFile" name="myFile" accept="image/*" className="image-input"/>
                    <div className="header-avatar-view">
                        <img src="https://salt.tikicdn.com/cache/512x512/ts/avatar/b9/42/e9/5d6bd301d4a6fb334877b9ae5082f483.jpg" alt="avatar" className="avatar"/>
                        <div className="edit"><img src="https://frontend.tikicdn.com/_mobile-next/static/img/icons/account/edit.png" className="edit_img" alt="" width='10' height='10'/></div>
                    </div>
                </div>
                <Link to="/updname" className="account-info-mob">
                    <div className="info-mob">
                        <div className="left-info-mob">
                            <img alt='s' src="https://frontend.tikicdn.com/_mobile-next/static/img/icons/account/user.png" width="24" height='24'/>
                        </div>
                        <div className="title-info-mob">
                            <div className="info-mob-text">Họ & Tên</div>
                            <div className="info-mob-text">Trần Hoàng</div>
                        </div>
                    </div>
                    <div className="info-mob-icon">
                            <img alt='s' width='24' height='24' src="https://frontend.tikicdn.com/_mobile-next/static/img/icons/account/arrow-right.png"/>
                    </div>
                </Link>
                <Link to="/updnickname" className="account-info-mob">
                    <div className="info-mob">
                        <div className="left-info-mob">
                            <img  alt='s' src="https://frontend.tikicdn.com/_mobile-next/static/img/icons/account/follower.png" width="24" height='24'/>
                        </div>
                        <div className="title-info-mob">
                            <div className="info-mob-text">Nickname</div>
                            <div className="info-mob-text1">Thêm nickname</div>
                        </div>
                    </div>
                    <div className="info-mob-icon">
                            <img alt='s' width='24' height='24' src="https://frontend.tikicdn.com/_mobile-next/static/img/icons/account/arrow-right.png"/>
                    </div>
                </Link>
                <Link to="" className="account-info-mob">
                    <div className="info-mob">
                        <div className="left-info-mob">
                            <img alt='s' src="https://frontend.tikicdn.com/_mobile-next/static/img/icons/account/calendar.png" width="24" height='24'/>
                        </div>
                        <div className="title-info-mob">
                            <div className="info-mob-text">Ngày sinh</div>
                            <div className="info-mob-text">22/10/2001</div>
                        </div>
                    </div>
                    <div className="info-mob-icon">
                            <img alt='s' width='24' height='24' src="https://frontend.tikicdn.com/_mobile-next/static/img/icons/account/arrow-right.png"/>
                    </div>
                </Link>
                <Link to="/updsex" className="account-info-mob">
                    <div className="info-mob">
                        <div className="left-info-mob">
                            <img alt='s' src="https://frontend.tikicdn.com/_mobile-next/static/img/icons/account/gender.png" width="24" height='24'/>
                        </div>
                        <div className="title-info-mob">
                            <div className="info-mob-text">Giới tính</div>
                            <div className="info-mob-text">Nam</div>
                        </div>
                    </div>
                    <div className="info-mob-icon">
                            <img alt='s' width='24' height='24' src="https://frontend.tikicdn.com/_mobile-next/static/img/icons/account/arrow-right.png"/>
                    </div>
                </Link>
                <Link to="" className="account-info-mob">
                    <div className="info-mob">
                        <div className="left-info-mob">
                            <img alt='s'  src="https://frontend.tikicdn.com/_mobile-next/static/img/icons/account/global.png" width="24" height='24'/>
                        </div>
                        <div className="title-info-mob">
                            <div className="info-mob-text">Quốc tịch</div>
                            <div className="info-mob-text">Việt Nam</div>
                        </div>
                    </div>
                    <div className="info-mob-icon">
                            <img alt='s' width='24' height='24' src="https://frontend.tikicdn.com/_mobile-next/static/img/icons/account/arrow-right.png"/>
                    </div>
                </Link>
                <Link to="/updphonenum" className="account-info-mob">
                    <div className="info-mob">
                        <div className="left-info-mob">
                            <img alt='s' src="https://frontend.tikicdn.com/_mobile-next/static/img/icons/account/phone.png" width="24" height='24'/>
                        </div>
                        <div className="title-info-mob">
                            <div className="info-mob-text">Số điện thoại</div>
                            <div className="info-mob-text">1234567890</div>
                        </div>
                    </div>
                    <div className="info-mob-icon">
                            <img alt='s' width='24' height='24' src="https://frontend.tikicdn.com/_mobile-next/static/img/icons/account/arrow-right.png"/>
                    </div>
                </Link>
                <Link to="/updemail" className="account-info-mob">
                    <div className="info-mob">
                        <div className="left-info-mob">
                            <img alt='s' src="https://frontend.tikicdn.com/_mobile-next/static/img/icons/account/email.png" width="24" height='24'/>
                        </div>
                        <div className="title-info-mob">
                            <div className="info-mob-text">Địa chỉ email</div>
                            <div className="info-mob-text">hoangnguyen@interspace.vn</div>
                        </div>
                    </div>
                    <div className="info-mob-icon">
                            <img alt='s' width='24' height='24' src="https://frontend.tikicdn.com/_mobile-next/static/img/icons/account/arrow-right.png"/>
                    </div>
                </Link>
                <Link to="/updpass" className="account-info-mob">
                    <div className="info-mob">
                        <div className="left-info-mob">
                            <img alt='s' src="https://frontend.tikicdn.com/_mobile-next/static/img/icons/account/lock.png" width="24" height='24'/>
                        </div>
                        <div className="title-info-mob">
                            <div className="info-mob-text">Đổi mật khẩu</div>
                        </div>
                    </div>
                    <div className="info-mob-icon">
                            <img alt='s' width='24' height='24' src="https://frontend.tikicdn.com/_mobile-next/static/img/icons/account/arrow-right.png"/>
                    </div>
                </Link>
            </main>
        </>    
        
    )

}

export default AccountInfoMob;