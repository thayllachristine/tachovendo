import React, { Component } from 'react'
import { getLocalStorage } from '../../network/localStorage'
import Navbar from '../../components/navbar/others/navbar'
import Footer from '../../components/footer/others/footer'
import './sunnyday.scss'
import { GridRow, Grid3Col, PSt, SunImg, TreeImg } from './sunnyday.styled'
import sun from './vectors/sun.svg'
import tree from './vectors/tree.svg'


class SunnyDay extends Component {
    render() {
        return (
            <div className="bg-sunny">
                <Navbar />
                <GridRow>
                    <Grid3Col>
                        <TreeImg src={tree} alt="Duas árvores de tonalidades diferentes de verde e um banco amarelo ao lardo direito." />
                    </Grid3Col>

                    <Grid3Col>
                        <PSt> em {getLocalStorage(`city`)}, não vai chover! </PSt>
                        <PSt> aproveite seu dia! </PSt>
                    </Grid3Col>

                    <Grid3Col>
                        <SunImg src={sun} alt="Som amarelo com raios girando no canto superior direito." />
                    </Grid3Col>
                </GridRow>
                <Footer />
            </div>
        )
    }
}


export default SunnyDay