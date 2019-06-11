import React, {Component} from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { Row, Col } from 'react-bootstrap'

import Layout from '../components/commons/layout'
import SEO from '../components/commons/seo'
import Card from '../components/index/card'
import '../components/index/card.css'

class IndexPage extends Component {
  constructor(){
    super()
    this.state = {
      height:0,
      width:0
    }
  }

  componentDidMount(){
    this.setState({
      height : window.screen.height,
      width : window.screen.width
    })
  }

  render(){
    return(
      <StaticQuery query={graphql`
          {
            profilePhoto: file(relativePath: {eq: "Home/ppPOne.jpg"}){
              childImageSharp{
                  fluid(maxWidth: 2080, quality: 100){
                      aspectRatio
                      sizes
                      src
                      srcSet
                      srcWebp
                      srcSetWebp
                  }
                }
              },
            profilePhoto2: file(relativePath: {eq: "Home/ppThree.jpg"}){
              childImageSharp{
                  fluid(maxWidth: 2080, quality: 100){
                      aspectRatio
                      sizes
                      src
                      srcSet
                      srcWebp
                      srcSetWebp
                  }
                }
              },
              profilePhoto3: file(relativePath: {eq: "Home/ppFour.JPG"}){
                childImageSharp{
                    fluid(maxWidth: 2080, quality: 100){
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
            <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
              <Row className="wrap">
                <Col lg={{span:8, offset:2}} xs="12" md="12">
                <Row>
                    { this.state.width <= 768 ? 
                      <>
                        <Card image={data.profilePhoto}  photoName="Test" title="When" content="I love any kind of code and music. They are like my nature. They are so charmy and amazing." tileHeight={this.state.height} icons={['twitter','instagram']}/>
                        <Card image={data.profilePhoto2} photoName="Test" title="I'm" content="I'm losing myself when I'm coding or playing an instrument. " tileHeight={this.state.height} icons={['linkedin']}/>
                        <Card image={data.profilePhoto3} photoName="Test" title="Cengiz." content="Thats the exact time when I'm Cengiz." tileHeight={this.state.height} icons={['github','medium']}/>
                      </>
                      :
                      <Col className="wrap">
                        <Card image={data.profilePhoto}  photoName="Test" title="When" content="I love any kind of code and music. They are like my nature. They are so charmy and amazing." tileHeight={this.state.height/1.5} icons={['twitter','instagram']} style={{marginLeft:0}}/>
                        <Card image={data.profilePhoto2} photoName="Test" title="I'm" content="I'm losing myself when I'm coding or playing an instrument. " tileHeight={this.state.height/1.5} icons={['linkedin']}/>
                        <Card image={data.profilePhoto3} photoName="Test" title="Cengiz." content="Thats the exact time when I'm Cengiz." tileHeight={this.state.height/1.5} icons={['github','medium']} />
                      </Col>
                    }
                    </Row> 
                </Col>
              </Row> 
          </Layout>
        )}
      />
    ) 
  }
}

export default IndexPage
