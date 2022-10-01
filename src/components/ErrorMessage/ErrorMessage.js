import img from './error.gif';

function ErrorMessage() {
  return (
    <img
      src={img}
      style={{
        display: 'block',
        width: '150px',
        height: '150px',
        objectFit: 'contain',
        margin: '0 auto',
        marginTop: '100px' 
      }}
      alt="error"
    />
  );
}

export default ErrorMessage;
