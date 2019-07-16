import React from 'react';
import '@/assets/css/reset.css';
import './header.css';

export default class About extends React.Component {
    render() {
        return (
            <div>
                <div className='header'>
                    <ul className='NavList'>
                        <li><a href='/'>首页</a></li>
                        <li><a href="/about">关于我们</a></li>
                    </ul>
                </div>
            </div>
        )
    }
}