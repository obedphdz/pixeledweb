import { useState } from 'react';
import { MdAddCard } from 'react-icons/md';
import './SideAr.css';

const SideAr = ({ onFileSelected, onFinalizarOrden, isDataSaved }) => {
  const [archivos, setArchivos] = useState([]);

  const agregarArchivo = () => {
    if (isDataSaved === false) {
      const nuevoArchivo = { id: archivos.length + 1, name: `Archivo ${archivos.length + 1}` };
      setArchivos([...archivos, nuevoArchivo]);
    // Callback para informar al componente principal sobre el nuevo archivo
      onFileSelected(nuevoArchivo);
    }else{
      alert("Debes guardar los datos antes de agregar otro archivo.");
    } 
  };

  return (
    <div className="sideArchivo-container">
      <h3 className='h3side'>Agregar otro archivo.</h3>

      {archivos.map((archivo) => (
        <div key={archivo.id} className="archivoDiv" onClick={() => onFileSelected(archivo)}>
          {archivo.name}
        </div>
      ))}

      <MdAddCard className="addIcon" onClick={agregarArchivo} />

      <div className="divBtnFinalizar">
        <button className="btnFinalizarOrden" onClick={onFinalizarOrden}>
          Finalizar Orden
        </button>
      </div>
    </div>
  );
};

export default SideAr;
