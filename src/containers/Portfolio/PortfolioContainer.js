import React, { Component, Fragment } from 'react';

import CustomButton from '../../components/UI/CustomButton/CustomButton';

import Portfolio from '../../components/Portfolio/Portfolio';
import mywork from '../../constants/mywork.json';

class PortfolioContainer extends Component {
    render () {
        let buttons = <Fragment>
            <CustomButton 
                goTo={() => this.props.history.goBack()}
                label={'Go Back'}
                goBack/>
            <CustomButton 
                goTo={() => this.props.history.push('/about')}
                label={'About Me'}/>
        </Fragment>
        return (
            <Portfolio buttons={buttons} myWork={mywork} />
        )
    }
}

export default PortfolioContainer;