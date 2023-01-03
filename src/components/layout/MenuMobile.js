import { CommentOutlined, FireOutlined, UserOutlined } from '@ant-design/icons';
import React from 'react'
import Images from '../Image/Images'

function MenuMobile(props) {
    const changeMenu = (number) => {
        props.setMenu(number);
        if(number === 4 || number === 5) {
            props.setLogin(true);
        }
    }
    return (
        <div className="menu__mobile">
            <div className={props.menu === 1?'active':''} onClick={() => changeMenu(1)}>
                <Images src={props.menu === 1?"https://frontend.tikicdn.com/_mobile-next/static/img/home/navigation/active-home.png":"https://frontend.tikicdn.com/_mobile-next/static/img/home/navigation/home.png"} alt="Home"/>
                <span className='fs-10'>Trang Chủ</span>
            </div>
            <div className={props.menu === 2 ?'active':''} onClick={() => changeMenu(2)}>
                <Images src={props.menu === 2?"https://frontend.tikicdn.com/_mobile-next/static/img/home/navigation/active-cate.png":"https://frontend.tikicdn.com/_mobile-next/static/img/home/navigation/cate.png"} alt="Danh muc"/>
                <span className='fs-10'>Danh mục</span>
            </div>
            <div  className={props.menu === 3?'active':''} onClick={() => changeMenu(3)}>
            <FireOutlined style={{color:props.menu === 3?'color: rgb(13, 92, 182)':'#8C8C8C'}}/>
                <span className='fs-10'>Lướt</span>
            </div>
            <div  className={props.menu === 4?'active':''} onClick={() => changeMenu(4)}>
            <CommentOutlined style={{color:props.menu === 4?'color: rgb(13, 92, 182)':'#8C8C8C'}}/>
                <span className='fs-10'>Chat</span>
            </div>
            <div className={props.menu === 5?'active':''} onClick={() => changeMenu(5)}>
            <UserOutlined style={{color:props.menu === 5?'color: rgb(13, 92, 182)':'#8C8C8C'}}/>
                <span className='fs-10'>Cá nhân</span>
            </div>
        </div>
    )
}

export default MenuMobile
