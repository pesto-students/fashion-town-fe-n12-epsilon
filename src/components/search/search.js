import React from "react";
import { Input } from "antd";
import _ from "lodash";
import { useSearchParams } from "react-router-dom";
import { SearchInput } from "./searchStyledComponent";
import { useLocation, useNavigate } from "react-router-dom";
import links from "config/routeLinks";
import config from "config";

function Search() {
  const [, setSearchParams] = useSearchParams();
  const location = useLocation();
  const navigate = useNavigate();
  const { pathname } = location;
  const { shop } = links;
  const { itemsPerPage } = config;

  const pathnameIsNotShop = () => {
    return pathname !== `/${shop}`;
  };
  const searchInputHandler = (e) => {
    if (pathnameIsNotShop()) {
      navigate(shop);
    }
    handleSearchInputWithDebounce(e.target.value);
  };
  const handleSearchInputWithDebounce = _.debounce((search) => {
    if (_.isEmpty(search)) {
      setSearchParams();
      navigate(`${shop}?page=1&itemCount=${itemsPerPage}`);
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
        onChange={(e) => searchInputHandler(e)}
      />
    </Input.Group>
  );
}

export default Search;
