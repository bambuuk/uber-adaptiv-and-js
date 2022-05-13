import { Component } from "react";

import './choiseCarFilters.sass';

class ChoiseCarFilters extends Component {
    
    render() {
        const buttonsData = [
            { name: 'all', label: 'Все машины' },
            { name: 'sedan', label: 'Седаны' },
            { name: 'pickup', label: 'Пикапы' },
            { name: 'universal', label: 'Универсалы' },
            { name: 'alphabet', label: 'Сортировка машин за алфавитом' },
        ];

        const buttons = buttonsData.map(({ name, label }) => {
    
            return (
                <button 
                    className="choiseCar_btn"
                    type="button"
                    onClick={() => this.props.onChangeFilter(name)}
                    key={name}>
                        {label}
                </button>
            )
        });

        return (
            <>
                <div className="choiseCar_filter">
                    {buttons}
                </div>
            </>
        )
    }
}

export default ChoiseCarFilters;