"use client";
import heroBgImage1 from "@/assets/img/herobaner/beach.jpg";
import heroBgImage2 from "@/assets/img/herobaner/herobanner__seo__2.jpg";

import heroBgImage31 from "@/assets/img/herobaner/beach.jpg";
import heroBgImage32 from "@/assets/img/herobaner/skyline.jpg";
import heroBgImage33 from "@/assets/img/herobaner/slider_33.jpg";
import BrandBadge from "@/components/shared/badges/BrandBadge";
import Hero3Slide from "@/components/shared/hero-banner/Hero3Slide";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Hero3 = ({ type }) => {
  const slides = [
    {
      title:
        type === 2 ? (
          <>
            Unlock the World of{" "}
            <span className="ht__gradient__bg">Global Citizenship</span>
          </>
        ) : (
          <>
            <span className="ht__white__bg">Unlock</span> the World of{" "}
            <span className="ht__gradient__bg">Global </span>{" "}
            <span className="text__gradient">Citizenship</span>
          </>
        ),
      desc: "Transform your lifestyle with elite citizenship programs designed to give you and your family unmatched global mobility and freedom.",
      path: "/allohcitizenshipprogram",
      img: type === 2 ? heroBgImage1 : heroBgImage31,
    },
    {
      title:
        type === 2 ? (
          <>
            Invest in Your{" "}
            <span className="ht__gradient__bg">Future Residency</span>
          </>
        ) : (
          <>
            <span className="ht__white__bg">Invest</span> in Your{" "}
            <span className="ht__gradient__bg">Future</span>{" "}
            <span className="text__gradient">Residency</span>
          </>
        ),
      desc: "Discover residency programs that open doors to new markets, secure environments, and unparalleled access to global networks.",
      path: "/allohresidencyprogram",
      img: type === 2 ? heroBgImage33 : heroBgImage32,
    },
    {
      title:
        type === 2 ? (
          <>
            Build Wealth through{" "}
            <span className="ht__gradient__bg">Real Estate Investments</span>
          </>
        ) : (
          <>
            <span className="ht__white__bg">Build</span> Wealth through{" "}
            <span className="ht__gradient__bg">Real Estate</span>{" "}
            <span className="text__gradient">Investments</span>
          </>
        ),
      desc: "Leverage global real estate investments to grow and protect your wealth while enhancing your lifestyle.",
      path: "/property",
      img: type === 2 ? heroBgImage2 : heroBgImage33,
    },
  ];
  return (
    <div className="herobanner herobanner--3">
      <div className="herobanner__wrapper">
        <Swiper
          className="herobanner__slider__active slider__bg__position"
          grabCursor={true}
          slidesPerView={1}
          navigation={true}
          modules={[Navigation]}
        >
          {slides?.map((slide, idx) => (
            <SwiperSlide
              key={idx}
              className="herobanner__single  position-relative"
              style={{ background: `url('${slide?.img.src}')` }}
            >
              <Hero3Slide slide={slide} />
            </SwiperSlide>
          ))}

          <div className="slider__controls__wrap slider__controls__pagination slider__controls__arrows herobanner__arrow__1 herobanner__arrow__1--2">
            <div
              className={`swiper-button-next arrow-btn ${
                type === 2 ? "0" : "arrow-btn-3"
              }`}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.4297 5.92999L20.4997 12L14.4297 18.07"
                  stroke="#fff"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M3.5 12H20.33"
                  stroke="#fff"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div
              className={`swiper-button-prev arrow-btn ${
                type === 2 ? "0" : "arrow-btn-3"
              }`}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.57031 5.92999L3.50031 12L9.57031 18.07"
                  stroke="#fff"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M20.5 12H3.67"
                  stroke="#fff"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </Swiper>
      </div>
      <BrandBadge badge={true} />
    </div>
  );
};

export default Hero3;
