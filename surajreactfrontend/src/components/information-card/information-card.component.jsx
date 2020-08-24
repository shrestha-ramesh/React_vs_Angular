import React from 'react'
import './information-card.styles.scss'

const InformationCard=({content:{title,text},comeFront})=>{
    return(
        <div className={`information-card ${comeFront?'shadow':''}`}>
            <h2 className="title">{title}</h2>
            <span className="text">{text}</span>
        </div>
    )
}

export default InformationCard