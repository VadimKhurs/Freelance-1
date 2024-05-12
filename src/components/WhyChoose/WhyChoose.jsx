import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import cl from './WhyChoose.module.css'
import Tax from '../../styles/img/Tax.jpg'
import title_img from "../../styles/img/title_img.png"
import MyButtonCard from "../UI/buttons/MyButton/MyButtonCard";
import './WhyChoose.css'

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, border: '3px solid rgb(111, 20, 161)', width: '3%', height:'8%', marginRight: '11px', background: '#f8f8f8', justifyContent: 'center', display:'flex'  }}
      onClick={onClick}
    >
        <img src="https://www.shareicon.net/data/48x48/2015/12/02/681008_arrows_512x512.png" style={{width: '50%', marginTop: '25%', height: 'fit-content', filter: 'brightness(0) saturate(100%) invert(14%) sepia(71%) saturate(7355%) hue-rotate(279deg) brightness(68%) contrast(95%)'}} />
    </div>
  );
}

function SamplePrevArrow() {
  return (
    <div style={{display: "none"}}/>
  );
}

function WhyChoose() {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        appendDots: dots => (
            <div style={{display:'none'}}/>
        )
    };

    return (
        <div className={cl.WhyChoose__main}>
            <div className="slider-container">
                <Slider {...settings}>
                    <div className={cl.card__main}>
                        <div className={cl.card}>
                            <img src={Tax}   />
                            <div className={cl.card__title}>
                                <img src={title_img}/>
                                <h1>Tax Saving and Filing</h1>
                            </div>
                            <p>Hassle-free annual tax planning and seamless filing.Trusted by 500+ clients.Over $5 saved last season</p>
                            <div className={cl.card__button}>
                                <MyButtonCard>LEARN MORE</MyButtonCard>
                            </div>
                        </div>
                    </div>
                    <div className={cl.card__main}>
                        <div className={cl.card}>
                            <img src={Tax}   />
                            <div className={cl.card__title}>
                                <img src={title_img}/>
                                <h1>Tax Saving and Filing</h1>
                            </div>
                            <p>Hassle-free annual tax planning and seamless filing.Trusted by 500+ clients.Over $5 saved last season</p>
                            <div className={cl.card__button}>
                                <MyButtonCard>LEARN MORE</MyButtonCard>
                            </div>
                        </div>
                    </div>
                    <div className={cl.card__main}>
                        <div className={cl.card}>
                            <img src={Tax}   />
                            <div className={cl.card__title}>
                                <img src={title_img}/>
                                <h1>Tax Saving and Filing</h1>
                            </div>
                            <p>Hassle-free annual tax planning and seamless filing.Trusted by 500+ clients.Over $5 saved last season</p>
                            <div className={cl.card__button}>
                                <MyButtonCard>LEARN MORE</MyButtonCard>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    )
}

export default WhyChoose