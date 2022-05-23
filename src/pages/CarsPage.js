import { Component } from "react";

import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import ChoiseCar from '../components/ChoiseCar/ChoiseCar';

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