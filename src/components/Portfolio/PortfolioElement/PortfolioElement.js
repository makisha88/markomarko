import React from 'react';

import classes from './PortfolioElement.module.css';

const portfolioElement = (props) => (
    <div className={classes.ElementWrapper}>
        <div className={classes.Preview} style={{'backgroundImage': 'url('+props.imageUrl+')'}}>
            <div></div>
            <a href={props.siteurl}>
                <span />
            </a>
        </div>
        <h2>{props.title}</h2>
        <p>{props.paragraph}</p>
        <a href={props.siteurl}>Live Preview</a>
    </div>
)

export default portfolioElement;