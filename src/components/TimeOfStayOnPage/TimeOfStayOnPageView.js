import PropTypes from 'prop-types';

function TimeOfStayOnPageView({ hours, minutes, seconds }) {
  return (
    <div className="timer">
      <div className="timer_descr">Время перебывания на странице:</div>
      <div className="timer_active">
        <div id="timer_hours">
          {hours}
          :
        </div>
        <div id="timer_minutes">
          {minutes}
          :
        </div>
        <div id="timer_econds">{seconds}</div>
      </div>
    </div>
  );
}

TimeOfStayOnPageView.propTypes = {
  hours: PropTypes.string,
  minutes: PropTypes.string,
  seconds: PropTypes.string,
};

TimeOfStayOnPageView.defaultProps = {
  hours: '0',
  minutes: '00',
  seconds: '00'
};

export default TimeOfStayOnPageView;
