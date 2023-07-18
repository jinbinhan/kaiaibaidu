"use client"; 
import { useState } from 'react';

export default function NeedModal() {
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
      width: '350px', // 调整宽度为屏幕的80%
      height: '300px', // 调整高度为屏幕的80%
      borderRadius: '20px', // 设置圆角
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
        margin: '60px 0 0px 0',
};
const imageStyle = {
    width: '80%', // Set image width to 80% of the modal width
    height: 'auto', // Keep the aspect ratio
};

  return (
      <div>
          <a href="" onClick={handleOpen}>定制需求</a>
          {showModal ? (
              <>
                  <div style={overlayStyle} onClick={handleClose}></div>
                  <div style={modalStyle}>
                      <h2 style={titleStyle}>关注微信公众号，登录使用</h2>
                      <img style={imageStyle} src="/images/qrcode.jpg" alt="" />
                      <button onClick={handleClose}>关闭</button>
                  </div>
              </>
          ) : null}
      </div>
  );
}
