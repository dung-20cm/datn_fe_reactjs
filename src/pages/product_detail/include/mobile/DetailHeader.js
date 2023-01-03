import React from 'react';
import { Link } from 'react-router-dom';

function DetailHeader() {
    return (
        <div className="m_detail-header">
            <div className="m_d-inner-top">
                <Link to="/category" className="left-header">
                    <img alt='.' src="https://frontend.tikicdn.com/_mobile-next/static/img/icons/backWhite.svg"/>
                </Link>
                <div className="right-header">
                    <Link to="/" className="img-cart1">
                        <img alt="." src="https://frontend.tikicdn.com/_mobile-next/static/img/icons/cart.svg"/>
                    </Link>
                    <Link to="/" className="more-wrapper">
                        <img alt="." src="https://frontend.tikicdn.com/_mobile-next/static/img/icons/moreWhite.svg"/>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default DetailHeader;