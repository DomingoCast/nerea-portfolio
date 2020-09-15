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
            <Link className={classes.sessionLink}to={`/session/${element.path}`} key={index}>
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
    let v1, v2, v3
    let vs = []
    console.log('[EL]', elements)
    const n = 3
    for (let i=0; i<n; i++){
        vs.push([])
        let c = 0 + i
        while(c<elements.length){
            vs[i].push(elements[c])
            c += n
        }
    }
    console.log('[VS]', vs)

    //for(el of props.elements){
        
    //}
    const newElements = vs.map( row => (
            <div className={classes.column}> {row} </div>
        )
    )

    return (
        <div className={classes.container}>
            {newElements}
            
        </div>

    )
}

export default grid
