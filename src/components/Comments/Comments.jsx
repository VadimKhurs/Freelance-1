import React from 'react'
import cl from './Comments.module.css'
import Slider from "react-slick";
import wakar from '../../styles/img/wakar.jpg'

function Comments() {
    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 1000,
        cssEase: "linear"
      };

    const all_comments = [
        {id:1, name: 'Reema Singla', jobTitle: 'Lead Analyst, Fidelity Investment', descriptionText: 'Recently did my first investment thorugh the app and I loved thier personalised walkthrough at all steps. Waiting for my form 16 this year and I will also file it thoguh you guys', date: '14th march, 2024'},
        {id:2, name: 'Sourabrata Samanta', jobTitle: 'SDE II, Accenture', descriptionText: 'I\'m impressed with Savingz\'s personalized approach. They analyzed my unique financial situation and provided tailored tax strategies that saved me a substantial amount.', date: '12th february, 2024'}, 
        {id:3, name: 'Aayush Chaudhary', jobTitle: 'Senior AI Engineer, Dream11', descriptionText: 'I\'m grateful for Savingz\'s exceptional customer service. They were responsive, professional, and went above and beyond to address my tax-related queries.', date: '26th October, 2023'}, 
        {id:4, name: 'Piyush Chittara', jobTitle: 'Lead Analyst, Fidelity Investment', descriptionText: 'Great initiative, helped understand claimable benefits and save taxes 🙌 Loved the team and prompt reverts.', date: '29th april, 2022'}
    ]

    return (
        <div className={cl.comments__main}>
            <Slider {...settings}>
                {all_comments.map((comment) => 
                    <div key={comment.id}>
                        <div className={cl.comment}>
                            <div className={cl.stats__main}>
                                <img src={wakar}/>
                                <div className={cl.stats}>
                                    <h3>{comment.name}</h3>
                                    <h4>{comment.jobTitle}</h4>
                                </div>
                                <div className={cl.date}>
                                    <p>{comment.date}</p>
                                </div>
                            </div>
                            <div className={cl.description}>
                                {comment.descriptionText}    
                            </div>
                        </div> 
                    </div>
                )}
            </Slider>
        </div>
    )
}

export default Comments