import PropTypes from 'prop-types';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function Layout({ children, choiseTheme }) {
  return (
    <>
      <Header choiseTheme={choiseTheme} />

      <main>
        {children}
      </main>

      <Footer />
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.element.isRequired,
  choiseTheme: PropTypes.func,
};

Layout.defaultProps = { 
  choiseTheme: null
};

export default Layout;
