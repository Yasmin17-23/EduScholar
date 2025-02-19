import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import BannerSlider from './BannerSlider';

import bannerImg1 from '../../assets/images/banner/banner-img-1.jpeg'
import bannerImg2 from '../../assets/images/banner/banner-img-2.jpeg'
import bannerImg3 from '../../assets/images/banner/banner-img-3.jpeg'

const Banner = () => {
  return (
    <div className='container py-8 px-5'>
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      loop={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      <SwiperSlide>
        <BannerSlider
          image={bannerImg1}
          text='Funding Dreams, One Scholarship at a Time'>
        </BannerSlider>
      </SwiperSlide>
      <SwiperSlide>
        <BannerSlider
          image={bannerImg2}
          text='Your Education, Our Support'>
        </BannerSlider>
      </SwiperSlide>
      <SwiperSlide>
        <BannerSlider
          image={bannerImg3}
          text='Unlock Your Future With Scholarships'>
        </BannerSlider>
      </SwiperSlide>
      

    </Swiper>
  </div>
  )
}

export default Banner