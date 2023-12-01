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
	});

	const navigate = useNavigate();

	const [errors, setErrors] = useState({});

	const handleInput = (event) => {
		setValues((prev) => ({ ...prev, [event.target.name]: event.target.value }));
		console.log('Valores actualizados:', values);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		const { email, pass } = values;
		console.log('Valores enviados:', values);
		
			// Realizar la autenticación
			axios
				.post(`http://localhost:8000/login`, { email, pass })
				.then((res) => {
					if (res.data.status === 'Success') {
<<<<<<< HEAD
						if (res.data.userType === 'Cliente') {
							navigate('/admin/cliente'); // Redirect to the customer dashboard
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
=======
						// Obtener el tipo de usuario
						const userType = res.data.userType;
						// Redireccionar al usuario
						if (userType === 'Empleado-Administracion-Jefe') {
							navigate('/admin');
						} else if (userType === 'Empleado') {
							if (res.data.userId) {
								navigate('/jefeDise', { userId: res.data.userId });
>>>>>>> c5e1dd69d90979878a02c3c62be8c68e90b23001
							} else {
								navigate('/diseñador');
							}
						}
					} else {
						alert('Incorrect login credentials.');
					}
				})
				.catch((err) => console.log(err));
		
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

					<form action='post' onSubmit={handleSubmit} className='formLogin gridH'>
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
									id='pass'
									placeholder='Enter Password'
									onChange={handleInput}
									name='pass'
									autoComplete='current-password'
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
