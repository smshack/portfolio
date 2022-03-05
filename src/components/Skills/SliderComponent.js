import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { Component } from "react";
import Slider from "react-slick";
import _ from 'lodash'


const SliderComponent = ({value}) => {
    const settings = {
        dots: true, // 캐러셀이미지가 몇번째인지 알려주는 점을 보여줄지 정한다.
        infinite: true, // loop를 만들지(마지막 이미지-처음 이미지-중간 이미지들-마지막 이미지)
        speed: 500, // 애미메이션의 속도, 단위는 milliseconds
        slidesToShow: 4, // 한번에 몇개의 슬라이드를 보여줄 지
        slidesToScroll: 1 // 한번 스크롤시 몇장의 슬라이드를 넘길지
    };
    return (
        <div>
            <Slider {...settings}>
                {value && value.map((item,idx)=>{
                    return(
                    <div key={idx}>
                        <h3>{_.get(item,'title')}</h3>
                        <img src={require(`${_.get(item,'imgUrl')}`)} />
                    </div>
                    )
                })}
            </Slider>
        </div>
    );
};

export default SliderComponent;