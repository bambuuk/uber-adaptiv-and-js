
const BestCompanyDriversView = ({listDrivers}) => {
    return (
        <section className="bestCompDrivers">
            <div className="container">
                <div className="title">Лучшие водители нашей компании</div>
                <div className="bestCompDrivers_list">
                    {listDrivers}
                </div>
            </div>
        </section>
    )
}

export default BestCompanyDriversView;