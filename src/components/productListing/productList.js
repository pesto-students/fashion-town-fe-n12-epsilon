import React from "react";
import { connect } from "react-redux";

import { List } from "antd";
import ProductCard from "../productCard/productCard";
import { createProductIdDetailsMap } from "./productUtilFunctions";
import { setProductIdMapList } from "../../redux/actions/productActions";

function ProductList(props) {
  const { productListData } = props;
  console.log(productListData);
  const saveProductListDataToStore = (productListData) => {
    const productIdMapList = createProductIdDetailsMap(productListData);
    props.setProductIdMapList(productIdMapList);
  };

  saveProductListDataToStore(productListData);

  return (
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
      pagination={{
        onChange: (page) => {
          console.log(page);
        },
        pageSize: 50,
        style: { textAlign: "center" },
      }}
      renderItem={(item, index) => (
        <List.Item style={{ width: "200px" }} key={index + item.product_id}>
          <ProductCard productData={item} />
        </List.Item>
      )}
    />
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
