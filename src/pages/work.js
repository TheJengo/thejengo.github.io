import React from 'react'
import { StaticQuery, graphql} from 'gatsby'
import { Row, Col } from 'react-bootstrap'

import Layout from '../components/commons/layout'
import WorkItem from '../components/work/workItem'
import SEO from '../components/commons/seo';

const WorkPage = () => (
    <StaticQuery query={graphql`
    query WorkPageQuery{
        groupeRenault: file(relativePath: {eq: "Work/grouperenault.png"}){
            childImageSharp{
                fluid(maxWidth: 1280){
                    aspectRatio
                    sizes
                    src
                    srcSet
                    srcWebp
                    srcSetWebp
                }
            }
        }
        turkTicaret: file(relativePath: {eq: "Work/turkticaret.jpg"}){
            childImageSharp{
                fluid(maxWidth: 1280){
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
    `} render={(data) => (
    <Layout>
        <SEO title="Work" keywords={[`TheJengo`,`Cengiz Cebeci`,`Work`]} />
        <Row>
            <Col lg={{span:8, offset:2}} xs="12" md="12">
            <WorkItem 
                image={data.groupeRenault} 
                companyName="Oyak Renault Factories" 
                date="07/2018 - 09/2018" 
                roleDescription="I was the intern of GRM Software Support Team and our team has a main purpose to develop programs, apps or apis for other teams."
                projectsAndTasks={["Developed the 'Real Time Urgent Automated Messager' program that sends information of urgent cars to the critic people who has to take an initiative in retouche zones for just in time delivery of car.", 
                                    "Made functional tests of Java and Angular based web-app with Selenium Framework with Java. and I write a medium story about my experiences.",
                                    "Also made stress and load tests of the same app with Apache-Jmeter and reported the results to PM for fixing and optimisation of the app."]} 
                technologies={["Eclipse","JavaEE","Java","JiraEE","GitlabEE","JDBC","FTPC","Selenium Framework","POM","WebDriver","Apache Jmeter"]}
            />
            <hr />
            <WorkItem 
                image={data.turkTicaret} 
                companyName="TURKTICARET.NET A.Ş." 
                date="09/2014 - 06/2015" 
                roleDescription="I was the Highscool Intern of AdHood the Advertisement Operations Team and our team has a main purpose to managing the Commercial Ads and Contracts."
                projectsAndTasks={["Assisted to Turkish-English translation for web pages and services.", 
                                    "Assisted to adhood the sub company of TURKTICARET. ",
                                    "Helped to Director of Advertising Operations to get some scripts and understand their working logic."]} 
                technologies={["PHP", "CSS", "HTML", "Javascript", "JQuery", "MySQL"]}
            />
            </Col>
        </Row>
    </Layout>
    )}
    />
)

export default WorkPage