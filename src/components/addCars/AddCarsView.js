
const AddCarsView = function (props) {
    const {title, typeCar, classComfort, driver, url} = props.data;
    const {onValueInputChange, sendCarItem} = props;

    return (
        <section className="add-item-car">
            <form className="add-item-car_form" onSubmit={sendCarItem} action="" method="" encType='multipart/form-data'>
                <input className="add-item-car_input" onChange={(e) => onValueInputChange(e)} value={title} placeholder="Марка/модель автомобиля" required name="title" type="text" />
                <input className="add-item-car_input" onChange={(e) => onValueInputChange(e)} value={typeCar} placeholder="Тип автомобиля" required name="typeCar" type="text" />
                <input className="add-item-car_input" onChange={(e) => onValueInputChange(e)} value={classComfort} placeholder="Класс автомобиля" required name="classComfort" type="text" />
                <input className="add-item-car_input" onChange={(e) => onValueInputChange(e)} value={driver} placeholder="Водитель" required name="driver" type="text" />
                <input className="add-item-car_input url" onChange={(e) => onValueInputChange(e)} value={url} placeholder="Ссылка на изображение" required name="url" type="text" />
                <button className="add-item-car_btn" type="submit">Добавить</button>
            </form>
        </section>
    )
}

export default AddCarsView;