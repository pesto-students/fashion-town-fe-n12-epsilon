import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import { List, Pagination } from "antd";
import ProductCard from "../productCard/productCard";
import { createProductIdDetailsMap } from "./productUtilFunctions";
import { setProductIdMapList } from "../../redux/actions/productActions";
import { useSearchParams } from "react-router-dom";
import { getAppliedFilterValueMap } from "../utils";
import config from "../../config/config";

function ProductList(props) {
  const { productListData, totalCount } = props;
  console.log(productListData);
  const saveProductListDataToStore = (productListData) => {
    const productIdMapList = createProductIdDetailsMap(productListData);
    props.setProductIdMapList(productIdMapList);
  };

  saveProductListDataToStore(productListData);


  return (
    <>
      <List
        grid={{
          xs: 2,
          sm: 2,
          md: 3,
          lg: 3,
          xl: 4,
          xxl: 5,
        }}
        dataSource={productListData}
        renderItem={(item, index) => (
          <List.Item style={{ width: "200px" }} key={index + item.product_id}>
            <ProductCard productData={item} />
          </List.Item>
        )}
      />
      
    </>
  );
}
const mapDispatchToProps = (dispatch) => {
  return {
    setProductIdMapList: (productIdMapList) => {
      dispatch(setProductIdMapList(productIdMapList));
    },
  };
};

export default connect(null, mapDispatchToProps)(ProductList);
