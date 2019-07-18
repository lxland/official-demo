import React, {Component} from 'react';
import './home.css';
import Header from '@/components/header/header';
import Footer from '@/components/footer/footer';

import New from "./banner";

export default class Home extends Component {
    componentDidMount(){
       
    }
    
    render() {
        return (
            <div>
                <Header />
                <div className="container">
                    <div className="banner">
                        <New />
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}