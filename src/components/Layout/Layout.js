import React, {useState, useEffect} from 'react'

import { Link, NavLink } from 'react-router-dom'

import Instagram from '../../assets/instagram.svg'

import classes from './Layout.module.sass'


const Layout = (props) => {
    //console.log(props, window.location.href)
    //const [location, setLocation ] = useState(window.location.href.split('/')[window.location.href.split('/').length - 1])
    const [location, setLocation ] = useState(null)

    useEffect( () => {

    }, [])
    //const location= window.location.href.split('/')[window.location.href.split('/').length - 1]
    

    //console.log('[L]', location,locationArray.length,  locationArray, window.location.href)
    const currentStyle = {
        color:"var(--grey-3)", 
        borderBottom: "1px solid var(--grey-3)", 
        paddingBottom: ".3em",
        marginBottom: "-.3em"
    }

    return (
        <div className={classes.container}>
            <nav className={classes.nav}>
                 <Link to='/home' className={classes.link}><h1 className={classes.h1}>Nerea Molina</h1></Link>
                <div className={classes.links}>
                    <NavLink activeStyle={currentStyle} to='/home'className={classes.link +' '+ (location==='home' ? classes.current : null)}>Home</NavLink>
                    <NavLink activeStyle={currentStyle} to='/aboutme' className={classes.link +' '+ (location==='aboutme' ? classes.current : null)}>About me</NavLink>
                    <NavLink activeStyle={currentStyle} to='/contact' className={classes.link +' '+ (location==='contact' ? classes.current : null)}>Contact</NavLink>
                    <a target="_blank" rel="noopener noreferrer" href='https://www.instagram.com/nereamolina__/' className={classes.link +' '+ classes.insta}>
                        <img className={classes.svg} src={Instagram} alt='INSTAGRAM'/>
                    </a>
                </div>
            </nav>
            <div className={classes.children}>
                {props.children}
            </div>
        </div>
    )
}

export default Layout
