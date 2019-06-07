import React from "react"
import { Col, Row } from 'react-bootstrap'
import { FaDiagnoses } from 'react-icons/fa'

import Layout from "../components/commons/layout"
import SEO from "../components/commons/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Row>
      <Col lg={{span:8, offset:2}} md="12" xs="12" className="justify-content">
        <h1 align="center"><FaDiagnoses /> 404 NOT FOUND! </h1>
        <p align="center">You just hit a route that doesn&#39;t exist... Sorry about the sadness.</p>
      </Col>
    </Row>
  </Layout>
)

export default NotFoundPage
