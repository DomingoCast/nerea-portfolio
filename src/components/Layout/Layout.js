import React, {useState, useEffect} from 'react'

import { Link } from 'react-router-dom'


import classes from './Layout.module.sass'

import Navbar from '../Navbar/Navbar'
import Menu from '../Menu/Menu'

import Footer from '../Footer/Footer'
import NotFound from '../NotFound/NotFound'
//NotFound/

const Layout = (props) => {
    const [navShrink, setNavShrink] = useState(false)
    const [disMode, setDM] = useState(null)
    const [disMenu, setDisMenu] = useState(false)
    const [nott, setNott] = useState(null)

    useEffect( () => {
        if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
            //console.log('mobile')
            setDM('mobile')
        }else{
            //console.log('desktop')
            setDM('desktop')
        }
        const lchildren = document.getElementById('children')
        console.log('[lchiJ]', lchildren, lchildren.children.length)
        if(lchildren.children.length === 0){
            console.log('hola')
            setNott(NotFound)
        }else{
            if(!nott){
                setNott(null)
            }
        }

    }, [])

    useEffect( () => {
        const lchildren = document.getElementById('children')
        console.log('[lchiJ]', lchildren, lchildren.children.length)
        console.log('WOOOOOOOOOOOOW')
        if(lchildren.children.length === 0 && !nott){
            console.log('hola')
            setNott(NotFound)
        }else{
            if(nott && lchildren.children.length===2){
                console.log('NOTJK:')
                setNott(null)
            }
        }

    })

    const handleMenu = (e) => {
        if(e){
            e.preventDefault()
        }

        //console.log('MENU', disMenu)
        if(disMenu){
            setDisMenu( false )
        } else {
            setDisMenu (true)
        }
    }

    window.addEventListener('scroll', () => {
        //console.log(window.scrollY)
        if( window.scrollY  > 50 && !navShrink){
            setNavShrink(true)
        } else if ( window.scrollY <= 50 && navShrink ) {
            setNavShrink(false)
        }
    })
    
    //console.log('[c]', props.children)

    return (
        <>
        <div className={classes.container}>
            <Navbar mode={disMode} shrink={navShrink} disMenu={disMenu} handleMenu={(e) => disMenu?console.log('nice try'):handleMenu(e)}/>
            <Menu display={disMenu} handleMenu={handleMenu} mode={disMode}/>
            <div id="children" className={classes.children}>
                {props.children?props.children:NotFound}
                {nott}
            </div>
        </div>
        <Footer />
        </>
    )
}

export default Layout
