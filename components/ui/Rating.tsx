"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useTranslations } from "next-intl";

function Rating() {
  const t = useTranslations("rating");

  const reviews = [
    {
      id: 4,
      name: t("review4.name"),
      role: t("review4.role"),
      text: t("review4.text"),
    },
    {
      id: 1,
      name: t("review1.name"),
      role: t("review1.role"),
      text: t("review1.text"),
    },
    {
      id: 2,
      name: t("review2.name"),
      role: t("review2.role"),
      text: t("review2.text"),
    },
    {
      id: 3,
      name: t("review3.name"),
      role: t("review3.role"),
      text: t("review3.text"),
    },
  ];

  return (
    <div className="w-full flex flex-col items-center justify-center py-20 ">
      <div className="w-[90%] max-w-6xl relative">
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          loop
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          className="pb-16"
        >
          {reviews.map((review) => (
            <SwiperSlide key={review.id}>
              <div className="bg-white dark:bg-[#1e1e1e] border border-gray-200 dark:border-[#333] shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl p-6 flex flex-col justify-between h-[380px] relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24  from-blue-50 to-transparent dark:from-blue-900/20 rounded-full -translate-y-12 translate-x-12 opacity-70 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10">
                  <p className="text-gray-700 dark:text-gray-200 text-sm leading-relaxed mb-4 line-clamp-5">
                    {review.text}
                  </p>

                  <div className="flex items-center text-yellow-400 text-base mb-4">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className="mr-1" />
                    ))}
                  </div>
                </div>

                <div className="relative z-10 pt-4 border-t border-gray-100 dark:border-gray-700">
                  <h4 className="font-semibold text-gray-900 dark:text-white text-lg">
                    {review.name}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    {review.role}
                  </p>
                </div>
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-500/20 rounded-2xl transition-all duration-300 pointer-events-none"></div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="absolute -bottom-10 left-0 right-0 flex justify-center gap-4 mt-4">
          <div>
            <FaChevronLeft className="text-sm group-hover:scale-110 transition-transform duration-200" />
          </div>
          <div>
            <FaChevronRight className="text-sm group-hover:scale-110 transition-transform duration-200" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rating;
