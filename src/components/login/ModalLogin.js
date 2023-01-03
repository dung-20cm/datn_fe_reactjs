import { Modal } from 'antd';
import React from 'react';

export default function ModalLogin(props) {
    console.log(props.showLogin)
    return (
        <Modal
            centered
            visible={props.showLogin}
            onCancel={() => props.setShowLogin(false)}
        >
            <p>some contents...</p>
            <p>some contents...</p>
            <p>some contents...</p>
      </Modal>
    );
}