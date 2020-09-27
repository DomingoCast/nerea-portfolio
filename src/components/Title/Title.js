import React from 'react'

import classes from './Title.module.sass'

import { Link, NavLink } from 'react-router-dom'

const title = (props) => {
    return(
        <div className={classes.container}>
            <Link to="/home" className={classes.link}>
            <h1 className={classes.h1}>
                    Nerea Molina
            </h1>
                </Link>
        </div>

    )
}

export default title
