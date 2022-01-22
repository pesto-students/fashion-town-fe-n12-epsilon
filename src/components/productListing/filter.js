import React, { useState, useEffect } from "react";
import { Checkbox, Space, Row } from "antd";
import {
  FilterCheckboxWrapper,
  FilterHeading,
} from "./productListingStyledComponent";
import { brandList } from "../../assets/data/brand";
import { useSearchParams } from "react-router-dom";
import { colorList } from "../../assets/data/color";

function Filter() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [brandFilters, setBrandFilters] = useState([]);
  const [colorFilters, setColorFilters] = useState([]);

  const filterListArray = [
    {
      name: "brand",
      options: brandList,
      defaultValue: brandFilters,
      title: "BRAND",
    },
    {
      name: "color",
      defaultValue: colorFilters,
      options: colorList,
      title: "COLOR",
    },
  ];

  const getAppliedFilterValueMap = () => {
    let filterTypeValueMap = {};
    searchParams.forEach((filter, keys) => {
      filterTypeValueMap[keys] = filter;
    });
    return filterTypeValueMap;
  };

  const applyFilters = (filterType, selectedValueArray) => {
    if (selectedValueArray.length > 0) {
      let filterTypeValueMap = getAppliedFilterValueMap();
      filterTypeValueMap[filterType] = selectedValueArray;
      setSearchParams(filterTypeValueMap);
    }
  };

  useEffect(() => {
    applyFilters("brand", brandFilters);  
  }, [brandFilters]);

  useEffect(() => {
    applyFilters("dominantColor", colorFilters);
  }, [colorFilters]);

  const checkBoxToggleHandler = (checkedValues, filterType) => {
    if (filterType === "brand") {
      setBrandFilters(checkedValues);
    } else if (filterType === "color") {
      setColorFilters(checkedValues);
    }
  };

  return (
    <Space direction="vertical" size={"large"}>

      {filterListArray.map((filter,index) => {
        return (
          <Row xs={6} sm={6} md={24} lg={24} key={index}>
            <FilterHeading>{filter.title}</FilterHeading>
            <FilterCheckboxWrapper>
              <Checkbox.Group
                style={{
                  display: "flex",
                  marginLeft: "10px",
                  flexDirection: "column",
                }}
                options={filter.options}
                defaultValue={filter.defaultValue}
                onChange={(checkedValues) =>
                  checkBoxToggleHandler(checkedValues, filter.name)
                }
              />
            </FilterCheckboxWrapper>
          </Row>
        );
      })}

    </Space>
  );
}

export default Filter;
