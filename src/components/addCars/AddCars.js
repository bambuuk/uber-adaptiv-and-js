import { Component } from "react";

import "./addCars.sass";

class AddCars extends Component {
    state = {
        title: '',
        typeCar: '',
        classComfort: '',
        driver: '',
        url: '',
    }

    onValueInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    sendCarItem = (e) => {
        e.preventDefault();
        if (this.state.typeCar === 'Седан' || this.state.typeCar === 'Пикап' || this.state.typeCar === 'Универсал') {
            this.props.onAddItem(this.state);
            this.setState({
                title: '',
                typeCar: '',
                classComfort: '',
                driver: '',
                url: ''
            })
        } else {
            alert('Тип автомобиля может быть: Седан, Пикап, Универсал. Пожалуйста, впишите один из предложенных вариантов')
        }
    }

    render() {
        const { title, typeCar, classComfort, driver, url } = this.state;
        return (
            <section className={`add-item-car`}>
                <form className="add-item-car_form" onSubmit={this.sendCarItem} action="" method="" encType='multipart/form-data'>
                    <input className="add-item-car_input" onChange={(e) => this.onValueInputChange(e)} value={title} placeholder="Марка/модель автомобиля" required name="title" type="text" />
                    <input className="add-item-car_input" onChange={(e) => this.onValueInputChange(e)} value={typeCar} placeholder="Тип автомобиля" required name="typeCar" type="text" />
                    <input className="add-item-car_input" onChange={(e) => this.onValueInputChange(e)} value={classComfort} placeholder="Класс автомобиля" required name="classComfort" type="text" />
                    <input className="add-item-car_input" onChange={(e) => this.onValueInputChange(e)} value={driver} placeholder="Водитель" required name="driver" type="text" />
                    <input className="add-item-car_input url" onChange={(e) => this.onValueInputChange(e)} value={url} placeholder="Ссылка на изображение" required name="url" type="text" />
                    <button className="add-item-car_btn" type="submit">Добавить</button>
                </form>
            </section>
        )
    }
}

export default AddCars;