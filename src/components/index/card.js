import React from 'react'
import Img from 'gatsby-image'
import { Col } from 'react-bootstrap'

import './card.css'

const Card = ({image, photoName, title, tileHeight, content, subTitle, icons }) => {
    return(
        <Col className="tile" lg="4" xs="12" md="12"  style={{height:tileHeight}}>
            <Img fluid={image.childImageSharp.fluid} fadeIn={true} alt={photoName} className="img" style={{height:`100%`, width:`100%`, position:`absolute`, top:`0`, left:`0`, zIndex:`0`, transition: `all 0.4s ease-out`}}/>
            <Col className="text" lg="12" xs="12" md="12">
                <h1 align="center">{title}</h1>
                <h2 className="animate-text">{subTitle !== null ? subTitle : null}</h2>
                <p className="animate-text">{content}</p>
                <div className="dots">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </Col>
        </Col>
    )
}

export default Card