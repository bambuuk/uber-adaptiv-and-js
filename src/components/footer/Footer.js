import { Component } from "react";

import appStore from '../../icons/store/apple-store.png';
import gplayStore from '../../icons/store/gplay-store.png';
import microsoftStore from '../../icons/store/microsoft-store.png';

import './footer.sass';

class Footer extends Component {
    render() {
        return (
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
        )
    }
}

export default Footer;