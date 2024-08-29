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
  imgUrl: string;
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
          {data.map(({ id, image, tagline, title, imgUrl, button }) => (
            <SwiperSlide key={id}>
                 <div
                  className={`h-[100vh] w-full relative center cover bg-no-repeat flex flex-col-reverse md:flex-row gap-4 justify-center items-center`}
                  style={{background: `url(${image})`}}
                >
                  <div className="text-center">
                    <p className="text-3xl sm:text-6xl lg:text-6xl mb-5 font-bold uppercase tracking-tighter text-white">
                      {title}
                    </p>
                    {tagline && (
                      <p className="text-md sm:text-xl lg:text-2xl font-medium text-white mb-10">
                        {tagline}
                      </p>
                    )}
                    {button.length > 0 ? (
                      
                        <SliderButtons button={button} />
                    ) : null}
                  </div>
                  <div className="bg-teal-200 rounded-full bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10">
                    <Image src={imgUrl} width={500} height={620} alt="image"/>
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
