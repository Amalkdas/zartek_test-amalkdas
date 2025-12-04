import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import { add, cartslice, rem } from "./redux/cartslice";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { current } from "@reduxjs/toolkit";
useSelector;

function Slider({ data }) {
  
  const [isindex, setisindex] = useState(0);
  const items = useSelector((state) => state.cartreducer);
  const dispatch = useDispatch();

  const swipetotheslide = useRef(null);

  const eachitemref = useRef([])

  console.log(data);
  useEffect(()=>{

 if(eachitemref.current[isindex]){
  eachitemref.current[isindex].scrollIntoView({behavior:"smooth",inline:"center"})
 }

  },[isindex])


  useEffect(()=>{
    window.scrollTo({behavior:"smooth",top:0})
  },[eachitemref.current[isindex]])

  return (
    <>
      <div
        className="main flex   w-full    gap-10  md:overflow-hidden  overflow-x-auto   px-4 justify-evenly  "
        style={{ whiteSpace: "nowrap" }}
      >
        {data.length > 0
          ? data.map((item, index) => {
              return (
                <div
                  key={index}
                  
                  className={`${
                    isindex === index
                      ? " py-2  md:flex shrink-0 flex justify-center   border-b-2 items-center border-red-600"
                      : "flex py-3 items-center  shrink-0  justify-center"
                  }`}
                >
                  {" "}
                  <p
                    key={index}
                    onClick={() => swipetotheslide.current.slideTo(index)}
                    ref={(el)=>(eachitemref.current[index] = el)}
                    className={`${
                      isindex === index
                        ? "font-semibold text-lg text-red-600 cursor-pointer "
                        : "font-semibold text-lg text-gray-600 cursor-pointer "
                    }`}
                  >
                    {item.menu_category}
                  </p>
                </div>
              );
            })
          : ""}
      </div>

      <Swiper
        onSwiper={(swiper) => (swipetotheslide.current = swiper)}
        slidesPerView={1}
        spaceBetween={30}
        onSlideChange={(Swiper) => setisindex(Swiper.activeIndex)}
      >
        {/* //used the event of swiper itself   */}
        {data.length > 0
          ? data.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <div className="w-full  p-5 flex flex-col ">
                    {item.category_dishes.map((eachitem, index) => {
                      const eachitemcount = items[eachitem.dish_id] || 0;
                      const isnotveg =
                        eachitem.dish_description.includes("meat") ||
                        eachitem.dish_description.includes("chicken") ||
                        eachitem.dish_description.includes("shrimp") ||
                        eachitem.dish_description.includes("egg") ||
                        eachitem.dish_description.includes("pork") ||
                        eachitem.dish_description.includes("rib") ||
                        eachitem.dish_description.includes("bacon");
                      return (
                        <div className="p-6 grid-cols-3  flex text-lg font-semibold border shadow-lg rounded">
                          <div className="flex flex-col  w-[60%] gap-3">
                            <div className="flex items-center gap-2">
                              {isnotveg ? (
                                <div
                                  className="bg-red-600  rounded-full shrink-0"
                                  style={{ height: "20px", width: "20px" }}
                                ></div>
                              ) : (
                                <div
                                  className="bg-green-600 shrink-0 rounded-full"
                                  style={{ height: "20px", width: "20px" }}
                                ></div>
                              )}

                              <h1 className="text-lg">{eachitem.dish_name}</h1>
                            </div>

                            <p className="text-sm font-semibold text-gray-600">
                              {eachitem.dish_currency}{" "}
                              <span>{eachitem.dish_price}</span>
                            </p>
                            <p className="text-xs font-semibold text-gray-500">
                              {eachitem.dish_description}
                            </p>
                            <div className=" flex justify-items-start">
                              {eachitem.dish_Availability === true ? (
                                <>
                                  <div className="rounded mt-2 py-3 px-6 bg-green-600 flex  items-center gap-10 text-white">
                                    <button>
                                      <FaPlus
                                        className="cursor-pointer"
                                        onClick={() =>
                                          dispatch(add(eachitem.dish_id))
                                        }
                                      />
                                    </button>
                                    <p>{eachitemcount}</p>
                                    <button>
                                      <FaMinus
                                        className="cursor-pointer"
                                        onClick={() =>
                                          dispatch(rem(eachitem.dish_id))
                                        }
                                      />
                                    </button>
                                  </div>
                                </>
                              ) : (
                                <>
                                  <p className="text-red-500 text-base">
                                    Not Available
                                  </p>
                                </>
                              )}
                            </div>
                            {eachitem.addonCat.length > 0 && (
                              <p className="text-red-600 text-base">
                                Customization Available
                              </p>
                            )}
                          </div>
                          <div className="flex w-[20%] items-center   flex-col ">
                            <p className="text-gray-600 md:flex-row items-center flex flex-col text-base">
                              {eachitem.dish_calories}{" "}
                              <span className="md:ml-2">Calories</span>
                            </p>
                          </div>
                          <div className="flex w-[20%] flex-col   items-center">
                            <img
                              src={eachitem.dish_image}
                              className="rounded object-cover"
                              style={{ height: "200px", width: "300px" }}
                              alt=""
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </SwiperSlide>
              );
            })
          : ""}
      </Swiper>
    </>
  );
}

export default Slider;
