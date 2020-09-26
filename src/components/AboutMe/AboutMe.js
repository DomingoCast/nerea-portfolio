import React from 'react'

import classes from './AboutMe.module.sass'

import Nerea from '../../assets/nerea-about.png'

const aboutMe = (props) => {
    return(
        <div className={classes.container}>
            <div className={classes.imgContainer}>
                <img className={classes.img} src={Nerea}/>
            </div>
            <div className={classes.p}> 
        <p className={classes.pr}>
                Soy una fotógrafa de Alicante que se espeliaciza en fotografía de retrato aunque también tengo una leve obsesión por lo abstracto y el diseño.
        </p>

        <p className={classes.pr}>
                Concretamente nací en Elche,Alicante donde curse un Grado Medio de “Artes Gráficas” fue mi primer paso al mundo de las Artes. Gracias a este curso trabajé como diseñadora gráfica en una importante empresa llamada BLINKER en la que solo trabajé durante tres meses, por motivos de estudio.
        </p>

        <p className={classes.pr}>
                Actualmente estoy cursando un Grado Superior de “Iluminación” en San Juan, Alicante. Posteriormente trabajé durante 3 años en una agencia de modelos llamada “IMAGINE” en Elche, mi trabajo era hacer books a modelos de la empresa.
        </p>
            </div>
        </div>
    )
}

export default aboutMe
