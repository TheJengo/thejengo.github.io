import React from 'react'
import { Badge } from 'react-bootstrap'

const Badger = (props) => {
    const badgeList = props.badges.map((value, i)=> <span key={i}><Badge variant={props.variant}>{value}</Badge>{i !== props.badges.length -1 ? `, ` : null}</span>)
    return(
        <>
        {badgeList}
        </>
    )
}

export default Badger