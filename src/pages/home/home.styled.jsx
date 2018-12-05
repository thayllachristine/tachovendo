import styled from 'styled-components'

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