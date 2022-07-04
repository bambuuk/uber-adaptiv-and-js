import Promo from '../components/Promo/Promo';
import Reasons from '../components/Reasons/Reasons';
import Mobile from '../components/Mobile/Mobile';
import Choise from '../components/Choise/Choise';
import Require from '../components/Require/Require';
import City from '../components/City/City';
import withLayout from '../hocs/withLayout';

function MainPage() {
  return (
    <>
      <Promo />
      <Reasons />
      <Mobile />
      <Choise />
      <Require />
      <City />
    </>
  );
}

export default withLayout(MainPage);
