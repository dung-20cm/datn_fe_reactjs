import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';

const data = [
    {
        id: 1,
        title: "Tất cả đơn",

    },
    {
        id: 2,
        title: "Chờ thanh toán",

    },
    {
        id: 3,
        title: "Đang xử lý",

    },
    {
        id: 4,
        title: "Đang vận chuyển",

    },
    {
        id: 5,
        title: "Đã giao",

    },
    {
        id: 6,
        title: "Đã hủy",

    },
    {
        id: 7,
        title: "EVoucher",

    },

]

function OrderManagementMob() {
    return (
        <>
            <header className="header-as-title">
                <Link to="/" >
                    <button className="btn-back">
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" size="30" height="30" width="30" xmlns="http://www.w3.org/2000/svg"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path></svg>
                    </button>
                </Link>
                <div className="mob-as-title">Đơn hàng của tôi</div>
            </header>
            <main className="main-as">
                <Swiper >
                    <SwiperSlide key={data.id}>
                        <div className="ord-container">
                            <Link to="">
                                <span className="ord-title">{data.title}</span>
                            </Link>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </main>
        </>
    )

}

export default OrderManagementMob;