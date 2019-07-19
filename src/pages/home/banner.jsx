import React,{Component} from 'react'
import Swiper from 'swiper/dist/js/swiper.js'
import 'swiper/dist/css/swiper.min.css'
import axios from 'axios';

class SwiperBanner extends Component{
    constructor(props){
        super(props);
        this.state={
            list:[]
        }
    }
    
    componentDidMount() {
        axios.get('http://localhost:3000/banner.json').then( (response) => {
            this.setState({
                list: response.data.data
            },()=>{
                new Swiper ('.swiper-container', {
                    loop: true,
                    slidesPerView: 1,
                    centeredSlides: true,
                    autoplay: {
                        disableOnInteraction: false,
                    },
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true,
                    },
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    }
                })  
            } )
        }).catch(e => (console.log(e)))

    }
    render(){
        let _self = this;
        let slideEl = _self.state.list.map(function(s,i){
            return (
                <div className="swiper-slide" key={i} data-i={i}>
                    <img src={s.image} alt="" title={s.title} />
                </div>
            )
        })

        return (
            <div className='new'>
                <div className="swiper-container">
                    <div className="swiper-wrapper">
                        {slideEl}
                    </div>
                    <div className="swiper-pagination"></div>
                    <div className="swiper-button-next"></div>
                    <div className="swiper-button-prev"></div>
                </div>
            </div>           
        )
    }
}

export default SwiperBanner;