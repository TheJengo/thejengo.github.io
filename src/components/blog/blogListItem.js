import React from 'react'
import Img from 'gatsby-image'
import { Row, Col } from 'react-bootstrap'
import { FaRegClock, FaTags } from 'react-icons/fa'

const BlogListItem = ({ index,  node }) => (
    <Row key={index} style={{paddingTop:`15px`,padding:`5px`,alignItems:"center", border:`1px solid #e1e4e8`, borderRadius:`3px`, marginBottom:`25px`, boxShadow:`5px 5px 6px -6px gray`}}>
        <Col lg="12" xs="12" md="12" href="test">
            <a href={node.frontmatter.path}>
                <Img
                    fluid={node.frontmatter.featuredImage.childImageSharp.fluid}
                    fadeIn={true}
                    className="align-self-center mr-3"
                    alt="Generic placeholder"
                />
            </a>
            <h5 style={{marginTop:`15px`,marginBottom:`-5px`}}>
                <a style={{color:`black`, opacity:`0.7`}} href={node.frontmatter.path}>
                    {node.frontmatter.title}
                </a>
            </h5>
            <small style={{color:`black`, opacity:`0.7`}}>
                <span><FaRegClock /> {node.frontmatter.date}</span>
                <span style={{marginLeft:`15px`}}><FaTags /> {node.frontmatter.tags.join(", ")}</span>
            </small>
            <p>
                {node.excerpt}
            </p>
        </Col>
    </Row>
)

export default BlogListItem
