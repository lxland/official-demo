import React, {Component} from 'react';
import Swiper from 'swiper/dist/js/swiper.js';
import 'swiper/dist/css/swiper.min.css';
import img1 from "@/assets/img/banner/1.jpg";
import img2 from "@/assets/img/banner/1.jpg";
import img3 from "@/assets/img/banner/1.jpg";

class SwiperContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list:[0,1,2,3,4,5,6]
        }
    }

    componentDidMount() {
        // 这里只是写死数据，一般实际项目是用接口获取数据
        // const url = '/xxxx/xxxxx'
        // fetch(url).then(res => res.json()).then(
        //     (result) => {
        //         this.setState({
        //             list: result.list
        //         })
        //     },
        //     (error) => {
        //         this.setState({
        //             error
        //         });
        //     }
        // )
        this.setState({
            list: [img1, img2, img3]
        })

        new Swiper('.swiper-container', {
            slidesPerView: 3,
            centeredSlides: true,
            virtual: {
                slides:this.state.list,
            }
        })
    }

    render() {
        return (
            <div className='new'>
                <div className="swiper-container">
                    <div className="swiper-wrapper">
                    </div>
                </div>
            </div>
        )
    }
}

export default SwiperContainer