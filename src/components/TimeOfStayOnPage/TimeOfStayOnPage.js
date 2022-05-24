import { Component } from "react";

import './timeOfStayOnPage.sass';

class TimeOfStayOnPage extends Component {

    state = {
        hours: 0,
        minutes: 0,
        seconds: 0
    }

    componentDidMount() {
        this.timerId = setInterval(() => this.updateTime(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    updateTime = () => {
        this.setState(state => {
            let s = state.seconds;
            let m = state.minutes;
            let h = state.hours;

            // installing seconds and minutes
            if (state.seconds < 59) {
                s++;
            } else {
                s = 0;
                m++;
            }

            // installing minutes and hours
            if (m === 60) {
                m = 0;
                h++;
            }
            return {
                hours: h,
                minutes: m,
                seconds: s
            }
        })
    }

    getZero = (num) => { 
        if (num >= 0 && num < 10) {
            return `0${num}`;
        } else {
            return num;
        }
    }

    render() {
        let hours = this.getZero(this.state.hours);
        let minutes = this.getZero(this.state.minutes);
        let seconds = this.getZero(this.state.seconds);

        return (
            <div className="timer">
                <div className="timer_descr">Время перебывания на странице:</div>
                <div className="timer_active">
                    <div id="timer_hours">{hours}:</div>
                    <div id="timer_minutes">{minutes}:</div>
                    <div id="timer_econds">{seconds}</div>
                </div>
            </div>
        )
    }
}

export default TimeOfStayOnPage;