import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import { Container, Row, Col } from "react-bootstrap"
import { FaHeart } from 'react-icons/fa'

import Header from "./header"
import "./layout.css"
import SocialList from "./socialLinksList";

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Container fluid>
          <Header siteTitle={data.site.siteMetadata.title} />
          <main>{children}</main>
          <footer>
            <Row className="justify-content-md-center" >
              <Col lg="10" xs="12" md="12" style={{textAlign:`center`,margin:`0 auto`}}>
                © {new Date().getFullYear()}, Built with
                {` `}
                <FaHeart color="red"/> by
                {` `}
                <a href="https://github.com/thejengo" ref="no-referer">TheJengo</a>
              </Col>
            </Row>
            <Row>
              <Col lg="3" xs="12" md="12" style={{textAlign:`center`,margin:`0 auto`}}>
                <SocialList size="20px"/>
              </Col>
            </Row> 
          </footer>
        </Container>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
