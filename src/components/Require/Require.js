import { Component } from 'react';
import './require.sass';

class Require extends Component {
  render() {
    return (
      <section className="require" id="require">
        <div className="container">
          <div className="label">Возможности</div>
          <h2 className="title">условия и требования</h2>
          <div className="row">
            <div className="col-md-6">
              <div className="require_block">
                <div className="require_title">
                  УСЛОВИЯ: со своим авто:
                </div>
                <ul className="require_list">
                  <li>Подключаем к системе UBER под 10%.</li>
                  <li>Ни каких взносов 0%!</li>
                  <li>Можем подключать удаленно без приезда в офис</li>
                  <li>ФОП не требуется</li>
                  <li>Заказы распределяются без учета рейтинга ближайшим водителям</li>
                  <li>Работа только по безналичному расчету</li>
                  <li>Деньги перечисляем на карту водителю или наличными в офисе</li>
                </ul>
                <div className="require_description">
                  В день заработок составляет 3500-6000 грн + бонус 1500 грн
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="require_block">
                <div className="require_title">
                  УСЛОВИЯ: на авто компании:
                </div>
                <ul className="require_list">
                  <li>Предоставляем авто без залога</li>
                  <li>Без ежедневных выплат по аренде</li>
                  <li>Среда пятница и суббота работа на компанию осталь ные дни вы работаете на себя</li>
                </ul>
              </div>
            </div>
            <div className="col-md-6">
              <div className="require_block require_block_nmb warning">
                <div className="require_title" id="requirement">
                  ТРЕБОВАНИЕ:
                </div>
                <ul className="require_list">
                  <li>Наличие автомобиля без рекламы</li>
                  <li>
                    Автомобиль не должен быть желтый и не с желтыми
                    номерами
                  </li>
                  <li>Машина не старше 3 лет</li>
                  <li>Стаж вождения не менее 3 лет</li>
                  <li>Девайс на системе андроид 4.0 и выше (самсунг)</li>
                </ul>
              </div>
            </div>
            <div className="col-md-6">
              <div className="require_block require_block_nmb warning">
                <div className="require_title">
                  ДОКУМЕНТЫ:
                </div>
                <ul className="require_list">
                  <li>Права 2 стороны</li>
                  <li>Паспорт лицевая сторона</li>
                  <li>СтС</li>
                  <li>Лицензия (если есть)</li>
                  <li>Номер телефона</li>
                  <li>Номер карты для перечисления денег (указать в письме)!</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Require;
