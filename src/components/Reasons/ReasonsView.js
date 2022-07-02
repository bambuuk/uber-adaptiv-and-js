import PropTypes from 'prop-types';

import './reasons.sass';

function ReasonsView({ content }) {
  return (
    <section className="reasons">
      <div className="container">
        <div className="label">преимущества</div>
        <h2 className="title">8 причин начать работать с нами</h2>
        <div className="row">
          {content}
        </div>
      </div>
    </section>
  );
}

ReasonsView.propTypes = {
  content: PropTypes.arrayOf(Object),
};

ReasonsView.defaultProps = {
  content: null,
};

export default ReasonsView;
