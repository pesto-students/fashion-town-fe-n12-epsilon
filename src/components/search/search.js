import React from "react";
import { Input } from "antd";
import _ from "lodash";
import { useSearchParams } from "react-router-dom";


function Search() {
  const [searchParams, setSearchParams] = useSearchParams();
  const handleSearchInputWithDebounce = _.debounce((searchInput) => {
    if (searchInput === "") {
      setSearchParams();
    } else {
      setSearchParams({ searchInput });
    }
    console.log("deb", searchInput);
  }, 500);

  return (
    <Input.Group>
      <Input.Search
        size="large"
        allowClear
        style={{ width: "100%", borderRadius: "10px" }}
        placeholder="Search..."
        onChange={(e) => handleSearchInputWithDebounce(e.target.value)}
      />
    </Input.Group>
  );
}



export default Search;
