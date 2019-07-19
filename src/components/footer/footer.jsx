import React from 'react';
import { Link } from 'react-router-dom';
import './footer.less';
import knetcode from '@/assets/img/knetCode.png'

export default class About extends React.Component {
    render() {
        return (
            <div className='footer'>
                <div className='fcontent'>
                    <div className="f-section f-w-code">
                        <img src={knetcode} alt=""/>
                        <p>扫码关注中网动态</p>
                    </div>
                    <div className="f-section f-contact">
                        <p>5x8小时客户服务热线：<span className="red">400-080-0066</span></p>
                        <p>咨询热线：<span className="orange">010-56592268</span></p>
                        <div className="verify">
                            {/* <script id="IPv6Script" type="text/javascript" src="https://ipv6.knet.cn/logo.dll?sn=ES190318O9Z7123470&amp;w=47"></script> */}
                            <img src="https://ipv6.knet.cn/common/images/certlogo.png" height="47" ></img>
                            <div className="kxverify">
                                {/* <script id="KXScript" src="http://kxlogo.knet.cn/seallogo.dll?sn=2010042600100001005&amp;h=47"></script> */}
                                <img id="rmwvvgnr4jy89qzi1" className="" height="47px" alt="可信网站" src="http://rr.knet.cn/static/images/newLogo/9Y3M.png"></img>
                            </div>
                        </div>
                    </div>

                    <div className="f-section f-product-box">
                        <ul className="f-product">
                            <li>
                                <p><i className="iconfont">&#xe60d;</i></p>
                                <p className="f-text">
                                    <Link to="/">
                                        <span>网址用户登录</span>
                                    </Link>
                                </p>
                            </li>
                            <li>
                                <p><i className="iconfont">&#xe60e;</i></p>
                                <p className="f-text">
                                    <Link to="/">
                                        <span>注册服务机构</span>
                                    </Link>
                                </p>
                            </li>
                            <li>
                                <p><i className="iconfont">&#xe610;</i></p>
                                <p className="f-text">
                                    <Link to="/">
                                        <span>服务升级</span>
                                    </Link>
                                </p>
                            </li>
                            <li>
                                <p><i className="iconfont">&#xe60f;</i></p>
                                <p className="f-text f-last">
                                    <Link to="/">
                                        <span>意见反馈</span>
                                    </Link>
                                </p>
                            </li>
                        </ul>
                        <div className="f-copyright">
                            <p>电信与信息服务业务经营许可证：京ICP证101069号 京ICP备09107995号 京公网安备11010802021188号 北龙中网（北京）科技有限责任公司 版权所有</p>
                            <p>中文域名：北龙中网.网址</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}