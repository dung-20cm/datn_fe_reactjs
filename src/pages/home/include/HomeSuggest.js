import React, { useState, useEffect } from "react";
import Images from "../../../components/Image/Images";
import { Link } from "react-router-dom";
import categoryApi from "../../../api/CategoryService";
import Skeleton from "react-loading-skeleton";
import productApi from "../../../api/ProductService";

function HomeSuggest() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingProduct, setLoadingProduct] = useState(true);
  const [products, setProducts] = useState([]);
  const [defaultCate, setDefaultCate] = useState(true);

  const getCategories = async (params) => {
    const response = await categoryApi.getListsCategory(params);
    setCategories(response.data);
    setLoading(false);
  };

  const [tabNum, setTabNum] = useState("");

  function changeTab(tabNumber) {
    let title = categories.map((item) => {
      item.tab = item.id === tabNumber;
      setTabNum(tabNumber);
      return item;
    });
    setCategories(title);
  }

  const getProducts = async (params) => {
    const response = await productApi.getListsProducts(params);
    setProducts(response.data);
    setLoadingProduct(false);
  };

  useEffect(() => {
    getProducts();
    getCategories();
  }, []);

  const [deal, setDeal] = useState(false);
  const getSuggestTitle = () => {
    return (
      <>
        <div className="suggestion__title">
          <div className="inner">
            <div className="group d-flex">
              <div className="icon">
                <i className="ripple"></i>
              </div>
              <h2>Gợi ý hôm nay</h2>
            </div>
          </div>
          {/* <h2>Gợi ý hôm nay</h2> */}

          <div className="suggestion__title-list">
            {defaultCate ? (
              <>
                {categories.map((item, i) => {
                  return i < 8 ? (
                    <div
                      key={i}
                      className={`tab ${
                        item.id == categories[0].id ? "active" : ""
                      }`}
                      onClick={() => {
                        changeTab(item.id);
                        setDefaultCate(false);
                      }}
                    >
                      <Images alt="test" src={item.c_avatar} />
                      <div className="tab-text fs-13">{item.c_name}</div>
                    </div>
                  ) : null;
                })}
              </>
            ) : (
              <>
                {categories.map((item, i) => {
                  return i < 8 ? (
                    <div
                      key={i}
                      className={`tab ${item.tab ? "active" : ""}`}
                      onClick={() => changeTab(item.id)}
                    >
                      <Images alt="test" src={item.c_avatar} />
                      <div className="tab-text fs-13">{item.c_name}</div>
                    </div>
                  ) : null;
                })}
              </>
            )}
          </div>
        </div>
        <div className="suggestion__product">
          <div className="content">
            <div className="dashboard-product--item">
              {defaultCate ? (
                <>
                  {products.map((item2, i) => {
                    {
                      return (
                        <Link
                          key={i}
                          to={`/${item2.pro_slug}/${item2.id}`}
                          className="product-item"
                        >
                          <div
                            className={`product-item--style ${
                              !deal ? "not-style" : ""
                            }`}
                          >
                            <div className="thumbnail">
                              <div className="thumbnail--product-img">
                                <Images src={item2.pro_avatar} alt="333" />
                              </div>
                            </div>
                            <div className="infor">
                              {!deal && (
                                <>
                                  <div className="name">
                                    <h3 className="fs-10">{item2.pro_name}</h3>
                                  </div>
                                  <div
                                    className={`price-discount ${
                                      item2.prodiscount_value !== 0
                                        ? "has-discount"
                                        : ""
                                    }`}
                                  >
                                    <div className="price-discount__price">
                                      {item2.pro_price.toLocaleString()} ₫
                                    </div>
                                  </div>
                                </>
                              )}
                              {deal && (
                                <>
                                  <div className="deal">
                                    <div
                                      className={`price-discount ${
                                        item2.prodiscount_value !== 0
                                          ? "has-discount"
                                          : ""
                                      }`}
                                    >
                                      <div className="price-discount__price">
                                        {item2.pro_price.toLocaleString()} ₫
                                      </div>
                                      <div className="price-discount__discount">
                                        {item2.pro_discount_value
                                          ? item2.pro_discount_value + "%"
                                          : ""}
                                      </div>
                                    </div>
                                  </div>
                                </>
                              )}
                            </div>
                          </div>
                        </Link>
                      );
                    }
                  })}
                </>
              ) : (
                <>
                  {products.map((item2, i) => {
                    {
                      if (item2.pro_category_id == tabNum) {
                        return (
                          <Link
                            key={i}
                            to={`/${item2.pro_slug}/${item2.id}`}
                            className="product-item"
                          >
                            <div
                              className={`product-item--style ${
                                !deal ? "not-style" : ""
                              }`}
                            >
                              <div className="thumbnail">
                                <div className="thumbnail--product-img">
                                  <Images src={item2.pro_avatar} alt="333" />
                                </div>
                              </div>
                              <div className="infor">
                                {!deal && (
                                  <>
                                    <div className="name">
                                      <h3 className="fs-10">
                                        {item2.pro_name}
                                      </h3>
                                    </div>
                                    <div
                                      className={`price-discount ${
                                        item2.prodiscount_value !== 0
                                          ? "has-discount"
                                          : ""
                                      }`}
                                    >
                                      <div className="price-discount__price">
                                        {item2.pro_price.toLocaleString()} ₫
                                      </div>
                                    </div>
                                  </>
                                )}
                                {deal && (
                                  <>
                                    <div className="deal">
                                      <div
                                        className={`price-discount ${
                                          item2.prodiscount_value !== 0
                                            ? "has-discount"
                                            : ""
                                        }`}
                                      >
                                        <div className="price-discount__price">
                                          {item2.pro_price.toLocaleString()} ₫
                                        </div>
                                        <div className="price-discount__discount">
                                          {item2.pro_discount_value
                                            ? item2.pro_discount_value + "%"
                                            : ""}
                                        </div>
                                      </div>
                                    </div>
                                  </>
                                )}
                              </div>
                            </div>
                          </Link>
                        );
                      }
                    }
                  })}
                </>
              )}
            </div>
          </div>
          <Link to="/" className="view-more">
            Xem thêm
          </Link>
        </div>
      </>
    );
  };
  return (
    <div className="cm-width">
      <div className={`suggestion`}>
        {loadingProduct === false ? (
          getSuggestTitle()
        ) : (
          <div
            className="body-loading-cate"
            style={{ padding: "10px 15px", display: "flex" }}
          >
            <div
              className="body-slide--list"
              style={{
                display: "flex",
                flexDirection: "column",
                width: "auto",
                marginRight: "20px",
              }}
            >
              <Skeleton
                count={1}
                height={50}
                width={100}
                style={{ display: "inline-block" }}
              />
              <Skeleton
                count={1}
                height={20}
                width={100}
                style={{ display: "inline-block" }}
              />
            </div>
            <div
              className="body-slide--list"
              style={{
                display: "flex",
                flexDirection: "column",
                width: "auto",
                marginRight: "20px",
              }}
            >
              <Skeleton
                count={1}
                height={50}
                width={100}
                style={{ display: "inline-block" }}
              />
              <Skeleton
                count={1}
                height={20}
                width={100}
                style={{ display: "inline-block" }}
              />
            </div>
            <div
              className="body-slide--list"
              style={{
                display: "flex",
                flexDirection: "column",
                width: "auto",
                marginRight: "20px",
              }}
            >
              <Skeleton
                count={1}
                height={50}
                width={100}
                style={{ display: "inline-block" }}
              />
              <Skeleton
                count={1}
                height={20}
                width={100}
                style={{ display: "inline-block" }}
              />
            </div>
            <div
              className="body-slide--list"
              style={{
                display: "flex",
                flexDirection: "column",
                width: "auto",
                marginRight: "20px",
              }}
            >
              <Skeleton
                count={1}
                height={50}
                width={100}
                style={{ display: "inline-block" }}
              />
              <Skeleton
                count={1}
                height={20}
                width={100}
                style={{ display: "inline-block" }}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
export default HomeSuggest;