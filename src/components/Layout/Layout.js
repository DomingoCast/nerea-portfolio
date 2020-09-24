import React, {useState, useEffect} from 'react'


import classes from './Layout.module.sass'

import Navbar from '../Navbar/Navbar'
import Menu from '../Menu/Menu'
//Menu/

const Layout = (props) => {
    const [navShrink, setNavShrink] = useState(false)
    const [disMode, setDM] = useState(null)
    const [disMenu, setDisMenu] = useState(false)

    useEffect( () => {
        if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
            console.log('mobile')
            setDM('mobile')
        }else{
            console.log('desktop')
            setDM('desktop')
        }

    }, [])

    const handleMenu = (e) => {
        if(e){
            e.preventDefault()
        }

        console.log('MENU', disMenu)
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


    return (
        <div className={classes.container}>
        <Navbar mode={disMode} shrink={navShrink} disMenu={disMenu} handleMenu={(e) => disMenu?console.log('nice try'):handleMenu(e)}/>
        <Menu display={disMenu} handleMenu={handleMenu} mode={disMode}/>
            <div className={classes.children}>
                {props.children}
            </div>
        </div>
    )
}

export default Layout
