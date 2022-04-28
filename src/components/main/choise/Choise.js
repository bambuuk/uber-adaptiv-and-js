import { Component } from "react";
import machine from '../../../img/machine.png';

import './choise.sass';

class Choise extends Component {
    render() {
        return (
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
        )
    }
}

export default Choise;