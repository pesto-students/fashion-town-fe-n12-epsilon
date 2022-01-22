import React, { useEffect, useState } from "react";
import { useLazyQuery } from "@apollo/client";
import { useSearchParams } from "react-router-dom";

import { FILTER_QUERY } from "../../graphQlQueries/filterQuery";

import ProductList from "./productList";
import { connect } from "react-redux";
import { getAppliedFilterArray } from "./productUtilFunctions";

import { setProductIdMapList } from "../../redux/actions/productActions";
import ProductListLoading from "../loadingSkeleton/productListLoading";
import ServerError from "../result/serverError";
import { SEARCH_TEXT_QUERY } from "../../graphQlQueries/searchQuery";

function ProductListing() {
  const [searchParams] = useSearchParams();
  const [resultType, setResultType] = useState(null);
  console.log("search params", searchParams);

  let [
    productByFilters,
    { error: filterError, loading: filterLoading, data: filterData },
  ] = useLazyQuery(FILTER_QUERY);

  let [
    productBySearchInput,
    {
      error: searchQueryError,
      loading: searchQueryLoading,
      data: searchQueryData,
    },
  ] = useLazyQuery(SEARCH_TEXT_QUERY);

  const isSearchParamHasSearchInput = (filterTypeValueArray) => {
    return filterTypeValueArray.hasOwnProperty("searchInput");
  };

  useEffect(() => {
    console.log(searchParams);
    const filterTypeValueArray = getAppliedFilterArray(searchParams);

    if (isSearchParamHasSearchInput(filterTypeValueArray)) {
      const searchInput = filterTypeValueArray["searchInput"][0];
      setResultType("searchInput");
      productBySearchInput({ variables: { searchInput: searchInput } });
    } else {
      console.log(searchQueryData, searchQueryLoading);
      setResultType("filter");
      productByFilters({ variables: filterTypeValueArray });
    }
  }, [searchParams]);

  if (filterLoading || searchQueryLoading) return <ProductListLoading />;

  if (filterError || searchQueryError) return <ServerError />;

  if (
    resultType === "searchInput" &&
    searchQueryData &&
    searchQueryData.productBySearchInput
  ) {
    const productListData = searchQueryData.productBySearchInput;
    return <ProductList productListData={productListData} />;
  } else if (
    resultType === "filter" &&
    filterData &&
    filterData.productByFilters
  ) {
    const productListData = filterData.productByFilters;
    return <ProductList productListData={productListData} />;
  }
  return <></>;
}

const mapDispatchToProps = (dispatch) => {
  return {
    setProductIdMapList: (productIdMapList) => {
      dispatch(setProductIdMapList(productIdMapList));
    },
  };
};

export default connect(null, mapDispatchToProps)(ProductListing);
