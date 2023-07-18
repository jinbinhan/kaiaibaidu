"use client";
import React, { useState, useEffect } from "react";

export default function LoginForm({ buttonText }) {
  const [ImageModal, setImageModal] = useState(null);
  const [isModalLoaded, setIsModalLoaded] = useState(false);

  useEffect(() => {
    import("./ImageModal")
      .then((module) => {
        setImageModal(() => module.default);
        setIsModalLoaded(true); 
      })
      .catch((error) => console.error("Error loading ImageModal:", error));
  }, []);

  if (!isModalLoaded) {
    return React.createElement('div', null, 'Loading...');
  } else {
    const Modal = ImageModal;
    return (
      React.createElement('div', null, React.createElement(Modal, { buttonText: buttonText }, null))
    );
  }
}