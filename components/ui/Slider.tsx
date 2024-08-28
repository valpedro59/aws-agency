"use client "
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { sliderData } from "@/lib/data";

// Swiper components, modules and styles
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SliderButtons from "./SliderButtons";

interface slide {
  id: number;
  title: string;
  tagline: string;
  image: string;
  button: ButtonProps[];
}

interface ButtonProps {
  id: number;
  text: string;
  link: string;
  type: string;
}
interface SliderProps {
  data: slide[];
}

const Slider: React.FC<SliderProps> = ({data}) => {
  return (
    <section className="w-full">
      <div className="h-full">
        <Swiper 
          navigation
          pagination={{ type: "bullets", clickable: true }}
          autoplay={true}
          loop={true}
          modules={[Autoplay, Navigation, Pagination]}
        >
          {data.map(({ id, image, tagline, title, button }) => (
            <SwiperSlide key={id}>
                 <div
                  className={`h-[100vh] w-full relative center cover bg-no-repeat flex flex-col justify-center items-center`}
                  style={{background: `url(${image})`}}
                >
                  <div className="text-center">
                    <p className="text-3xl sm:text-6xl lg:text-8xl mb-5 font-bold uppercase tracking-tighter text-white">
                      {title}
                    </p>
                    {tagline && (
                      <p className="text-md sm:text-xl lg:text-3xl font-semibold text-white">
                        {tagline}
                      </p>
                    )}
                    {button.length > 0 ? (
                      <p className=" bg-gray-800 inline-block px-9 py-2 rounded-full text-white mt-10 lg:mt-20">
                        <SliderButtons button={button} />
                      </p>
                    ) : null}
                  </div>
                </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Slider;
