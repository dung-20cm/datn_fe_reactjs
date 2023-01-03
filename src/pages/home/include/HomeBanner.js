import React from "react";
import Images from "../../../components/Image/Images";
import { Link } from "react-router-dom";

function HomeBanner({ number }) {
  return (
    <div className="cm-width">
      {number === 4 && (
        <>
          <div className="home-banner--top">
            <Link to="/">
              <Images
                src="https://img.freepik.com/premium-psd/banner-sport-shoes-sale-social-media-post-facebook-web-banner-template_70055-854.jpg?w=2000"
                alt="23"
              />
            </Link>
            <Link to="/">
              <Images
                src="https://img.freepik.com/premium-psd/banner-sport-shoes-sale-social-media-post-facebook-web-banner-template_70055-853.jpg?w=2000"
                alt="123"
              />
            </Link>
            <Link to="/">
              <Images
                src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/2bbcfa99737217.5ef9be3dbb9a9.jpg"
                alt="123"
              />
            </Link>
          </div>
        </>
      )}
      {number !== 4 && (
        <>
          <div className="home-banner">
            <Link to="/">
              <Images
                src="https://img.freepik.com/premium-psd/banner-sport-shoes-sale-social-media-post-facebook-web-banner-template_70055-854.jpg?w=2000"
                alt="23"
              />
            </Link>
            <Link to="/">
              <Images
                src="https://img.freepik.com/premium-psd/banner-sport-shoes-sale-social-media-post-facebook-web-banner-template_70055-853.jpg?w=2000"
                alt="123"
              />
            </Link>
            <Link to="/">
              <Images
                src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/2bbcfa99737217.5ef9be3dbb9a9.jpg"
                alt="123"
              />
            </Link>
          </div>
        </>
      )}
    </div>
  );
}
export default HomeBanner;
