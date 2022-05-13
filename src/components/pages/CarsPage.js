import { Component } from "react";

import Header from '../header/Header';
import Footer from '../footer/Footer';
import ChoiseCar from '../choiseCar/ChoiseCar';

class CarsPage extends Component {
    render() {
        return (
            <>
                <Header />

                <main>
                    <ChoiseCar/>
                </main>

                <Footer />
            </>
        )
    }
}

export default CarsPage;