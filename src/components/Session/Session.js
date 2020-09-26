import React, { useEffect, useState } from 'react'

import classes from './Session.module.sass'

//import {info, images} from '../../assets/database/'+location'/index`

import Grid from '../Grid/Grid'
import Popup from '../Popup/Popup'
//import {info, images} from '../../assets/database/session1/index'

const Session = (props) => {
    const [content, setContent] = useState(null)
    const [images, setImages] = useState(null)
    const [displayPU, setDisplayPU] = useState(false)
    const [currImg, setCImg] = useState(null)
    const [lLocation, setLoc] = useState(null)

    const popItUp = (e, pos) => {
        e.preventDefault()
        console.log('[PPPP]', pos, images/*, images[pos]*/)
        setCImg(pos)
        //if(images){
            //setCImg(images[pos])
        //}
        setDisplayPU(true)
    }
    const popDown = (e) => {
        e.preventDefault()
        console.log('[DOOOOWN]')
        setDisplayPU(false)
    }
    const next = (e) => {
        console.log('NEXT')
        e.preventDefault()
        if(currImg === images.length - 1){
            setCImg(0)
        } else {
            setCImg(currImg => currImg + 1)
        }
    }

    const previous = (e) => {
        console.log('PREV')
        e.preventDefault()
        if(currImg === 0){
            setCImg(images.length - 1)
        } else {
            setCImg(currImg => currImg - 1)
        }
    }

    useEffect(() => {
        console.log('HOLLLLLLLLLLLA')
        const loc= window.location.href.split('/')[window.location.href.split('/').length - 1]
        import( '../../assets/database/'+loc+'/index')
            .then( raw => {
                console.log('[DATA]', raw.default)
                const data = raw.default
                //console.log(data.images)
                setImages(data.images)
                    //<p className={classes.text}> {data.info.description}</p>
                setContent(
                <>
                    <h2 className={classes.h2}> {data.info.name} </h2>
                    <Grid type="images" click={(e, pos) => {
                        console.log('[clock]', e, pos)
                        popItUp(e, pos)
                    }} elements={data.images}/>
                </>
                )
            })

    }, [lLocation])
    
    const loca = window.location.href.split('/')[window.location.href.split('/').length - 1]
    if (loca != lLocation){
        setLoc(loca)
    }
    console.log('[L]', loca)
    return(
        <>
        {content}
        <Popup image={images?images[currImg]:null} display={displayPU} popDown={popDown} next={next} previous={previous}/>
        </>
    )

}

export default Session
