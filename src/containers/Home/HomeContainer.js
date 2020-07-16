import React, { Component, Fragment } from 'react';

import CustomButton from '../../components/UI/CustomButton/CustomButton';

import Home from '../../components/Home/Home';
import Intro from '../../components/Home/Intro/Intro';
import AboutMe from '../../components/Home/AboutMe/AboutMe';
import NotFound from '../../components/PageNotFound/PageNotFound';

class HomeContainer extends Component {
    render () {
        // console.log('HOME CONTAINER', this.props);
        let homeContent
        let buttons
        switch(this.props.location.pathname) {
            case '/about':
                homeContent = <AboutMe />
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
                homeContent = <Intro />
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
                buttons={buttons} />
        )
    }
}

export default HomeContainer;