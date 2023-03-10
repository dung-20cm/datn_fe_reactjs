import {
  Link,
  useLocation,
  useSearchParams,
  useNavigate,
  createSearchParams,
} from "react-router-dom";
import { isWideScreen } from "../../../helpers/screen";
import React from "react";
import { useEffect, useState } from "react";
import Rate from "../../../components/common/Rate";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ratingApi from "../../../api/RatingService";
import authApi from "../../../api/AuthService";
import Pagination from "../../../components/common/Pagination";

let page = 1;
let page_size = 100;
let PageSize = 10;

function Comment({ id, products }) {
  let product_id = Number(id);

  const [refresh, setRefresh] = useState(true);
  const [showRate, setShowRate] = useState(false);
  const [showUpdate, setShowUpdate] = useState(false);
  const [alert, setAlert] = useState(false);
  // const [active, setActive] = useState(false);

  const [rating, setRating] = useState(0);
  const [content, setContent] = useState();
  const [auth, setAuth] = useState(false);
  const [userId, setUserId] = useState();
  const [idVote, setIdVote] = useState();

  const [vote, setVote] = useState([]);
  const [countComment, setCountComment] = useState();
  const [voteStar, setVoteStar] = useState(0);
  const [number, setNumber] = useState();

  const [percent1, setPercent1] = useState(0);
  const [percent2, setPercent2] = useState(0);
  const [percent3, setPercent3] = useState(0);
  const [percent4, setPercent4] = useState(0);
  const [percent5, setPercent5] = useState(0);

  const [currentPage, setCurrentPage] = useState(1);
  const location = useLocation();
  let { searchParams } = useSearchParams();
  const navigate = useNavigate();

  function currentTableData() {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return vote.slice(firstPageIndex, lastPageIndex);
  }

  const getUser = async () => {
    const response = await authApi.getProfile();
    if (response.status === 200) {
      setAuth(true);
      setUserId(response.data.id);
    }
  };

  useEffect(() => {
    setIdVote();
    setCurrentPage(1);
    setPercent1(0);
    setPercent2(0);
    setPercent3(0);
    setPercent4(0);
    setPercent5(0);
    getUser();
    getRate();
  }, [id, refresh]);

  const getRate = async () => {
    let arr = [];
    let star = 0;
    let star1 = 0;
    let star2 = 0;
    let star3 = 0;
    let star4 = 0;
    let star5 = 0;
    const response = await ratingApi.getListRateByProducts(page, page_size, id);
    if (response.status === 200) {
      setVote(response.data);
    }
    response.data.forEach((item) => {
      if (item.v_product_id == product_id) {
        star += item.v_number;
        arr.push(item);
        if (item.v_number == 1) star1 += 1;
        if (item.v_number == 2) star2 += 1;
        if (item.v_number == 3) star3 += 1;
        if (item.v_number == 4) star4 += 1;
        if (item.v_number == 5) star5 += 1;
      }
    });
    setCountComment(arr.length);
    setVoteStar(star);
    setPercent1(star1);
    setPercent2(star2);
    setPercent3(star3);
    setPercent4(star4);
    setPercent5(star5);
    console.log("totalstar: ", star);
    console.log("star1: ", star1);
    console.log("star2: ", star2);
    console.log("star3: ", star3);
    console.log("star4: ", star4);
    console.log("star5: ", star5);
  };

  const countRate = (index) => {
    let tmp = [];
    for (var i = 0; i < index; i++) {
      tmp.push(
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 14 14"
        >
          <path
            d="M7 1.75L8.52824 5.14298L12.25 5.53783L9.47275 8.02966L10.2447 11.6667L7 9.81372L3.75532 11.6667L4.52725 8.02966L1.75 5.53783L5.47176 5.14298L7 1.75Z"
            stroke="#FFA142"
            fill="#FFD52E"
          ></path>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.99996 1.16675L8.69801 4.96312L12.8333 5.40491L9.74746 8.193L10.6052 12.2624L6.99996 10.1892L3.39476 12.2624L4.25246 8.193L1.16663 5.40491L5.30191 4.96312L6.99996 1.16675ZM6.99996 2.50507L5.67242 5.47308L2.43944 5.81848L4.85196 7.99821L4.18141 11.1797L6.99996 9.55882L9.81851 11.1797L9.14796 7.99821L11.5605 5.81848L8.3275 5.47308L6.99996 2.50507Z"
            fill="#FFA142"
          ></path>
        </svg>
      );
    }
    return tmp;
  };

  const handleClickVote = async (vote_number) => {
    console.log("--------------- number: ", vote_number);
    let paramsQuery = location.search;
    console.log("paramsQuery", paramsQuery);
    let query = new URLSearchParams(paramsQuery);
    let value = query.get("number");
    console.log("============== value: ", value);
    if (value) {
      if (vote_number != value) {
        // kiem tra xem da co trong array chua
        if (value.includes(vote_number)) {
          if ("," + vote_number) {
            value = value.replace("," + vote_number, "");
          }
          if (vote_number + ",") {
            value = value.replace(vote_number + ",", "");
          }
        } else {
          console.log("else------------ coongj them");
          value += "," + vote_number;
        }
      } else {
        value = "";
      }
    } else {
      value = vote_number;
    }
    // c?? t???n t???i number && value l?? g??

    console.log("--------------- value: ", value);
    let params = {
      number: decodeURIComponent(value),
    };
    const options = {
      search: `?${createSearchParams(params)}`,
    };
    navigate(options, { replace: true });
  };

  const handleSubmit = async () => {
    let data = {
      v_content: content,
      v_number: rating,
      v_product_id: product_id,
    };
    const response = await ratingApi.createRate(data);
    if (response.status === 200) {
      setContent("");
      setShowRate(false);
    }
  };

  const handleUpdateVote = async (idVote) => {
    try {
      let data = {
        v_content: content,
        v_number: rating,
        v_product_id: product_id,
      };
      const response = await ratingApi.updateRateByProducts(idVote, data);
      if (response.status === 200) {
        setContent("");
        setShowUpdate(false);
      }
    } catch {
      setAlert(true);
    }
  };

  const handleRefresh = () => {
    setRefresh(!refresh);
  };

  return (
    <div className="cmt-container">
      <div className="cmt-heading">????nh Gi?? - Nh???n X??t T??? Kh??ch H??ng</div>
      <div className="customer-review">
        <div className="review-top">
          <div className="review-rate">
            <div className="rating">
              <div className="rating-summary">
                <div className="rating-point">
                  {voteStar / countComment
                    ? (voteStar / countComment).toFixed(1)
                    : 0}
                </div>
                <div className="rating-stars">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 3L14.6198 8.81653L21 9.49342L16.239 13.7651L17.5623 20L12 16.8235L6.43769 20L7.761 13.7651L3 9.49342L9.38015 8.81653L12 3Z"
                      stroke="#FFA142"
                      fill="#FFD52E"
                    ></path>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12 2L14.9109 8.50806L22 9.26543L16.71 14.045L18.1803 21.0211L12 17.467L5.81966 21.0211L7.29 14.045L2 9.26543L9.08906 8.50806L12 2ZM12 4.29426L9.72422 9.38228L4.18197 9.97439L8.31771 13.7111L7.16819 19.165L12 16.3864L16.8318 19.165L15.6823 13.7111L19.818 9.97439L14.2758 9.38228L12 4.29426Z"
                      fill="#FFA142"
                    ></path>
                  </svg>
                  <div className="rating-text">{countComment} nh???n x??t</div>
                </div>
              </div>
              <div className="rating-detail">
                <div className="rating-level">
                  <div className="star-level">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                    >
                      <path
                        d="M7 1.75L8.52824 5.14298L12.25 5.53783L9.47275 8.02966L10.2447 11.6667L7 9.81372L3.75532 11.6667L4.52725 8.02966L1.75 5.53783L5.47176 5.14298L7 1.75Z"
                        stroke="#FFA142"
                        fill="#FFD52E"
                      ></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M6.99996 1.16675L8.69801 4.96312L12.8333 5.40491L9.74746 8.193L10.6052 12.2624L6.99996 10.1892L3.39476 12.2624L4.25246 8.193L1.16663 5.40491L5.30191 4.96312L6.99996 1.16675ZM6.99996 2.50507L5.67242 5.47308L2.43944 5.81848L4.85196 7.99821L4.18141 11.1797L6.99996 9.55882L9.81851 11.1797L9.14796 7.99821L11.5605 5.81848L8.3275 5.47308L6.99996 2.50507Z"
                        fill="#FFA142"
                      ></path>
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                    >
                      <path
                        d="M7 1.75L8.52824 5.14298L12.25 5.53783L9.47275 8.02966L10.2447 11.6667L7 9.81372L3.75532 11.6667L4.52725 8.02966L1.75 5.53783L5.47176 5.14298L7 1.75Z"
                        stroke="#FFA142"
                        fill="#FFD52E"
                      ></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M6.99996 1.16675L8.69801 4.96312L12.8333 5.40491L9.74746 8.193L10.6052 12.2624L6.99996 10.1892L3.39476 12.2624L4.25246 8.193L1.16663 5.40491L5.30191 4.96312L6.99996 1.16675ZM6.99996 2.50507L5.67242 5.47308L2.43944 5.81848L4.85196 7.99821L4.18141 11.1797L6.99996 9.55882L9.81851 11.1797L9.14796 7.99821L11.5605 5.81848L8.3275 5.47308L6.99996 2.50507Z"
                        fill="#FFA142"
                      ></path>
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                    >
                      <path
                        d="M7 1.75L8.52824 5.14298L12.25 5.53783L9.47275 8.02966L10.2447 11.6667L7 9.81372L3.75532 11.6667L4.52725 8.02966L1.75 5.53783L5.47176 5.14298L7 1.75Z"
                        stroke="#FFA142"
                        fill="#FFD52E"
                      ></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M6.99996 1.16675L8.69801 4.96312L12.8333 5.40491L9.74746 8.193L10.6052 12.2624L6.99996 10.1892L3.39476 12.2624L4.25246 8.193L1.16663 5.40491L5.30191 4.96312L6.99996 1.16675ZM6.99996 2.50507L5.67242 5.47308L2.43944 5.81848L4.85196 7.99821L4.18141 11.1797L6.99996 9.55882L9.81851 11.1797L9.14796 7.99821L11.5605 5.81848L8.3275 5.47308L6.99996 2.50507Z"
                        fill="#FFA142"
                      ></path>
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                    >
                      <path
                        d="M7 1.75L8.52824 5.14298L12.25 5.53783L9.47275 8.02966L10.2447 11.6667L7 9.81372L3.75532 11.6667L4.52725 8.02966L1.75 5.53783L5.47176 5.14298L7 1.75Z"
                        stroke="#FFA142"
                        fill="#FFD52E"
                      ></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M6.99996 1.16675L8.69801 4.96312L12.8333 5.40491L9.74746 8.193L10.6052 12.2624L6.99996 10.1892L3.39476 12.2624L4.25246 8.193L1.16663 5.40491L5.30191 4.96312L6.99996 1.16675ZM6.99996 2.50507L5.67242 5.47308L2.43944 5.81848L4.85196 7.99821L4.18141 11.1797L6.99996 9.55882L9.81851 11.1797L9.14796 7.99821L11.5605 5.81848L8.3275 5.47308L6.99996 2.50507Z"
                        fill="#FFA142"
                      ></path>
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                    >
                      <path
                        d="M7 1.75L8.52824 5.14298L12.25 5.53783L9.47275 8.02966L10.2447 11.6667L7 9.81372L3.75532 11.6667L4.52725 8.02966L1.75 5.53783L5.47176 5.14298L7 1.75Z"
                        stroke="#FFA142"
                        fill="#FFD52E"
                      ></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M6.99996 1.16675L8.69801 4.96312L12.8333 5.40491L9.74746 8.193L10.6052 12.2624L6.99996 10.1892L3.39476 12.2624L4.25246 8.193L1.16663 5.40491L5.30191 4.96312L6.99996 1.16675ZM6.99996 2.50507L5.67242 5.47308L2.43944 5.81848L4.85196 7.99821L4.18141 11.1797L6.99996 9.55882L9.81851 11.1797L9.14796 7.99821L11.5605 5.81848L8.3275 5.47308L6.99996 2.50507Z"
                        fill="#FFA142"
                      ></path>
                    </svg>
                  </div>
                  <div className="star-bar">
                    <div
                      className="bar-rate"
                      style={{
                        width: `${
                          percent5 !== 0 ? (percent5 / countComment) * 100 : 0
                        }%`,
                      }}
                    />
                  </div>
                  <div className="rating-number">
                    {percent5 !== 0 ? percent5 : 0}
                  </div>
                </div>
                <div className="rating-level">
                  <div className="star-level">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                    >
                      <path
                        d="M7 1.75L8.52824 5.14298L12.25 5.53783L9.47275 8.02966L10.2447 11.6667L7 9.81372L3.75532 11.6667L4.52725 8.02966L1.75 5.53783L5.47176 5.14298L7 1.75Z"
                        stroke="#FFA142"
                        fill="#FFD52E"
                      ></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M6.99996 1.16675L8.69801 4.96312L12.8333 5.40491L9.74746 8.193L10.6052 12.2624L6.99996 10.1892L3.39476 12.2624L4.25246 8.193L1.16663 5.40491L5.30191 4.96312L6.99996 1.16675ZM6.99996 2.50507L5.67242 5.47308L2.43944 5.81848L4.85196 7.99821L4.18141 11.1797L6.99996 9.55882L9.81851 11.1797L9.14796 7.99821L11.5605 5.81848L8.3275 5.47308L6.99996 2.50507Z"
                        fill="#FFA142"
                      ></path>
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                    >
                      <path
                        d="M7 1.75L8.52824 5.14298L12.25 5.53783L9.47275 8.02966L10.2447 11.6667L7 9.81372L3.75532 11.6667L4.52725 8.02966L1.75 5.53783L5.47176 5.14298L7 1.75Z"
                        stroke="#FFA142"
                        fill="#FFD52E"
                      ></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M6.99996 1.16675L8.69801 4.96312L12.8333 5.40491L9.74746 8.193L10.6052 12.2624L6.99996 10.1892L3.39476 12.2624L4.25246 8.193L1.16663 5.40491L5.30191 4.96312L6.99996 1.16675ZM6.99996 2.50507L5.67242 5.47308L2.43944 5.81848L4.85196 7.99821L4.18141 11.1797L6.99996 9.55882L9.81851 11.1797L9.14796 7.99821L11.5605 5.81848L8.3275 5.47308L6.99996 2.50507Z"
                        fill="#FFA142"
                      ></path>
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                    >
                      <path
                        d="M7 1.75L8.52824 5.14298L12.25 5.53783L9.47275 8.02966L10.2447 11.6667L7 9.81372L3.75532 11.6667L4.52725 8.02966L1.75 5.53783L5.47176 5.14298L7 1.75Z"
                        stroke="#FFA142"
                        fill="#FFD52E"
                      ></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M6.99996 1.16675L8.69801 4.96312L12.8333 5.40491L9.74746 8.193L10.6052 12.2624L6.99996 10.1892L3.39476 12.2624L4.25246 8.193L1.16663 5.40491L5.30191 4.96312L6.99996 1.16675ZM6.99996 2.50507L5.67242 5.47308L2.43944 5.81848L4.85196 7.99821L4.18141 11.1797L6.99996 9.55882L9.81851 11.1797L9.14796 7.99821L11.5605 5.81848L8.3275 5.47308L6.99996 2.50507Z"
                        fill="#FFA142"
                      ></path>
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                    >
                      <path
                        d="M7 1.75L8.52824 5.14298L12.25 5.53783L9.47275 8.02966L10.2447 11.6667L7 9.81372L3.75532 11.6667L4.52725 8.02966L1.75 5.53783L5.47176 5.14298L7 1.75Z"
                        stroke="#FFA142"
                        fill="#FFD52E"
                      ></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M6.99996 1.16675L8.69801 4.96312L12.8333 5.40491L9.74746 8.193L10.6052 12.2624L6.99996 10.1892L3.39476 12.2624L4.25246 8.193L1.16663 5.40491L5.30191 4.96312L6.99996 1.16675ZM6.99996 2.50507L5.67242 5.47308L2.43944 5.81848L4.85196 7.99821L4.18141 11.1797L6.99996 9.55882L9.81851 11.1797L9.14796 7.99821L11.5605 5.81848L8.3275 5.47308L6.99996 2.50507Z"
                        fill="#FFA142"
                      ></path>
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                    >
                      <path
                        d="M7 1.75L8.52824 5.14298L12.25 5.53783L9.47275 8.02966L10.2447 11.6667L7 9.81372L3.75532 11.6667L4.52725 8.02966L1.75 5.53783L5.47176 5.14298L7 1.75Z"
                        stroke="#DDDDE3"
                        fill="#DDDDE3"
                      ></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M6.99996 1.16675L8.69801 4.96312L12.8333 5.40491L9.74746 8.193L10.6052 12.2624L6.99996 10.1892L3.39476 12.2624L4.25246 8.193L1.16663 5.40491L5.30191 4.96312L6.99996 1.16675ZM6.99996 2.50507L5.67242 5.47308L2.43944 5.81848L4.85196 7.99821L4.18141 11.1797L6.99996 9.55882L9.81851 11.1797L9.14796 7.99821L11.5605 5.81848L8.3275 5.47308L6.99996 2.50507Z"
                        fill="#DDDDE3"
                      ></path>
                    </svg>
                  </div>
                  <div className="star-bar">
                    <div
                      className="bar-rate"
                      style={{
                        width: `${
                          percent4 !== 0 ? (percent4 / countComment) * 100 : 0
                        }%`,
                      }}
                    />
                  </div>
                  <div className="rating-number">
                    {percent4 !== 0 ? percent4 : 0}
                  </div>
                </div>
                <div className="rating-level">
                  <div className="star-level">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                    >
                      <path
                        d="M7 1.75L8.52824 5.14298L12.25 5.53783L9.47275 8.02966L10.2447 11.6667L7 9.81372L3.75532 11.6667L4.52725 8.02966L1.75 5.53783L5.47176 5.14298L7 1.75Z"
                        stroke="#FFA142"
                        fill="#FFD52E"
                      ></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M6.99996 1.16675L8.69801 4.96312L12.8333 5.40491L9.74746 8.193L10.6052 12.2624L6.99996 10.1892L3.39476 12.2624L4.25246 8.193L1.16663 5.40491L5.30191 4.96312L6.99996 1.16675ZM6.99996 2.50507L5.67242 5.47308L2.43944 5.81848L4.85196 7.99821L4.18141 11.1797L6.99996 9.55882L9.81851 11.1797L9.14796 7.99821L11.5605 5.81848L8.3275 5.47308L6.99996 2.50507Z"
                        fill="#FFA142"
                      ></path>
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                    >
                      <path
                        d="M7 1.75L8.52824 5.14298L12.25 5.53783L9.47275 8.02966L10.2447 11.6667L7 9.81372L3.75532 11.6667L4.52725 8.02966L1.75 5.53783L5.47176 5.14298L7 1.75Z"
                        stroke="#FFA142"
                        fill="#FFD52E"
                      ></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M6.99996 1.16675L8.69801 4.96312L12.8333 5.40491L9.74746 8.193L10.6052 12.2624L6.99996 10.1892L3.39476 12.2624L4.25246 8.193L1.16663 5.40491L5.30191 4.96312L6.99996 1.16675ZM6.99996 2.50507L5.67242 5.47308L2.43944 5.81848L4.85196 7.99821L4.18141 11.1797L6.99996 9.55882L9.81851 11.1797L9.14796 7.99821L11.5605 5.81848L8.3275 5.47308L6.99996 2.50507Z"
                        fill="#FFA142"
                      ></path>
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                    >
                      <path
                        d="M7 1.75L8.52824 5.14298L12.25 5.53783L9.47275 8.02966L10.2447 11.6667L7 9.81372L3.75532 11.6667L4.52725 8.02966L1.75 5.53783L5.47176 5.14298L7 1.75Z"
                        stroke="#FFA142"
                        fill="#FFD52E"
                      ></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M6.99996 1.16675L8.69801 4.96312L12.8333 5.40491L9.74746 8.193L10.6052 12.2624L6.99996 10.1892L3.39476 12.2624L4.25246 8.193L1.16663 5.40491L5.30191 4.96312L6.99996 1.16675ZM6.99996 2.50507L5.67242 5.47308L2.43944 5.81848L4.85196 7.99821L4.18141 11.1797L6.99996 9.55882L9.81851 11.1797L9.14796 7.99821L11.5605 5.81848L8.3275 5.47308L6.99996 2.50507Z"
                        fill="#FFA142"
                      ></path>
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                    >
                      <path
                        d="M7 1.75L8.52824 5.14298L12.25 5.53783L9.47275 8.02966L10.2447 11.6667L7 9.81372L3.75532 11.6667L4.52725 8.02966L1.75 5.53783L5.47176 5.14298L7 1.75Z"
                        stroke="#DDDDE3"
                        fill="#DDDDE3"
                      ></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M6.99996 1.16675L8.69801 4.96312L12.8333 5.40491L9.74746 8.193L10.6052 12.2624L6.99996 10.1892L3.39476 12.2624L4.25246 8.193L1.16663 5.40491L5.30191 4.96312L6.99996 1.16675ZM6.99996 2.50507L5.67242 5.47308L2.43944 5.81848L4.85196 7.99821L4.18141 11.1797L6.99996 9.55882L9.81851 11.1797L9.14796 7.99821L11.5605 5.81848L8.3275 5.47308L6.99996 2.50507Z"
                        fill="#DDDDE3"
                      ></path>
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                    >
                      <path
                        d="M7 1.75L8.52824 5.14298L12.25 5.53783L9.47275 8.02966L10.2447 11.6667L7 9.81372L3.75532 11.6667L4.52725 8.02966L1.75 5.53783L5.47176 5.14298L7 1.75Z"
                        stroke="#DDDDE3"
                        fill="#DDDDE3"
                      ></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M6.99996 1.16675L8.69801 4.96312L12.8333 5.40491L9.74746 8.193L10.6052 12.2624L6.99996 10.1892L3.39476 12.2624L4.25246 8.193L1.16663 5.40491L5.30191 4.96312L6.99996 1.16675ZM6.99996 2.50507L5.67242 5.47308L2.43944 5.81848L4.85196 7.99821L4.18141 11.1797L6.99996 9.55882L9.81851 11.1797L9.14796 7.99821L11.5605 5.81848L8.3275 5.47308L6.99996 2.50507Z"
                        fill="#DDDDE3"
                      ></path>
                    </svg>
                  </div>
                  <div className="star-bar">
                    <div
                      className="bar-rate"
                      style={{
                        width: `${
                          percent3 !== 0 ? (percent3 / countComment) * 100 : 0
                        }%`,
                      }}
                    />
                  </div>
                  <div className="rating-number">
                    {percent3 !== 0 ? percent3 : 0}
                  </div>
                </div>
                <div className="rating-level">
                  <div className="star-level">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                    >
                      <path
                        d="M7 1.75L8.52824 5.14298L12.25 5.53783L9.47275 8.02966L10.2447 11.6667L7 9.81372L3.75532 11.6667L4.52725 8.02966L1.75 5.53783L5.47176 5.14298L7 1.75Z"
                        stroke="#FFA142"
                        fill="#FFD52E"
                      ></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M6.99996 1.16675L8.69801 4.96312L12.8333 5.40491L9.74746 8.193L10.6052 12.2624L6.99996 10.1892L3.39476 12.2624L4.25246 8.193L1.16663 5.40491L5.30191 4.96312L6.99996 1.16675ZM6.99996 2.50507L5.67242 5.47308L2.43944 5.81848L4.85196 7.99821L4.18141 11.1797L6.99996 9.55882L9.81851 11.1797L9.14796 7.99821L11.5605 5.81848L8.3275 5.47308L6.99996 2.50507Z"
                        fill="#FFA142"
                      ></path>
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                    >
                      <path
                        d="M7 1.75L8.52824 5.14298L12.25 5.53783L9.47275 8.02966L10.2447 11.6667L7 9.81372L3.75532 11.6667L4.52725 8.02966L1.75 5.53783L5.47176 5.14298L7 1.75Z"
                        stroke="#FFA142"
                        fill="#FFD52E"
                      ></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M6.99996 1.16675L8.69801 4.96312L12.8333 5.40491L9.74746 8.193L10.6052 12.2624L6.99996 10.1892L3.39476 12.2624L4.25246 8.193L1.16663 5.40491L5.30191 4.96312L6.99996 1.16675ZM6.99996 2.50507L5.67242 5.47308L2.43944 5.81848L4.85196 7.99821L4.18141 11.1797L6.99996 9.55882L9.81851 11.1797L9.14796 7.99821L11.5605 5.81848L8.3275 5.47308L6.99996 2.50507Z"
                        fill="#FFA142"
                      ></path>
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                    >
                      <path
                        d="M7 1.75L8.52824 5.14298L12.25 5.53783L9.47275 8.02966L10.2447 11.6667L7 9.81372L3.75532 11.6667L4.52725 8.02966L1.75 5.53783L5.47176 5.14298L7 1.75Z"
                        stroke="#DDDDE3"
                        fill="#DDDDE3"
                      ></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M6.99996 1.16675L8.69801 4.96312L12.8333 5.40491L9.74746 8.193L10.6052 12.2624L6.99996 10.1892L3.39476 12.2624L4.25246 8.193L1.16663 5.40491L5.30191 4.96312L6.99996 1.16675ZM6.99996 2.50507L5.67242 5.47308L2.43944 5.81848L4.85196 7.99821L4.18141 11.1797L6.99996 9.55882L9.81851 11.1797L9.14796 7.99821L11.5605 5.81848L8.3275 5.47308L6.99996 2.50507Z"
                        fill="#DDDDE3"
                      ></path>
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                    >
                      <path
                        d="M7 1.75L8.52824 5.14298L12.25 5.53783L9.47275 8.02966L10.2447 11.6667L7 9.81372L3.75532 11.6667L4.52725 8.02966L1.75 5.53783L5.47176 5.14298L7 1.75Z"
                        stroke="#DDDDE3"
                        fill="#DDDDE3"
                      ></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M6.99996 1.16675L8.69801 4.96312L12.8333 5.40491L9.74746 8.193L10.6052 12.2624L6.99996 10.1892L3.39476 12.2624L4.25246 8.193L1.16663 5.40491L5.30191 4.96312L6.99996 1.16675ZM6.99996 2.50507L5.67242 5.47308L2.43944 5.81848L4.85196 7.99821L4.18141 11.1797L6.99996 9.55882L9.81851 11.1797L9.14796 7.99821L11.5605 5.81848L8.3275 5.47308L6.99996 2.50507Z"
                        fill="#DDDDE3"
                      ></path>
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                    >
                      <path
                        d="M7 1.75L8.52824 5.14298L12.25 5.53783L9.47275 8.02966L10.2447 11.6667L7 9.81372L3.75532 11.6667L4.52725 8.02966L1.75 5.53783L5.47176 5.14298L7 1.75Z"
                        stroke="#DDDDE3"
                        fill="#DDDDE3"
                      ></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M6.99996 1.16675L8.69801 4.96312L12.8333 5.40491L9.74746 8.193L10.6052 12.2624L6.99996 10.1892L3.39476 12.2624L4.25246 8.193L1.16663 5.40491L5.30191 4.96312L6.99996 1.16675ZM6.99996 2.50507L5.67242 5.47308L2.43944 5.81848L4.85196 7.99821L4.18141 11.1797L6.99996 9.55882L9.81851 11.1797L9.14796 7.99821L11.5605 5.81848L8.3275 5.47308L6.99996 2.50507Z"
                        fill="#DDDDE3"
                      ></path>
                    </svg>
                  </div>
                  <div className="star-bar">
                    <div
                      className="bar-rate"
                      style={{
                        width: `${
                          percent2 !== 0 ? (percent2 / countComment) * 100 : 0
                        }%`,
                      }}
                    />
                  </div>
                  <div className="rating-number">
                    {percent2 !== 0 ? percent2 : 0}
                  </div>
                </div>
                <div className="rating-level">
                  <div className="star-level">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                    >
                      <path
                        d="M7 1.75L8.52824 5.14298L12.25 5.53783L9.47275 8.02966L10.2447 11.6667L7 9.81372L3.75532 11.6667L4.52725 8.02966L1.75 5.53783L5.47176 5.14298L7 1.75Z"
                        stroke="#FFA142"
                        fill="#FFD52E"
                      ></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M6.99996 1.16675L8.69801 4.96312L12.8333 5.40491L9.74746 8.193L10.6052 12.2624L6.99996 10.1892L3.39476 12.2624L4.25246 8.193L1.16663 5.40491L5.30191 4.96312L6.99996 1.16675ZM6.99996 2.50507L5.67242 5.47308L2.43944 5.81848L4.85196 7.99821L4.18141 11.1797L6.99996 9.55882L9.81851 11.1797L9.14796 7.99821L11.5605 5.81848L8.3275 5.47308L6.99996 2.50507Z"
                        fill="#FFA142"
                      ></path>
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                    >
                      <path
                        d="M7 1.75L8.52824 5.14298L12.25 5.53783L9.47275 8.02966L10.2447 11.6667L7 9.81372L3.75532 11.6667L4.52725 8.02966L1.75 5.53783L5.47176 5.14298L7 1.75Z"
                        stroke="#DDDDE3"
                        fill="#DDDDE3"
                      ></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M6.99996 1.16675L8.69801 4.96312L12.8333 5.40491L9.74746 8.193L10.6052 12.2624L6.99996 10.1892L3.39476 12.2624L4.25246 8.193L1.16663 5.40491L5.30191 4.96312L6.99996 1.16675ZM6.99996 2.50507L5.67242 5.47308L2.43944 5.81848L4.85196 7.99821L4.18141 11.1797L6.99996 9.55882L9.81851 11.1797L9.14796 7.99821L11.5605 5.81848L8.3275 5.47308L6.99996 2.50507Z"
                        fill="#DDDDE3"
                      ></path>
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                    >
                      <path
                        d="M7 1.75L8.52824 5.14298L12.25 5.53783L9.47275 8.02966L10.2447 11.6667L7 9.81372L3.75532 11.6667L4.52725 8.02966L1.75 5.53783L5.47176 5.14298L7 1.75Z"
                        stroke="#DDDDE3"
                        fill="#DDDDE3"
                      ></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M6.99996 1.16675L8.69801 4.96312L12.8333 5.40491L9.74746 8.193L10.6052 12.2624L6.99996 10.1892L3.39476 12.2624L4.25246 8.193L1.16663 5.40491L5.30191 4.96312L6.99996 1.16675ZM6.99996 2.50507L5.67242 5.47308L2.43944 5.81848L4.85196 7.99821L4.18141 11.1797L6.99996 9.55882L9.81851 11.1797L9.14796 7.99821L11.5605 5.81848L8.3275 5.47308L6.99996 2.50507Z"
                        fill="#DDDDE3"
                      ></path>
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                    >
                      <path
                        d="M7 1.75L8.52824 5.14298L12.25 5.53783L9.47275 8.02966L10.2447 11.6667L7 9.81372L3.75532 11.6667L4.52725 8.02966L1.75 5.53783L5.47176 5.14298L7 1.75Z"
                        stroke="#DDDDE3"
                        fill="#DDDDE3"
                      ></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M6.99996 1.16675L8.69801 4.96312L12.8333 5.40491L9.74746 8.193L10.6052 12.2624L6.99996 10.1892L3.39476 12.2624L4.25246 8.193L1.16663 5.40491L5.30191 4.96312L6.99996 1.16675ZM6.99996 2.50507L5.67242 5.47308L2.43944 5.81848L4.85196 7.99821L4.18141 11.1797L6.99996 9.55882L9.81851 11.1797L9.14796 7.99821L11.5605 5.81848L8.3275 5.47308L6.99996 2.50507Z"
                        fill="#DDDDE3"
                      ></path>
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                    >
                      <path
                        d="M7 1.75L8.52824 5.14298L12.25 5.53783L9.47275 8.02966L10.2447 11.6667L7 9.81372L3.75532 11.6667L4.52725 8.02966L1.75 5.53783L5.47176 5.14298L7 1.75Z"
                        stroke="#DDDDE3"
                        fill="#DDDDE3"
                      ></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M6.99996 1.16675L8.69801 4.96312L12.8333 5.40491L9.74746 8.193L10.6052 12.2624L6.99996 10.1892L3.39476 12.2624L4.25246 8.193L1.16663 5.40491L5.30191 4.96312L6.99996 1.16675ZM6.99996 2.50507L5.67242 5.47308L2.43944 5.81848L4.85196 7.99821L4.18141 11.1797L6.99996 9.55882L9.81851 11.1797L9.14796 7.99821L11.5605 5.81848L8.3275 5.47308L6.99996 2.50507Z"
                        fill="#DDDDE3"
                      ></path>
                    </svg>
                  </div>
                  <div className="star-bar">
                    <div
                      className="bar-rate"
                      style={{
                        width: `${
                          percent1 !== 0 ? (percent1 / countComment) * 100 : 0
                        }%`,
                      }}
                    />
                  </div>
                  <div className="rating-number">
                    {percent1 !== 0 ? percent1 : 0}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="review-img">
            {isWideScreen() && (
              <>
                <div className="review-filter">
                  <div className="filter-label">L???c xem theo : </div>
                  <div className="filter-inner">
                    <span
                      className="filter-"
                      onClick={() => handleClickVote(5)}
                      id="number"
                    >
                      5 &#9733;
                    </span>
                    <span
                      className="filter-"
                      onClick={() => handleClickVote(4)}
                      id="number"
                    >
                      4 &#9733;
                    </span>
                    <span
                      className="filter-"
                      onClick={() => handleClickVote(3)}
                      id="number"
                    >
                      3 &#9733;
                    </span>
                    <span
                      className="filter-"
                      onClick={() => handleClickVote(2)}
                      id="number"
                    >
                      2 &#9733;
                    </span>
                    <span
                      className="filter-"
                      onClick={() => handleClickVote(1)}
                      id="number"
                    >
                      1 &#9733;
                    </span>
                  </div>
                </div>
              </>
            )}
            {!isWideScreen() && <div></div>}
          </div>
        </div>
        {auth === true && (
          <div className="rate-container">
            <button onClick={() => setShowRate(true)}>Vi???t ????nh gi??</button>
          </div>
        )}
        {showRate === true && (
          <>
            <div className="rate-popup">
              <div className="rate-form">
                <div className="rate-form-header">
                  <p>????nh gi??</p>
                  <div
                    className="rate-close"
                    onClick={() => setShowRate(false)}
                  >
                    <FontAwesomeIcon icon={faXmark} />
                  </div>
                </div>
                <div className="rate-form-content">
                  <div className="rate-info">
                    <img
                      src={products.pro_avatar}
                      alt="xad"
                      width="35"
                      height="35"
                    />
                    <span>{products.pro_name}</span>
                  </div>
                  <div className="rate">
                    <Rate
                      rating={rating}
                      onRating={(rate) => setRating(rate)}
                    />
                  </div>
                  <div className="rate-input">
                    <textarea
                      type="text"
                      value={content}
                      onChange={(e) => setContent(e.target.value)}
                      placeholder="M???i b???n chia s??? th??m m???t s??? c???m nh???n v??? s???n ph???m ..."
                    />
                    <button
                      onClick={() => {
                        handleSubmit();
                        handleRefresh();
                      }}
                    >
                      G???i ????nh gi??
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        {currentTableData().map(
          (item, index) =>
            item.v_product_id == product_id && (
              <div className="customer-comment" key={index}>
                <div className="review-user">
                  <div className="user-inner">
                    <div className="user-avatar">
                      <img
                        alt="/"
                        src="https://i.pinimg.com/736x/89/90/48/899048ab0cc455154006fdb9676964b3.jpg"
                        width="48"
                        height="48"
                      />
                    </div>
                    <div>
                      <div className="user-name">User {item.v_product_id}</div>
                    </div>
                  </div>
                </div>
                <div className="review-user-content">
                  <div className="review-title">{countRate(item.v_number)}</div>
                  <div className="review-check-icon">
                    <img
                      alt="/"
                      src="https://cms-assets.tutsplus.com/cdn-cgi/image/width=850/uploads/users/523/posts/32694/final_image/tutorial-preview-large.png"
                      width="14"
                      height="14"
                    />
                    ???? mua h??ng
                  </div>
                  <div className="review-user-text">{item.v_content}</div>

                  <span className="thank">B??nh lu???n</span>
                  {userId == item.v_user_id && (
                    <span
                      className="thank"
                      onClick={() => {
                        setShowUpdate(true);
                        setIdVote(item.id);
                      }}
                    >
                      Ch???nh s???a
                    </span>
                  )}
                </div>
              </div>
            )
        )}
        {showUpdate === true && (
          <>
            <div className="rate-popup">
              <div className="rate-form">
                <div className="rate-form-header">
                  <p>????nh gi??</p>
                  <div
                    className="rate-close"
                    onClick={() => setShowUpdate(false)}
                  >
                    <FontAwesomeIcon icon={faXmark} />
                  </div>
                </div>
                <div className="rate-form-content">
                  <div className="rate-info">
                    <img
                      src={products.pro_avatar}
                      alt="xad"
                      width="50"
                      height="50"
                    />
                    <div>
                      <span>{products.pro_name}</span>
                    </div>
                  </div>
                  <div className="rate">
                    <Rate
                      rating={rating}
                      onRating={(rate) => setRating(rate)}
                    />
                  </div>
                  <div className="rate-input">
                    <textarea
                      type="text"
                      value={content}
                      onChange={(e) => setContent(e.target.value)}
                      placeholder="M???i b???n chia s??? th??m m???t s??? c???m nh???n v??? s???n ph???m ..."
                    />
                    {alert === true && (
                      <div
                        style={{
                          textAlign: "center",
                          color: "red",
                          marginTop: "10px",
                          fontSize: "12px",
                          marginLeft: "12px",
                        }}
                      >
                        N???i dung kh??ng ???????c ????? tr???ng!
                      </div>
                    )}
                    <button
                      onClick={() => {
                        handleUpdateVote(idVote);
                        handleRefresh();
                      }}
                    >
                      L??u ch???nh s???a
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
        {countComment > 10 && (
          <>
            <Pagination
              className="pagination-bar"
              currentPage={currentPage}
              totalCount={vote.length}
              pageSize={PageSize}
              onPageChange={(page) => setCurrentPage(page)}
            />
          </>
        )}
      </div>
    </div>
  );
}

export default Comment;
