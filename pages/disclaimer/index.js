import React from 'react';
import Link from 'next/link';
import styles from './myPage.module.css';  // 引入样式文件
import LoginForm from 'components/LoginForm.client.js';//引入LoginForm组件
import LoginForm2 from 'components/LoginForm2.client.js';
import ButtonWithAlert  from 'components/ButtonWithAlert.client.js'; 
import 'app/globals.css'


// 定义样式
const style = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f3f3f3',
    },
    img: {
        maxHeight: '100%',
    },
};

function TopItem({ children, isActive, href, icon }) {
    return (
        <Link href={href}>
            <span className={styles.topMenuItem}>
                {icon && <span className={styles.icon}>{icon}</span>}
                <span>{children}</span>
            </span>
        </Link>
    );
}

function BottomMenuItem({ children, href, icon }) {
    return (
        <Link href={href}>
            <span className={styles.bottomMenuItem}>
                {icon && <span className={styles.icon}>{icon}</span>}
                <span>{children}</span>
            </span>
        </Link>
    );
}

export default function myPage() {
    // 这是你的SVG图标
    const icon0 = (<svg data-v-0a2928de="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
        <path data-v-0a2928de="" fill="currentColor" d="M480 480V128a32 32 0 0 1 64 0v352h352a32 32 0 1 1 0 64H544v352a32 32 0 1 1-64 0V544H128a32 32 0 0 1 0-64h352z"></path></svg>
    );
    const icon1 = (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
        <path data-v-0a2928de="" d="M860.374 120.716l-25.555-25.416c-17.677-17.697-48.791-17.757-66.587-0.04l-22.396 22.316-0.2-0.22-206.521 207.821 4.319 90.862 90.902 4.319 177.646-178.931 0.12 0.085 51.385-51.35c8.724-8.778 13.763-20.876 13.763-33.174 0.001-15.256-10.562-29.933-16.876-36.272z m-242.264 257.886l-35.519-1.72-1.72-35.633 164.844-165.929 37.273 37.178-164.878 166.104z m216.389-217.374l-22.436 22.416-37.233-37.153 22.321-22.216c3.074-3.1 5.599-3.139 8.714 0.02l25.555 25.396c2.12 2.119 4.559 6.398 4.879 7.278 0 1.56-0.68 3.12-1.8 4.259zM284.563 490.046h146.852c11.318 0 20.477-9.178 20.477-20.476 0-11.298-9.158-20.477-20.477-20.477h-146.852c-11.317 0-20.477 9.179-20.477 20.477 0.001 11.298 9.16 20.476 20.477 20.476zM705.124 599.725h-420.561c-11.317 0-20.477 9.158-20.477 20.476s9.159 20.456 20.477 20.456h420.561c11.317 0 20.477-9.138 20.477-20.456 0-11.317-9.16-20.476-20.477-20.476zM705.124 752.156h-420.561c-11.317 0-20.477 9.159-20.477 20.477 0 11.317 9.159 20.476 20.477 20.476h420.561c11.317 0 20.477-9.158 20.477-20.476s-9.16-20.477-20.477-20.477z" p-id="2754" fill="#ffffff"></path><path data-v-0a2928de="" d="M822.462 377.122c-11.318 0-20.477 9.204-20.477 20.477v441.541c0 34.153-40.397 61.909-74.586 61.909h-477.75c-34.153 0-61.948-27.755-61.948-61.909v-654.276c0-34.154 27.8-61.908 61.989-61.908h313.42c11.318 0 20.477-9.178 20.477-20.476s-9.158-20.476-20.477-20.476h-313.42c-56.79 0-102.941 46.151-102.941 102.86V839.14c0 56.706 46.156 102.861 102.9 102.861h477.75c56.79 0 115.539-46.155 115.539-102.861v-441.541c0-11.273-9.199-20.477-20.476-20.477z" p-id="2755" fill="#ffffff"></path></svg>
    );
    const icon2 = (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
        <path data-v-0a2928de="" fill="currentColor" d="M160 256H96a32 32 0 0 1 0-64h256V95.936a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32V192h256a32 32 0 1 1 0 64h-64v672a32 32 0 0 1-32 32H192a32 32 0 0 1-32-32V256zm448-64v-64H416v64h192zM224 896h576V256H224v640zm192-128a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32zm192 0a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32z"></path>
    </svg>);
    const icon3 = (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
        <path data-v-0a2928de="" fill="currentColor" d="M79.36 432.256 591.744 944.64a32 32 0 0 0 35.2 6.784l253.44-108.544a32 32 0 0 0 9.984-52.032l-153.856-153.92a32 32 0 0 0-36.928-6.016l-69.888 34.944L358.08 394.24l35.008-69.888a32 32 0 0 0-5.952-36.928L233.152 133.568a32 32 0 0 0-52.032 10.048L72.512 397.056a32 32 0 0 0 6.784 35.2zm60.48-29.952 81.536-190.08L325.568 316.48l-24.64 49.216-20.608 41.216 32.576 32.64 271.552 271.552 32.64 32.64 41.216-20.672 49.28-24.576 104.192 104.128-190.08 81.472L139.84 402.304zM512 320v-64a256 256 0 0 1 256 256h-64a192 192 0 0 0-192-192zm0-192V64a448 448 0 0 1 448 448h-64a384 384 0 0 0-384-384z"></path>
    </svg>);
    const icon4 = (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
        <path data-v-0a2928de="" fill="currentColor" d="M432 928a48 48 0 1 1 0-96 48 48 0 0 1 0 96zm320 0a48 48 0 1 1 0-96 48 48 0 0 1 0 96zM96 128a32 32 0 0 1 0-64h160a32 32 0 0 1 31.36 25.728L320.64 256H928a32 32 0 0 1 31.296 38.72l-96 448A32 32 0 0 1 832 768H384a32 32 0 0 1-31.36-25.728L229.76 128H96zm314.24 576h395.904l82.304-384H333.44l76.8 384z"></path>
    </svg>);
    const icon5 = (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
        <path data-v-0a2928de="" fill="currentColor" d="M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"></path><path data-v-0a2928de="" fill="currentColor" d="M480 256a32 32 0 0 1 32 32v256a32 32 0 0 1-64 0V288a32 32 0 0 1 32-32z"></path><path data-v-0a2928de="" fill="currentColor" d="M480 512h256q32 0 32 32t-32 32H480q-32 0-32-32t32-32z"></path></svg>);
    const icon6 = (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
        <path data-v-0a2928de="" fill="currentColor" d="M926.784 480H701.312A192.512 192.512 0 0 0 544 322.688V97.216A416.064 416.064 0 0 1 926.784 480zm0 64A416.064 416.064 0 0 1 544 926.784V701.312A192.512 192.512 0 0 0 701.312 544h225.472zM97.28 544h225.472A192.512 192.512 0 0 0 480 701.312v225.472A416.064 416.064 0 0 1 97.216 544zm0-64A416.064 416.064 0 0 1 480 97.216v225.472A192.512 192.512 0 0 0 322.688 480H97.216z"></path>
    </svg>);
    const icon7 = (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
        <path data-v-0a2928de="" fill="currentColor" d="M928.99 755.83 574.6 203.25c-12.89-20.16-36.76-32.58-62.6-32.58s-49.71 12.43-62.6 32.58L95.01 755.83c-12.91 20.12-12.9 44.91.01 65.03 12.92 20.12 36.78 32.51 62.59 32.49h708.78c25.82.01 49.68-12.37 62.59-32.49 12.91-20.12 12.92-44.91.01-65.03zM554.67 768h-85.33v-85.33h85.33V768zm0-426.67v298.66h-85.33V341.32l85.33.01z"></path>
    </svg>);
    const button = (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" width="20px" height="30px">
    <path fill="currentColor" d="m64 448 832-320-128 704-446.08-243.328L832 192 242.816 545.472 64 448zm256 512V657.024L512 768 320 960z"></path>
    </svg>);

    return (
        <div className={styles.container}>
            <div className={styles.sidebar}>
                <img className={styles.logo} src="/images/logo.webp" alt="logo" />
                <div use client>
                    <LoginForm buttonText="点击登陆"/>
                </div>
                <div className={styles.topMenu}>
                    <TopItem href="/chat" icon={icon0}><LoginForm buttonText="聊天窗口"/></TopItem>
                </div>
                <div className={styles.bottomMenu}>
                   {/* 增加一个小横线，颜色为白色 */}
                    {/* <div className={`line ${styles.line}`} id='2'></div> */}
                    <BottomMenuItem href="/chat" icon={icon1}><LoginForm buttonText="定制需求"/></BottomMenuItem>
                    <BottomMenuItem href="/chat" icon={icon2}><LoginForm buttonText="清除所有会话"/></BottomMenuItem>
                    <BottomMenuItem href="/chat" icon={icon3}><LoginForm buttonText="联系客服"/></BottomMenuItem>
                    <BottomMenuItem href="/chat" icon={icon4}><LoginForm2 buttonText="升级会员"></LoginForm2></BottomMenuItem>
                    <BottomMenuItem href="/chat" icon={icon5}><LoginForm buttonText="订单记录"/></BottomMenuItem>
                    <BottomMenuItem href="https://zhuanlan.zhihu.com/p/626196096" icon={icon6}>操作指南</BottomMenuItem>
                    <BottomMenuItem href="/disclaimer" icon={icon7}>免责声明</BottomMenuItem>
                    <BottomMenuItem href="/"></BottomMenuItem>
                    {/* 更多底部菜单项... */}
                </div>
            </div>
            <div className={styles.content}>
            <div style={style.container}>
            <img 
                style={style.img}
                src="images/mianze.png" 
                alt="Sample Image" 
            />
        </div>
            </div>
        </div>
    );
}
