import React, { Component } from 'react'
import { graphql, StaticQuery } from 'gatsby'
import { Row, Col } from 'react-bootstrap'

import Layout from '../components/commons/layout'
import SEO from '../components/commons/seo'
import BlogListItem from '../components/blog/blogListItem'
import InfoBar from '../components/commons/infobar';

class BlogPage extends Component{
    constructor(){
        super()
        this.state = {
            blogLanguage : `en/EN`
        }    

        this.selectLanguage = this.selectLanguage.bind(this)
    }

    selectLanguage = (language) => {

        this.setState(prevState => {
            prevState.blogLanguage = language
            return prevState
        })
    }

    render(){
        return(
            <StaticQuery query={graphql`
                query BlogPageQuery{
                    allMarkdownRemark(
                        sort : {
                            order: DESC,
                            fields: [frontmatter___date]
                        }
                    ){
                        edges{
                            node{
                                excerpt
                                frontmatter{
                                    title
                                    path
                                    date(formatString: "MMMM DD, YYYY")
                                    tags
                                    language
                                    featuredImage {
                                        childImageSharp {
                                            fluid(maxWidth:1600, cropFocus:CENTER, maxHeight:500,quality:100) {
                                                aspectRatio
                                                src
                                                sizes
                                                srcSet
                                                srcWebp
                                                srcSetWebp
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            `}render={(data) => {
                return(
                    <Layout>
                        <SEO title="blog" keywords={[`thejengo`, `blog`, `software engineering`]} />
                        <Row>
                            <Col lg="12" xs="12" md="12">
                                <Row>
                                    <Col lg={{span:8, offset:2}} xs="12" md="12">
                                        <InfoBar infoName="blog" selectLanguage={this.selectLanguage}/>
                                    </Col>
                                </Row>
                                <Row>
                                    {/* {console.log(data.allMarkdownRemark.edges)} */}
                                    <Col lg={{span:8, offset:2}} xs="12" md="12">
                                        {data.allMarkdownRemark.edges.filter(({node}) => node.frontmatter.language === this.state.blogLanguage).map(({node}, index) =>(<BlogListItem node={node} key={index} />))}
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Layout>
                )}}
            />
        )
    }
}

export default BlogPage
