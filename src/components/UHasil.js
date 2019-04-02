import React, {Component} from 'react';

class UHasil extends Component {
    render() {
        console.log(this.props.config)
        return (
            <div>
                {this.props.config.hasil.luas}
            </div>
        );
    }
}

export default UHasil;