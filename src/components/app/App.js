import { Component } from 'react';

import uberLogo from '../../img/logo/Uber.png';
import icon_0 from '../../icons/icon-0.png';
import icon_1 from '../../icons/icon-1.png';
import icon_2 from '../../icons/icon-2.png';
import icon_4 from '../../icons/icon-4.png';
import icon_3 from '../../icons/icon-3.png';
import icon_6 from '../../icons/icon-6.png';
import icon_5 from '../../icons/icon-5.png';
import icon_7 from '../../icons/icon-7.png';
import machine from '../../img/machine.png';
import appStore from '../../icons/store/apple-store.png';
import gplayStore from '../../icons/store/gplay-store.png';
import microsoftStore from '../../icons/store/microsoft-store.png';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <nav>
            <div className="container">
              <ul className="menu">
                <li className="menu_item"><a href="#main" className="menu_link">Главная</a></li>
                <li className="menu_item"><a href="#require" className="menu_link">Со своим автомобилем</a></li>
                <li className="menu_item"><a href="#require" className="menu_link">На автомобиле компании</a></li>
                <li className="menu_item"><a href="#requirement" className="menu_link">Требования</a></li>
                <li className="menu_item"><a href="#contacts" className="menu_link">Контакты</a></li>
                <li className="menu_item"><a href="#contacts" className="menu_link">Оставить заявку</a></li>
              </ul>
            </div>


            <div className="hamburger">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </nav>
          <div className="subheader">
            <div className="container">
              <div className="row">
                <div className="col-6 col-md-4 offset-md-1">
                  <a href="#main" className="subheader_logo"><img src={uberLogo} alt="logo" /></a>
                  <div id="main" className="subheader_official">Официальный партнер Uber</div>
                </div>

                <div className="xs-hidden col-6 col-md-3 offset-md-1 col-xl-2 offset-xl-2">
                  <div id="contacts" className="subheader_call">Звоните нам ежедневно</div>
                  <a href="tel:84957970988" className="subheader_phone">+380992380623</a>
                </div>

                <div className="col-6 col-md-3 col-lg-2">
                  <a href="tel:84957970988" className="xs-visible subheader_phone">+380 495 797 09 88</a>
                  <button className="subheader_btn">заказать звонок</button>
                </div>
              </div>
            </div>
          </div>
        </header>

        <main>
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
                    себя в личном кабинете. Бонуcная система.Помимо выполненной работы по заказам, компания
                    начисляет бонусы за
                    пиковое время.
                    <br /><br />
                    Мы одни из партнеров и зарекомендовали себя как одна из лучших команд в городе Москве.
                    Водители
                    у нас
                    зарабатывают от 80000- 120000 в месяц.
                  </div>
                  <button className="promo_btn">ОТПРАВИТЬ ЗАЯВКУ!</button>
                </div>
              </div>
            </div>
          </section>

          <section className="reasons">
            <div className="container">
              <div className="label">преимущества</div>
              <h2 className="title">8 причин начать работать с нами</h2>
              <div className="row">
                <div className="col-md-6">
                  <div className="reasons_block">
                    <div className="reasons_round">
                      <img src={icon_0} alt="reason" />
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
                      <img src={icon_2} alt="reason" />
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
                      <img src={icon_1} alt="reason" />
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
                      <img src={icon_4} alt="reason" />
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
                      <img src={icon_3} alt="reason" />
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
                      <img src={icon_6} alt="reason" />
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
                      <img src={icon_5} alt="reason" />
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
                      <img src={icon_7} alt="reason" />
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

          <section className="mobile">
            <div className="container">
              <div className="label">Возможности</div>
              <h2 className="title">мобильное приложение убер</h2>
              <div className="subtitle">Сделайте заказ, совершите поездку и оплатите ее стоимость, используя свой
                мобильный
                телефон</div>

              <div className="row mobile_main_item">
                <div className="col-md-6 col-lg-4">
                  <div className="mobile_item mobile_item_1">
                    <div className="mobile_item_subtitle">оформление заказа одним касанием</div>
                    <div className="mobile_item_plus"></div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4">
                  <div className="mobile_item mobile_item_2">
                    <div className="mobile_item_subtitle">надежная подача</div>
                    <div className="mobile_item_plus"></div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4">
                  <div className="mobile_item mobile_item_3">
                    <div className="mobile_item_subtitle">прозрачные цены</div>
                    <div className="mobile_item_plus"></div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4">
                  <div className="mobile_item mobile_item_4">
                    <div className="mobile_item_subtitle">безналичная оплата</div>
                    <div className="mobile_item_plus"></div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4">
                  <div className="mobile_item mobile_item_5">
                    <div className="mobile_item_subtitle">обратная связь</div>
                    <div className="mobile_item_plus"></div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4">
                  <div className="mobile_item mobile_item_6">
                    <div className="mobile_item_subtitle">разделить<br />стоимость поездки</div>
                    <div className="mobile_item_plus"></div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="choise">
            <div className="container">
              <div className="choise_content">
                <div className="choise_content_label">Возможности</div>
                <h2 className="choise_content_title">Выбор - отличная штука!</h2>
                <div className="choise_content_subtitle">Закажите автомобиль, который подходит вам по стилю и бюджету
                </div>
                <img src={machine} alt="machine" className='choise_content_car' />
                <div className="choise_content_text">Машины на каждый день.<br />Лучше, быстрее и дешевле, чем такси</div>
              </div>
            </div>
            <div className="substrate"></div>
          </section>

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
                      <li>ИП не требуется</li>
                      <li>Заказы распределяются без учета рейтинга ближайшим водителям</li>
                      <li>Работа только по безналичному расчету</li>
                      <li>Деньги перечисляем на карту водителю или наличными в офисе</li>
                    </ul>
                    <div className="require_description">
                      В день заработок составляет 7000-12000р + бонус 3000т рублей
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
                      <li>Автомобиль не должен быть желтый и не с желтыми
                        номерами</li>
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

          <section className="city">
            <div className="container">
              <div className="city_label">города</div>
              <h2 className="city_title">По всему миру</h2>
              <div className="city_subtitle">Мы в вашем городе и по всему миру</div>
            </div>
          </section>
        </main>

        <footer className='footer'>
          <div className="container">
            <div className="footer_content">
              <div className="footer_content_line"></div>
              <div className="footer_content_link_header">
                <a href="#main">на главную</a>
                <a href="#main">города</a>
                <a href="#main">для водителей</a>
              </div>
              <div className="footer_content_link_subheader">
                <a href="#main">центр поддержки</a>
                <a href="#main">вакансии</a>
                <a href="#main">разработчики</a>
                <a href="#main">блог</a>
                <a href="#main">о нас</a>
              </div>
              <div className="footer_content_link_subheader_min_screen_size">
                <div className='first'>
                  <a href="#main">центр поддержки</a>
                  <a href="#main">вакансии</a>
                </div>
                <div className="second">
                  <a href="#main">разработчики</a>
                  <a href="#main">блог</a>
                  <a href="#main">о нас</a>
                </div>
              </div>
              <a href="#main" target='_blank' className="footer_content_language">русский</a>
            </div>
            <div className="author">
              <div className="author_content">
                <div className="author_title">Информация об авторе:</div>
                <div className="author_name">Иван Коробка</div>
                <a href="https://github.com/bambuuk" className="author_link">Github</a>
                <a href="https://www.figma.com/file/ivgb9OfADjPvRowi32CSgY/UBER_course?node-id=0%3A1"
                  target="_blank" rel="noreferrer" className="author_design_link">Оригинал дизайна</a>
              </div>
            </div>
          </div>

          <div className="footer_networks">
            <a href="#main" className="footer_networks_image"><i className="fab fa-facebook"></i></a>
            <a href="#main" className="footer_networks_image"><i className="fab fa-twitter"></i></a>
            <a href="#main" className="footer_networks_image"><i className="fab fa-linkedin"></i></a>
            <a href="#main" className="footer_networks_image"><i className="fab fa-instagram"></i></a>
          </div>
          <div className="footer_store">
            <a href="https://www.apple.com/ua/app-store/" target='_blank' rel="noreferrer"><img src={appStore}
              alt="apple store" /></a>
            <a href="https://play.google.com/" target='_blank' rel="noreferrer"><img src={gplayStore}
              alt="google play" /></a>
            <a href="https://www.microsoft.com/" target='_blank' rel="noreferrer"><img src={microsoftStore}
              alt="microsoft store" /></a>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
