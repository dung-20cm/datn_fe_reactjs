import React, {useEffect, useState} from 'react';
import Container from './include/Container';
import Products from './include/Products';
import productApi from '../../api/ProductService';

import {isWideScreen } from "../../helpers/screen";
import MobileCategoryHeader from "../category/include/mobile/MobileCategoryHeader";
import {Link, useParams} from 'react-router-dom';

import Skeleton from 'react-loading-skeleton';
import SidebarFilter from '../../components/common/sidebar/SidebarFinter';

function SearchPage() {

    let { searchInput } = useParams();

    const [loadingProduct, setLoadingProduct] = useState(true);

    const [products, setProducts] = useState([]);
    //const [searchProducts, setSearchProducts] = useState([]);

    const page = 1;
    const page_size = 300;
    
    const getProducts = async () => {
        const response = await productApi.getListsProductsByPage(page, page_size)
        if(response.status === 200) {
            setProducts(response.data);
            setLoadingProduct(false);
        } 

    }


    useEffect(() => {
        getProducts();
    }, [searchInput]);

    return (
        <main className={isWideScreen() ? 'desktop' : 'mobile'}>
            {isWideScreen() &&
                <>
                    <div className="container">
                        <div className="category-title">
                            <Link to='/'>Trang chủ</Link>
                            <img alt="/" src='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNzUycHQiIGhlaWdodD0iNzUycHQiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDc1MiA3NTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8cGF0aCBkPSJtNDY3LjQgMzcxLjc0LTEwNS4xNC0xMDUuMTMtMjAuMzYzIDE5Ljg5MSA4NS4yNDYgODUuMjQyLTg1LjI0NiA4NC43NzMgMjAuMzYzIDIwLjM2MyAxMDUuMTQtMTA1LjE0Ii8+Cjwvc3ZnPgo='></img>
                            <h4>{ searchInput || 'Chưa có dữ liệu' }</h4>
                        </div>
                        <div className="category-view">
                            <SidebarFilter />
                            <div className="category-right">
                                <div className="search-summary">
                                    <div className="title">
                                        <h1>Kết quả tìm kiếm cho `{ searchInput }`</h1>
                                    </div>

                                    {/*<div className="adv-slide">*/}
                                    {/*    <Swiper {...settingsSlide}>*/}
                                    {/*        {*/}
                                    {/*            adv.map((item,index) => {*/}
                                    {/*                return(*/}
                                    {/*                    <SwiperSlide key={index}>*/}
                                    {/*                        {<img alt="/" src={item.src}/>}*/}
                                    {/*                    </SwiperSlide>*/}
                                    {/*                )*/}
                                    {/*            })*/}
                                    {/*        }*/}
                                    {/*    </Swiper>*/}
                                    {/*</div>*/}

                                    { loadingProduct === true ? (
                                        <div className="product-container">
                                            <div className="suggestion__product">
                                                <div className="content">
                                                    <div className="" style={{ display:"flex", padding: "0 10px"}}>
                                                        <div className="dashboard-product--item" style={{ marginTop:"10px", marginRight: "10px"}}>
                                                            <Skeleton height={100} />
                                                            <Skeleton height={10} style={{ marginTop: "10px"}} />
                                                            <Skeleton height={10} style={{ marginTop: "5px"}} />
                                                            <Skeleton height={10} style={{ marginTop: "5px"}} />
                                                        </div>
                                                        <div className="dashboard-product--item" style={{ marginTop:"10px", marginRight: "10px"}}>
                                                            <Skeleton height={100} />
                                                            <Skeleton height={10} style={{ marginTop: "10px"}} />
                                                            <Skeleton height={10} style={{ marginTop: "5px"}} />
                                                            <Skeleton height={10} style={{ marginTop: "5px"}} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ) : (
                                        <>
                                            <Products 
                                                products={products} 
                                                searchInput={searchInput}
                                            />
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            }

            {!isWideScreen() &&
                <>
                    <h2>Mobile</h2>
                    <>
                        <MobileCategoryHeader/>
                        <Container/>
                    </>
                </>
            }
        </main>


    )
}

export default SearchPage;
