import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";
import categoryApi from "../../../api/CategoryService";

const settingsSlide = {
  slidesPerView: 10,
  navigation: true,
  modules: [Navigation],
  className: "category-swiper",
};

function HomeCategory() {
  const [categoriesHome, SetCategoriesHome] = useState([]);
  const [loadingCategoryHome, SetLoadingCategoryHome] = useState(true);

  useEffect(() => {
    getCategoriesHome();
  }, []);

  const getCategoriesHome = async (params) => {
    params = {
      status: 1,
      hot: 1,
    };
    const response = await categoryApi.getListsCategory(params);
    SetCategoriesHome(response.data);
    SetLoadingCategoryHome(false);
  };

  return (
    <div className="category">
      {loadingCategoryHome === true ? (
        <div
          className="loading-category category-swiper"
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Skeleton
            style={{ marginRight: "10px" }}
            count={1}
            height={20}
            width={100}
          />
          <Skeleton
            style={{ marginRight: "10px" }}
            count={1}
            height={20}
            width={100}
          />
          <Skeleton
            style={{ marginRight: "10px" }}
            count={1}
            height={20}
            width={100}
          />
          <Skeleton
            style={{ marginRight: "10px" }}
            count={1}
            height={20}
            width={100}
          />
          <Skeleton
            style={{ marginRight: "10px" }}
            count={1}
            height={20}
            width={100}
          />
        </div>
      ) : (
        <Swiper {...settingsSlide}>
          {categoriesHome.length > 0 &&
            categoriesHome.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <div className="category-item">
                    <Link to={"/category/" + item.c_slug + "/" + item.id}>
                      <span className="position-relative">{item.c_name}</span>
                    </Link>
                  </div>
                </SwiperSlide>
              );
            })}
        </Swiper>
      )}
    </div>
  );
}
export default HomeCategory;
