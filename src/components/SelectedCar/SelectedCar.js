import './selectedCar.sass';

const SelectedCar = function(props) {
    return(
        <div className="selected-car">
            <p className="selected-car_text"><strong>Выбранный автомобиль:</strong> {props.selectedCar}</p>
            <button className="btn">Подтвердить</button>
        </div>
    )
}

export default SelectedCar;