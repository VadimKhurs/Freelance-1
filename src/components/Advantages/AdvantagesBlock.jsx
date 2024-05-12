import classNames from 'classnames';
import React from 'react'
import cl from './Advantages.module.css'


function AdvantagesBlock({side, title, description, number, setHover, current}) {
    
    let cube = cl.cube;
    if(number === current)
        cube = classNames(cl.cube, cl.cube__hover);

    function MouseEnter() {
        setHover(number);
    }
    return (
        <div  className={cl.block}>
            <div style={{justifyContent:(side)}} className={cl.cube__main}>
                <div className={cube} onMouseEnter={MouseEnter} >
                    <p>{number}</p>
                </div>
            </div>
            <div style={{textAlign:(side)}} className={cl.title}>
                <h1>{title}</h1>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default AdvantagesBlock