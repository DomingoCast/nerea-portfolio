import React from 'react' 

import { Link, NavLink } from 'react-router-dom'

import Instagram from '../../assets/instagram.svg'

import sessions from '../../assets/database/sessions'

import classes from './Menu.module.sass'

const currentStyle = {
    color: "var(--white)",
    fontWeight: "500"
}

const menu = (props) => {
    console.log('[SESSIONS]', sessions)
    return(
        <div onMouseLeave={props.handleMenu} className={classes.container+' '+(props.display?null:classes.hidden)}>
            <div className={classes.links}>
                <NavLink activeStyle={currentStyle} to='/home'className={classes.link}>Home</NavLink>
                <NavLink activeStyle={currentStyle} to='/aboutme' className={classes.link}>About me</NavLink>
                <NavLink activeStyle={currentStyle} to='/contact' className={classes.link}>Contact</NavLink>
                <a target="_blank" rel="noopener noreferrer" href='https://www.instagram.com/nereamolina__/' className={classes.link +' '+ classes.insta}>
                    <img className={classes.svg} src={Instagram} alt='INSTAGRAM'/>
                </a>
            </div>
        </div>
    )
}

export default menu
