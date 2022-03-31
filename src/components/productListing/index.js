import React, { useEffect, useState } from "react";
import { useLazyQuery } from "@apollo/client";
import { useSearchParams } from "react-router-dom";

import { FILTER_QUERY } from "graphQlQueries/filterQuery";

import ProductList from "./productList";
import { getAppliedFilterArray } from "./productUtilFunctions";
import ProductListLoading from "components/loadingAnimations/productListLoading";
import ServerError from "components/result/serverError";
import { SEARCH_TEXT_QUERY } from "graphQlQueries/searchQuery";
import { getAppliedFilterValueMap } from "components/utils";
import config from "config/config";
import { ProductListPagination } from "./productListingStyledComponent";

function ProductListing() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [resultType, setResultType] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [
    productByFilters,
    { error: filterError, loading: filterLoading, data: filterData },
  ] = useLazyQuery(FILTER_QUERY, { fetchPolicy: "network-only" });

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
  const isSearchPramHasPageAndItemCount = (filterTypeValueArray) => {
    return (
      filterTypeValueArray.hasOwnProperty("page") &&
      filterTypeValueArray.hasOwnProperty("itemCount")
    );
  };
  /**
   * For pagination
   * @param current page number
   * @description set page no and item per page to url search prams
   */

  useEffect(() => {
    if (currentPage) {
      const filterTypeValueMap = getAppliedFilterValueMap(searchParams);
      filterTypeValueMap["page"] = parseInt(currentPage);
      filterTypeValueMap["itemCount"] = parseInt(config.itemsPerPage);
      setSearchParams(filterTypeValueMap);
    }
  }, [currentPage]); // eslint-disable-line react-hooks/exhaustive-deps

  /**
   * @prams search prams from url
   * @description get applied filters and search text from url and call apis accordingly
   */

  useEffect(() => {
    const filterTypeValueArray = getAppliedFilterArray(searchParams);

    if (isSearchParamHasSearchInput(filterTypeValueArray)) {
      const searchInput = filterTypeValueArray["search"][0];
      setResultType("searchInput");
      productBySearchInput({ variables: { searchInput: searchInput } });
    } else if (isSearchPramHasPageAndItemCount(filterTypeValueArray)) {
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
          <ProductListPagination
            defaultCurrent={1}
            total={filterData.productByFilters.totalCount}
            current={currentPage}
            onChange={(page) => setCurrentPage(page)}
          />
        </>
      )}
      {(filterLoading || searchQueryLoading) && <ProductListLoading />}
      {(filterError || searchQueryError) && <ServerError />}
    </>
  );
}

export default ProductListing;
