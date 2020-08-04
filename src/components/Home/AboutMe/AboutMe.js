import React from 'react';

import HelloSvg from '../HelloSvg/HelloSvg';

import classes from './AboutMe.module.css';

const aboutMe = (props) => {
    let x = props.MoveX / 25 - 30
    let y = props.MoveY / 25 - 30
    return (
        <div className={classes.AboutMe} style={{left: x, top:y}}>
            <HelloSvg />
            <p>My name is Marko Nikolic and I am web designer by profession and front-end developer by passion. As designer I learn how to make impression by developing very nice web presentation. With good knowledge of design standards and clean code-writing HTML5/CSS3/JS I am able to deliver clean, modern web sites and HTML documents that can be later integrated with CMS system or other back-end solution.</p>
            <p>Fell free to say Hello to me any time:</p>
            <a href="https://markomarko.rs/makisha88@gmail.com">makisha88@gmail.com</a>
        </div>
    )
}
export default aboutMe;