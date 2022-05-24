import TimeOfStayOnPage from "../TimeOfStayOnPage/TimeOfStayOnPage";

const AddCarsView = function (props) {
    const { title, typeCar, classComfort, driver, url } = props.data;
    const { onValueInputChange, sendCarItem, myRef } = props;

    return (
        <section className="add-item-car">
            <form
                className="add-item-car_form"
                onSubmit={sendCarItem}
                action=""
                method=""
                encType='multipart/form-data'>

                <input
                    ref={myRef}
                    className="add-item-car_input"
                    onChange={(e) => onValueInputChange(e)}
                    value={title}
                    placeholder="Марка/модель автомобиля"
                    required
                    name="title"
                    type="text" />

                <p className="selectTypeCar">
                    <label htmlFor="type-car">Выберите тип автомобиля: </label>
                    <select
                        id="type-car"
                        className="form-select"
                        aria-label="Default select example"
                        name="typeCar"
                        value={typeCar}
                        onChange={(e) => onValueInputChange(e)}>
                            <option>Достуаные варианты</option>
                            <option value="Седан">Седан</option>
                            <option value="Пикап">Пикап</option>
                            <option value="Универсал">Универсал</option>
                    </select>
                </p>

                <input
                    className="add-item-car_input"
                    onChange={(e) => onValueInputChange(e)}
                    value={classComfort}
                    placeholder="Класс автомобиля"
                    required
                    name="classComfort"
                    type="text" />

                <input
                    className="add-item-car_input"
                    onChange={(e) => onValueInputChange(e)}
                    value={driver}
                    placeholder="Водитель"
                    required
                    name="driver"
                    type="text" />

                <input
                    className="add-item-car_input url"
                    onChange={(e) => onValueInputChange(e)}
                    value={url}
                    placeholder="Ссылка на изображение с белым фоном"
                    required
                    name="url"
                    type="text" />
                <TimeOfStayOnPage/>
                <button className="add-item-car_btn" type="submit">Добавить</button>
            </form>
        </section>
    )
}

export default AddCarsView;