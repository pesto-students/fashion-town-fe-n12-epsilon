const getAppliedFilterArray = (searchParams) => {
  let filterTypeValueArray = {};
  searchParams.forEach((filter, key) => {
    console.log("search key value",key, filter);
    filterTypeValueArray[key] = searchParams.getAll(key);
  });
  return filterTypeValueArray;
};

const createProductIdDetailsMap = (productListArray) => {
  console.log(productListArray)
  const productIdDetailsMap = {};
  productListArray.forEach((product) => {
    productIdDetailsMap[product.product_id] = product;
  });
  return productIdDetailsMap;
};

export { getAppliedFilterArray, createProductIdDetailsMap };
