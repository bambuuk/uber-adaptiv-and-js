import { Component } from 'react';
import './mobile.sass';

class Mobile extends Component {
  render() {
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
            <div className="col-md-6 col-lg-4">
              <div className="mobile_item mobile_item_1">
                <div className="mobile_item_subtitle">оформление заказа одним касанием</div>
                <div className="mobile_item_plus" />
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="mobile_item mobile_item_2">
                <div className="mobile_item_subtitle">надежная подача</div>
                <div className="mobile_item_plus" />
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="mobile_item mobile_item_3">
                <div className="mobile_item_subtitle">прозрачные цены</div>
                <div className="mobile_item_plus" />
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="mobile_item mobile_item_4">
                <div className="mobile_item_subtitle">безналичная оплата</div>
                <div className="mobile_item_plus" />
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="mobile_item mobile_item_5">
                <div className="mobile_item_subtitle">обратная связь</div>
                <div className="mobile_item_plus" />
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="mobile_item mobile_item_6">
                <div className="mobile_item_subtitle">
                  разделить
                  <br />
                  стоимость поездки
                </div>
                <div className="mobile_item_plus" />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Mobile;
