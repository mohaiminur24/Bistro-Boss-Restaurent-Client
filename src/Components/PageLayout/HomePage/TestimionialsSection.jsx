import React, { useEffect, useState } from "react";
import SectionTitle from "../../ShareAbleComponents/SectionTitle";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { FaQuoteLeft } from "react-icons/fa";
import { Navigation } from "swiper";

const TestimionialsSection = () => {
  const [review, setReview] = useState(null);
  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => setReview(data));
  }, []);

  return (
    <div>
      <SectionTitle heading="testimonials" subheading="What Our Clients Say" />
      <div className="my-10">
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {review &&
            review.map((rv) => (
              <SwiperSlide>
                <div className="w-4/5 mx-auto flex flex-col justify-center items-center">
                  <Rating style={{ maxWidth: 150 }} value={rv.rating} />
                    <div className="my-5 text-5xl"><FaQuoteLeft/></div>
                    <p className="text-sm text-center">{rv.details}</p>
                    <h1 className="text-3xl font-bold text-yellow-700 mt-3 font-Inter">{rv.name}</h1>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TestimionialsSection;
