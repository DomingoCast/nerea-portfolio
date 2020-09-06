import React from 'react'

import { Link, NavLink } from 'react-router-dom'

import Instagram from '../../assets/instagram.svg'

import classes from './Navbar.module.sass'

import leftArrow from '../../assets/svg/left-arrow.png'

const navbar = (props) => {
    let currentStyle
    console.log(props)
    let navContent
    if(props.mode==='desktop'){
         currentStyle = {
            color:"var(--grey-3)", 
            borderBottom: "1px solid var(--grey-3)", 
            paddingBottom: ".3em",
            marginBottom: "-.3em"
        }
        navContent = (
            <nav className={classes.nav + ' '+ (props.shrink?classes.shrink:null)}>
                <Link to='/home' className={classes.link}><h1 className={classes.h1}>Nerea Molina</h1></Link>
                <div className={classes.links}>
                    <NavLink activeStyle={currentStyle} to='/home'className={classes.link}>Home</NavLink>
                    <NavLink activeStyle={currentStyle} to='/aboutme' className={classes.link}>About me</NavLink>
                    <NavLink activeStyle={currentStyle} to='/contact' className={classes.link}>Contact</NavLink>
                    <a target="_blank" rel="noopener noreferrer" href='https://www.instagram.com/nereamolina__/' className={classes.link +' '+ classes.insta}>
                        <img className={classes.svg} src={Instagram} alt='INSTAGRAM'/>
                    </a>
                </div>
            </nav>
        )
    } else {
         currentStyle = {
            color:"var(--grey-1)", 
            borderBottom: "1px solid var(--grey-1)", 
            paddingBottom: ".3em",
            marginBottom: "-.3em"
        }
        navContent = (
            <>
            <nav className={classes.nav + ' '+ (props.shrink?classes.shrink:null)}>
                <Link to='/home' className={classes.link}><h1 className={classes.h1}>Nerea Molina</h1></Link>
                <a href="#" onClick={props.handleMenu} className={classes.ham+' '+(props.mode==='desktop'?classes.hidden:null)}>
                    <div className={classes.hamContent}/>
                </a>
            </nav>
            <div className={/*classes.links+' '+*/classes.menu+' '+(props.disMenu ? null:classes.menuHidden)}>
                <a href="#" onClick={props.handleMenu} className={classes.arrowLink}>
                    <img src={leftArrow} className={classes.arrow}/>
                </a>
                <div className={classes.links}>
                    <NavLink activeStyle={currentStyle} onClick={() => props.handleMenu(null)} to='/home'className={classes.link}>Home</NavLink>
                    <NavLink activeStyle={currentStyle} onClick={() => props.handleMenu(null)} to='/aboutme' className={classes.link}>About me</NavLink>
                    <NavLink activeStyle={currentStyle} to='/contact' onClick={() => props.handleMenu(null)} className={classes.link}>Contact</NavLink>
                </div>
            </div>
            </>
        )

    }
    return (
        <>{navContent}</>
    )
}

export default navbar
