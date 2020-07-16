import React, { Fragment, Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './containers/Home/HomeContainer';
import Portfolio from './containers/Portfolio/PortfolioContainer';

class App extends Component {
    render () {
        return (
            <Fragment>
                <Switch>
                    <Route path="/portfolio" component={Portfolio} />
                    {/* <Route path="/about" component={Home} /> */}
                    <Route path="/" component={Home} />
                    {/* <Route path="*" component={Home} /> */}
                </Switch>
            </Fragment>
        )
    }
}

export default App;
