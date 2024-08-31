import { useState } from 'react';
import { createDoctor } from '../../utils/api';
import './CreateDoctor.css'; // Import the CSS file

const CreateDoctor = () => {
  const [codigo_CM, setCodigo_CM] = useState(null);
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [especialidad, setEspecialidad] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    createDoctor({
      codigo_CM: Number(codigo_CM),
      nombre,
      apellido,
      especialidad,
    });
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Crear Doctor</h2>
      <form className="doctor-form" onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="Código CM"
          value={codigo_CM}
          onChange={(e) => setCodigo_CM(e.target.value)}
          className="form-input"
        />
        <input
          type="text"
          placeholder="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          className="form-input"
        />
        <input
          type="text"
          placeholder="Apellido"
          value={apellido}
          onChange={(e) => setApellido(e.target.value)}
          className="form-input"
        />
        <input
          type="text"
          placeholder="Especialidad"
          value={especialidad}
          onChange={(e) => setEspecialidad(e.target.value)}
          className="form-input"
        />
        <button type="submit" className="submit-button">Crear</button>
      </form>
    </div>
  );
};

export default CreateDoctor;
