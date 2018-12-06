import styled from 'styled-components'

export const NavHome = styled.nav`
    width: 100%;
    border-bottom: 1px solid #ccc;

    display: flex;
    align-items: center;

    @media screen and (max-width: 2560px) {
        height: 100px;
    }

    @media screen and (max-width: 1440px) {
        height: 50px;
    }

    @media screen and (max-width: 1024px) {
        height: 42.5px;
    }
`

export const PNav = styled.p`
    @import url('https://fonts.googleapis.com/css?family=Sacramento');
    font-family: 'Sacramento', cursive;
    text-shadow: 2.5px 2.5px 1px #CCC;
    color: #6d6d6d;

    @media screen and (max-width: 2560px) {
        font-size: 55px;
    }

    @media screen and (max-width: 1440px) {
        font-size: 30px;
    }

    @media screen and (max-width: 1024px) {
        font-size: 25px;
    }

`
