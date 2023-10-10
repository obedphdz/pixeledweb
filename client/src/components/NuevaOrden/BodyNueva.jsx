import '../NuevaOrden/BodyNueva.css';
import { useState } from 'react';

const BodyNueva = (props) => {
    const [clientes, setClientes] = useState([{ nombre: '', telefono: '' }]);
	const [filas, setFilas] = useState([
		{
			cantidad: '',
			archivo: '',
			base: '',
			altura: '',
			material: '',
			acabados: '',
			nota: '',
		},
	]);

	const handleAddFila = () => {
		setFilas([
			...filas,
			{
				cantidad: '',
				archivo: '',
				base: '',
				altura: '',
				material: '',
				acabados: '',
				nota: '',
			},
		]);
	};

	const handleClienteChange = (index, event) => {
		const { name, value } = event.target;
		const newClientes = [...clientes];
		newClientes[index][name] = value;
		setClientes(newClientes);
	};

	const handleFilaChange = (index, event) => {
		const { name, value } = event.target;
		const newFilas = [...filas];
		newFilas[index][name] = value;
		setFilas(newFilas);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		
	/* 	try {
			const validationErrors = await Validation(values);
			setErrors(validationErrors);
	
			if (validationErrors.cuentaRegi === "Incorrecto") {
				alert(
					"Registro falló con los parámetros deseados, vuelve a intentar."
				);
				navigate('/register');
			} else {
				alert(
					"Usuario registrado exitosamente! Puedes regresar a Login."
				);
				axios.post('http://localhost:5000/signup', values).then(() => {
					navigate('/login');
				});
			}
		} catch (err) {
			console.error(err);
			alert("Error en la validación. Por favor, inténtalo de nuevo.");
		} */
		console.log('Enviar a MySQL:', clientes, filas);
	};


	window.addEventListener("scroll",() => {
		const table = document.getElementById("tabla-cont");
		const scrollTop = document.body.scrollTop;
		if(scrollTop>table.scrollHeight){
			table.scrollTo(0, table.scrollHeight);
		}
	});

  return (
		<div className='mainContentBodyNueva'>
			<div className='bottomBodyNueva'>
				<div className='tituloSeccion'>
					<h1>{props.h1texto}</h1>
					<p>{props.ptexto}</p>
				</div>
				<form onSubmit={handleSubmit}>
					{clientes.map((cliente, index) => (
						<div key={index} className='cliente_cuad'>
							<div className='inputBox'>
								<input
									required='required'
									type='text'
									name='nombre'
									value={cliente.nombre}
									onChange={(e) => handleClienteChange(index, e)}
								/>
								<label className='etiqueta'>Cliente</label>
							</div>
							<div className='inputBox'>
								<input
									required='required'
									type='text'
									name='telefono'
									value={cliente.telefono}
									onChange={(e) => handleClienteChange(index, e)}
								/>
								<label className='etiqueta'>Contacto</label>
							</div>
						</div>
					))}
					<div id='tabla-cont'>
						<table className='tabla_archivos' id='table_archivos'>
							<thead>
								<tr>
									<th>Cantidad</th>
									<th>Archivo</th>
									<th>Base</th>
									<th>Altura</th>
									<th>Material</th>
									<th>Acabados</th>
									<th>Tipo de Impresión</th>
									<th>Nota</th>
								</tr>
							</thead>
							<tbody>
								{filas.map((fila, index) => (
									<tr key={index}>
										<td>
											<input
												className='input_chico'
												required='required'
												type='number'
												name='cantidad'
												value={fila.cantidad}
												min='1'
												step='1'
												onChange={(e) => handleFilaChange(index, e)}
											/>
										</td>
										<td>
											<input
												className='archivo'
												required='required'
												type='file'
												accept='.jpeg, .jpg, .psd, .ai, .pdf'
												name='archivo'
												onChange={(e) => handleFilaChange(index, e)}
											/>
										</td>
										<td>
											<input
												className='input_chico'
												required='required'
												type='text'
												name='base'
												value={fila.base}
												onChange={(e) => handleFilaChange(index, e)}
											/>
										</td>
										<td>
											<input
												className='input_chico'
												required='required'
												type='text'
												name='altura'
												value={fila.altura}
												onChange={(e) => handleFilaChange(index, e)}
											/>
										</td>
										<td>
											<select
												className='material'
												required='required'
												name='material'
												value={fila.material}
												onChange={(e) => handleFilaChange(index, e)}
											>
												<option value=''>Seleccione</option>
												<option value='Lona Opaca 13oz'>Lona Opaca 13oz</option>
												<option value='Lona Traslucida'>Lona Traslucida</option>
												<option value='Lona Mesh'>Lona Mesh</option>
												<option value='Lona Blackout'>Lona Blackout</option>
												<option value='Canvas'>Canvas</option>
												<option value='Vinil Reflejante Impreso'>
													Vinil Reflejante Impreso
												</option>
												<option value='Vinil Impreso'>Vinil Impreso</option>
												<option value='Vinil Wallgraphic'>
													Vinil Wallgraphic
												</option>
												<option value='Vinil Microperforado'>
													Vinil Microperforado
												</option>
												<option value='Vinil Estático'>Vinil Estático</option>
												<option value='Vinil Mate'>Vinil Mate</option>
												<option value='Vinil Transparente Brillante'>
													Vinil Transparente Brillante
												</option>
												<option value='Vinil Transparente Mate'>
													Vinil Transparente Mate
												</option>
												<option value='Vinil Imantado'>Vinil Imantado</option>
												<option value='Vinil Floorgraphic'>
													Vinil Floorgraphic
												</option>
												<option value='Recorte de Vinil Opaco'>
													Recorte de Vinil Opaco
												</option>
												<option value='Recorte de Vinil Brillante'>
													Recorte de Vinil Brillante
												</option>
												<option value='Recorte de Vinil Traslúcido'>
													Recorte de Vinil Traslúcido
												</option>
												<option value='Recorte de Vinil Esmerilado'>
													Recorte de Vinil Esmerilado
												</option>
												<option value='Backlight'>Backlight</option>
												<option value='Trovicel 3mm con impresion o recorte'>
													Trovicel 3mm con impresion o recorte
												</option>
												<option value='Trovicel 6mm con impresion o recorte'>
													Trovicel 6mm con impresion o recorte
												</option>
												<option value='Acrilico 3mm con impresion o recorte'>
													Acrilico 3mm con impresion o recorte
												</option>
												<option value='Coroplast con impresion o recorte'>
													Coroplast con impresion o recorte
												</option>
												<option value='Estireno con impresion o recorte'>
													Estireno con impresion o recorte
												</option>
												<option value='Foamboard'>Foamboard</option>
												<option value='Trovicel con cara de aluminio'>
													Trovicel con cara de aluminio
												</option>
											</select>
										</td>
										<td>
											<select
												className='acabados'
												required='required'
												name='acabados'
												value={fila.acabados}
												onChange={(e) => handleFilaChange(index, e)}
											>
												<option value=''>Seleccione</option>
												<option value='Bastilla y Ojillos'>
													Bastilla y Ojillos
												</option>
												<option value='Tensar'>Tensar</option>
												<option value='Bolsas'>Bolsas</option>
												<option value='Corte al ras'>Corte al ras</option>
												<option value='Depilar y empapelar'>
													Depilar y empapelar
												</option>
											</select>
										</td>
										<td>
											<select
												required='required'
												name='tipoimpresion'
												value={fila.tipoimpresion}
												onChange={(e) => handleFilaChange(index, e)}
											>
												<option value=''>Seleccione</option>
												<option value='granFormato'>Gran Formato</option>
												<option value='hd'>Alta Definición</option>
												<option value='letras'>Letras 3D</option>
												<option value='taller'>Taller</option>
												<option value='bastidores'>Bastidor</option>
											</select>
										</td>
										<td>
											<textarea
												className='textCont'
												type='text'
												name='nota'
												value={fila.nota}
												onChange={(e) => handleFilaChange(index, e)}
											/>
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
					<div className='contBotones'>
						<button
							className='hvr-shutter-out-horizontal'
							type='button'
							onClick={handleAddFila}
						>
							Agregar Archivo
						</button>
						<button className='hvr-shutter-out-horizontal' type='submit'>
							Crear {props.btnaccion}
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}

export default BodyNueva