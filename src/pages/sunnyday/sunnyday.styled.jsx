import styled from 'styled-components'

export const PSt = styled.p`
    font-size: 25px
`

export const GridRow = styled.div`
    display: flex;
`

export const Grid3Col = styled.div`
    width: 33.3%;
    height: 520px;

    display:flex;
    justify-content:center;
    flex-direction: column;
`

export const TreeImg = styled.img`
    width: 350px;

    position: absolute;
    top: 37.5%;
    left: 5%;
`

export const SunImg = styled.img`
    width: 350px;
    
    position: absolute;
    top: 0;
    left: 65%;
    
    animation: sun 15s linear infinite;
    @keyframes sun {
        100% {
            transform: rotate(360deg);
        }
    } 
`