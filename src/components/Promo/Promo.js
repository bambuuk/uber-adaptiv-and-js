import { Component } from 'react';
import './promo.sass';

class Promo extends Component {
  render() {
    return (
      <section className="promo">
        <div className="container">
          <div className="row">
            <div className="col-md-12 offset-md-0 col-lg-10 offset-lg-1">
              <h1 className="promo_header">КОМПАНИЯ UBER PARTNERS!</h1>
              <h2 className="promo_subheader">ПРИГЛАШАЕМ ВОДИТЕЛЕЙ! НА СВОЕМ АВТО!</h2>
              <div className="promo_descr">
                Компания UBER динамически развивающаяся. Компания на рынке занимает лидирующее место среди
                таксомоторных компаний, Компания абсолютно прозрачная вы можете контролировать все процессы
                у
                себя в личном кабинете. Бонуcная система. омимо выполненной работы по заказам, компания
                начисляет бонусы за
                пиковое время.
                <br />
                <br />
                Мы одни из партнеров и зарекомендовали себя как одна из лучших команд в городе Киев.
                Водители
                у нас
                зарабатывают от 40000 грн - 60000 грн в месяц.
              </div>
              <button type="button" className="promo_btn">ОТПРАВИТЬ ЗАЯВКУ!</button>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Promo;
