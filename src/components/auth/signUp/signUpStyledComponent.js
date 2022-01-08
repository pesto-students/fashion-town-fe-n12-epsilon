import styled from "styled-components";

const SignUpContainer = styled.div`
    height: 90vh;
    width: 100%;
    background: #ff7878;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #f9575782, #e9e7e7); 
    background: linear-gradient(to right, #f9575782, #e9e7e7);
    overflow:hidden;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const SignUpBox = styled.div`
    height: 90%;
    width: 20%;
    width: 391px;
    height: 387px;
    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    padding: 2%;
`;

export {SignUpBox,SignUpContainer}