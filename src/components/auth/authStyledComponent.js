import styled from "styled-components";

const DisplayText = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  cursor: pointer;
  color: black;
`;
const NameInitialBox= styled.div`
border: 2px solid black;
border-radius: 50%;
width: 35px;
height: 35px;
display: flex;
justify-content: center;
align-items: center;
`

const UserNameCapitalize = styled.p`
text-transform: capitalize;
color:black;
cursor: initial;
`


export { DisplayText, NameInitialBox,UserNameCapitalize };