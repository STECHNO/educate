import React from 'react';
import Slider from './slider/Slider';
import Testimonial from '../testimonial/Testimonial';
import Event from '../event/Event';
import './Home.css';
import WhyEducate from '../why_educate/WhyEducate';
import PopularCourses from './popular_courses/PopularCourses';
import ImportantFacts from './imp_facts/ImportantFacts';
import LatestNews from './latest_news/LatestNews';
import OnlineLibrary from './online_library/OnlineLibrary';

function Home() {
    return (
        <div>
            <Slider/>
            <WhyEducate/>
            <PopularCourses />
            <ImportantFacts/>
            <LatestNews/>
            <OnlineLibrary/>
            <Testimonial/>
            <Event/>
        </div>
    )
}

export default Home;
