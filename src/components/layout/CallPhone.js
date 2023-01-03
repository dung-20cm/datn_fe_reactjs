import React from "react";
import "./CallPhone.css";

const CallPhone = () => {
  return (
    <>
      <section className="call-buton">
        <a className="cc-calto-action-ripple" href="tel:0385044649">
          <i className="fa fa-phone"></i>
          <span className="num">0385.044.649</span>
        </a>
      </section>
    </>
  );
};

export default CallPhone;
