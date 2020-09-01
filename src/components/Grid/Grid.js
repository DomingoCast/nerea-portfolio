import React from 'react'
import classes from './Grid.module.sass'

import { Link } from 'react-router-dom'

const grid = (props) => {
    let elements
    if(props.type === 'images'){
        elements = props.elements.map((element , index)=> (
            <div className={classes.image}>
                <a href="#" onClick={(event) => props.click(event, index)} key={index}className={classes.link}>
                   <img className={classes.element} src={element}/>
                </a>
            </div>
        ))
    } else if(props.type === 'sessions'){
        elements = props.elements.map((element , index)=> (
            <Link to={`/session/${element.path}`} key={index}>
                <div className={classes.session}>
                    <p className={classes.name}>{element.name}</p>
                    <div className={classes.mask}/>
                    <img className={classes.element} src={element.preview}/>
                </ div>
            </Link>
        ))
    } else {
        elements = props.elements.map(element => <div className={classes.element}> {element}</div>)
    }
    return (
        <div className={classes.container}>
            {elements}
        </div>

    )
}

export default grid
