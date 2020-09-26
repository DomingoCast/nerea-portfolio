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
    //document.addEventListener('click', (e) => console.log(e.target))

    const menuMob = () => {
        console.log('menuMob')
        console.log(props)
        if (props.mode === 'mobile') {
            console.log('mobile')
            props.handleMenu()
        }
    }

    //if(props.display && props.mode=="mobile"){
        //document.addEventListener('scroll')
    //}

    const sessionLinks = Object.keys(sessions).map(sessionID => {
        const session = sessions[sessionID]
        return(
            <NavLink key={sessionID} onClick={menuMob} activeStyle={currentStyle} to={'/session/'+session.path}
            className={classes.session+' '+classes.link}>{session.name}</NavLink>
        )}
    )
                //{sessionLinks}
     return(
         <>
        <div onMouseLeave={props.mode!=='mobile'?props.handleMenu:null} className={classes.container+' '+(props.display?null:classes.hidden)}>
            <div className={classes.links}>
                <NavLink activeStyle={currentStyle} to='/home' className={classes.link} onClick={menuMob} >Home</NavLink>
                <div className={classes.sessionsContainer}>
                    <span className={classes.span}>SESSIONS</span>
                    {sessionLinks}
                </div>
                <NavLink onClick={menuMob} activeStyle={currentStyle} to='/aboutme' className={classes.link}>About me</NavLink>
                <NavLink onClick={menuMob} activeStyle={currentStyle} to='/contact' className={classes.link}>Contact</NavLink>
                <a target="_blank" rel="noopener noreferrer" href='https://www.instagram.com/nereamolina__/' className={classes.link +' '+ classes.insta}>
                    <img className={classes.svg} src={Instagram} alt='INSTAGRAM'/>
                </a>
         <a href="#" className={classes.link+' '+classes.x} onClick={(e) => {
             e.preventDefault()
             props.handleMenu()
         }}>x</a>
            </div>
        </div>
         <div className={classes.backdrop +' '+(props.display?null:classes.backHidden)} onMouseDown={() => {
                //console.log('back activated')
                props.handleMenu()
         }}/>
         </>
    )
}

export default menu
