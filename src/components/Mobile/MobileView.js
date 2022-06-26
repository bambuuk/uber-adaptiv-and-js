import PropTypes from 'prop-types';
import './mobile.sass';

function MobileView({ content }) {
  return (
    <section className="mobile">
      <div className="container">
        <div className="label">Возможности</div>
        <h2 className="title">мобильное приложение убер</h2>
        <div className="subtitle">
          Сделайте заказ, совершите поездку и оплатите ее стоимость, используя свой
          мобильный
          телефон
        </div>
        <div className="row mobile_main_item">
          {content}
        </div>
      </div>
    </section>
  );
}

MobileView.propTypes = {
  content: PropTypes.instanceOf(Array),
};

MobileView.defaultProps = {
  content: null,
};

export default MobileView;
