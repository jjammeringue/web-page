import styled from "styled-components";

const Container = styled.div`
    position: absolute;
    display: flex;
    height: 90px;
    left: 0;
    padding: 0 auto;
    margin-left: 20px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    background-color: red;
    font-size: 24px;
    font-weight: 500;
    line-height: 18px;
`;

const menuBar = styled.div`
    justify-content: space-around;
    flex-direction: row;
    display: flex;
    margin-right: 15vw;
`;

export default {Container,menuBar};