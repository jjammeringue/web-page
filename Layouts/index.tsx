import React from 'react';
import Body from './Body';
import Footer from './Footer';
import Header from './Header';
import Styled from './layoutStyle';
export default function Layout() {

    return(
        <Styled.Container>
            <Header />
            <Body />
            <Footer />
        </Styled.Container>
    )
}