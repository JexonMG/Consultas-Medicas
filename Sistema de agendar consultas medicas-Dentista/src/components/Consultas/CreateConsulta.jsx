import { useState } from 'react';
import { createConsulta } from '../../utils/api';
import './CreateConsulta.css'; // Import the CSS file

const CreateConsulta = () => {
    const [sexo, setSexo] = useState('');
    const [telefono, setTelefono] = useState('');
    const [citaId, setCitaId] = useState('');
    const [doctorId, setDoctorId] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const consulta = { sexo, telefono, citaId, doctorId };
        try {
            await createConsulta(consulta);
            alert('Consulta creada con éxito');
        } catch (error) {
            console.error('Error creating consulta:', error);
            alert('Error al crear la consulta');
        }
    }

    return (
        <div className="form-container">
            <h2>Crear Consulta</h2>
            <form onSubmit={handleSubmit} className="form">
                <input 
                    type="text" 
                    value={sexo} 
                    onChange={(e) => setSexo(e.target.value)} 
                    placeholder="Sexo" 
                    className="form-input"
                />
                <input 
                    type="text" 
                    value={telefono} 
                    onChange={(e) => setTelefono(e.target.value)} 
                    placeholder="Teléfono" 
                    className="form-input"
                />
                <input 
                    type="text" 
                    value={citaId} 
                    onChange={(e) => setCitaId(e.target.value)} 
                    placeholder="ID de Cita" 
                    className="form-input"
                />
                <input 
                    type="text" 
                    value={doctorId} 
                    onChange={(e) => setDoctorId(e.target.value)} 
                    placeholder="ID de Doctor" 
                    className="form-input"
                />
                <button type="submit" className="submit-button">Crear Consulta</button>
            </form>
        </div>
    )
}

export default CreateConsulta;
