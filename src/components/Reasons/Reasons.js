import { Component } from 'react';

import icon0 from '../../icons/icon-0.png';
import icon1 from '../../icons/icon-1.png';
import icon2 from '../../icons/icon-2.png';
import icon4 from '../../icons/icon-4.png';
import icon3 from '../../icons/icon-3.png';
import icon6 from '../../icons/icon-6.png';
import icon5 from '../../icons/icon-5.png';
import icon7 from '../../icons/icon-7.png';
import './reasons.sass';

class Reasons extends Component {
  render() {
    return (
      <section className="reasons">
        <div className="container">
          <div className="label">преимущества</div>
          <h2 className="title">8 причин начать работать с нами</h2>
          <div className="row">
            <div className="col-md-6">
              <div className="reasons_block">
                <div className="reasons_round">
                  <img src={icon0} alt="reason" />
                </div>
                <div className="reasons_descr">
                  <div className="reasons_subtitle">Никаких наличных, оплата происходит автоматически</div>
                  <div className="reasons_text">
                    Стоимость поездки оплачивается пассажиром с привязанной банковской карты, т.е. нет
                    никаких рисков связанных с перевозкой наличности как для пассажира, так и для
                    водителя,
                    Вам не нужно искать мелкие деньги для размена.
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="reasons_block">
                <div className="reasons_round">
                  <img src={icon2} alt="reason" />
                </div>
                <div className="reasons_descr">
                  <div className="reasons_subtitle">Комиссия 8% + БОНУСЫ</div>
                  <div className="reasons_text">
                    У нас минимальная комиссия и мы выплачиваем бонусы за каждую поездку, некоторые наши
                    конкуренты оставляют бонусы себе. Мы работаем честно и с нами водители зарабатывают
                    больше!
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="reasons_block">
                <div className="reasons_round">
                  <img src={icon1} alt="reason" />
                </div>
                <div className="reasons_descr">
                  <div className="reasons_subtitle">Высокий доход с гарантированными выплатами</div>
                  <div className="reasons_text">
                    Мы выплачиваем заработную плату на личную банковскую карту водителя! Вам не нужно
                    оформлять ООО, ИП, платить налоги, подавать декларацию, оплачивать бухгалтерские
                    услуги
                    и ведение банковского счета.
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="reasons_block">
                <div className="reasons_round">
                  <img src={icon4} alt="reason" />
                </div>
                <div className="reasons_descr">
                  <div className="reasons_subtitle">Работа в удобное время, никаких графиков</div>
                  <div className="reasons_text">
                    Вы просто нажимаете кнопку выйти на линию для начала работы, когда решите закончить,
                    нажимаете выйти с линии. Вы можете подрабатывать только утром, вечером, в выходные
                    или
                    праздничные дни!
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="reasons_block">
                <div className="reasons_round">
                  <img src={icon3} alt="reason" />
                </div>
                <div className="reasons_descr">
                  <div className="reasons_subtitle">Комфортное, прозрачное и простое подключение</div>
                  <div className="reasons_text">
                    Мы подключаем дистанционно и бесплатно, Вам нет необходимости приезжать к нам! Вы
                    присылаете нам копии документов, мы регистрируем Вас и присылаем данные для
                    подключения,
                    через 1-2 дня Вы можете начинать работать!
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="reasons_block">
                <div className="reasons_round">
                  <img src={icon6} alt="reason" />
                </div>
                <div className="reasons_descr">
                  <div className="reasons_subtitle">Всегда большое количество заказов</div>
                  <div className="reasons_text">
                    Приложение показывает, где на данный момент больше всего заказов и где действуют
                    повышенные тарифы. У Вас не будет простоя и холостых пробегов. Наши пассажиры всегда
                    приятные и абсолютно неконфликтные люди, которых приятно возить.
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="reasons_block">
                <div className="reasons_round">
                  <img src={icon5} alt="reason" />
                </div>
                <div className="reasons_descr">
                  <div className="reasons_subtitle">Круглосуточная поддержка</div>
                  <div className="reasons_text">
                    В Uber действует круглосуточная поддержка водителей по электронной почте. Если
                    что-то
                    непонятно, Вы всегда можете задать вопрос через On-line консультацию.
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="reasons_block">
                <div className="reasons_round">
                  <img src={icon7} alt="reason" />
                </div>
                <div className="reasons_descr">
                  <div className="reasons_subtitle">Без шашечек и наклеек</div>
                  <div className="reasons_text">
                    Вам не нужно менять цвет, устанавливать «шашки» на автомобиль и обклеивать его
                    наклейками.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Reasons;
