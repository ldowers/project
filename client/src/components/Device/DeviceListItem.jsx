import React, { Component } from 'react';

export default class DevicesListItem extends Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        return (
        <div className="row">
            <div className="col-sm-6">
                {this.props.device.title}
            </div>
            <div className="col-sm-3">
                {this.props.device.behavior}
            </div>
            <div className="col-sm-1">
                {this.props.device.infected}
            </div>
        </div>
        );
    }
}
