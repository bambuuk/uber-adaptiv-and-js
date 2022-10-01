import { Link } from 'react-router-dom';
import ErrorMessage from '../components/ErrorMessage/ErrorMessage';

function Page404() {
  return (
    <div className="container">
      <ErrorMessage />
      <p style={{
        textAlign: 'center', fontWeight: 'bold', fontSize: '24px', marginTop: '5px' 
      }}
      >
        Page doesn&rsquo;t exist
      </p>
      <Link
        style={{
          display: 'block', textAlign: 'center', fontWeight: 'bold', fontSize: '24px', marginTop: '30px' 
        }}
        to="/"
      >
        Back to main page
      </Link>
    </div>
  );
}

export default Page404;
