import React from 'react'
import Img from 'gatsby-image'
import { Row, Col } from 'react-bootstrap'

class ProjectItem extends React.Component {
    constructor({image, name, description, technologies, isLeft, link, motto}) {
        super({image, name, description, technologies, isLeft, link, motto})
        this.state = {
            innerWidth : 0
        }
    }

    componentDidMount(){
        this.setState({
            innerWidth: window.innerWidth
        })
    }

    render(){
        // console.log(this.props.image);
        const imgLeftItem = (
            <Row  style={{alignItems:"center", border:`1px solid #e1e4e8`, borderRadius:`3px`, marginBottom:`25px`, boxShadow:`5px 5px 6px -6px gray`}}>
                <Col lg="4" md="4" xs="12" style={{padding:`5px`}}>
                    <Img fluid={this.props.image.childImageSharp.fluid} fadeIn={true} alt={this.props.name}/>   
                </Col>
                <Col lg="8" md="8" xs="12">
                    <h5><a href={this.props.link}>{this.props.name}</a></h5>
                    <p>{this.props.motto}</p>
                    <p style={{opacity:`0.7`}}>{this.props.technologies.join(', ')}.</p>
                </Col>
            </Row>
        )

        const imgRightItem = (
            <Row style={{alignItems:"center", border:`1px solid #e1e4e8`, borderRadius:`3px`, marginBottom:`25px`, boxShadow:`5px 5px 6px -6px gray`}}>
                <Col lg="8" md="8" xs="12">
                    <h5><a href={this.props.link}>{this.props.name}</a></h5>
                    <p>{this.props.motto}</p>
                    <p style={{opacity:`0.7`}}>{this.props.technologies.join(', ')}.</p>
                </Col>
                <Col lg="4" md="4" xs="12" style={{padding:`5px`}}>
                    <Img fluid={this.props.image.childImageSharp.fluid} fadeIn={true} alt={this.props.name}/>   
                </Col>
            </Row>
        )
        return(
             (this.state.innerWidth > 720 ? (this.props.isLeft ? imgLeftItem : imgRightItem) : imgLeftItem )
        )
    }
}

export default ProjectItem