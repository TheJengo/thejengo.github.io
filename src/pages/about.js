import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { FaGraduationCap, FaUserGraduate, FaUser, FaChild, FaHeart, FaTruckMoving,  FaCode, FaUserTie, FaMusic, FaMale } from 'react-icons/fa'

import Layout from '../components/commons/layout'
import SEO from '../components/commons/seo';

const AboutPage = () => (
    <Layout>
        <SEO title="About" keywords={[`TheJengo`,`Cengiz Cebeci`,`About`]} />
        <Row>
            <Col lg={{span:8, offset:2}} sm="12" xs="12">
            <h3><FaUserTie color="rgb(22, 71, 159)"/> Career</h3>
            <hr/>
            <h5><FaCode /> <small>waits for graduation</small> | Software Engineer</h5>
            <p align="justify">
                I've born as a Software Intern (4 times) but I want to be a Senior Software Architect in 10 years of my career. <br/> For my works and professional history you can check out my <a href="/work">works</a> or <a href="https://drive.google.com/open?id=1V8GwFuyy7PceWxpj0nABN30FMmKZ4Wl1" target="_blank" rel="noopener noreferrer">CV</a>.
            </p>
            <h3><FaUserGraduate color="rgb(116, 187, 251)"/> Education</h3>
            <hr/>
            <h5><FaGraduationCap color="rgb(253,106, 2)"/> <small>2015 - Present </small> | Manisa Celal Bayar University</h5>
            <p align="justify">
                Trying to be a qualified Software Engineer and finish my Bachelor in Engineering.
            </p>
            <ul align="justify">
                <li>
                    Starters of the <b><i>"Workshops for Students from Students"</i></b> and lecturer. (2019)
                </li>
                <li>
                    Assistant student at the <b><i>"Service Oriented Architecture"</i></b> lecture. (2019)
                </li>
                <li>
                    I'm a member of Harmony Club <FaMusic color="rgb(0, 128, 255)"/>. (2016-2020)
                </li>
            </ul>
            <p>
                My GPA and Transcript is <a href="https://drive.google.com/open?id=1k4NqIeJfnKFQvO6pzLJaufm3i-6gqNkw" target="_blank" rel="noopener noreferrer">here</a>.
            </p>
            <h5><FaGraduationCap color="rgb(54, 180, 73)"/><small> 2011 - 2015</small> | Gaziemir ATML & Nur-Hayati Kurtcan ATML High Schools</h5> 
            <p align="justify">
                I've started to Technical High School and finished my first two years in Izmir/Turkey.<br/> Then we <FaTruckMoving color="gray" alt="moved"/> to Bursa/Turkey. I've continued last years of my high school years in Bursa/Turkey and graduated as a Web Programming Developer.
            </p>
            <h5><FaGraduationCap color="rgb(48, 183, 230)"/> <small> 2003 - 2011</small> | Before High School </h5>
            <p align="justify">
                That section contains my 8 years in first and secondary schools in Izmir/Turkey. <br/> I <FaHeart color="red" alt="love"/> the Pyshical Education, Music and Math lectures. I've attend lots of athletic, cultural and academic activities.
            </p>
            <h3><FaUser color="rgb(204, 229, 255)"/> Personal</h3>
            <hr/>
            <h5><FaChild color="rgb(236, 12, 110)"/> Childhood</h5>
            <p align="justify">
                I've been always outgoing, curious, energetic, talkative and a little bit annoying boy in my childhood. Oh, god! I love that years even how much I'm also dumb. They were so beatiful and peaceful in an ignorance.
            </p>
            <h5><FaMale color="rgb(54, 180, 73)"/> Youth</h5>
            <p align="justify">
                Actually I'm still the same child in the heart but taller, smarter and awake version of it. Has dreams and targets to achieve. On this adventure music fills my soul and coding helps to take steps forward.
            </p>
            </Col>
        </Row>
    </Layout>
)

export default AboutPage