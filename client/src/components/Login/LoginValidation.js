/* LoginValidation.js */

function Validation(values) {
	const error = {};
	const emailPattern = /.+/;
	const passwordPattern = /.{6,}/; 

	if (values.email === '') {
		error.email = 'Email should not be empty';
	} else if (!emailPattern.test(values.email)) {
		error.email = "email didn't match";
	} else {
		error.email = '';
	}

	if (values.pass === '') {
		error.pass = 'Password should not be empty';
	} else if (!passwordPattern.test(values.pass)) {
		error.pass = "Password didn't match";
	} else {
		error.pass = '';
	}

	if (error.email === '' && error.pass === '') {
		error.cuenta = 'Validando ...';
		console.log('Inicio de sesion Correcta');
	} else {
		error.cuenta = 'Error';
		console.log('Inicio de sesion Inorrecta');
	}

	console.log('Errores de validación:', error);

	return error;
}

export default Validation;
