import {Link} from 'react-router-dom';

const Button = ({ styles }) => (
	<Link to='/login'>
	  <button
		type='button'
		className={`py-4 px-6 font-poppins font-medium text-[18px] text-whiteColor bg-blue-gradient rounded-[10px] outline-none transition duration-300 ease-in-out transform hover:scale-105 ${styles}`}
		style={{ background: 'linear-gradient(to right, #e62657, #280028)' }}
	  >
		Iniciar Pedido
	  </button>
	</Link>
  );

export default Button