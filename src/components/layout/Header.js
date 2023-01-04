import React, { useEffect, useState, useRef } from "react";
import { isWideScreen } from "../../helpers/screen";
import { Link, useNavigate } from "react-router-dom";
import Popup from "reactjs-popup";
import Login from "../login/LogIn";
import productApi from "../../api/ProductService";
import { DownOutlined } from "@ant-design/icons";
import Images from "../Image/Images";
import { useSelector } from "react-redux";

import ThemeBtn from "../ThemeBtn/ThemeBtn";
import { BASE_URL, useTheme } from "../utils/useTheme";

function Header() {
  function ShoppingCart() {
    return (
      <div className="header-cart">
        <Link to={`${isUser ? "/cart" : ""}`}>
          <div className="header-cart-shotcut">
            <div className="cart-wrapper">
              <img
                src="https://salt.tikicdn.com/ts/upload/40/44/6c/b80ad73e5e84aeb71c08e5d8d438eaa1.png"
                alt=""
                className="cart-icon"
              />
              <span className="cart-number">0</span>
            </div>
            {isWideScreen() && <span className="cart-title">Giỏ hàng</span>}
          </div>
        </Link>
      </div>
    );
  }

  const [showSearchDesktop, setShowSearchDesktop] = useState(false);
  const [hideLogout, setHideLogout] = useState(true);

  const [user, setUser] = useState();
  const [name, setName] = useState();
  const [isUser, setIsUser] = useState(false);

  const navigate = useNavigate();

  const cart = useSelector((state) => state.cartReduce.listCart);

  function getUser() {
    try {
      if (localStorage.getItem("accessToken")) {
        setIsUser(true);
        return fetch(`${BASE_URL}/auth/profile`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("accessToken"),
          },
        }).then((result) => {
          result.json().then((res) => {
            if (res.statusCode !== 401) {
              setUser(res);
              setName(res.data.name);
            } else {
              return Logout();
            }
          });
        });
      }
    } catch (e) {
      console.log("-----Expired");
    }
  }

  useEffect(() => {
    getUser();
  }, []);

  function Logout() {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("user");
    window.location.reload();
    navigate("/");
  }

  function showDropdownList() {
    return (
      <div className="dropdown-list" onMouseLeave={() => setHideLogout(true)}>
        <Link to="/info">
          <p>Thông tin cá nhân</p>
        </Link>
        <Link to="/order">
          <p>Đơn hàng của tôi</p>
        </Link>
        <Link to="/" onClick={() => Logout()}>
          <p>Đăng xuất</p>
        </Link>
      </div>
    );
  }

  const [dataList, setDataList] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [arr] = useState([]);

  const saveSearch = () => {
    arr.push({ name: searchInput });
    console.log(arr);
  };

  const getData = async () => {
    const response = await productApi.getListsProducts();
    if (response.status === 200) {
      setDataList(response.data);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  const handleClickToggleLogout = () => {
    if (hideLogout) {
      setHideLogout(false);
    } else {
      setHideLogout(true);
    }
  };

  //   topbar-copy
  const [copied, setCopied] = useState(false);
  const ref = useRef(null);

  const copyResult = () => {
    const content = ref.current.textContent;
    navigator.clipboard.writeText(content);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 3000);
  };
  const status = copied ? "copied" : "copy";
  const TopHeaderDesktop = () => {
    return (
      <>
        <div className="topbar_header">
          <div className="topbar-inner ">
            <div className="topbar-left ">
              <div className="hotline">
                <div className="icon">
                  <img src={"/img/clock.png"} />
                </div>
                <div className="hotline-content">
                  <p
                    ref={ref}
                    className={`p-first  ${status} p-phone`}
                    onClick={copyResult}
                  >
                    0385044649
                  </p>
                  <p>Hotline đặt hàng</p>
                </div>
              </div>

              <div className="hotline">
                <div className="icon">
                  <img src={"/img/clock.png"} />
                </div>
                <div className="hotline-content">
                  <p className="p-first">Thanh toán</p>
                  <p>khi nhận hàng</p>
                </div>
              </div>
            </div>
            <div className="topbar-right">
              <div className="main-header--top__right">
                {isUser ? (
                  <>
                    <div className="logged">
                      <img
                        alt="sd"
                        src="https://salt.tikicdn.com/cache/512x512/ts/avatar/b9/42/e9/5d6bd301d4a6fb334877b9ae5082f483.jpg"
                        width="32"
                        height="32"
                      />
                      <span>
                        <span className="logged-user">Tài khoản</span>
                        <span
                          className="account-label1"
                          onClick={handleClickToggleLogout}
                        >
                          <span>{name}</span>
                          <img
                            alt="s"
                            src="https://salt.tikicdn.com/ts/upload/d7/d4/a8/34939af2da1ceeeae9f95b7485784233.png"
                            width="16px"
                            height="16px"
                          />
                        </span>
                        {hideLogout ? <></> : <>{showDropdownList()}</>}
                      </span>
                    </div>
                    <div className="header-cart">
                      <Link to="/cart">
                        <div className="header-cart-shotcut">
                          <div className="cart-wrapper">
                            <img
                              src="https://salt.tikicdn.com/ts/upload/40/44/6c/b80ad73e5e84aeb71c08e5d8d438eaa1.png"
                              alt=""
                              className="cart-icon"
                            />
                            <span className="cart-number">
                              {cart ? cart.length : 0}
                            </span>
                          </div>
                          {isWideScreen() && (
                            <span className="cart-title">Giỏ hàng</span>
                          )}
                        </div>
                      </Link>
                    </div>
                  </>
                ) : (
                  <>
                    <Popup
                      modal
                      trigger={
                        <div className="header-user-shortcut">
                          <img
                            className="profile"
                            src="https://salt.tikicdn.com/ts/upload/67/de/1e/90e54b0a7a59948dd910ba50954c702e.png"
                            alt=""
                          />
                          <span className="user-style">
                            <span className="user-style__title">
                              <div>Đăng nhập/Đăng ký</div>
                            </span>
                            <span className="account-label">
                              <span>Tài khoản</span>
                              <img
                                src="https://salt.tikicdn.com/ts/upload/d7/d4/a8/34939af2da1ceeeae9f95b7485784233.png"
                                alt="arrowIcon"
                              />
                            </span>
                          </span>
                        </div>
                      }
                    >
                      <Login />
                    </Popup>

                    <div className="header-cart">
                      <Popup modal trigger={ShoppingCart()}>
                        <Login />
                      </Popup>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  const TopHeaderMobile = () => {
    return (
      <>
        <div className="topbar_header">
          <div className="topbar-inner ">
            <div className="topbar-left ">
              <div className="logo-menu">
                <div className="style-logo">
                  <Link
                    to="/"
                    className="tiki-logo"
                    onClick={() => setSearchInput("")}
                  >
                    <img src={"/logo.svg"} alt="tiki logo" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="topbar-right">
              <div className="main-header--top__right">
                {isUser ? (
                  <>
                    <div className="logged">
                      <img
                        alt="sd"
                        src="https://salt.tikicdn.com/cache/512x512/ts/avatar/b9/42/e9/5d6bd301d4a6fb334877b9ae5082f483.jpg"
                        width="32"
                        height="32"
                      />
                      <span>
                        <span className="logged-user">Tài khoản</span>
                        <span
                          className="account-label1"
                          onClick={handleClickToggleLogout}
                        >
                          <span>{name}</span>
                          <img
                            alt="s"
                            src="https://salt.tikicdn.com/ts/upload/d7/d4/a8/34939af2da1ceeeae9f95b7485784233.png"
                            width="16px"
                            height="16px"
                          />
                        </span>
                        {hideLogout ? <></> : <>{showDropdownList()}</>}
                      </span>
                    </div>
                    <div className="header-cart">
                      <Link to="/cart">
                        <div className="header-cart-shotcut">
                          <div className="cart-wrapper">
                            <img
                              src="https://salt.tikicdn.com/ts/upload/40/44/6c/b80ad73e5e84aeb71c08e5d8d438eaa1.png"
                              alt=""
                              className="cart-icon"
                            />
                            <span className="cart-number">
                              {cart ? cart.length : 0}
                            </span>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </>
                ) : (
                  <>
                    <Popup
                      modal
                      trigger={
                        <div className="header-user-shortcut">
                          <img
                            className="profile"
                            src="https://salt.tikicdn.com/ts/upload/67/de/1e/90e54b0a7a59948dd910ba50954c702e.png"
                            alt=""
                          />
                          <span className="user-style">
                            <span className="user-style__title">
                              <div>Đăng nhập</div>
                              {/* <div>Đăng nhập/Đăng ký</div> */}
                            </span>

                            <span className="account-label">
                              <span>/Đăng ký</span>
                              <img
                                src="https://salt.tikicdn.com/ts/upload/d7/d4/a8/34939af2da1ceeeae9f95b7485784233.png"
                                alt="arrowIcon"
                              />
                            </span>
                          </span>
                        </div>
                      }
                    >
                      <Login />
                    </Popup>

                    <div className="header-cart">
                      <Popup modal trigger={ShoppingCart()}>
                        <Login />
                      </Popup>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  const theme = useTheme();

  return (
    <>
      <header className={`main-header ${theme}`}>
        <div className="cm-width ">
          <div className="header-mobile">
            {isWideScreen() ? <TopHeaderDesktop /> : <TopHeaderMobile />}
            <div className="header-main">
              <div className="main-header--top pfpi">
                {isWideScreen() && (
                  <div className="logo-menu">
                    <div className="style-logo">
                      <Link
                        to="/"
                        className="tiki-logo"
                        onClick={() => setSearchInput("")}
                      >
                        <img src={"/logo.svg"} alt="tiki logo" />
                      </Link>
                    </div>
                  </div>
                )}

                <div
                  className="header-form-search"
                  onMouseLeave={() => {
                    setShowSearchDesktop(false);
                  }}
                >
                  <input
                    placeholder="Bạn đang tìm kiếm gì"
                    type="search"
                    value={searchInput}
                    onClick={() => {
                      setShowSearchDesktop(true);
                    }}
                    onKeyDown={() => {
                      setShowSearchDesktop(true);
                    }}
                    onChange={handleChange}
                    onKeyPress={(event) => {
                      if (event.key === "Enter") {
                        navigate(`search&q=${searchInput}`);
                        setShowSearchDesktop(false);
                      }
                    }}
                  />
                  {searchInput.length !== 0 ? (
                    <Link to={`/search&q=${searchInput}`}>
                      <button className="pointer">
                        <img
                          src="https://salt.tikicdn.com/ts/upload/ed/5e/b8/8538366274240326978318348ea8af7c.png"
                          alt=""
                        />
                        {isWideScreen() && <span>Tìm kiếm</span>}
                      </button>
                    </Link>
                  ) : (
                    <button className="pointer">
                      <img
                        src="https://salt.tikicdn.com/ts/upload/ed/5e/b8/8538366274240326978318348ea8af7c.png"
                        alt=""
                      />
                      {isWideScreen() && <span>Tìm kiếm</span>}
                    </button>
                  )}
                  {showSearchDesktop && isWideScreen() && (
                    <div
                      className={`${
                        showSearchDesktop && isWideScreen()
                          ? "search-complete"
                          : "search-mobile"
                      }`}
                    >
                      <div
                        className="search-suggest"
                        onClick={() => setShowSearchDesktop(false)}
                      >
                        {searchInput.length > 0 && (
                          <Link
                            to={`/search&q=${searchInput}`}
                            className="search-list"
                            onClick={saveSearch}
                          >
                            <Images
                              src="https://salt.tikicdn.com/ts/upload/e8/aa/26/42a11360f906c4e769a0ff144d04bfe1.png"
                              alt="icon-search"
                            />
                            <p>{searchInput}</p>
                          </Link>
                        )}
                        {arr
                          .filter((item) =>
                            item.name.toLowerCase().match(searchInput)
                          )
                          .slice(0, 2)
                          .map((item, index) => (
                            <Link
                              to={`/search&q=${item.name}`}
                              className="search-list"
                              key={index}
                            >
                              <Images
                                src="https://salt.tikicdn.com/ts/upload/90/fa/09/9deed3e3186254637b5ca648f3032665.png"
                                alt="icon-search"
                              />
                              <p>{item.name}</p>
                            </Link>
                          ))}
                        {dataList
                          .filter((item) =>
                            item.pro_name.toLowerCase().match(searchInput)
                          )
                          .slice(0, 5)
                          .map((item, index) => (
                            <Link
                              to={`${item.pro_slug}/${item.id}`}
                              className="search-list"
                              onClick={() => setSearchInput("")}
                              key={index}
                            >
                              <img
                                src={item.pro_avatar}
                                alt="icon-product"
                                width="35"
                                height="35"
                              />
                              <p>{item.pro_name}</p>
                            </Link>
                          ))}
                        <div className="show-more">
                          Xem thêm <DownOutlined />
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* headermain -right */}
                <div className="main-header--top__right header-mode">
                  <ThemeBtn />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
export default Header;
