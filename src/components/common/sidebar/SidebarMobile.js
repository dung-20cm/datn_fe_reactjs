import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import categoryApi from "../../../api/CategoryService";
import Skeleton from "react-loading-skeleton";
import { isWideScreen, isMobileScreen } from "../../../helpers/screen";

export default function SidebarMobile(openSidebarMobile) {
  const [categoriesSidebar, setCategories] = useState([]);
  const [loadingCategories, SetLoadingCategories] = useState(true);

  useEffect(() => {
    getCategoriesSidebar();
  }, []);

  const getCategoriesSidebar = async (params) => {
    const response = await categoryApi.getListsCategory(params);
    setCategories(response.data);
    SetLoadingCategories(false);
  };
  // <div className="sidebar">
  return (
    <>
      {isMobileScreen && (
        <div className={`sidebar ${openSidebarMobile.open ? "" : "d-none"}`}>
          <div>
            {isWideScreen() && (
              <div className="sidebar-title">
                <h4>Danh mục sản phẩm</h4>
              </div>
            )}

            <div className="sidebar-list">
              {loadingCategories === false ? (
                <ul>
                  {categoriesSidebar.map((item, index) => (
                    <li key={index}>
                      <Link
                        title={item.c_name}
                        to={"/category/" + item.c_slug + "/" + item.id}
                      >
                        {" "}
                        {item.c_name}{" "}
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : (
                <ul>
                  <li>
                    <Skeleton count={5} height={10} />
                  </li>
                </ul>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
