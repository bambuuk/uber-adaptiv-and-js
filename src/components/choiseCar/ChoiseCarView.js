import ChoiseCarFilters from "../choiseCarFilters/ChoiseCarFilters";
import CarList from "../carList/CarList";
import AddCars from "../addCars/AddCars";
import SelectedCar from "../selectedCar/SelectedCar";

const ChoiseCarView = function (props) {
    const { visibleCarItems, onChangeFilter, deleteItem, filter, onAddItem, selectedCar, onChangeSelectedCar } = props;
    return (
        <section className="choiseCar">
            <div className="container">
                <div className="title">Доступные варианты автомобилей</div>
                <ChoiseCarFilters onChangeFilter={onChangeFilter} />
                <SelectedCar selectedCar={selectedCar}/>
                <CarList data={visibleCarItems} onDelete={deleteItem} filter={filter} onChangeSelectedCar={onChangeSelectedCar} />
                <AddCars onAddItem={onAddItem} />
            </div>
        </section>
    )
}

export default ChoiseCarView;