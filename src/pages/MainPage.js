import { Component } from 'react';

import Header from '../components/Header/Header';
import Promo from '../components/Promo/Promo';
import Reasons from '../components/Reasons/Reasons';
import Mobile from '../components/Mobile/Mobile';
import Choise from '../components/Choise/Choise';
import Require from '../components/Require/Require';
import City from '../components/City/City';
import Footer from '../components/Footer/Footer';

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