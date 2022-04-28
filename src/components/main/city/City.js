import { Component } from "react";
import './city.sass';

class City extends Component {
    render() {
        return (
            <section className="city">
                <div className="container">
                    <div className="city_label">города</div>
                    <h2 className="city_title">По всему миру</h2>
                    <div className="city_subtitle">Мы в вашем городе и по всему миру</div>
                </div>
            </section>
        )
    }
}

export default City;