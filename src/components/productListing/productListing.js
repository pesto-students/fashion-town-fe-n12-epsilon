import React from "react";
import { useQuery } from "@apollo/client";
import { useSearchParams } from "react-router-dom";
import ProductCard from "../productCard/productCard";
import { List } from "antd";
import { FILTER_QUERY } from "./filterQuery";
import LoadingList from "./loadingList";
import LoadingError from "./loadingError";

function ProductListing() {
  let [searchParams] = useSearchParams();

  const getAppliedFilterArray = () => {
    let filterTypeValueArray = {};
    searchParams.forEach((filter, key) => {
      console.log(key, filter);
      filterTypeValueArray[key] = searchParams.getAll(key);
    });
    return filterTypeValueArray;
  };

  const { error, loading, data } = useQuery(FILTER_QUERY, {
    variables: getAppliedFilterArray(),
  });

  if (loading) return <LoadingList />;

  if (error) return <LoadingError error={error} />;

  if (data) {
    console.log(data.productByFilters);

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

export default ProductListing;
