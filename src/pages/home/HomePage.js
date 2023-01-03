import React, { useState, useEffect } from "react";
import HomeBanner from "./include/HomeBanner";
import FamousCategory from "./include/FamousCategory";
import HomeSuggest from "./include/HomeSuggest";
import HomeBrand from "./include/HomeBrand";
import HomeDeal from "./include/HomeDeal";
import HomeCategory from "./include/HomeCategory";
import Images from "../../components/Image/Images";
import { isWideScreen } from "../../helpers/screen";
import MenuMobile from "../../components/layout/MenuMobile";
import MobileHeader from "../../components/layout/MobileHeader";
import HomeSearchMobile from "../../components/common/HomeSearchMobile";
import LoginMobile from "../../components/login/LoginMobile";

function HomePage() {
  const [menu, setMenu] = useState(1);
  const [search, setSearch] = useState(false);
  const [login, setLogin] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className={isWideScreen() ? "desktop" : "mobile"}>
      <>
        {isWideScreen() && <HomeCategory />}
        <HomeDeal />
        {isWideScreen() && <HomeBanner />}
        <FamousCategory check={true} />
        <HomeSuggest />
        <HomeBrand />
      </>

      {/* {!isWideScreen() && (
        <>
          {search && <HomeSearchMobile search={search} setSearch={setSearch} />}
          {!search && !login && (
            <>
              <MobileHeader search={search} setSearch={setSearch} />
              <HomeDeal />
              <FamousCategory check={true} />
              <HomeBanner number={4} />
              <HomeBrand />
              <FamousCategory check={false} />
              <HomeSuggest status={false} />
              <div className="home__background">
                <Images
                  src="https://salt.tikicdn.com/ts/banner/df/e4/7e/45fd347a5b3479a0a16b8a8f1b164819.png"
                  alt="bg"
                />
              </div>
            </>
          )}
          {login && <LoginMobile login={login} setLogin={setLogin} />}

          {!login && (
            <MenuMobile
              menu={menu}
              setMenu={setMenu}
              login={login}
              setLogin={setLogin}
            />
          )}
        </>
      )} */}
    </main>
  );
}
export default HomePage;
