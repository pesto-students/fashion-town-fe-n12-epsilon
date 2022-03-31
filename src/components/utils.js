export const getAppliedFilterValueMap = (searchParams) => {
  let filterTypeValueMap = {};
  searchParams.forEach((filter, keys) => {
    if (filterTypeValueMap[keys]) {
      filterTypeValueMap[keys].push(filter);
    } else {
      filterTypeValueMap[keys] = [filter];
    }
  });
  return filterTypeValueMap;
};
