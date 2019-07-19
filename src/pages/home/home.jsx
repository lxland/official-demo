import React, {Component} from 'react';
import './home.css';
import Header from '@/components/header/header';
import Footer from '@/components/footer/footer';

import SwiperBanner from "./banner";

export default class Home extends Component {
    componentDidMount(){
       
    }
    
    render() {
        return (
            <div>
                <Header />
                <div className="container">
                    <div className="banner">
                        <SwiperBanner />
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}