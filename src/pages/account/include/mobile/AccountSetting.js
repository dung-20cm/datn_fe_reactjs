import React from 'react';
import { Link } from 'react-router-dom';

function AccountSetting() {
    return (
        <>
            <header className="header-as-title">
                <Link to="/" >
                    <button className="btn-back">
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" size="30" height="30" width="30" xmlns="http://www.w3.org/2000/svg"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path></svg>
                    </button>
                </Link>
                <div className="mob-as-title">Quản lý tài khoản</div>
                <Link to="" className="img-cart">
                    <img alt="." src="https://frontend.tikicdn.com/_mobile-next/static/img/icons/cart.svg" />
                </Link>
            </header>
            <main className="main-as">
                <div>
                    <div className="group">
                        <Link to="/infomob" className="gr-avatar">
                            <img width="40" height="40" src="https://salt.tikicdn.com/cache/512x512/ts/avatar/b9/42/e9/5d6bd301d4a6fb334877b9ae5082f483.jpg" alt="avatar" />
                            <div className="link__content">
                                <div className="link__name">Trần Hoàng</div>
                                <div className="link__email">tranhoangnd3062@gmail.com</div>
                                <div className="link__created-date"><span>Thành viên từ: 03/03/2019</span></div>
                            </div>
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="link__arrow" size="20" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"></path></svg>
                        </Link>
                    </div>
                    <div className="group">
                        <Link to="" className="link">
                            <img src="https://frontend.tikicdn.com/_mobile-next/static/img/mycoupon/coupon_code.svg" alt='xasd' />
                            <div className="link__content">Mã giảm giá<span>(Bạn đang có <b>0</b> mã giảm giá)</span></div>
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="link__arrow" size="20" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"></path></svg>
                        </Link>
                    </div>
                    <div className="group">
                        <Link to="" className="link">
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" size="24" className="link__icon" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h4l3 3 3-3h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 3.3c1.49 0 2.7 1.21 2.7 2.7 0 1.49-1.21 2.7-2.7 2.7-1.49 0-2.7-1.21-2.7-2.7 0-1.49 1.21-2.7 2.7-2.7zM18 16H6v-.9c0-2 4-3.1 6-3.1s6 1.1 6 3.1v.9z"></path></svg>
                            <div className="link__content">&ensp; Sổ địa chỉ</div>
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="link__arrow" size="20" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"></path></svg>
                        </Link>
                        <Link to="" className="link">
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" size="24" className="link__icon" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"></path></svg>
                            <div className="link__content">&ensp; Thông tin thanh toán</div>
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="link__arrow" size="20" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"></path></svg>
                        </Link>
                        <Link to="" className="link">
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" size="24" className="link__icon" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"></path></svg>
                            <div className="link__content">&ensp; Thiết lập bảo mật</div>
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="link__arrow" size="20" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"></path></svg>
                        </Link>
                    </div>
                    <div className="group">
                        <Link to="" className="link">
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" size="24" className="link__icon" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 14v-2.47l6.88-6.88c.2-.2.51-.2.71 0l1.77 1.77c.2.2.2.51 0 .71L8.47 14H6zm12 0h-7.5l2-2H18v2z"></path></svg>
                            <div className="link__content">&ensp; Đánh giá sản phẩm</div>
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="link__arrow" size="20" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"></path></svg>
                        </Link>
                        <Link to="" className="link">
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" size="24" className="link__icon" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M256 464c22.779 0 41.411-18.719 41.411-41.6h-82.823c0 22.881 18.633 41.6 41.412 41.6zm134.589-124.8V224.8c0-63.44-44.516-117.518-103.53-131.041V79.2c0-17.682-13.457-31.2-31.059-31.2s-31.059 13.518-31.059 31.2v14.559c-59.015 13.523-103.53 67.601-103.53 131.041v114.4L80 380.8v20.8h352v-20.8l-41.411-41.6z"></path></svg>
                            <div className="link__content">&ensp; Thông báo của tôi</div>
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="link__arrow" size="20" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"></path></svg>
                        </Link>
                        <Link to="/ordmob" className="link">
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" size="24" className="link__icon" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M408 64H104c-22.091 0-40 17.908-40 40v304c0 22.092 17.909 40 40 40h304c22.092 0 40-17.908 40-40V104c0-22.092-17.908-40-40-40zM304 368H144v-48h160v48zm64-88H144v-48h224v48zm0-88H144v-48h224v48z"></path></svg>
                            <div className="link__content">&ensp; Quản lý đơn hàng</div>
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="link__arrow" size="20" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"></path></svg>
                        </Link>
                        <Link to="" className="link">
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" size="24" className="link__icon" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M352 56h-1c-39.7 0-74.8 21-95 52-20.2-31-55.3-52-95-52h-1c-61.9.6-112 50.9-112 113 0 37 16.2 89.5 47.8 132.7C156 384 256 456 256 456s100-72 160.2-154.3C447.8 258.5 464 206 464 169c0-62.1-50.1-112.4-112-113z"></path></svg>
                            <div className="link__content">&ensp; Sản phẩm yêu thichs</div>
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="link__arrow" size="20" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"></path></svg>
                        </Link>
                        <Link to="" className="link">
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" size="24" className="link__icon" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M360 64H152c-22.002 0-40 17.998-40 40v344l144-64 144 64V104c0-22.002-17.998-40-40-40z"></path></svg>
                            <div className="link__content">&ensp; Sản phẩm mua sau</div>
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="link__arrow" size="20" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"></path></svg>
                        </Link>
                    </div>
                    <div className="group">
                        <Link to="" className="link">
                            <img srcset="https://salt.tikicdn.com/ts/upload/87/32/25/7959ecba309e1ef49f6f7360b2b8476d.png 2x, https://salt.tikicdn.com/ts/upload/ed/10/e8/7a14bc168e29faf4cd9c40c0236fb913.png 1x" alt='xa' />
                            <div className="link__content">Thông tin TikiNOW</div>
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="link__arrow" size="20" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"></path></svg>
                        </Link>
                        <Link to="" className="link">
                            <img srcset="https://salt.tikicdn.com/ts/upload/b5/33/14/09096979a40d25a2ad3976e3809ceb78.png 2x, https://salt.tikicdn.com/ts/upload/4a/d4/da/77fe4fd0c771088f7794ba3ce66782eb.png 1x" alt='xx' />
                            <div className="link__content">Thông tin Tiki Xu</div>
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="link__arrow" size="20" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"></path></svg>
                        </Link>
                    </div>
                    <div className="wrap-btn">
                        <Link to="/"><button>Đăng xuất</button></Link>
                    </div>
                </div>
            </main>
        </>
    )

}

export default AccountSetting;