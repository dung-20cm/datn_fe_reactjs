import React, { useEffect, useState } from "react";
import Category from "../../pages/product_detail/include/Category";
import Product from "../../pages/product_detail/include/Product";
import SimilarProduct from "../product_detail/include/SimilarProduct";
import ProductDescribe from "./include/ProductDescribe";
import Comment from "./include/Comment";
import { isWideScreen } from "../../helpers/screen";
import DetailHeader from "./include/mobile/DetailHeader";
import DetailFooter from "./include/mobile/DetailFooter";
import { useParams } from "react-router";
import productApi from "../../api/ProductService";
import HomeSuggest from "../home/include/HomeSuggest";

function ProductDetailPage() {
  let { id } = useParams();
  const [category, setCategory] = useState();
  const [products, setProducts] = useState();
  const [pro_price, setPro_Price] = useState();
  const [loading, setLoading] = useState(true);

  const getProductsDetail = async () => {
    const response = await productApi.findById(id);
    if (response.status === 200) {
      setProducts(response.data);
      setCategory(response.data.category);
      setPro_Price(response.data.pro_price.toLocaleString());
      setLoading(false);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    getProductsDetail();
  }, [id]);

  return (
    <main
      // className={isWideScreen() ? "desktop" : "mobile"}
      className="desktop"
    >
      <>
        <div className="container">
          <Category category={category} products={products} />
          <Product
            products={products}
            pro_price={pro_price}
            loading={loading}
          />
          <SimilarProduct />
          <ProductDescribe products={products} />
          <Comment />
          <HomeSuggest />
        </div>
      </>
      {/* {isWideScreen() &&
            }

            {!isWideScreen() &&
                <>
                    <DetailHeader />
                    <Product />
                    <SimilarProduct />
                    <ProductDescribe />
                    <Comment />
                    <HomeSuggest />
                    <DetailFooter />
                </>
            } */}
    </main>
  );
}

export default ProductDetailPage;