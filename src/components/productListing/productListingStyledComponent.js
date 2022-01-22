import { Checkbox } from "antd";
import styled from "styled-components";

const FilterAndListingContainer = styled.section`
  padding: 10px 5%;
  min-height: 70vh;
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
