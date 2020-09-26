import React, {useState} from 'react'

import classes from './Popup.module.sass'

const Popup = (props) => {
    const [touchStart, setTS] = useState(false)
    const [touchMove, setTM] = useState(false)
    const [distance, setD] = useState(null)
    const [init, setI] = useState(null)
    const [current, setC] = useState(null)

    const handleStart = (e) => {
        if(!touchStart)
            setI(e.touches[0].pageX)
            setTS(true)
    }
    const handleMove = (e) => {
            setC(e.touches[0].pageX)
    }

    const handleStop = (e) => {
        if(current - init > 100 && touchStart){
            props.next(e)
        }
        if(current - init < 100 && touchStart){
            props.previous(e)
        }
        setTS(false)
        setI(null)

    }

    //if(props.display){
        //document.addEventListener('touchstart', (e) => handleStart(e))
        //document.addEventListener('touchmove', (e) => handleMove(e))
        //document.addEventListener('touchend', (e) => handleStop(e))
    //}

    return(
        <div  className={classes.backdrop+' '+(props.display?null:classes.hidden)}>
            <a href="#" className={classes.backLink} onClick={props.popDown}/>
            <div className={classes.imgContainer}>
                <img onTouchStart={() => console.log('holaj')} className={classes.img} src={props.image} alt="expanded superpwer"/>
                <a href="#" className={classes.link +' '+classes.left} onClick={props.previous}/>
                <a href="#" className={classes.link +' '+classes.right} onClick={props.next}/>
                <a href="#" className={classes.back} onClick={props.popDown}>back</a>
            </div>
        </div>
    )
}

export default Popup
