import React from 'react';

import classes from './Portfolio.module.css';

import PortfolioElement from './PortfolioElement/PortfolioElement';
import TopBar from '../TopBar/TopBar';

const portfolio = (props) => {
    let allWork = Object.keys( props.myWork )
        .map( igKey => {
            return [...Array( props.myWork[igKey] )].map(( value , i )=>{
                return <PortfolioElement 
                        key={igKey + i}
                        imageUrl={value.imageUrl}
                        title={value.title}
                        paragraph={value.paragraph}
                        siteurl={value.siteurl} />
            })
        });
    return (
        <div className={classes.MainWrapper}>
            <div className={classes.InnerWrapper}>
                <TopBar />
                {allWork}
            </div>
            <div className={classes.ButtonsHolder}>
                {props.buttons}
            </div>
            <p>Copyright © 2020 markomarko.rs All rights reserved.</p>
        </div>
    )
}

export default portfolio;