import React from "react";
import { connect } from "react-redux";

import { List } from "antd";
import ProductCard from "../productCard/productCard";
import { createProductIdDetailsMap } from "./productUtilFunctions";
import { setProductIdMapList } from "redux/actions/productActions";

function ProductList(props) {
  const { productListData, setProductIdMapList } = props;
  console.log(productListData);
  const saveProductListDataToStore = (productListData) => {
    const productIdMapList = createProductIdDetailsMap(productListData);
    setProductIdMapList(productIdMapList);
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
