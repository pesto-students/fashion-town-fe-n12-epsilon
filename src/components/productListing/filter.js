import React, { useState, useEffect } from "react";
import { Space, Row } from "antd";
import {
  FilterCheckBox,
  FilterCheckboxWrapper,
  FilterHeading,
} from "./productListingStyledComponent";
import { brandList } from "../../assets/data/brand";
import { useSearchParams } from "react-router-dom";
import { colorList } from "../../assets/data/color";
import _ from "lodash";
import { getAppliedFilterValueMap } from "../utils";

function Filter() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [brandFilters, setBrandFilters] = useState([]);
  const [colorFilters, setColorFilters] = useState([]);

  const filterListArray = [
    {
      name: "brand",
      options: _.sortBy(brandList),
      defaultValue: brandFilters,
      setFilterCallback: setBrandFilters,
      title: "BRAND",
    },
    {
      name: "color",
      defaultValue: colorFilters,
      options: _.sortBy(colorList),
      setFilterCallback: setColorFilters,
      title: "COLOR",
    },
  ];

  const applyFilters = (filterType, selectedValueArray) => {
    if (Array.isArray(selectedValueArray)) {
      const filterTypeValueMap = getAppliedFilterValueMap(searchParams);
      filterTypeValueMap[filterType] = selectedValueArray;
      setSearchParams(filterTypeValueMap);
    }
  };

  useEffect(() => {
    applyFilters("brand", brandFilters);
  }, [brandFilters]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    applyFilters("dominantColor", colorFilters);
  }, [colorFilters]); // eslint-disable-line react-hooks/exhaustive-deps

  const checkBoxToggleHandler = (checkedValues, filterType) => {
    if (filterType === "brand") {
      setBrandFilters(checkedValues);
    } else if (filterType === "color") {
      setColorFilters(checkedValues);
    }
  };

  return (
    <Space direction="vertical" size={"large"}>
      {filterListArray.map((filter, index) => {
        return (
          <Row key={index}>
            <FilterHeading>{filter.title}</FilterHeading>
            <FilterCheckboxWrapper>
              <FilterCheckBox
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
