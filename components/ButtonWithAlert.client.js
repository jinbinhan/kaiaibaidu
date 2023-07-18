"use client"; 
import React from 'react';
import styles from './myPage.module.css';

const button = (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" width="20px" height="30px">
    <path fill="currentColor" d="m64 448 832-320-128 704-446.08-243.328L832 192 242.816 545.472 64 448zm256 512V657.024L512 768 320 960z"></path>
</svg>);

export default function ButtonWithAlert() {
    const handleButtonClick = () => {
        const isUserLoggedIn = false; // Replace this with your actual check
        if (!isUserLoggedIn) {
            alert('请先登录！');
        }
    };

    return <button className={styles.button} onClick={handleButtonClick}>{button}</button>;
}
