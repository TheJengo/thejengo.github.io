import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { Row, Col } from 'react-bootstrap'

import Layout from '../components/commons/layout'
import SEO from '../components/commons/seo';
import ProjectItem from  '../components/project/projectItem'

const ProjectPage = () => (
    <StaticQuery query={graphql`
    query ProjectPageQuery{
        zimo: file(relativePath: {eq: "Project/zimologo.png"}){
            childImageSharp{
                fluid(maxWidth: 1600){
                    aspectRatio
                    sizes
                    src
                    srcSet
                    srcWebp
                    srcSetWebp
                }
            }
        }
        shoppy: file(relativePath: {eq: "Project/shoppylogo.jpg"}){
            childImageSharp{
                fluid(maxWidth: 1600){
                    aspectRatio
                    sizes
                    src
                    srcSet
                    srcWebp
                    srcSetWebp
                }
            }
        }
        tictactoe: file(relativePath: {eq: "Project/tictactoelogo.png"}){
            childImageSharp{
                fluid(maxWidth: 1600){
                    aspectRatio
                    sizes
                    src
                    srcSet
                    srcWebp
                    srcSetWebp
                }
            }
        }
        countdown: file(relativePath: {eq: "Project/countdownlogo.png"}){
            childImageSharp{
                fluid(maxWidth: 1600){
                    aspectRatio
                    sizes
                    src
                    srcSet
                    srcWebp
                    srcSetWebp
                }
            }
        }
    }
    `} render= {(data) => (
    <Layout>
        <SEO title="Projects" keywords={[`TheJengo`,`Cengiz Cebeci`,`Project`]} />
        <Row>
            <Col lg={{span:8, offset:2}} xs="12" md="12">
            <Row>
                <Col lg="12" md="12" xs="12">
                    <ProjectItem image={data.zimo} name="Zimo" motto="Borrow and Refund your stock items easiest way you can have with ZIMO. " description="This is an imitation of an stock management automation project for software testing and development quality. This project aims to get knowledge about software architectures like MVC and N-Tier Layered Architectiure, TDD and Unit Testing." link="https://github.com/TheJengo/ZIMO" isLeft={true} technologies={["NUnit","XUnit", "MSSQL", "Entity Framework","Bcrypt.Net-Next","C#","OOP","MVC"]}/>
                    <ProjectItem image={data.tictactoe} name="Tictactoe f/b" motto="Tictactoe game have fun to play with your friends." description="" link="https://github.com/TheCCO2018/" isLeft={false} technologies={["C#","WebApi 2.2","NodeJS","Socket.io","Javascript","Api", ".Net"]}/>
                    <ProjectItem image={data.countdown} name="Countdown" motto="Do you remember the Countdown Show from 90's. This game fully imitates it. You'll Love it :)" description="This project is a simulation of Countdown the TV show in 90's. It creates all combinations as trees and it evaluates them to reach to closest or exact solution." link="https://github.com/TheCCO2018/Countdown" isLeft={true} technologies={["HTML","CSS","JS","Bootstrap"]}/>
                    <ProjectItem image={data.shoppy} name="Shoppy" motto="Be happy when you are in Shoppy." description="This is an imitation of an e-marketing project for Data Structures. This project aims to get knowledge about Binary Search Trees, Heap Trees, Heap Sorting Algorithm and Hash Tables." link="https://github.com/TheCCO2018/Shoppy" isLeft={false} technologies={["C#","Data Structures","Trees","Balanced Trees","Entity Framework","Windows Forms", ".Net"]}/>
                </Col>
            </Row>
            </Col>
        </Row>
    </Layout>
    )}
    />
)

export default ProjectPage