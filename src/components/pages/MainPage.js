import { Component } from 'react';

import Header from '../header/Header';
import Promo from '../promo/Promo';
import Reasons from '../reasons/Reasons';
import Mobile from '../mobile/Mobile';
import Choise from '../choise/Choise';
import Require from '../require/Require';
import City from '../city/City';
import Footer from '../footer/Footer';

class MainPage extends Component {
    render() {
        return (
            <>
                <Header />

                <main>
                    <Promo />
                    <Reasons />
                    <Mobile />
                    <Choise />
                    <Require />
                    <City />
                </main>

                <Footer />
            </>
        )
    }
}

export default MainPage;