import React, { useEffect, useState } from "react";
import { useLazyQuery } from "@apollo/client";
import { useSearchParams } from "react-router-dom";

import { FILTER_QUERY } from "../../graphQlQueries/filterQuery";

import ProductList from "./productList";
import { getAppliedFilterArray } from "./productUtilFunctions";
import ProductListLoading from "../loadingAnimations/productListLoading";
import ServerError from "../result/serverError";
import { SEARCH_TEXT_QUERY } from "../../graphQlQueries/searchQuery";
import { getAppliedFilterValueMap } from "../utils";
import config from "config";
import { Pagination } from "antd";

function ProductListing() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [resultType, setResultType] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [
    productByFilters,
    { error: filterError, loading: filterLoading, data: filterData },
  ] = useLazyQuery(FILTER_QUERY);

  const [
    productBySearchInput,
    {
      error: searchQueryError,
      loading: searchQueryLoading,
      data: searchQueryData,
    },
  ] = useLazyQuery(SEARCH_TEXT_QUERY);

  const isSearchParamHasSearchInput = (filterTypeValueArray) => {
    return filterTypeValueArray.hasOwnProperty("search");
  };

  useEffect(() => {
    if (currentPage) {
      const filterTypeValueMap = getAppliedFilterValueMap(searchParams);
      filterTypeValueMap["page"] = parseInt(currentPage);
      filterTypeValueMap["itemCount"] = parseInt(config.itemsPerPage);
      setSearchParams(filterTypeValueMap);
    }
  }, [currentPage]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    const filterTypeValueArray = getAppliedFilterArray(searchParams);

    if (isSearchParamHasSearchInput(filterTypeValueArray)) {
      const searchInput = filterTypeValueArray["search"][0];
      setResultType("searchInput");
      productBySearchInput({ variables: { searchInput: searchInput } });
    } else {
      setResultType("filter");
      console.log(filterTypeValueArray);
      productByFilters({ variables: filterTypeValueArray });
    }
  }, [searchParams]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      {resultType === "searchInput" && searchQueryData && (
        <ProductList productListData={searchQueryData.productBySearchInput} />
      )}
      {resultType === "filter" && filterData && (
        <>
          <ProductList productListData={filterData.productByFilters.products} />
          <Pagination
            defaultCurrent={1}
            total={filterData.productByFilters.totalCount}
            current={currentPage}
            onChange={(page) => setCurrentPage(page)}
            style={{ textAlign: "center" }}
          />
        </>
      )}
      {(filterLoading || searchQueryLoading) && <ProductListLoading />}
      {(filterError || searchQueryError) && <ServerError />}
    </>
  );
}

export default ProductListing;
