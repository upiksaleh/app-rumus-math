import React, {Component} from 'react';

class UInfo extends Component {
    render() {
        return (
            <div>
                <img src={this.props.config._img}/>
            <pre>
                {this.props.config._info}
            </pre>
            </div>
        );
    }
}

export default UInfo;