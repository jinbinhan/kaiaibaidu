// ImageModal.js
"use client";
import { useState } from 'react';

export default function ImageModal({ buttonText = "Default Text" }) {
    const [showModal, setShowModal] = useState(false);

    const handleOpen = (e) => {
        e.preventDefault();
        setShowModal(true);
    }

    const handleClose = () => {
        setShowModal(false);
    }

    const modalStyle = {
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: '#fff',
        padding: '50px',
        zIndex: '1000',
        width: '350px',
        height: '330px',
        borderRadius: '20px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    };

    const overlayStyle = {
        position: 'fixed',
        top: '0',
        left: '0',
        right: '0',
        bottom: '0',
        backgroundColor: 'rgba(0,0,0,0.7)',
        zIndex: '1000',
    };

    const titleStyle = {
        margin: '30px 0 0px 0',
        marginBottom: '18px',
    };

    const imageStyle = {
        width: '80%',
        height: 'auto',
    };

    return (
        <div>
            <a href="" onClick={handleOpen}>{buttonText}</a>
            {showModal ? (
                <>
                    <div style={overlayStyle} onClick={handleClose}></div>
                    <div style={modalStyle}>
                        <h2 style={titleStyle}>微信扫码，联系客服</h2>
                        <img style={imageStyle} src="/images/gpt.webp" alt="" />
                        <button onClick={handleClose}>关闭</button>
                    </div>
                </>
            ) : null}
        </div>
    );
}
