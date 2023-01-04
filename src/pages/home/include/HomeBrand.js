import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Images from "../../../components/Image/Images";

import { useTheme } from "../../../components/utils/useTheme";

function HomeBrand() {
  const [brand, setBrand] = useState([]);

  useEffect(() => {
    const data = [
      {
        src: "https://theme.hstatic.net/1000110092/1000546214/14/brand_img1.png?v=71",
        title: "Puma",
        des: "It appears you are located in Vietnam, however you are about to enter the United States online store. Please note, items in the United States online store can only ship to addresses within United States.",
        link: "https://www.instagram.com/puma/",
      },
      {
        src: "https://theme.hstatic.net/1000110092/1000546214/14/brand_img2.png?v=71",
        title: "Li-ning",
        des: "Prompted by the desire to outfit Chinese athletes in a national brand at the Olympic games, esteemed gymnast Li-Ning founded his eponymous label in 1990. Since its inception, the label has flourished into an international sportswear leader, exhibiting its authentic take on athleisure on the world stage. ",
        link: "https://www.instagram.com/lining.official/",
      },
      {
        src: "https://theme.hstatic.net/1000110092/1000546214/14/brand_img4.png?v=71",
        title: "Converse",
        des: "Their most influential model, the Chuck Taylor All Star high-top—named after the Basketball Hall of Famer—is a quintessentially American classic favored by basketball players and iconic members of rock subcultures alike. This signature men’s canvas sneaker has continued to evolve through a panoply of sought-after collaborations with brands including Comme des Garçons and Maison Margiela",
        link: "https://www.instagram.com/converse/",
      },
      {
        src: "https://theme.hstatic.net/1000110092/1000546214/14/brand_img5.png?v=71",
        title: "Adidas",
        des: "Four tournaments in the making. Lionel Messi prepares for FIFA World Cup 2022™ with an impossible rondo.",
        link: "https://www.instagram.com/adidas/",
      },
      {
        src: "https://theme.hstatic.net/1000110092/1000546214/14/brand_img6.png?v=71",
        title: "Nike",
        des: "This holiday, give more than a gift Give the joy of possibility. Inspire a special someone to chase that runner's high. To dance like nobody's watching To feel stronger. To be better.",
        link: "https://www.instagram.com/nike/",
      },

      {
        src: "https://cdn.elly.vn/uploads/2021/05/09222258/nhung-dieu-thu-vi-ve-giay-new-balance.2.jpg",
        title: "New-Balance",
        des: "A holographic emblem can be found on the collar and an embroidered orange Jumpman is stitched onto the white leather tongue",
        link: "https://www.instagram.com/newbalance/",
      },
    ];
    setBrand(data);
  }, []);

  const theme = useTheme();
  return (
    <>
      <div className="cm-width">
        <div className={`famous-brand ${theme}`}>
          <div className="row">
            <div className="famous-brand--header">
              <div className="main-title d-flex fs-20">
                <Images
                  src="https://salt.tikicdn.com/ts/upload/33/0f/67/de89fab36546a63a8f3a8b7d038bff81.png"
                  alt="aaa"
                />
                <div className="main-title__text">Thương Hiệu Chính Hãng</div>
              </div>
              <button>
                <Link to="/" className="see-more">
                  Xem thêm &gt;&gt;&gt;
                </Link>
              </button>
            </div>
            <div className="brand-slide">
              {brand.map((item, index) => {
                const { src, title, des, link } = item;
                return (
                  <div className="col-lg-4 col-md-6 col-12" key={index}>
                    <a className="sc-category" href={`${link}`} target="_blank">
                      <div className="card-media">
                        <img src={src} alt="imgBrand" />
                      </div>
                      <div className="card-content">
                        <h5>{title}</h5>
                        <p>{des}</p>
                      </div>
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default HomeBrand;
