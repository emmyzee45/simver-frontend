import React from "react";
import avatarIImg from "../../assets/1.jpg";
import avatarIIImg from "../../assets/1.jpg";
import avatarIIIImg from "../../assets/1.jpg";
import avatarIVImg from "../../assets/1.jpg";
import avatarVImg from "../../assets/1.jpg";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import {
  Navigation,
  Pagination,
  EffectCoverflow,
  Autoplay,
} from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

SwiperCore.use([Autoplay]);
export default function Testimonial() {
  return (
    <>
      <section>
        <div className="main">
          <h4 className="font-bold text-center sm:text-[40px] text-[24px] mb-2">
            TESTIMONIAL
          </h4>
          <Swiper
            loop={true}
            loopFillGroupWithBlank={true}
            pagination={{
              clickable: true,
            }}
            autoplay={{ delay: 3000 }}
            navigation={true}
            modules={[EffectCoverflow, Pagination, Navigation]}
            className="bg-[#EF5242] text-white"
            effect={"coverflow"}
            coverflowEffect={{
              rotate: 10,
              stretch: 50,
              depth: 200,
              modifier: 1,
              slideShadows: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 150,
              },
            }}
          >
            <SwiperSlide className="my-[20px]">
              <div className="flex flex-col items-center p-10">
                <div className="w-[105px] h-[105px] bg-red-500 flex justify-center rounded-full items-center">
                  <img
                    src={avatarIImg}
                    alt="testimonial-avatar"
                    className="w-[100px] h-[100px] rounded-full"
                  />
                </div>
                <p className="my-5 text-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Similique praesentium voluptate natus sunt, molestiae dolorum?
                </p>
                <h6 className="mt-5">- Lorem ipsum dolor sit amet.</h6>
              </div>
            </SwiperSlide>

            <SwiperSlide className="my-[20px]">
              <div className="flex flex-col items-center p-10">
                <div className="w-[105px] h-[105px] bg-red-500 flex justify-center rounded-full items-center">
                  <img
                    src={avatarIImg}
                    alt="testimonial-avatar"
                    className="w-[100px] h-[100px] rounded-full"
                  />
                </div>
                <p className="my-5 text-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Similique praesentium voluptate natus sunt, molestiae dolorum?
                </p>
                <h6 className="mt-5">- Lorem ipsum dolor sit amet.</h6>
              </div>
            </SwiperSlide>

            <SwiperSlide className="my-[20px]">
              <div className="flex flex-col items-center p-10">
                <div className="w-[105px] h-[105px] bg-red-500 flex justify-center rounded-full items-center">
                  <img
                    src={avatarIImg}
                    alt="testimonial-avatar"
                    className="w-[100px] h-[100px] rounded-full"
                  />
                </div>
                <p className="my-5 text-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Similique praesentium voluptate natus sunt, molestiae dolorum?
                </p>
                <h6 className="mt-5">- Lorem ipsum dolor sit amet.</h6>
              </div>
            </SwiperSlide>

            <SwiperSlide className="my-[20px]">
              <div className="flex flex-col items-center p-10">
                <div className="w-[105px] h-[105px] bg-red-500 flex justify-center rounded-full items-center">
                  <img
                    src={avatarIImg}
                    alt="testimonial-avatar"
                    className="w-[100px] h-[100px] rounded-full"
                  />
                </div>
                <p className="my-5 text-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Similique praesentium voluptate natus sunt, molestiae dolorum?
                </p>
                <h6 className="mt-5">- Lorem ipsum dolor sit amet.</h6>
              </div>
            </SwiperSlide>

            <SwiperSlide className="my-[20px]">
              <div className="flex flex-col items-center p-10">
                <div className="w-[105px] h-[105px] bg-red-500 flex justify-center rounded-full items-center">
                  <img
                    src={avatarIImg}
                    alt="testimonial-avatar"
                    className="w-[100px] h-[100px] rounded-full"
                  />
                </div>
                <p className="my-5 text-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Similique praesentium voluptate natus sunt, molestiae dolorum?
                </p>
                <h6 className="mt-5">- Lorem ipsum dolor sit amet.</h6>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
}

// import React from "react";
// import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa6";

// import { useEffect, useRef, useState } from "react";
// import { motion } from "framer-motion";
// import { IconContext } from "react-icons";

// const Testimonial = () => {
//   const [width, setWidth] = useState(0);
//   const container = useRef();

//   useEffect(() => {
//     setWidth(container.current.scrollWidth - container.current.offsetWidth);
//   }, []);

//   return (
//     <div className="w-full bg-[#EF5242]">
//       <div className="max-w-[1440px] mx-auto">
//         <div
//           className="px-[4%] py-[5%] bg-[#EF5242] font-ubuntu text-primary "
//           id="projects"
//         >
//           <h2 className="text-center text-[30px] font-semibold">
//             TESTIMONIALS
//           </h2>
//           <h4 className="text-center sm:mb-10 mb-12">OPINION ABOUT US</h4>

//           <div>
//             <motion.div className="px-5 sm:px-0">
//               <motion.div
//                 ref={container}
//                 className="w-[100%] flex  cursor-grab overflow-hidden"
//               >
//                 <motion.div
//                   className="inline-flex"
//                   drag="x"
//                   dragConstraints={{ right: 0, left: -width }}
//                   whileTap={{ cursor: "grabbing" }}
//                 >
//                   <div className="flex gap-10">
//                     <div className="w-[400px]  h-[250px] relative ">
//                       <div className="single relative font-ubuntu flex flex-col gap-3 items-center text-center  justify-center w-[400px] h-[250px] rounded-[45px] border-[7px] border-primary ">
//                         <h5 className="z-10">
//                           DongMi offers a range of services to help you navigate
//                           the digital world. Our AI-powered virtual assistant
//                           provides
//                         </h5>
//                         <div className="flex flex-row gap-3 items-center ">
//                           <div className="w-[50px] h-[50px] bg-black border-[2px] border-primary rounded-full"></div>
//                           <div className="text-primary flex flex-col items-start ">
//                             <h6 className="font-bold ">JSimver</h6>
//                           </div>
//                         </div>
//                       </div>
//                       <div className="w-[126px] h-[100px] absolute  -top-[35px] pt-[35px] -left-[35px] flex justify-center ">
//                         <IconContext.Provider
//                           value={{ size: "60px", color: "white" }}
//                         >
//                           <FaQuoteLeft />
//                         </IconContext.Provider>
//                       </div>
//                       <div className="w-[126px] h-[100px]  absolute -bottom-[35px] -right-[35px] ">
//                         <div className="w-full h-[100px] flex justify-center pt-[5px]">
//                           <IconContext.Provider
//                             value={{ size: "60px", color: "white" }}
//                           >
//                             <FaQuoteRight />
//                           </IconContext.Provider>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="w-[400px]  h-[250px] relative ">
//                       <div className="single relative font-ubuntu flex flex-col gap-3 items-center text-center  justify-center w-[400px] h-[250px] rounded-[45px] border-[7px] border-primary ">
//                         <h5 className="z-10">
//                           DongMi offers a range of services to help you navigate
//                           the digital world. Our AI-powered virtual assistant
//                           provides
//                         </h5>
//                         <div className="flex flex-row gap-3 items-center ">
//                           <div className="w-[50px] h-[50px] bg-black border-[2px] border-primary rounded-full"></div>
//                           <div className="text-primary flex flex-col items-start ">
//                             <h6 className="font-bold ">JSimver</h6>
//                           </div>
//                         </div>
//                       </div>
//                       <div className="w-[126px] h-[100px] absolute  -top-[35px] pt-[35px] -left-[35px] flex justify-center ">
//                         <IconContext.Provider
//                           value={{ size: "60px", color: "white" }}
//                         >
//                           <FaQuoteLeft />
//                         </IconContext.Provider>
//                       </div>
//                       <div className="w-[126px] h-[100px]  absolute -bottom-[35px] -right-[35px] ">
//                         <div className="w-full h-[100px] flex justify-center pt-[5px]">
//                           <IconContext.Provider
//                             value={{ size: "60px", color: "white" }}
//                           >
//                             <FaQuoteRight />
//                           </IconContext.Provider>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="w-[400px]  h-[250px] relative ">
//                       <div className="single relative font-ubuntu flex flex-col gap-3 items-center text-center  justify-center w-[400px] h-[250px] rounded-[45px] border-[7px] border-primary ">
//                         <h5 className="z-10">
//                           DongMi offers a range of services to help you navigate
//                           the digital world. Our AI-powered virtual assistant
//                           provides
//                         </h5>
//                         <div className="flex flex-row gap-3 items-center ">
//                           <div className="w-[50px] h-[50px] bg-black border-[2px] border-primary rounded-full"></div>
//                           <div className="text-primary flex flex-col items-start ">
//                             <h6 className="font-bold ">JSimver</h6>
//                           </div>
//                         </div>
//                       </div>
//                       <div className="w-[126px] h-[100px] absolute  -top-[35px] pt-[35px] -left-[35px] flex justify-center ">
//                         <IconContext.Provider
//                           value={{ size: "60px", color: "white" }}
//                         >
//                           <FaQuoteLeft />
//                         </IconContext.Provider>
//                       </div>
//                       <div className="w-[126px] h-[100px]  absolute -bottom-[35px] -right-[35px] ">
//                         <div className="w-full h-[100px] flex justify-center pt-[5px]">
//                           <IconContext.Provider
//                             value={{ size: "60px", color: "white" }}
//                           >
//                             <FaQuoteRight />
//                           </IconContext.Provider>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="w-[400px]  h-[250px] relative ">
//                       <div className="single relative font-ubuntu flex flex-col gap-3 items-center text-center  justify-center w-[400px] h-[250px] rounded-[45px] border-[7px] border-primary ">
//                         <h5 className="z-10">
//                           DongMi offers a range of services to help you navigate
//                           the digital world. Our AI-powered virtual assistant
//                           provides
//                         </h5>
//                         <div className="flex flex-row gap-3 items-center ">
//                           <div className="w-[50px] h-[50px] bg-black border-[2px] border-primary rounded-full"></div>
//                           <div className="text-primary flex flex-col items-start ">
//                             <h6 className="font-bold ">JSimver</h6>
//                           </div>
//                         </div>
//                       </div>
//                       <div className="w-[126px] h-[100px] absolute  -top-[35px] pt-[35px] -left-[35px] flex justify-center ">
//                         <IconContext.Provider
//                           value={{ size: "60px", color: "white" }}
//                         >
//                           <FaQuoteLeft />
//                         </IconContext.Provider>
//                       </div>
//                       <div className="w-[126px] h-[100px]  absolute -bottom-[35px] -right-[35px] ">
//                         <div className="w-full h-[100px] flex justify-center pt-[5px]">
//                           <IconContext.Provider
//                             value={{ size: "60px", color: "white" }}
//                           >
//                             <FaQuoteRight />
//                           </IconContext.Provider>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="w-[400px]  h-[250px] relative ">
//                       <div className="single relative font-ubuntu flex flex-col gap-3 items-center text-center  justify-center w-[400px] h-[250px] rounded-[45px] border-[7px] border-primary ">
//                         <h5 className="z-10">
//                           DongMi offers a range of services to help you navigate
//                           the digital world. Our AI-powered virtual assistant
//                           provides
//                         </h5>
//                         <div className="flex flex-row gap-3 items-center ">
//                           <div className="w-[50px] h-[50px] bg-black border-[2px] border-primary rounded-full"></div>
//                           <div className="text-primary flex flex-col items-start ">
//                             <h6 className="font-bold ">JSimver</h6>
//                           </div>
//                         </div>
//                       </div>
//                       <div className="w-[126px] h-[100px] absolute  -top-[35px] pt-[35px] -left-[35px] flex justify-center ">
//                         <IconContext.Provider
//                           value={{ size: "60px", color: "white" }}
//                         >
//                           <FaQuoteLeft />
//                         </IconContext.Provider>
//                       </div>
//                       <div className="w-[126px] h-[100px]  absolute -bottom-[35px] -right-[35px] ">
//                         <div className="w-full h-[100px] flex justify-center pt-[5px]">
//                           <IconContext.Provider
//                             value={{ size: "60px", color: "white" }}
//                           >
//                             <FaQuoteRight />
//                           </IconContext.Provider>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="w-[400px]  h-[250px] relative ">
//                       <div className="single relative font-ubuntu flex flex-col gap-3 items-center text-center  justify-center w-[400px] h-[250px] rounded-[45px] border-[7px] border-primary ">
//                         <h5 className="z-10">
//                           DongMi offers a range of services to help you navigate
//                           the digital world. Our AI-powered virtual assistant
//                           provides
//                         </h5>
//                         <div className="flex flex-row gap-3 items-center ">
//                           <div className="w-[50px] h-[50px] bg-black border-[2px] border-primary rounded-full"></div>
//                           <div className="text-primary flex flex-col items-start ">
//                             <h6 className="font-bold ">JSimver</h6>
//                           </div>
//                         </div>
//                       </div>
//                       <div className="w-[126px] h-[100px] absolute  -top-[35px] pt-[35px] -left-[35px] flex justify-center ">
//                         <IconContext.Provider
//                           value={{ size: "60px", color: "white" }}
//                         >
//                           <FaQuoteLeft />
//                         </IconContext.Provider>
//                       </div>
//                       <div className="w-[126px] h-[100px]  absolute -bottom-[35px] -right-[35px] ">
//                         <div className="w-full h-[100px] flex justify-center pt-[5px]">
//                           <IconContext.Provider
//                             value={{ size: "60px", color: "white" }}
//                           >
//                             <FaQuoteRight />
//                           </IconContext.Provider>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </motion.div>
//               </motion.div>
//             </motion.div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Testimonial;
