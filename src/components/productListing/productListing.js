import React, { useEffect, useState } from "react";
import { useLazyQuery } from "@apollo/client";
import { useSearchParams } from "react-router-dom";

import { FILTER_QUERY } from "../../graphQlQueries/filterQuery";

import ProductList from "./productList";
import { connect } from "react-redux";
import { getAppliedFilterArray } from "./productUtilFunctions";

import { setProductIdMapList } from "../../redux/actions/productActions";
import ProductListLoading from "../loadingAnimations/productListLoading";
import ServerError from "../result/serverError";
import { SEARCH_TEXT_QUERY } from "../../graphQlQueries/searchQuery";

function ProductListing() {
  const [searchParams] = useSearchParams();
  const [resultType, setResultType] = useState(null);

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
    const filterTypeValueArray = getAppliedFilterArray(searchParams);

    if (isSearchParamHasSearchInput(filterTypeValueArray)) {
      const searchInput = filterTypeValueArray["search"][0];
      setResultType("searchInput");
      productBySearchInput({ variables: { searchInput: searchInput } });
    } else {
      setResultType("filter");
      productByFilters({ variables: filterTypeValueArray });
    }
  }, [searchParams]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      {resultType === "searchInput" && searchQueryData && (
        <ProductList productListData={searchQueryData.productBySearchInput} />
      )}
      {resultType === "filter" && filterData && (
        <ProductList productListData={filterData.productByFilters} />
      )}
      {(filterLoading || searchQueryLoading) && <ProductListLoading />}
      {(filterError || searchQueryError) && <ServerError />}
    </>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    setProductIdMapList: (productIdMapList) => {
      dispatch(setProductIdMapList(productIdMapList));
    },
  };
};

export default connect(null, mapDispatchToProps)(ProductListing);
