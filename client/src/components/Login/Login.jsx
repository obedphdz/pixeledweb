/* Login.jsx */
/* eslint-disable no-unused-vars */
import './Login.css';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Validation from './LoginValidation';
import axios from 'axios';

import video from '../../assets/img/imgPixeled/videoImp2.mp4';
import logo from '../../assets/img/imgPixeled/logoblack.svg';

/* Imported Icons */
import { FaUserShield } from 'react-icons/fa';
import { BsFillShieldLockFill } from 'react-icons/bs';
import { MdOutlineLogin } from 'react-icons/md';

const Login = () => {
	// Reproduce video
	useEffect(() => {
		const handleVideoEnded = () => {
			video.currentTime = 0;
			video.play();
		};

		const video = document.getElementById('my-video');
		video.addEventListener('ended', handleVideoEnded);
		video.muted = true;
		video.play();

		return () => {
			video.removeEventListener('ended', handleVideoEnded);
		};
	}, []);

	/* Login validation */

	const [values, setValues] = useState({
		email: '',
		password: '',
		cuenta: '',
	});

	const navigate = useNavigate();

	const [errors, setErrors] = useState({});

	const [loginSuccess, setLoginSuccess] = useState(false);

	const handleInput = (event) => {
		setValues((prev) => ({ ...prev, [event.target.name]: event.target.value }));
		console.log('Valores actualizados:', values);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		const validationErrors = Validation(values);

		if (Object.keys(validationErrors).length === 0) {
			setLoginSuccess(true);

<<<<<<< HEAD
			axios
				.post('http://localhost:8000/login', values)
				.then((res) => {
					if (res.data.status === 'Success') {
						if (res.data.userType === 'Cliente') {
							navigate('/cliente'); // Redirect to the customer dashboard
						} else if (res.data.userType === 'Empleado') {
							// Check the employee's email and redirect to specific views
							if (res.data.user.correo_emp === 'admin@pixeled.com') {
								navigate('/admin');
							} else if (res.data.user.correo_emp === 'diseno@pixeled.com') {
								navigate('/diseñador');
							} else if (
								res.data.user.correo_emp === 'admin.diseno@pixeled.com'
							) {
								navigate('/jefeDise');
							} else if (res.data.user.correo_emp === 'impresion@pixeled.com') {
								navigate('/diseñador');
							} else {
								navigate('/login');
							}
						} else {
							alert('Incorrect login credentials.');
						}
					} else if (res.data === 'Failed') {
						alert('Incorrect login credentials.');
=======
		axios.post('http://localhost:5000/login', values).then((res) => {
			if (res.data.status === "Success") {
			  if (res.data.userType === "Cliente") {
				navigate('/cliente'); // Redirige al dashboard del cliente
			} else if (res.data.userType === "Empleado") {
				// Aquí puedes verificar el correo del empleado y redirigir a vistas específicas
				if (res.data.user.correo_emp === 'admin@pixeled.com') {
				  navigate('/admin');
				} else if (res.data.user.correo_emp === 'diseno@pixeled.com') {
				  navigate('/diseñador');
				} else if (res.data.user.correo_emp === 'admin.diseno@pixeled.com') {
					navigate('/jefe-dise');
				} else if (res.data.user.correo_emp === 'impresion@pixeled.com') {
					navigate('/diseñador');
				} else {
				  navigate('/login');
				}
			  } else {
				alert("Inicio de sesión incorrecto.");
			  }
			} else if (res.data === "Failed") {
			  alert("Inicio de sesión incorrecto.");
			}
		  }).catch((err) => console.log(err));
	};
	

return (
	<div className='loginPage flexH'>
		<div className='container flexH'>
			<div className='videoDiv'>
				<video src={video} id='my-video' className='myVideo'></video>

				<div className='textDivLogin'>
					<h2 className='title'>Crea y vende productos extraordinarios. </h2>
					<p>Adopt the peace of nature!</p>
				</div>

				<div className='footerDiv flexH'>
					<span className='text'>Aún no tienes una cuenta?</span>
					<Link to='/register'>
						<button className='btnSignUp'>Sign Up</button>
					</Link>
				</div>
			</div>

			<div className='formDivLogin flexH'>
				<div className='headerDiv'>
				<Link to='/'>
					<img src={logo} alt='' />
				</Link>
					<h3>Bienvenido.</h3>
				</div>

				<form action='' onSubmit={handleSubmit} className='formLogin gridH'>
					{
						(errors.email && <span className='loginStatus'>{errors.email}</span>) ||
						(errors.password && <span className='loginStatus'>{errors.password}</span>) ||
						(errors.cuenta && <span className='loginStatus'>{errors.cuenta}</span>)
>>>>>>> 1e42649e59706b679c26bc82e343962c0a837891
					}
				})
				.catch((err) => console.log(err));
		} else {
			setErrors(validationErrors);
		}
	};

	return (
		<div className='loginPage flexH'>
			<div className='container flexH'>
				<div className='videoDiv'>
					<video src={video} id='my-video' className='myVideo'></video>

					<div className='textDivLogin'>
						<h2 className='title'>Crea y vende productos extraordinarios. </h2>
						<p>Adopt the peace of nature!</p>
					</div>

					<div className='footerDiv flexH'>
						<span className='text'>Aún no tienes una cuenta?</span>
						<Link to='/register'>
							<button className='btnSignUp'>Sign Up</button>
						</Link>
					</div>
				</div>

				<div className='formDivLogin flexH'>
					<div className='headerDiv'>
						<Link to='/'>
							<img src={logo} alt='' />
						</Link>
						<h3>Bienvenido.</h3>
					</div>

					<form action='' onSubmit={handleSubmit} className='formLogin gridH'>
						{(errors.email && (
							<span className='loginStatus'>{errors.email}</span>
						)) ||
							(errors.password && (
								<span className='loginStatus'>{errors.password}</span>
							)) ||
							(errors.cuenta && (
								<span className='loginStatus'>{errors.cuenta}</span>
							))}

						<div className='inputDiv'>
							<label htmlFor='email' className='label'>
								Correo Electrónico
							</label>
							<div className='input flexH'>
								<FaUserShield className='icon' />
								<input
									type='email'
									onChange={handleInput}
									id='email'
									placeholder='Enter email'
									name='email'
									required
								/>
							</div>
						</div>

						<div className='inputDiv'>
							<label htmlFor='password' className='label'>
								Contraseña
							</label>
							<div className='input flexH'>
								<BsFillShieldLockFill className='icon' />
								<input
									type='password'
									id='password'
									placeholder='Enter Password'
									onChange={handleInput}
									name='password'
									required
								/>
							</div>
						</div>

						<button type='submit' className='btn flexH'>
							<span>Login</span>
							<MdOutlineLogin className='icon' />
						</button>
						<span className='forgotPassword'>
							Olvidaste tu contraseña?{' '}
							<a href='' className='clickHere'>
								Click here
							</a>
						</span>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Login;
