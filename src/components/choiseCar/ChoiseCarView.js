import ChoiseCarFilters from "../choiseCarFilters/ChoiseCarFilters";
import CarList from "../carList/CarList";
import AddCars from "../addCars/AddCars";

const ChoiseCarView = function (props) {
    const { visibleCarItems, onChangeFilter, deleteItem, filter, onAddItem } = props;
    return (
        <section className="choiseCar">
            <div className="container">
                <div className="title">Доступные варианты автомобилей</div>
                <ChoiseCarFilters onChangeFilter={onChangeFilter} />
                <CarList data={visibleCarItems} onDelete={deleteItem} filter={filter} />
                <AddCars onAddItem={onAddItem} />
            </div>
        </section>
    )
}

export default ChoiseCarView;