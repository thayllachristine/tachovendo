import React, { Component } from 'react'

import Navbar from '../../components/navbar/navbar'
import Footer from '../../components/footer/footer'

import { GridRow, Grid3Col, PSt, SunImg, TreeImg } from './sunnyday.styled'
import './sunnyday.scss'

import tree from './vectors/tree.svg'
import sun from './vectors/sun.svg'


class SunnyDay extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <GridRow>
                    <Grid3Col>
                        <TreeImg src={tree} alt="Duas árvores de tonalidades diferentes de verde e um banco amarelo ao lardo direito." />
                    </Grid3Col>

                    <Grid3Col>
                        <PSt> em _____________, não vai chover! </PSt>
                        <PSt> aproveite seu dia! </PSt>
                    </Grid3Col>

                    <Grid3Col>
                        <SunImg src={sun} alt="Som amarelo com raios girando no canto superior direito." />
                    </Grid3Col>
                </GridRow>
                <Footer />
            </React.Fragment>
        )
    }
}


export default SunnyDay