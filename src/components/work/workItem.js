import React from 'react'
import Img from 'gatsby-image'
import { Row, Col } from 'react-bootstrap'

const WorkItem = ({ image, companyName, date, roleDescription, projectsAndTasks, technologies}) => {
    // console.log(image.childImageSharp.fluid)
    return(
        <Row>
            <Col>
                <Img 
                    fluid={image.childImageSharp.fluid} fadeIn={true} alt={companyName}
                />
            </Col>
            <Col lg="12" md="12" xs="12">
                <h4 style={{marginBottom:"-5px"}}>{companyName}</h4>
                <small>{date}</small>
                <h5>Role</h5>
                <p align="justify">{roleDescription}</p> <br/>
                <h5>Projects {`&`} Tasks</h5>
                <ul>
                    {projectsAndTasks.map((task, i) => <li key={i}>{task}</li>)}
                </ul>
                <br/>
                <h5>Technologies</h5>
                <p align="justify">{technologies.join(", ")}.</p>
            </Col>
        </Row>
    )
}

export default WorkItem