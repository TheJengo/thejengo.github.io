import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col, Nav, Navbar } from 'react-bootstrap'
import { Location } from '@reach/router'

const linkStyle = {
  color : 'rgba(0,0,0,0.7)'
}

const Header = ({ siteTitle }) => {
  return(
    <header>
      <Location>
        {({ location }) => {
          // console.log(location)
          return(
            <Row className="justify-content">
              <Col lg={{span: 10, offset:1}} sm="12" md="8" className="align-center">
                <Navbar sticky="top" collapseOnSelect expand="lg" variant="light">
                  <Navbar.Brand href="/">Cengiz Cebeci</Navbar.Brand>
                  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                  <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                    <Nav>
                      <Nav.Link style={{linkStyle}} active={location.pathname === '/'} href="/">Home</Nav.Link>
                      <Nav.Link style={{linkStyle}} active={location.pathname === '/about'} href="/about">About</Nav.Link>
                      <Nav.Link style={{linkStyle}} active={location.pathname === '/work'} href="/work">Work</Nav.Link>
                      <Nav.Link style={{linkStyle}} active={location.pathname === '/project'} href="/project">Project</Nav.Link>
                      <Nav.Link style={{linkStyle}} active={location.pathname === '/blog'} href="/blog">Blog</Nav.Link>
                    </Nav>
                  </Navbar.Collapse>
                </Navbar>
              </Col>
            </Row>
          )
        }}
      </Location>
      
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string.isRequired,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
