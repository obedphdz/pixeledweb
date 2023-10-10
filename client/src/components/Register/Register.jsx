/* eslint-disable no-unused-vars */

/* Register.jsx */
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import video from '../../assets/img/imgPixeled/videoImp3.mp4';
import logo from '../../assets/img/imgPixeled/logoblack.svg';
import './Register.css';
import Validation from './SignUpValidation';
import axios from 'axios';

/* Imported icons */
import { MdOutlineLogin, MdMarkEmailRead } from 'react-icons/md';
import { FaEye, FaEyeSlash, FaUserShield } from 'react-icons/fa';
import { BsFillTelephoneInboundFill } from 'react-icons/bs';
import { RiLockPasswordLine } from 'react-icons/ri';

const Register = () => {
	// Reproduce video en cualquier navegador
	useEffect(() => {
		const handleVideoEnded = () => {
			video.currentTime = 0;
			video.play();
		};

		const video = document.getElementById('my-video');
		video.addEventListener('ended', handleVideoEnded);
		video.play();

		return () => {
			video.removeEventListener('ended', handleVideoEnded);
		};
	}, []);

	/* SignUp Validation */

	const [values, setValues] = useState({
		nombre: '',
		ape_pat: '',
		ape_mat: '',
		num_telefono: '',
		email: '',
		password: '',
	});

	const navigate = useNavigate();

	const [errors, setErrors] = useState({});

	const [isRegistered, setIsRegistered] = useState(false);

	const [showPassword, setShowPassword] = useState(false);

	const handleSubmit = async (event) => {
		event.preventDefault();
		setIsRegistered(true);

		try {
			const validationErrors = await Validation(values);
			setErrors(validationErrors);

			if (validationErrors.cuentaRegi === 'Incorrecto') {
				alert('Registro falló con los parámetros deseados, vuelve a intentar.');
				navigate('/register');
			} else {
				alert('Usuario registrado exitosamente! Puedes regresar a Login.');
				axios.post('http://localhost:5000/signup', values).then(() => {
					navigate('/login');
				});
			}
		} catch (err) {
			console.error(err);
			alert('Error en la validación. Por favor, inténtalo de nuevo.');
		}
	};

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setValues((prevData) => ({
			...prevData,
			[name]: value,
		}));
		console.log('Valores actualizados:', values);
	};

	const handleTogglePasswordVisibility = () => {
		setShowPassword((prevShowPassword) => !prevShowPassword);
	};

	return (
		<div className='registerPage flexH'>
			<div className='containerRegi flexH'>
				<div className='videoDiv'>
					<video src={video} id='my-video' className='myVideo'></video>

					<div className='textDivRegister'>
						<h2 className='title'>Crea y vende productos extraordinarios. </h2>
						<p>Adopt the peace of nature!</p>
					</div>

					<div className='footerDiv flexH'>
						<span className='text'>¿Ya tienes una cuenta?</span>
						<Link to='/login'>
							<button className='btnSignUp'>Login</button>
						</Link>
					</div>
				</div>

				<div className='formDivRegister flexH'>
					<div className='headerDivRegi'>
						<img src={logo} alt='' />
						<h3>Crear cuenta.</h3>
					</div>

					<form action='' onSubmit={handleSubmit} className=''>
						<div>
							<div className='inpdiv'>
								<input
									type='text'
									name='nombre'
									value={values.nombre}
									onChange={handleInputChange}
									required
								/>
								<label className='etiqueta'>
									<FaUserShield className='iconRegi' />
									Nombre
								</label>
							</div>
							<div className='inpdiv'>
								<input
									type='text'
									name='ape_pat'
									value={values.ape_pat}
									onChange={handleInputChange}
									required
								/>
								<label className='etiqueta'>
									<FaUserShield className='iconRegi' /> Apellido Paterno
								</label>
							</div>
							<div className='inpdiv'>
								<input
									type='text'
									name='ape_mat'
									value={values.ape_mat}
									onChange={handleInputChange}
									required
								/>
								<label className='etiqueta'>
									<FaUserShield className='iconRegi' />
									Apellido Materno
								</label>
							</div>
							<div className='inpdiv'>
								<input
									type='tel'
									name='num_telefono'
									value={values.num_telefono}
									onChange={handleInputChange}
									required
								/>
								<label className='etiqueta'>
									<BsFillTelephoneInboundFill className='iconRegi' />
									Celular
								</label>
							</div>
							<div className='inpdiv'>
								<input
									type='email'
									name='email'
									value={values.email}
									onChange={handleInputChange}
									required
								/>
								<label className='etiqueta'>
									<MdMarkEmailRead className='iconRegi' />
									Correo Electrónico
								</label>
							</div>

							<div className='inpdiv'>
								<input
									type={showPassword ? 'text' : 'password'}
									name='password'
									value={values.password}
									onChange={handleInputChange}
									required
								/>
								<label className='etiqueta'>
									<RiLockPasswordLine className='iconRegi' />
									Contraseña
								</label>
								<div
									className='password-icon'
									onClick={handleTogglePasswordVisibility}
								>
									{showPassword ? <FaEyeSlash /> : <FaEye />}
								</div>
							</div>

							<button type='submit' className='regiBtn'>
								<span>Registrar</span>
								<MdOutlineLogin className='icon' />
							</button>
						</div>
					</form>
					<div className='mensaje'>
						{errors.password && (
							<span className='text-danger'>{errors.password}</span>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Register;
