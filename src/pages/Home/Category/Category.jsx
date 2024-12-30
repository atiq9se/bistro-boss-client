import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import cSlider1 from '../../../assets/home/slide1.jpg'
import cSlider2 from '../../../assets/home/slide2.jpg'
import cSlider3 from '../../../assets/home/slide3.jpg'
import cSlider4 from '../../../assets/home/slide4.jpg'
import cSlider5 from '../../../assets/home/slide5.jpg'
import SectionTitle from '../../../assets/components/SectionTitle/SectionTitle';

const Category = () => {
    return (
        <>
            <SectionTitle subHeading={"From 11:00am to 10:00pm"} heading = {"Order Online"}></SectionTitle>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper mb-10"
            >
                <SwiperSlide><img src={cSlider1} alt="" /> <h3 className='text-4xl uppercase text-center -mt-16 text-white'>Salads</h3></SwiperSlide>
                <SwiperSlide><img src={cSlider2} alt="" /></SwiperSlide>
                <SwiperSlide><img src={cSlider3} alt="" /></SwiperSlide>
                <SwiperSlide><img src={cSlider4} alt="" /></SwiperSlide>
                <SwiperSlide><img src={cSlider5} alt="" /></SwiperSlide>
                <SwiperSlide>Slide 6</SwiperSlide>
                <SwiperSlide>Slide 7</SwiperSlide>
                <SwiperSlide>Slide 8</SwiperSlide>
                <SwiperSlide>Slide 9</SwiperSlide>
            </Swiper>
        </>
    );
};

export default Category;