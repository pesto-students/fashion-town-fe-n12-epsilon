import React,{useState} from "react";
import { Checkbox, Space, Row } from "antd";
import { FilterHeading } from "./productListingStyledComponent";
import { brandList } from "../../assets/data/brand";
import { useSearchParams, useLocation } from "react-router-dom";
import { colors } from "../../assets/data/color";
import {forEach} from "lodash";

function Filter() {
  let [searchParams, setSearchParams] = useSearchParams();
    const [brandSelected,setBrandSelected] = useState([])
    const [colorSelected,setColorSelected] = useState([])
    
  const getAllFilterApplied = () => {
    let variable = {};
    forEach(searchParams,(filter, keys) => {
      console.log(keys, filter);
      variable[keys] = filter;
    });
    return variable;
  };

  const applyFilters = (filterType) =>{
    setSearchParams()
  }

  const checkBoxToggleHandler = (checkedValues, filterType) => {
      if(filterType === "brand"){
        setBrandSelected(checkedValues) 
      }
      else if(filterType === "color"){
        setColorSelected(checkedValues)
      }

    // console.log("checked = ", checkedValues, searchParams.get(filterType));
    // const alreadyAppliedFilters = getAllFilterApplied();
    // console.log("alreadyAppliedFilters",alreadyAppliedFilters)
    // if(alreadyAppliedFilters[filterType]){
    //     alreadyAppliedFilters[filterType] = alreadyAppliedFilters[filterType] + "," + checkedValues;
    // }
    // else{
    //     alreadyAppliedFilters[filterType] = [checkedValues];
    // }

    // setSearchParams(alreadyAppliedFilters);
  };

  return (
    <Space direction="vertical">
      <Row>
        <FilterHeading>BRAND</FilterHeading>
        <Checkbox.Group
          style={{
            display: "flex",
            marginLeft: "10px",
            flexDirection: "column",
          }}
          options={brandList}
          defaultValue={["Apple"]}
          onChange={(checkedValues) => checkBoxToggleHandler(checkedValues,"brand")}
        />
      </Row>
      <FilterHeading>COLOR</FilterHeading>
      <Checkbox.Group
        style={{ display: "flex", marginLeft: "10px", flexDirection: "column" }}
        options={colors}
        defaultValue={["Apple"]}
        onChange={(checkedValues) => checkBoxToggleHandler(checkedValues,"color")}
      />
      <Row />
    </Space>
  );
}

export default Filter;
