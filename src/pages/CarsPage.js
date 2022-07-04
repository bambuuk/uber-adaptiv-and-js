import ChoiseCar from '../components/ChoiseCar/ChoiseCar';
import withLayout from '../hocs/withLayout';

function CarsPage() {
  return (
    <ChoiseCar />
  );
}

export default withLayout(CarsPage);
