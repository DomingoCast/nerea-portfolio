import React from 'react'

import classes from './Footer.module.sass'

const footer = (props) => {
    return (
        <div className={classes.container}>
            <p className={classes.copy}>&#169; 2020, all rights reserved </p>
            <p className={classes.plug}> Developed by <a href="https://www.instagram.com/domingo_cast/" className={classes.link}>
                    @Domingo_cast
                    <div className={classes.backLink} />
                </a>
            </p>
        </div>

    )
}

export default footer
