import { Component } from "react";
import ChoiseCarFiltersView from "./ChoiseCarFiltersView";

import './choiseCarFilters.sass';

class ChoiseCarFilters extends Component {
    
    render() {
        const {onChangeFilter, filter} = this.props;

        const buttonsData = [
            { name: 'all', label: 'Все машины' },
            { name: 'sedan', label: 'Седаны' },
            { name: 'pickup', label: 'Пикапы' },
            { name: 'universal', label: 'Универсалы' },
            { name: 'alphabet', label: 'Сортировка машин за алфавитом' },
        ];

        const buttons = buttonsData.map(({ name, label }) => {
            let clazz = filter === name ? "choiseCar_btn choiseCar_btn_active" : "choiseCar_btn";
            return (
                <button 
                    className={clazz}
                    type="button"
                    onClick={() => this.props.onChangeFilter(name)}
                    key={name}>
                        {label}
                </button>
            )
        });

        return (
            <ChoiseCarFiltersView buttons={buttons}/>
        )
    }
}

export default ChoiseCarFilters;