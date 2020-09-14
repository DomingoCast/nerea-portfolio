import React from 'react'

import { Link, NavLink } from 'react-router-dom'

import Instagram from '../../assets/instagram.svg'
import InstagramWhite from '../../assets/svg/instagram-grey-1.svg'

import classes from './Navbar.module.sass'

import leftArrow from '../../assets/svg/left-arrow.png'

const navbar = (props) => {
    return (
        <nav className={classes.nav + ' '+ (props.shrink?classes.shrink:null)}>
            <Link to='/home' className={classes.link+' '+classes.title}><h1 className={classes.h1}>Nerea Molina</h1></Link>
            <div onMouseEnter={props.handleMenu} onClick={props.handleMenu} className={classes.ham+' '+(props.disMenu?classes.disable:null)}>
                <div className={classes.hamContent+' '+classes.hamContent_1}/>
                <div className={classes.hamContent+' '+classes.hamContent_2}/>
                <div className={classes.hamContent+' '+classes.hamContent_3}/>
            </div>
        </nav>
    )
}

export default navbar
