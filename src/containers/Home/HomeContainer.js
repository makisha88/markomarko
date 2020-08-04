import React, { Component, Fragment } from 'react';

import CustomButton from '../../components/UI/CustomButton/CustomButton';

import Home from '../../components/Home/Home';
import Intro from '../../components/Home/Intro/Intro';
import AboutMe from '../../components/Home/AboutMe/AboutMe';
import NotFound from '../../components/PageNotFound/PageNotFound';

class HomeContainer extends Component {

    state = {
        x: 1,
        y: 1
    };
    
    MouseEvent = () => {
        window.onmousemove = (e) => {
            if (e) {
                this.setState({x: e.pageX, y: e.pageY});
            }
        } 
    }

    render () {
        let homeContent
        let buttons
        switch(this.props.location.pathname) {
            case '/about':
                homeContent = <AboutMe MoveX={this.state.x} MoveY={this.state.y} />
                buttons = <Fragment>
                    <CustomButton 
                        label={'Go Back'}
                        goTo={() => this.props.history.goBack()}
                        goBack />
                    <CustomButton 
                        goTo={() => this.props.history.push('/portfolio')}
                        label={'My Work'} />
                </Fragment>
                break;
            case '/':
                homeContent = <Intro MoveX={this.state.x} MoveY={this.state.y} />
                buttons = <Fragment>
                    <CustomButton 
                        goTo={() => this.props.history.push('/portfolio')}
                        label={'My Work'} />
                    <CustomButton 
                        goTo={() => this.props.history.push('/about')}
                        label={'About Me'} />
                </Fragment>
                break;
            default:
                homeContent = <NotFound />
                buttons = <Fragment>
                    <CustomButton 
                        goTo={() => this.props.history.goBack()}
                        label={'Go Back'}
                        goBack />
                    <CustomButton 
                        goTo={() => this.props.history.push('/portfolio')}
                        label={'My Work'} />
                    <CustomButton 
                        goTo={() => this.props.history.push('/about')}
                        label={'About Me'} />
                </Fragment>
        }
        return (
            <Home
                homeContent={homeContent}
                buttons={buttons}
                MouseHandler={this.MouseEvent} />
        )
    }
}

export default HomeContainer;