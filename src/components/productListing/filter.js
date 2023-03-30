import React, { useState } from "react";
import { Space, Row, Col, Button } from "antd";
import {
  FilterCheckBox,
  FilterCheckboxWrapper,
  FilterHeading,
  FilterHeadingRow,
} from "./productListingStyledComponent";
import { brandList } from "assets/data/brand";
import { useSearchParams } from "react-router-dom";
import { colorList } from "assets/data/color";
import _ from "lodash";
import { getAppliedFilterValueMap } from "components/utils";
import { HorizontalLine } from "components/productDetails/productDetailsStyledComponent";

function Filter() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [brandFilters, setBrandFilters] = useState([]);
  const [colorFilters, setColorFilters] = useState([]);

  const filterListArray = [
    {
      name: "brand",
      options: _.sortBy(brandList),
      selectedValues: brandFilters,
      setFilterCallback: setBrandFilters,
      title: "BRAND",
    },
    {
      name: "dominantColor",
      selectedValues: colorFilters,
      options: _.sortBy(colorList),
      setFilterCallback: setColorFilters,
      title: "COLOR",
    },
  ];

  const applyFilters = () => {
    const filterTypeValueMap = getAppliedFilterValueMap(searchParams);
    filterListArray.forEach(({ selectedValues, name }) => {
      if (Array.isArray(selectedValues)) {
        filterTypeValueMap[name] = selectedValues;
      }
    });
    setSearchParams(filterTypeValueMap);
  };

  const resetFilters = () => {
    const filterTypeValueMap = getAppliedFilterValueMap(searchParams);
    filterListArray.forEach(({ selectedValues, name, setFilterCallback }) => {
      if (Array.isArray(selectedValues)) {
        delete filterTypeValueMap[name];
      }
      setFilterCallback([]);
    });
    setSearchParams(filterTypeValueMap);
  };

  const checkBoxToggleHandler = (checkedValues, filterType) => {
    filterListArray.forEach(({ name, setFilterCallback }) => {
      if (name === filterType) {
        setFilterCallback(checkedValues);
      }
    });
  };

  return (
    <>
      <FilterHeadingRow>
        <Space>
          <Col span={6}>
            <h3>
              <strong>FILTERS</strong>
            </h3>
          </Col>
          <Col></Col>
          <Col span={16}>
            <Button onClick={resetFilters}>Reset</Button>
          </Col>
          <Col>
            <Button onClick={applyFilters}>Apply</Button>
          </Col>
        </Space>
      </FilterHeadingRow>
      <Space direction="vertical" size={"large"}>
        <HorizontalLine />
        {filterListArray.map((filter, index) => {
          return (
            <Row key={index}>
              <FilterHeading>{filter.title}</FilterHeading>

              <FilterCheckboxWrapper>
                <FilterCheckBox
                  options={filter.options}
                  value={filter.selectedValues}
                  onChange={(checkedValues) =>
                    checkBoxToggleHandler(checkedValues, filter.name)
                  }
                />
              </FilterCheckboxWrapper>
              <HorizontalLine />
            </Row>
          );
        })}
      </Space>
    </>
  );
}

export default Filter;
