import React from "react";
import NoPage from "../pages/nopage/NoPage";
import ProductDetailPage from "../pages/product_detail/ProductDetailPage";
import HomePage from "../pages/home/HomePage";
import CategoryPage from "../pages/category/CategoryPage";
// import ProductPage from '../pages/product/ProductPage';
import AccountPage from "../pages/account/AccountPage";
import AccountInfo from "../pages/account/include/AccountInfo";
import OrderManagement from "../pages/account/include/OrderManagement";
import OrderDetail from "../pages/account/include/OrderDetail";
import UpdatePhoneNum from "../pages/account/include/UpdatePhoneNum";
import UpdateEmail from "../pages/account/include/UpdateEmail";
import UpdatePassword from "../pages/account/include/UpdatePassword";
import UpdatePin from "../pages/account/include/UpdatePin";
import UpdName from "../pages/account/include/mobile/UpdName";
import UpdEmail from "../pages/account/include/mobile/UpdEmail";
import UpdNickname from "../pages/account/include/mobile/UpdNickname";
import UpdPass from "../pages/account/include/mobile/UpdPass";
import UpdPhoneNum from "../pages/account/include/mobile/UpdPhoneNum";
import UpdSex from "../pages/account/include/mobile/UpdSex";
import AccountInfoMob from "../pages/account/include/mobile/AccountInfoMob";
import AccountSetting from "../pages/account/include/mobile/AccountSetting";
import OrderManagementMob from "../pages/account/include/mobile/OrderManagementMob";
import ShopCart from "../components/common/ShopCart";
import SearchPage from "../pages/search/SearchPage";

import AskFrequentyPage from "../pages/supUser/AskFrequentyPage";
import RequireSupPage from "../pages/supUser/RequireSupPage";
import OrderingGuidePage from "../pages/supUser/OrderingGuidePage";

export const routes = () => {
  return [
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "category/:slug/:id",
      element: <CategoryPage />,
    },
    {
      path: "/:slug/:id",
      element: <ProductDetailPage />,
    },
    {
      path: "*",
      element: <NoPage />,
    },
    {
      path: "account",
      element: <AccountPage />,
    },
    {
      path: "info",
      element: <AccountInfo />,
    },
    {
      path: "/infomob",
      element: <AccountInfoMob />,
    },
    {
      path: "/accsetting",
      element: <AccountSetting />,
    },
    {
      path: "/updatepn",
      element: <UpdatePhoneNum />,
    },
    {
      path: "/updatepass",
      element: <UpdatePassword />,
    },
    {
      path: "/updatepin",
      element: <UpdatePin />,
    },
    {
      path: "/updateemail",
      element: <UpdateEmail />,
    },
    {
      path: "/order",
      element: <OrderManagement />,
    },
    {
      path: "/ordmob",
      element: <OrderManagementMob />,
    },
    {
      path: "order/orderdetail/id=:id",
      element: <OrderDetail />,
    },
    {
      path: "/updname",
      element: <UpdName />,
    },
    {
      path: "/updemail",
      element: <UpdEmail />,
    },
    {
      path: "/updnickname",
      element: <UpdNickname />,
    },
    {
      path: "/updpass",
      element: <UpdPass />,
    },
    {
      path: "/updphonenum",
      element: <UpdPhoneNum />,
    },
    {
      path: "/updsex",
      element: <UpdSex />,
    },
    {
      path: "/cart",
      element: <ShopCart />,
    },
    {
      path: "/search&q=:searchInput",
      element: <SearchPage />,
    },
    {
      path: "/askFrequenty",
      element: <AskFrequentyPage />,
    },
    {
      path: "/orderingGuide",
      element: <OrderingGuidePage />,
    },
    {
      path: "/requireSup",
      element: <RequireSupPage />,
    },
  ];
};
