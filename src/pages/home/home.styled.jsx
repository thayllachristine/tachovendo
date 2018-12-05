// import url('https://fonts.googleapis.com/css?family=Annie+Use+Your+Telescope|Dawning+of+a+New+Day|Give+You+Glory|Handlee')
import styled from 'styled-components'

export const NavHome = styled.nav`
    width: 100%;
    height: 50px;
    border-bottom: 1px solid #ccc;

    display: flex;
    align-items: center;
`

export const PNav = styled.p`
    @import url('https://fonts.googleapis.com/css?family=Sacramento');
    font-family: 'Sacramento', cursive;
    font-size: 30px;
    text-shadow: 2.5px 2.5px 1px #CCC;
`

export const PSt = styled.p`
    margin: 5px auto;
    font-size: 17.5px
    text-align: center;
`

export const TitleSt = styled.p`
    margin: 15px auto;
    font-size: 25px;
    text-align: center;
`

export const GridRow = styled.div`
    display: flex;
    height: 515px;
    width: 100%;   
`

export const Ellipse = styled.div`
    width: 625px;
    height: 275px;
    border: 1px solid #cccccc78;
    border-radius: 20px;

    position: absolute;
    left: 615px;
    top: 165px;
    z-index: -1;
    
    display: flex;
    justify-content: center;
    flex-direction: column;

    background-color: #cccccc78;
`

export const Grid1stHalfCol = styled.div`
    width: 40%;
    display: flex;
    justify-content: center;
    `
    
export const Grid2ndHalfCol = styled.div`
    width: 50%;
    display: flex;
    justify-content: center;
    flex-direction: column;
`

export const FooterHome = styled.footer`
    padding: 13.5px;
    display: flex;
    justify-content: center;
    
    background-color: #cccccc78;
`

export const FooterHomeP = styled.p`
    font-size: 10px;
`