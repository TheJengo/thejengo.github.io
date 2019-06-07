import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { Row } from 'react-bootstrap'

import SocialChip from './socialChip'

const SocialList = ({ size, name=[] }) => (
    <StaticQuery query={graphql`
            query IndexPageQuery{
                site {
                siteMetadata{
                    socialMedia{
                            name
                            username
                            link
                        }
                    }
                }
            }
        `
    }
    render={data => 
        {
            return(
                <Row>
                    {/* {console.log(name.toString())} */}
                    {
                        name.toString() === `` ?
                        data.site.siteMetadata.socialMedia.map((social,i) => <SocialChip key={i} username={social.username} smedia={social.name} link={social.link} size={size}/>) :
                        data.site.siteMetadata.socialMedia.filter(i => name.some(x=> x === i.name)).map((social,i) => <SocialChip key={i} username={social.username} smedia={social.name} link={social.link} size={size}/>)
                    }
                </Row>
            )}
        }
    />
)

export default SocialList