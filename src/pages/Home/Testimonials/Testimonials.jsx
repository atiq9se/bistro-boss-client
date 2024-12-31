import SectionTitle from "../../../assets/components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const Testimonials = () => {
    return (
        <div className="my-20">
            <SectionTitle
                subHeading='What our client says'
                heading='Testimonials'
            ></SectionTitle>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                <SwiperSlide>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores illo dolore, voluptatem aperiam ipsum amet fuga? Iusto autem fuga assumenda nemo consequuntur laborum, at amet exercitationem nulla deserunt, placeat porro.</SwiperSlide>
                <SwiperSlide>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae et exercitationem obcaecati vitae voluptate? Odio impedit tenetur itaque iste laboriosam quasi, fugit adipisci eum. Eius magni voluptatum ratione explicabo accusantium.</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                <SwiperSlide>Slide 5</SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Testimonials;