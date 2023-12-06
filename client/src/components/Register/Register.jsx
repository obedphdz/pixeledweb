/* eslint-disable no-unused-vars */

/* Register.jsx */
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import video from '../../assets/img/imgPixeled/videoImp3.mp4';
import logo from '../../assets/img/imgPixeled/logoblack.svg';
import '../Register/Register.css';
import axios from 'axios';

/* Imported icons */
import { MdOutlineLogin, MdMarkEmailRead } from 'react-icons/md';
import { FaEye, FaEyeSlash, FaUserShield } from 'react-icons/fa';
import { BsFillTelephoneInboundFill } from 'react-icons/bs';
import { RiLockPasswordLine } from 'react-icons/ri';

const URI = 'http://localhost:8000/register';
const Register = () => {
	const [nombre, setNombre] = useState('');
	const [apat, setApat] = useState('');
	const [amat, setAmat] = useState('');
	const [numero, setNumero] = useState('');
	const [email, setEmail] = useState('');
	const [pass, setPass] = useState('');
	const [showPass, setShowPass] = useState(false);
	const [isLoading, setIsLoading] = useState(false);

	const navigate = useNavigate();

	// Reproduce video en cualquier navegador
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

	const handleTogglePasswordVisibility = () => {
		setShowPass((prevShowPassword) => !prevShowPassword);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setIsLoading(true);
		try {
			const response = await axios.post(URI, {
				nombre: nombre,
				ape_pat: apat,
				ape_mat: amat,
				numero: numero,
				email: email,
				pass: pass,
			});

			console.log('Respond from backend:', response.data);
		} catch (error) {
			console.log(error.response.data);
			// Handle API error and display user-friendly message
			if (error.response) {
				console.log('API Error:', error.response.data.message);
				// Display error message to the user
				// ...
			} else if (error.request) {
				console.log('Request Error:', error.request);
				// Display error message to the user
				// ...
			} else {
				console.log('Error:', error.message);
				// Display error message to the user
				// ...
			}
		} finally {
			setIsLoading(false);
		}
		navigate('/login');
	};

	return (
		<div className='registerPage flexH'>
			<div className='containerRegi flexH'>
				<div className='videoDiv'>
					<video src={video} id='my-video' className='myVideo'></video>

					<div className='textDivRegister'>
						<h2 className='title'>Desata tu creatividad y lleva tus ideas al siguiente nivel.</h2>
						<p>Transforma tus conceptos en realidades extraordinarias. ¡Descubre el poder de la impresión con Pixeled!</p>
					</div>

					<div className='footerDiv flexH'>
						<span className='text'>¿Ya tienes una cuenta?</span>
						<Link to='/login'>
							<button className='btnSignUp'>Iniciar Sesión</button>
						</Link>
					</div>
				</div>

				<div className='formDivRegister flexH'>
					<div className='headerDivRegi'>
						<Link to='/'>
							<img src={logo} alt='' />
						</Link>
						<h3>Crear cuenta.</h3>
					</div>

					<form onSubmit={handleSubmit} method='post'>
						<div>
							<div className='inpdiv'>
								<input
									type='text'
									name='nombre'
									value={nombre}
									onChange={(e) => setNombre(e.target.value)}
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
									name='apat'
									value={apat}
									onChange={(e) => setApat(e.target.value)}
									required
								/>
								<label className='etiqueta'>
									<FaUserShield className='iconRegi' /> Apellido Paterno
								</label>
							</div>
							<div className='inpdiv'>
								<input
									type='text'
									name='amat'
									value={amat}
									onChange={(e) => setAmat(e.target.value)}
									required
								/>
								<label className='etiqueta'>
									<FaUserShield className='iconRegi' />
									Apellido Materno
								</label>
							</div>
							<div className='inpdiv'>  
								<input
									type='text'
									name='numero'
									value={numero}
									onChange={(e) => setNumero(e.target.value)}
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
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									required
								/>
								<label className='etiqueta'>
									<MdMarkEmailRead className='iconRegi' />
									Correo Electrónico
								</label>
							</div>

							<div className='inpdiv'>
								<input
									type={showPass ? 'text' : 'password'}
									name='password'
									value={pass}
									onChange={(e) => setPass(e.target.value)}
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
									{showPass ? <FaEyeSlash /> : <FaEye />}
								</div>
							</div>

							<button type='submit' className='regiBtn' disabled={isLoading}>
								<span>{isLoading ? 'Loading...' : 'Registrar'}</span>
								<MdOutlineLogin className='icon' />
							</button>
						</div>
					</form>
					<div className='mensaje'></div>
				</div>
			</div>
		</div>
	);
};

export default Register;
