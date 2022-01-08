import styled from "styled-components";

const NavBar = styled.nav`
  width: 100%;
  height: 70px;
  padding: 10px;
  background: #ffffff;
  box-shadow: 0px 4px 5px rgba(147, 147, 147, 0.25);
  padding-top: 20px;
`;
const Logo = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 26px;
  margin-top: -8px;
  color: black;
`;
const NavText = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  cursor: pointer;
`;
const NavBarGroup = styled.div`
  margin-left: 1%;
  display: inline-block;
`;
const NavBarItems = styled.div`
  margin-left: 100px;
`;
const NavBarActionGroup = styled.div`
  display: inline-block;
  margin-top: "12px"
  
`;

const NavBarActionItems = styled.div`
   margin-right: 25px;
`
const NavBarSpace = styled.div`
     width: 40%;
     display: flex;
`

export { NavBar, NavBarGroup, NavBarItems, Logo, NavText, NavBarActionGroup,NavBarActionItems,NavBarSpace };
