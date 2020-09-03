import React, {useState, useEffect} from 'react'


import classes from './Layout.module.sass'

import Navbar from '../Navbar/Navbar'

const Layout = (props) => {
    //console.log(props, window.location.href)
    //const [location, setLocation ] = useState(window.location.href.split('/')[window.location.href.split('/').length - 1])
    //const [location, setLocation ] = useState(null)
    //const [navState, setNavState] = useState(classes.extended)
    const [navShrink, setNavShrink] = useState(false)

    useEffect( () => {

    }, [])

    window.addEventListener('scroll', () => {
        console.log(window.scrollY)
        if( window.scrollY  > 50 && !navShrink){
            setNavShrink(true)
        } else if ( window.scrollY <= 50 && navShrink ) {
            setNavShrink(false)
        }
    })


    return (
        <div className={classes.container}>
            <Navbar shrink={navShrink}/>
            <div className={classes.children}>
                {props.children}
            </div>
        </div>
    )
}

export default Layout
