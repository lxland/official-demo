import React, {Component} from 'react';
// import ReactSwiper from 'reactjs-swiper';
import './home.css';
import Header from '@/components/header/header';
import Footer from '@/components/footer/footer';

import SwiperContainer from "./banner";

// import Bannerimg01 from "@/assets/img/banner/1.jpg";

// const ReactSwiperExample = () => {
//     const items = [{
//       image: Bannerimg01,
//       title: '图片1',
//       link: '/about'
//     }, {
//         image: Bannerimg01,
//         title: '图片2',
//         link: '/about'
//     }];
  
//     const swiperOptions = {
//       preloadImages: true,
//       autoplay: 4000,
//       autoplayDisableOnInteraction: false,
//       slidesPerView: 3,

//     };
//     return (
//       <ReactSwiper swiperOptions={swiperOptions} showPagination items={items}
//                    className="swiper-example" />
//     );
// };

export default class Home extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="container">
                    <div className="banner">
                        <SwiperContainer />
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}