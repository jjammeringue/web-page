import styled from "styled-components";

const Container = styled.div`
    padding-top: 40px;
`;

const rightBlock = styled.div`
    position: absolute;
    width: 22vw;
    height: 34vw;
    right:0px;
    top: 0px;
    background: rgba(193, 219, 252, 0.4);
    justify-content: center;
    align-items: center;
    display: flex;
    font-size: xx-large;
    writing-mode: vertical-rl;
`;

const leftBottomBlock = styled.div`
    position: absolute;
    width: 22vw;
    height: 20vw;
    left: 0px;
    bottom: 0px;
    background: rgba(193, 219, 252, 0.4);
    writing-mode: vertical-lr;
`;

export default {Container, rightBlock, leftBottomBlock};