import React, { useEffect, useState, useMemo } from "react";
import Category from "./include/desktop/Category";
import Container from "./include/desktop/Container";
import Products from "./include/desktop/Products";
import { isWideScreen } from "../../helpers/screen";
import MobileCategoryHeader from "./include/mobile/MobileCategoryHeader";
import { useParams } from "react-router";
import categoryApi from "../../api/CategoryService";
import productApi from "../../api/ProductService";
import { Link, useSearchParams } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import SidebarFilter from "../../components/common/sidebar/SidebarFinter";
import SidebarMobile from "../../components/common/sidebar/SidebarMobile";
import { MenuUnfoldOutlined } from "@ant-design/icons";

function CategoryPage() {
  let { id } = useParams();
  const [category, setCategory] = useState(null);
  const [products, setProducts] = useState([]);
  const [productsAsc, setProductsAsc] = useState([]);
  const [productsDesc, setProductsDesc] = useState([]);

  const [loadingProduct, setLoadingProduct] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();

  const [show, setShow] = useState(true);
  const [sortAsc, setSortAsc] = useState(false);
  const [sortDesc, setSortDesc] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    getCategoryDetail();
    getProductsByCategory();
    setShow(true);
    setSortAsc(false);
    setSortDesc(false);
  }, [id]);

  const getCategoryDetail = async () => {
    const response = await categoryApi.findById(id);
    if (response.status === 200) {
      setCategory(response.data);
    }
  };

  const getProductsByCategory = async () => {
    let params = {
      category_id: id,
      page_size: 18,
    };
    const response = await productApi.getListsProducts(params);
    if (response.status === 200) {
      setProducts(response.data);
      setLoadingProduct(false);
    }
  };

  const handleChangeSort = (event) => {
    let sortType = event.currentTarget.getAttribute("data-sort-type");
    let sortValue = event.currentTarget.getAttribute("data-sort-value");
    const elementLinks = [...document.querySelectorAll(".tabs-list")];

    elementLinks.map((tl) => {
      tl.classList.remove("active");
    });

    // event.currentTarget.classList.add("active");
    if (sortType === "price") {
      let pramsPrice = { price: sortValue };
      setSearchParams({ ...pramsPrice });
      console.log("-------- sortValue", sortValue);
    }

    if (sortValue === "asc") {
      handleSortAsc();
    } else if (sortValue === "desc") {
      handleSortDesc();
    } else if (!sortValue) {
      event.currentTarget.classList.remove("active");
    }
  };
  console.log("---searchParams", searchParams);

  const handleSortAsc = () => {
    const sortedArr = [...products].sort((a, b) =>
      a.pro_price > b.pro_price ? 1 : -1
    );
    setProductsAsc(sortedArr);
    console.log("--Asc", productsAsc);
    setSortAsc(true);
    setShow(false);
    setSortDesc(false);
    return productsAsc;
  };

  const handleSortDesc = () => {
    const sortedArr = [...productsAsc].reverse();
    setProductsDesc(sortedArr);
    console.log("--Desc", productsDesc);
    setSortAsc(false);
    setShow(false);
    setSortDesc(true);
    return productsDesc;
  };

  //   css open sidebar mobile
  const [openSidebarMobile, setOpenSidebarMobile] = useState(false);

  const handleSidebarMobile = () => {
    if (openSidebarMobile) {
      setOpenSidebarMobile(false);
      console.log("Open Sidbar", openSidebarMobile);
    } else {
      setOpenSidebarMobile(true);
      console.log("Close Sidbar", openSidebarMobile);
    }
  };

  return (
    <main className={isWideScreen() ? "desktop" : "mobile"}>
      {/* {isWideScreen() && (
      )} */}
      <>
        <div className="container">
          <Category category={category} />
          <div className="category-view">
            {isWideScreen() && <SidebarFilter />}
            <div className="category-right">
              <div className="search-summary">
                <div className="title d-flex">
                  <h1>{category?.c_name || <Skeleton count={1} />}</h1>
                  {!isWideScreen() && (
                    <div className="select-brand" onClick={handleSidebarMobile}>
                      <MenuUnfoldOutlined />
                      <SidebarMobile open={openSidebarMobile} />
                    </div>
                  )}
                </div>

                <div className="search-summary-category">
                  <div className="summary-top">
                    <div className="top-tabs">
                      <div className="tabs-list">
                        {/* {isWideScreen() && (
                        )} */}
                        <>
                          <Link
                            to={`?price=asc`}
                            // {`?${searchParams}`}
                            onClick={handleChangeSort}
                            className={`tabs-list ${
                              sortAsc === true ? "active" : ""
                            }`}
                            data-sort-type="price"
                            data-sort-value={"asc"}
                          >
                            Giá Thấp Đến Cao
                          </Link>
                          <Link
                            to={`?price=desc`}
                            // {`?${searchParams}`}
                            onClick={handleChangeSort}
                            className={`tabs-list ${
                              sortDesc === true ? "active" : ""
                            }`}
                            data-sort-type="price"
                            data-sort-value={"desc"}
                          >
                            Giá Cao Đến Thấp
                          </Link>
                        </>
                        {/* {!isWideScreen() && (
                          <>
                            <Link to="category" className="active">
                              Phổ Biến
                            </Link>
                            <Link to="category" className="active">
                              Bán Chạy
                            </Link>
                            <Link to="category" className="active">
                              Hàng Mới
                            </Link>
                            <Link to="category" className="active">
                              Giá{" "}
                              <svg
                                width="14"
                                height="14"
                                viewBox="0 0 14 14"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M3.43306 0.308058C3.67714 0.0639806 4.07286 0.0639806 4.31694 0.308058L6.81694 2.80806C7.06102 3.05214 7.06102 3.44786 6.81694 3.69194C6.57286 3.93602 6.17714 3.93602 5.93306 3.69194L4.5 2.25888V10.125C4.5 10.4702 4.22018 10.75 3.875 10.75C3.52982 10.75 3.25 10.4702 3.25 10.125V2.25888L1.81694 3.69194C1.57286 3.93602 1.17714 3.93602 0.933058 3.69194C0.688981 3.44786 0.688981 3.05214 0.933058 2.80806L3.43306 0.308058ZM9.5 11.7411V3.25C9.5 2.90482 9.77982 2.625 10.125 2.625C10.4702 2.625 10.75 2.90482 10.75 3.25V11.7411L12.1831 10.3081C12.4271 10.064 12.8229 10.064 13.0669 10.3081C13.311 10.5521 13.311 10.9479 13.0669 11.1919L10.5669 13.6919C10.3229 13.936 9.92714 13.936 9.68306 13.6919L7.18306 11.1919C6.93898 10.9479 6.93898 10.5521 7.18306 10.3081C7.42714 10.064 7.82286 10.064 8.06694 10.3081L9.5 11.7411Z"
                                  fill="#38383D"
                                ></path>
                              </svg>
                            </Link>
                          </>
                        )} */}
                      </div>
                    </div>
                  </div>
                </div>

                {loadingProduct === true ? (
                  <div className="product-container">
                    <div className="suggestion__product">
                      <div className="content">
                        <div
                          className=""
                          style={{ display: "flex", padding: "0 10px" }}
                        >
                          <div
                            className="dashboard-product--item"
                            style={{ marginTop: "10px", marginRight: "10px" }}
                          >
                            <Skeleton height={100} />
                            <Skeleton
                              height={10}
                              style={{ marginTop: "10px" }}
                            />
                            <Skeleton
                              height={10}
                              style={{ marginTop: "5px" }}
                            />
                            <Skeleton
                              height={10}
                              style={{ marginTop: "5px" }}
                            />
                          </div>
                          <div
                            className="dashboard-product--item"
                            style={{ marginTop: "10px", marginRight: "10px" }}
                          >
                            <Skeleton height={100} />
                            <Skeleton
                              height={10}
                              style={{ marginTop: "10px" }}
                            />
                            <Skeleton
                              height={10}
                              style={{ marginTop: "5px" }}
                            />
                            <Skeleton
                              height={10}
                              style={{ marginTop: "5px" }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <>
                    <Products
                      products={products}
                      id={id}
                      productsAsc={productsAsc}
                      productsDesc={productsDesc}
                      show={show}
                      sortAsc={sortAsc}
                      sortDesc={sortDesc}
                    />
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </>

      {/* {!isWideScreen() &&
                <>
                    <h2>Mobile</h2>
                    <>
                        <MobileCategoryHeader/>
                        <Container/>
                    </>
                </>
            } */}
    </main>
  );
}

export default CategoryPage;
