import React, { useEffect } from "react";
import { useLazyQuery } from "@apollo/client";

import ProductList from "./productList";

import ProductListLoading from "../loadingAnimations/productListLoading";
import ServerError from "../result/serverError";
import { FRESH_ARRIVALS_QUERY } from "../../graphQlQueries/freshArrivalsQuery";

function FreshArrivals() {
  const [getProductOrderBy, { error, loading, data }] =
    useLazyQuery(FRESH_ARRIVALS_QUERY);

  useEffect(() => {
    getProductOrderBy({ variables: { orderBy: "listed_date", limit: 50 } });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      {data && <ProductList productListData={data.getProductOrderBy} />}
      {loading && <ProductListLoading />}
      {error && <ServerError />}
    </>
  );
}

export default FreshArrivals;
