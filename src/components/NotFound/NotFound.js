import React from 'react'

import classes from './NotFound.module.sass'

import { Link  } from 'react-router-dom'

const notFound = () => {

    return (
            <div className={classes.container}>
        <Link className={classes.link} to='/home'>
                <h1 className={classes.h1}> 404 notFound </h1>
                <p className={classes.p}> No hemos encontrado la página, haz click para volver al inicio </p>
        </Link>
            </div>
    )
}

export default notFound
