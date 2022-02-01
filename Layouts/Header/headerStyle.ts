import styled from "styled-components";

const Container = styled.div`
    position: absolute;
    display: flex;
    width: 100%;
    height: 40px;
    left: 0;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    text-align: center;
`;

const menuBar = styled.div`
    justify-content: space-around;
    flex-direction: row;
    display: flex;
`;

export default {Container,menuBar};