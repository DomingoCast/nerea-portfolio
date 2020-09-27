import React, {useState} from 'react'

import classes from './Popup.module.sass'

const Popup = (props) => {
    const [touchStart, setTS] = useState(false)
    const [touchMove, setTM] = useState(false)
    const [distance, setD] = useState(null)
    const [init, setI] = useState(null)
    const [current, setC] = useState(null)

    const handleStart = (e) => {
        console.log('start')
        if(!touchStart)
            setI(e.touches[0].pageX)
            setTS(true)
    }
    const handleMove = (e) => {
            setC(e.touches[0].pageX)
            console.log(e.touches[0].pageX - init)
    }

    const handleStop = (e) => {
        //console.log('STOP', curr, init, curr-init)
        console.log('STOP')
        if(!current){
            console.log('ya')
            //if (e.target.id==="linkNext" && touchStart){
                //props.next()
            //} else if( e.target.id==="linkPrev" && touchStart){
                //props.previous()
            //}
        } else{
            console.log('yo')
            if(current - init > 100 && touchStart){
                props.next()
            } else if(current - init < -100 && touchStart){
                props.previous()
            }
        }
        setTS(false)
        setI(null)
        setC(null)

    }

    //if(props.display){
        //const imagen = document.getElementById("imagen")
        //imagen.addEventListener('touchstart', (e) => handleStart(e))
        //imagen.addEventListener('touchmove', (e) => handleMove(e))
        //imagen.addEventListener('touchstop', (e) => handleStop(e))
        //imagen.addEventListener('touchcancel', (e) => handleStop(e))
    //}

    return(
        <div  className={classes.backdrop+' '+(props.display?null:classes.hidden)}>
            <a href="#" className={classes.backLink} onClick={props.popDown}/>
            <div className={classes.imgContainer}>
                <img id="imagen" onTouchStart={handleStart} onTouchMove={handleMove} onTouchEnd={handleStop}className={classes.img} src={props.image} alt="expanded superpwer"/>
                <a href="#" id="linkPrev" onTouchStart={handleStart} onTouchMove={handleMove} onTouchEnd={handleStop} className={classes.link +' '+classes.left} onClick={props.previous}/>
                <a href="#" id="linkNext" onTouchStart={handleStart} onTouchMove={handleMove} onTouchEnd={handleStop} className={classes.link +' '+classes.right} onClick={props.next}/>
                <a href="#" className={classes.back} onClick={props.popDown}>back</a>
            </div>
        </div>
    )
}

export default Popup
