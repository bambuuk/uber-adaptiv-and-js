function TimeOfStayOnPageView({ hours, minutes, seconds }) {
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

export default TimeOfStayOnPageView;