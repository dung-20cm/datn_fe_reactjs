import React, { useState } from "react";
import RegisterDesktop from "./RegisterDesktop";
import LogInDesktop from "./LogInDesktop";
import { useTheme } from "../utils/useTheme";

export default () => {
  const [isShow, setIsShow] = useState(true);
  const [isRegister, setIsRegister] = useState(false);

  const theme = useTheme();
  return (
    <>
      {isShow ? (
        <div className={`login ${theme}`}>
          <div className="login-container">
            <div className="login-content">
              <button className="button-close" onClick={() => setIsShow(false)}>
                <img
                  src="https://salt.tikicdn.com/ts/upload/fe/20/d7/6d7764292a847adcffa7251141eb4730.png"
                  alt="sdf"
                />
              </button>
              <div className="login-left">
                <div className="login-left-content">
                  {isRegister === false ? (
                    <LogInDesktop setIsRegister={setIsRegister} />
                  ) : (
                    <RegisterDesktop setIsRegister={setIsRegister} />
                  )}
                </div>
              </div>
              <div className="login-right">
                <img src={"/img/img-login.jpeg"} alt="decorLogin" />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};
