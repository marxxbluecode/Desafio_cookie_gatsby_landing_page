import React from 'react';
import { Helmet } from 'react-helmet';
import { createGlobalStyle } from 'styled-components';
import { Header } from "../components/Header"
import { Main } from "../components/Main"
import { Footer } from "../components/Footer"

const GlobalStyle = createGlobalStyle`
@import url("https://fonts.googleapis.com/css2?family=Nunito:wght@300&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Fredoka+One&family=Nunito:wght@300&display=swap");
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Nunito', sans-serif;
}
body{
    background-color: #fff;
    overflow-x: hidden;
}
h1{
    font-family: 'Fredoka One', cursive;
    font-weight: 800;
}
`

export default function Index() {
    return (
        <>
            <Helmet>
                <title>Isa Cookies</title>
            </Helmet>
            <GlobalStyle />
            <Header/>
            <Main/>
            <Footer/>
        </>
    )
}
