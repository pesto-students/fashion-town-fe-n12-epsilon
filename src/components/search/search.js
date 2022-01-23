import React from "react";
import { Input } from "antd";
import _ from "lodash";
import { useSearchParams } from "react-router-dom";
import { SearchInput } from "./searchStyledComponent";

function Search() {
  const [searchPrams, setSearchParams] = useSearchParams();

  const handleSearchInputWithDebounce = _.debounce((search) => {
    if (_.isEmpty(search)) {
      setSearchParams();
    } else {
      setSearchParams({ search });
    }
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
