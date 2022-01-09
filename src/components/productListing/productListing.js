import React from "react";
import { useQuery } from "@apollo/client";
import { useSearchParams, useLocation } from "react-router-dom";
import ProductCard from "../productCard/productCard";
import { List, Row, Col, Spin,Space } from "antd";
import {
  ListingContainer,
  SpinContainer,
} from "./productListingStyledComponent";

import { FILTER_QUERY } from "./filterQuery";
import Filter from "./filter";

function ProductListing() {
  let [searchParams, setSearchParams] = useSearchParams();

  let location = useLocation();
  console.log(location);

  let variable = {};
  searchParams.forEach((filter, keys) => {
    console.log(keys, filter);
    variable[keys] = filter;
  });
  console.log(variable);
  const { error, loading, data } = useQuery(FILTER_QUERY, {
    variables: variable,
  });

  if (loading)
    return (
      <SpinContainer>
        <Spin size="large" />
      </SpinContainer>
    );
  console.log("loading", loading);
  if (error) return `Error! ${error.message}`;
  if (data) {
    console.log(data.productByFilters);

    // <input
    //       value={searchParams.get("filter") || ""}
    //       onChange={(event) => {
    //         let filter = event.target.value;
    //         if (filter) {
    //           console.log(filter);
    //           setSearchParams({ filter });
    //         } else {
    //           setSearchParams({});
    //         }
    //       }}
    //     />

    return (
      <ListingContainer>
        
        <Row></Row>
        <Row>
          <Col xs={24} sm={6} md={6} lg={4}>
            <Row><h3><strong>Filters</strong></h3></Row>
            <Row>
              <Filter/>
            </Row>
          </Col>
          <Col xs={24} sm={18} md={18} lg={20}>
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
              renderItem={(item,index) => (
                <List.Item style={{ width: "200px" }} key={index+item.product_id}>
                  <ProductCard isLoading={loading} productData={item} />
                </List.Item>
              )}
            />
          </Col>
        </Row>
      </ListingContainer>
    );
  }
}

export default ProductListing;
