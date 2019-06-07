import React from 'react'
import { graphql, Link } from 'gatsby'
import { Row, Col } from 'react-bootstrap'
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa'
// import Prism from 'prismjs'

import Layout from '../components/commons/layout'
import SEO from "../components/commons/seo"

const Template = ({ data, pageContext }) => {
    const { next, prev } = pageContext

    const { markdownRemark } = data
    const title = markdownRemark.frontmatter.title
    const html = markdownRemark.html

    return(
        <Layout>
            <SEO title="blog" keywords={[`thejengo`, `blog`, `software engineering`]} />
            <Row>
                <Col lg={{span:8, offset:2}} xs="12" md="12">
                    <Row>
                        <Col>
                        <h1 style={{marginBottom: '1rem', fontFamily: 'avenir'}}>{title}</h1>
                        <div className='blogpost' align="justify" dangerouslySetInnerHTML={{__html: html}} />
                        </Col>
                    </Row>
                    <Row style={{fontFamily: 'avenir'}}>
                        <Col lg="6" xs="6" md="6">
                            <span style={{float:`left`}}>{ prev && <Link to={prev.frontmatter.path}><FaArrowLeft /> Previous | {prev.frontmatter.title} </Link>}</span>
                        </Col>
                        <Col style={{float:`right`}}>
                            { next && <Link to={next.frontmatter.path}>{next.frontmatter.title} | Next <FaArrowRight /></Link>}
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Layout>
    )
}

export const query = graphql`
    query BlogDetailQuery($pathSlug: String!){
        markdownRemark(frontmatter: { path: {eq: $pathSlug }}) {
            html
            frontmatter{
                title
            }
        }
    }
`

export default Template