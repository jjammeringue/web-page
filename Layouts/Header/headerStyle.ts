import styled from "styled-components";

const Container = styled.div`
    position: absolute;
    display: flex;
    width: 100%;
    height: 40px;
    left: 0;
    padding-left: 28px;
    padding-right: 28px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    text-align: center;
`;

const menuBar = styled.div`
    justify-content: space-around;
    flex-direction: row;
    display: flex;
    margin-right: 15vw;
`;

export default {Container,menuBar};