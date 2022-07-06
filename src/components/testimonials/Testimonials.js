import React from 'react';
import './Testimonials.css';
import AVTR1 from '../../assets/avatar1.jpg';
import AVTR2 from '../../assets/avatar2.jpg';
import AVTR3 from '../../assets/avatar3.jpg';
import AVTR4 from '../../assets/avatar4.jpg';

// import Swiper core and required modules
import { Navigation, Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

//import Swiper Styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const data = [
  {
    avatar: AVTR1,
    name: 'Tina Snow',
    review: 'Lorem Ipsum dolor sit amet consectetur adipisicing elit. Eaoque eos voluptatem eius dolorem maiores nihil ducimus at rem ullam reprehenderit quidem quia deserut, molestia, eligendi amet',
  },
  {
    avatar: AVTR2,
    name: 'Chris Brown',
    review: 'Lorem Ipsum dolor sit amet consectetur adipisicing elit. Eaoque eos voluptatem eius dolorem maiores nihil ducimus at rem ullam reprehenderit quidem quia deserut, molestia, eligendi amet',
  },
  {
    avatar: AVTR3,
    name: 'Aegon Tagraryen',
    review: 'Lorem Ipsum dolor sit amet consectetur adipisicing elit. Eaoque eos voluptatem eius dolorem maiores nihil ducimus at rem ullam reprehenderit quidem quia deserut, molestia, eligendi amet',
  },
  {
    avatar: AVTR4,
    name: 'Selena Gomez',
    review: 'Lorem Ipsum dolor sit amet consectetur adipisicing elit. Eaoque eos voluptatem eius dolorem maiores nihil ducimus at rem ullam reprehenderit quidem quia deserut, molestia, eligendi amet',
  },

]

const Testimonials = () => {
  return (
    <section id="testimonials"> 
      <h5> Review from Clients </h5> 
      <h2> Testimonials </h2>

      <Swiper className='container testimonials__container'
      //install swiper modules
      modules={[ Navigation, Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev'}}
      pagination={{ clickable: true}}>
        {
          data.map(({avatar, name, review}, index) => {
            return (
              <SwiperSlide key={index} className='testimonial'>
          <div className='client__avatar'>
            <img src={avatar} alt={name} />
            </div>
            <h5 className='client__name'> {name} </h5>
            <small className='client__review'>
            {review}
            </small>
        </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials