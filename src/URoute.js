import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Route, Switch} from "react-router-dom";

class URoute extends Component {
    render() {
        return (
            <Switch>

                {Object.keys(this.props.rumus._lists).map((i) => {
                        let path = '/' + i;
                        let config = this.props.rumus.config[i];
                        if (config) {
                            return <Route key={i} path={path}
                                          render={props => React.createElement(this.props.ucomponent, {config: config})}/>
                        }
                    }
                )}
            </Switch>
        );
    }
}

URoute.propTypes = {
    ucomponent: PropTypes.any,
    rumus: PropTypes.any,
};

export default URoute;