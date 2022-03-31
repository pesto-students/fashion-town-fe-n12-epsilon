import { Checkbox, Col, List, Pagination, Row } from "antd";
import styled from "styled-components";

const FilterAndListingContainer = styled.section`
  padding: 10px 5%;
  min-height: 70vh;
  margin-bottom: 50px;
`;

const LoadingContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 70vh;
`;
const FilterHeading = styled.p`
  font-weight: 600;
`;
const FilterCheckboxWrapper = styled.div`
  height: 300px;
  overflow-y: scroll;
  width: 100%;
  ::-webkit-scrollbar {
    width: 0; /* Remove scrollbar space */
    background: transparent; /* Optional: just make scrollbar invisible */
  }
  /* Optional: show position indicator in red */
  ::-webkit-scrollbar-thumb {
    background: #ff0000;
  }
`;
const ListingBox = styled.div`
  min-height: 70vh;
`;
const FilterCheckBox = styled(Checkbox.Group)`
  display: flex;
  margin-left: 10px;
  flex-direction: column;
`;
const ProductListItems = styled(List.Item)`
  width: 200px;
`;

const ProductListPagination = styled(Pagination)`
  text-align: center;
`;

const FilterCol = styled(Col)`
  border-right: 1px solid #e8e8e8;
`;

const FilterHeadingRow = styled(Row)`
  padding-top: 10px;
`;
export {
  FilterAndListingContainer,
  ListingBox,
  LoadingContainer,
  FilterHeading,
  FilterCheckboxWrapper,
  FilterCheckBox,
  ProductListItems,
  ProductListPagination,
  FilterCol,
  FilterHeadingRow,
};
