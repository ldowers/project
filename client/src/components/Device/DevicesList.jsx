import React, { PropTypes, Component } from 'react';
import { Grid, Navbar } from 'react-bootstrap';

import DeviceListItem from "./DeviceListItem";

import './Device.css';

class DevicesList extends Component {
    // constructor(props){
    //     super(props);
    // }

    render(){
        return (
        <div>
            <Navbar inverse fixedTop>
            <Grid>
                <Navbar.Header>
                <Navbar.Brand>
                    <a href="/">IOT Device Profiler</a>
                </Navbar.Brand>
                <Navbar.Toggle />
                </Navbar.Header>
            </Grid>
            </Navbar>
            <div className="DeviceList">
                <div className="row">
                    <div className="col-sm-6"><h4>Device Title</h4></div>
                    <div className="col-sm-3"><h4>Behavior</h4></div>
                    <div className="col-sm-1"><h4>Infected</h4></div>
                </div>
                {this.props.devices.map(device => {
                    return <DeviceListItem key={device._id} device={device}/>;
                })}
            </div>
        </div>
        );
    }
}

DevicesList.propTypes = {
  devices: PropTypes.array
};

export default DevicesList;
