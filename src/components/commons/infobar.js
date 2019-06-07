import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Flag from 'react-flagkit/index'
import SocialChip from './socialChip';

class InfoBar extends React.Component {
    constructor(){
        super()
        this.state = {
            isTrFlag : true
        }

        this.toggleFlag = this.toggleFlag.bind(this)
    }

    toggleFlag = () => {
        this.state.isTrFlag ? this.props.selectLanguage("tr/TR") : this.props.selectLanguage("en/EN")
        
        this.setState({
            isTrFlag : !this.state.isTrFlag
        })
        
    }

    render(){
        return(
            <Row style={{paddingTop:`5px`, padding:`5px`,alignItems:"center", border:`1px solid #e1e4e8`, borderRadius:`3px`, marginBottom:`25px`, boxShadow:`5px 5px 6px -6px gray`}}>
                <Col lg="12" xs="12" md="12">
                    <span style={{float:`left`}}>
                        Filter blogs by language: 
                        {/* onClick={() => { this.toggleFlag; this.selectTurkish}}  */}
                        {this.state.isTrFlag ? 
                            <Flag country="TR" size={32} role='img' style={{marginTop:`20px`, borderRadius:`8px`}} onClick={this.toggleFlag}/> :
                            <Flag country="GB" size={32} role='img' style={{marginTop:`20px`, borderRadius:`8px`}} onClick={this.toggleFlag} />
                        }
                    </span>
                    <span style={{float:`right`, marginTop:`20px`}}>
                        <SocialChip username="thejengo" smedia="medium" link="https://www.medium.com/@Thejengo" size={32}/>
                    </span>
                    <span style={{float:`right`, marginTop:`20px`}}>For more:</span>
                </Col>
            </Row>
        )
    }
}

export default InfoBar