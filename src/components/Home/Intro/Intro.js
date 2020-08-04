import React from "react";

import IntroSvg from "../IntroSvg/IntroSvg";

import classes from './Intro.module.css';

const intro = (props) => {
    let x = props.MoveX / 25 - 30
    let y = props.MoveY / 25 - 30
    return (
        <div className={classes.HomeTitle} style={{left: x, top:y}} >
            <IntroSvg />
        </div>
    )
};

export default intro;