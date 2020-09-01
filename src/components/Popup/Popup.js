import React from 'react'

import classes from './Popup.module.sass'

const popup = (props) => {
    return(
        <div  className={classes.backdrop+' '+(props.display?null:classes.hidden)}>
            <a href="#" className={classes.backLink} onClick={props.popDown}/>
            <div className={classes.imgContainer}>
                <img className={classes.img} src={props.image} alt="expanded superpwer"/>
                <a href="#" className={classes.link +' '+classes.left} onClick={props.previous}/>
                <a href="#" className={classes.link +' '+classes.right} onClick={props.next}/>
            </div>
        </div>
    )
}

export default popup
