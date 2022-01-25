import React from "react";
import Filter from "./filter";
import ProductListing from "./productListing";
import { FilterAndListingContainer } from "./productListingStyledComponent";
import { Row, Col } from "antd";
function FilterAndProductListing() {
  return (
    <FilterAndListingContainer>
      <Row></Row>
      <Row>
        <Col xs={0} sm={6} md={6} lg={4}>
          <Row>
            <h3>
              <strong>Filters</strong>
            </h3>
          </Row>
          <Row>
            <Filter />
          </Row>
        </Col>
        <Col xs={24} sm={18} md={18} lg={20}>
          <ProductListing />
        </Col>
      </Row>
    </FilterAndListingContainer>
  );
}

export default FilterAndProductListing;
