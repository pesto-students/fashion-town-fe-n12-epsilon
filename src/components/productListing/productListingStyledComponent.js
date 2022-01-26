import styled from "styled-components";

const ListingContainer = styled.section`
  padding: 10px 5%;
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


export {
  ListingContainer,
  LoadingContainer,
  FilterHeading,
  FilterCheckboxWrapper,
};
