import { Checkbox } from "antd";
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
export {
  FilterAndListingContainer,
  ListingBox,
  LoadingContainer,
  FilterHeading,
  FilterCheckboxWrapper,
  FilterCheckBox,
};
