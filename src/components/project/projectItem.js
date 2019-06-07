import React from 'react'
import Img from 'gatsby-image'
import { Row, Col } from 'react-bootstrap'

const ProjectItem = ({ image, name, description, technologies, isLeft, link, motto }) => {
        const imgLeftItem = (
            <Row  style={{alignItems:"center", border:`1px solid #e1e4e8`, borderRadius:`3px`, marginBottom:`25px`, boxShadow:`5px 5px 6px -6px gray`}}>
                <Col lg="4" md="4" xs="12" style={{padding:`5px`}}>
                    <Img fluid={image.childImageSharp.fluid} fadeIn={true} alt={name}/>   
                </Col>
                <Col lg="8" md="8" xs="12">
                    <h5><a href={link}>{name}</a></h5>
                    <p>{motto}</p>
                    <p style={{opacity:`0.7`}}>{technologies.join(', ')}.</p>
                </Col>
            </Row>
        )

        const imgRightItem = (
            <Row style={{alignItems:"center", border:`1px solid #e1e4e8`, borderRadius:`3px`, marginBottom:`25px`, boxShadow:`5px 5px 6px -6px gray`}}>
                <Col lg="8" md="8" xs="12">
                    <h5><a href={link}>{name}</a></h5>
                    <p>{motto}</p>
                    <p style={{opacity:`0.7`}}>{technologies.join(', ')}.</p>
                </Col>
                <Col lg="4" md="4" xs="12" style={{padding:`5px`}}>
                    <Img fluid={image.childImageSharp.fluid} fadeIn={true} alt={name}/>   
                </Col>
            </Row>
        )
        return(
             (window.innerWidth > 720 ? (isLeft ? imgLeftItem : imgRightItem) : imgLeftItem )
        )
}

export default ProjectItem