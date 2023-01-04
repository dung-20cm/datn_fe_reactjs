import React, { useState, useEffect } from "react";
import HomeBanner from "./include/HomeBanner";
import FamousCategory from "./include/FamousCategory";
import HomeSuggest from "./include/HomeSuggest";
import HomeBrand from "./include/HomeBrand";
import HomeDeal from "./include/HomeDeal";
import HomeCategory from "./include/HomeCategory";
import { isWideScreen } from "../../helpers/screen";

function HomePage() {
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
    </main>
  );
}
export default HomePage;
