import React, { useState, useEffect } from 'react'
import classes from './Grid.module.sass'

import { Link } from 'react-router-dom'

const Grid = (props) => {

    const [columns, setColumns] = useState(3) //number of columns in grid

    useEffect( () => {
        queryColumns()
    }, [] )


    let elements
    if(props.type === 'images'){
        elements = props.elements.map((element , index)=> (
            <div key={index} className={classes.image}>
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
    //console.log('[EL]', elements)
    
    // GRID WINDOW RESIZE
    
    const queryColumns = () => {
        //console.log('resize')
        if(window.innerWidth < 400){
            if(columns !== 1){
                setColumns(1)
            }
        }else if(window.innerWidth < 800){
            if (columns !== 2){
                setColumns(2)
            }
        } else {
            if(columns !== 3){
                setColumns(3)
            }
        }

    }

    window.addEventListener('resize', queryColumns);

    
    for (let i=0; i<columns; i++){
        vs.push([])
        let c = 0 + i
        while(c<elements.length){
            vs[i].push(elements[c])
            c += columns
        }
    }
    //console.log('[VS]', vs)

    //for(el of props.elements){
        
    //}
    const newElements = vs.map( (row, index) => (
            <div key={index} className={classes.column}> {row} </div>
        )
    )

    return (
        <div className={classes.container}>
            {newElements}
            
        </div>

    )
}

export default Grid
