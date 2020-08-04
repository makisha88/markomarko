import React from 'react';

import TopBar from '../TopBar/TopBar';
import classes from './Home.module.css';

const home = (props) => (
    <div className={classes.MainWrapper}
        onMouseMove={props.MouseHandler}
        onClick={props.TestClick}>
        <div className={classes.InnerWrapper}>
            <TopBar />
            {props.homeContent}
            <div className={classes.ButtonsHolder}>
                {props.buttons}
            </div>
        </div>
        <p>Copyright © 2020 markomarko.rs All rights reserved.</p>
    </div>
);

export default home;