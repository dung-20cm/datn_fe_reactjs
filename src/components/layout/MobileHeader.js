import React from "react";
import { Link } from "react-router-dom";
function MobileHeader(props) {
  return (
    <div className="mobile__header">
      <div className="mobile__header--logo">
        <Link to="/" title="free-ship">
          <img
            src="https://salt.tikicdn.com/ts/upload/e5/1d/22/61ff572362f08ead7f34ce410a4a6f96.png"
            alt="free"
            width="97"
            height="14"
          />
        </Link>
        <Link
          to="/"
          title="free-ship"
          style={{ scale: "3", marginBottom: "5px" }}
        >
          <img src={"/logo.svg"} alt="free" width="40" />
        </Link>
        <div>
          <Link to="/" title="free-ship">
            <img
              src="https://salt.tikicdn.com/ts/upload/c5/0b/06/88e5d7fa1a7cb51144fff2933e7269d9.png"
              alt="free"
              width="26"
              height="26"
            />
          </Link>
          <Link to="/" title="free-ship">
            <img
              src="https://salt.tikicdn.com/ts/upload/70/44/6c/a5ac520d156fde81c08dda9c89afaf37.png"
              alt="free"
              width="24"
              height="24"
            />
          </Link>
        </div>
      </div>
      <div className="mobile__header--search">
        <img
          src="https://salt.tikicdn.com/ts/upload/34/62/0c/6ae13efaff83c66f810c4c63942cf6c0.png"
          height="24"
          width="24"
          alt="search"
        />
        <input
          className="w-100"
          type="text"
          placeholder="Bạn tìm gì hôm nay?"
          onClick={() => props.setSearch(true)}
        />
      </div>
    </div>
  );
}
export default MobileHeader;
