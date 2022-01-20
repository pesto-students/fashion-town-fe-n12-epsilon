import React from "react";
import { useQuery } from "@apollo/client";
import { useSearchParams } from "react-router-dom";

import { FILTER_QUERY } from "../../graphQlQueries/filterQuery";
import { List } from "antd";

import ProductCard from "../productCard/productCard";

import LoadingError from "./loadingError";
import { connect } from "react-redux";
import {
  getAppliedFilterArray,
  createProductIdDetailsMap,
} from "./productUtilFunctions";

import { setProductIdMapList } from "../../redux/actions/productActions";
import ProductListLoading from "../loadingSkeleton/productListLoading";

function ProductListing(props) {
  let [searchParams] = useSearchParams();

  const { error, loading, data } = useQuery(FILTER_QUERY, {
    variables: getAppliedFilterArray(searchParams),
  });

  const saveProductListDataToStore = (productListData) => {
    const productIdMapList = createProductIdDetailsMap(productListData);
    props.setProductIdMapList(productIdMapList);
  };

  if (loading) return <ProductListLoading />;

  if (error) return <LoadingError error={error} />;

  if (data) {
    console.log(data.productByFilters);
    saveProductListDataToStore(data.productByFilters);
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
        dataSource={data.productByFilters}
        pagination={{
          onChange: (page) => {
            console.log(page);
          },
          pageSize: 50,
          style: { textAlign: "center" },
        }}
        renderItem={(item, index) => (
          <List.Item style={{ width: "200px" }} key={index + item.product_id}>
            <ProductCard isLoading={loading} productData={item} />
          </List.Item>
        )}
      />
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setProductIdMapList: (productIdMapList) => {
      dispatch(setProductIdMapList(productIdMapList));
    },
  };
};

export default connect(null, mapDispatchToProps)(ProductListing);
