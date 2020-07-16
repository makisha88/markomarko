import React from 'react';

import classes from './CustomButton.module.css'

const customButton = (props) => (
    <button className={props.goBack ? classes.ButtonLeft : classes.ButtonRight} onClick={props.goTo}>
        <p>{props.label}</p>
        <div className={classes.ButtonArrow}>
            <div />
            <div />
        </div>
    </button>
);

export default customButton;