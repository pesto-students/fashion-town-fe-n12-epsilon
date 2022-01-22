import React from "react";
import { Input } from "antd";
import _ from "lodash";
import { useSearchParams } from "react-router-dom";
import { SearchInput } from "./searchStyledComponent";

function Search() {
  const [setSearchParams] = useSearchParams();
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
      <SearchInput
        size="large"
        allowClear
        placeholder="Search..."
        onChange={(e) => handleSearchInputWithDebounce(e.target.value)}
      />
    </Input.Group>
  );
}

export default Search;
