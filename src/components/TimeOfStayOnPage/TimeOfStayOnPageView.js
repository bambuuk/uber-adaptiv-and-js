import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

function TimeOfStayOnPageView({ hours, minutes, seconds }) {
  const { t } = useTranslation();

  return (
    <div className="timer">
      <div className="timer_descr">{t('choiseCar.timeOfStayOnPageView')}</div>
      <div className="timer_active">
        <div id="timer_hours">
          {hours}
          :
        </div>
        <div id="timer_minutes">
          {minutes}
          :
        </div>
        <div id="timer_seconds">{seconds}</div>
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
