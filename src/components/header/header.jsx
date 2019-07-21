import React from 'react';
import { Link } from 'react-router-dom';
import '@/assets/css/reset.css';
import './header.css';

export default class About extends React.Component {
    render() {
        return (
                <div className='header'>
                    <ul className='NavList'>
                        <li><Link to="/">首页</Link></li>
                        <li><Link to="/about">.网址</Link></li>
                        <li><Link to="/about">可信网站</Link></li>
                        <li><Link to="/about">ZDNS</Link></li>
                        <li><Link to="/about">易企秀</Link></li>
                        <li><Link to="/about">新闻动态</Link></li>
                        <li><Link to="/about">关于中网</Link></li>
                    </ul>
                </div>
        )
    }
}