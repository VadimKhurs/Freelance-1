import React from 'react'
import cl from "./FuncButton.module.css"

function FuncButton() {
    return (
        <div className={cl.func__buttons}>
            <a href='http://www.example.com'>
                <div className= {cl.FuncButton}>
                    <div className={cl.vertical__center}>
                        <img className = {cl.FuncButton__arrow} src = {require("../../../../styles/img/emblem1.png")} />
                        <p>OPTIMISE TAXES</p> 
                    </div>
                </div>
            </a>
            <a href='http://www.example.com'>
                <div className= {cl.FuncButton}>
                    <div className={cl.vertical__center}>
                        <img className = {cl.FuncButton__arrow} src = {require("../../../../styles/img/emblem2.png")} />
                        <p>MANAGE WEALTH</p> 
                    </div>
                </div>
            </a>
            <a href='http://www.example.com'>
                <div className= {cl.FuncButton}>
                    <div className={cl.vertical__center}>
                        <img className = {cl.FuncButton__arrow} src = {require("../../../../styles/img/emblem3.png")} />
                        <p>25% AVG RETURN</p> 
                    </div>
                </div>
            </a>
            <a href='http://www.example.com'>
                <div className= {cl.FuncButton}>
                    <div className={cl.vertical__center}>
                        <img className = {cl.FuncButton__arrow} src = {require("../../../../styles/img/emblem4.png")} />
                        <p>LEARN FINANCE</p> 
                    </div>
                </div>
            </a>
        </div>
    )
}

export default FuncButton