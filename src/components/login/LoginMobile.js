import { ArrowLeftOutlined} from '@ant-design/icons';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function LoginMobile(props) {
    const [loginBy, setLoginBy] = useState('sdt');

    const changeLogin = () => {
        if(loginBy === 'sdt') {
            setLoginBy('mail')
        } else {
            setLoginBy('sdt');
        }
    }

    return (
        <div className='login-mobile'>
            <header>
                <a href='/'>
                    <ArrowLeftOutlined />
                </a>
                <img src="https://salt.tikicdn.com/ts/upload/38/1a/0c/c9160ec942ae0348aae9bdad444f6ac5.jpg" alt="anh"/>
            </header>
            <div className='login-form'>
                <h3 className='fs-24'>Xin chào,</h3>
                <p className='fs-14'>Đăng nhập hoặc tạo tài khoản</p>
                <input placeholder={loginBy === 'sdt'?'Số điện thoại':'abc@gmail.com'} type={loginBy === 'sdt'? 'text':'email'}/>
                <Link to='/info'><button className='continue w-100'>Tiếp tục</button></Link>
                <div className='login-by' onClick={() => changeLogin()}>Đăng nhập bằng email</div>
                <p className='continue-by'> Hoặc tiếp tục bằng</p>
                <div className='icon'>
                    <img src="https://salt.tikicdn.com/ts/upload/30/c4/e4/5c2b91f593e76ce4dedd85273e5a152b.png" alt='fb'/>
                    <img src='https://salt.tikicdn.com/ts/upload/09/13/93/407938979ce5af2e22251cd979bf5e9f.png' alt='gg'/>
                </div>
                <p className='footer'>Bằng việc tiếp tục bạn phải chấp nhận điều khoản sử dụng</p>
            </div>
        </div>
    )
}