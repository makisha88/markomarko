import React from 'react';

import classes from './TopBar.module.css';

const topBar = (proprs) => (
    <div className={classes.TopBar}>
        <div className={classes.Dots}>
            <span />
            <span />
            <span />
        </div>
        <div className={classes.FakeInput}>
            <a href="/">https://markomarko.rs/ <span> |</span></a>
        </div>
        <div className={classes.Links}>
            <a href="http://linkedin.com/in/markony988"><i style={{'fontSize':'inherit'}} className="fa"></i></a>
        </div>
    </div>
);

export default topBar;