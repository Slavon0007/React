import React, { Component } from 'react';
import moment, { utc } from 'moment';
import './clock.scss';

const getLocaleTime = offset => {
    const currentTime = new Date();
    const utcOffset = currentTime.getTimezoneOffset() / 60;
    return new Date(currentTime.setHours(currentTime.getHours() + offset + utcOffset));
}

class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            localeTime:'7:00:51',
        }

        setInterval(() => {
            this.setState({
                localeTime: getLocaleTime(this.props.offset),
            });
        }, 1000);
    }
    render() {
        return (
            <div className="clock">
                <div className="clock__location">{this.props.location}</div>
                <div className="clock__time">{this.state.date.toLocaleTimeString(localeTime)}</div>
            </div>
        );
    }
}

export default Clock;