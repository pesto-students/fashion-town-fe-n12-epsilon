import React from "react";
import Filter from "./filter";
import { useLocation } from "react-router-dom";
import ProductListing from ".";
import {
  FilterAndListingContainer,
  FilterCol,
} from "./productListingStyledComponent";
import { Row, Col } from "antd";
import links from "../../config/routeLinks";
import FreshArrivals from "./freshArrivals";

function FilterAndProductListing() {
  const location = useLocation();
  const currentPath = location.pathname;
  console.log(currentPath);
  return (
    <FilterAndListingContainer>
      <Row>
        <FilterCol xs={0} sm={6} md={6} lg={4}>
          <Row>
            <Filter />
          </Row>
        </FilterCol>
        <Col lg={1}></Col>
        <Col xs={24} sm={18} md={18} lg={19}>
          {currentPath === `/${links.shop}` && <ProductListing />}
          {currentPath === `/${links.freshArrivals}` && <FreshArrivals />}
        </Col>
      </Row>
    </FilterAndListingContainer>
  );
}

export default FilterAndProductListing;
