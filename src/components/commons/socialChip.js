import React, { Component } from 'react'
import { FaGithub, FaInstagram, FaTwitter, FaLinkedin, FaMedium } from 'react-icons/fa'
import { Col } from 'react-bootstrap'

class SocialChip extends Component {
    constructor(props){
        super(props)
        this.state = {
            toggle : true,
            opacity : 1
        }
    }
    
    togglePic = () => {
        this.setState(prevState => {
            prevState.toggle = !prevState.toggle
            prevState.opacity === 1 ? prevState.opacity = 0.7 : prevState.opacity = 1
            return prevState
        })
    }

    render(){
        return(
            <Col className="justify-content">
                <p align="center">
                    <a href={this.props.link} rel="noopener noreferrer" target="_blank" style={{opacity:this.state.opacity}} onMouseEnter={this.togglePic} onMouseLeave={this.togglePic}>
                        {
                            // color="#007bb5" color="black" color="#55ACEE" color="#125688"  color="#00ab6c" 
                            ( this.props.smedia === "linkedin" ? <FaLinkedin color="gray" size={this.props.size}/> : this.props.smedia === "github" ? <FaGithub  color="gray" size={this.props.size}/> : this.props.smedia === "twitter" ? <FaTwitter color="gray" size={this.props.size} /> : this.props.smedia === "instagram" ? <FaInstagram  color="gray" size={this.props.size} /> : this.props.smedia === "medium" ? <FaMedium color="gray" size={this.props.size} /> : null ) 
                        }
                    </a>
                </p>
            </Col>
        )
    }
}

export default SocialChip