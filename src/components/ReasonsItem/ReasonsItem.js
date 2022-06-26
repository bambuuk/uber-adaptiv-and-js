import PropTypes from 'prop-types';
import './reasons.sass';

function ReasonsItem(props) {
  const {
    imgSrc, subtitle, text
  } = props;
  return (
    <div className="col-md-6">
      <div className="reasons_block">
        <div className="reasons_round">
          <img src={imgSrc} alt="reason" />
        </div>
        <div className="reasons_descr">
          <div className="reasons_subtitle">{subtitle}</div>
          <div className="reasons_text">{text}</div>
        </div>
      </div>
    </div>
  );
}

ReasonsItem.propTypes = {
  imgSrc: PropTypes.string,
  subtitle: PropTypes.string,
  text: PropTypes.string,
};

ReasonsItem.defaultProps = {
  imgSrc: null,
  subtitle: null,
  text: null,
};

export default ReasonsItem;
