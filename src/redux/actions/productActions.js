export const setProductList = (productList) => {
    return {
        type : "PRODUCT_LIST",
        payload: productList
    }
};

export const setProductIdMapList = (productIdMapList) => {
    return {
        type : "PRODUCT_ID_DETAILS_MAP",
        payload: productIdMapList
    }
};