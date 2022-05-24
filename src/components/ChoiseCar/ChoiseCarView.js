import ChoiseCarFilters from "../ChoiseCarFilters/ChoiseCarFilters";
import CarList from "../CarList/CarList";
import AddCars from "../AddCars/AddCars";
import SelectedCar from "../SelectedCar/SelectedCar";

const ChoiseCarView = function (props) {
    const { visibleCarItems, onChangeFilter, 
        deleteItem, filter, onAddItem, selectedCar, 
        onChangeSelectedCar,  dragStartHadler, 
        dragEndHandler, dragOverHandler, 
        dropHandler, sortCard, cardUntilCurrentCard} = props;
    return (
        <section className="choiseCar">
            <div className="container">
                <div className="title">Доступные варианты автомобилей</div>
                <ChoiseCarFilters onChangeFilter={onChangeFilter} />
                <SelectedCar selectedCar={selectedCar}/>
                <CarList 
                    data={visibleCarItems} 
                    onDelete={deleteItem} 
                    filter={filter} 
                    onChangeSelectedCar={onChangeSelectedCar}
                    dragStartHadler={dragStartHadler}
                    dragEndHandler={dragEndHandler} 
                    dragOverHandler={dragOverHandler}
                    dropHandler={dropHandler}
                    sortCard={sortCard}
                    cardUntilCurrentCard={cardUntilCurrentCard}/>
                <AddCars onAddItem={onAddItem} />
            </div>
        </section>
    )
}

export default ChoiseCarView;