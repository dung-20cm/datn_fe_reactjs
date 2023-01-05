import React from "react";

function ProductDescribe({ products }) {
  return (
    <div className="describe-container">
      <div className="des-left">
        <div className="left-group">
          <h2>Mô Tả Sản Phẩm</h2>
          <div className="group-content">
            <p>{products?.pro_description}</p>
          </div>
        </div>
      </div>
      <div className="des-right"></div>
    </div>
  );
}

export default ProductDescribe;
