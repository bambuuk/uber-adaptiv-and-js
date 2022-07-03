import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const withLayout = (BaseComponent) => {
  return function WithLayout() {
    return (
      <>
        <Header />
        <main>
          <BaseComponent />
        </main>
        <Footer />
      </>
    );
  };
};

export default withLayout;
