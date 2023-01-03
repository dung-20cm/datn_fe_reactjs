import React, { useEffect } from "react";
import AccountInfo from "./include/AccountInfo";
// import Category from './include/Category';
// import OrderDetail from './include/OrderDetail';
// import OrderManagement from './include/OrderManagement';
// import SideNavBar from './include/SideNavBar';
// import { useRoutes } from "react-router-dom";
// import {Link } from "react-router-dom";
// import links from '../account/include/SideNavBar';
import { isWideScreen } from "../../helpers/screen";
import AccountSetting from "./include/mobile/AccountSetting";

import { useTheme } from "../../components/utils/useTheme";

function AccountPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const theme = useTheme();
  return (
    <>
      {isWideScreen() && (
        <div className="container">
          <div className="page-container">
            <AccountInfo />
          </div>
        </div>
      )}

      {!isWideScreen() && (
        <>
          <AccountSetting />
        </>
      )}
    </>
  );
}

export default AccountPage;
