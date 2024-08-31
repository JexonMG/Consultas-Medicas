import { useState, useEffect } from 'react';
import { fetchConsultas } from '../../utils/api';
import './FetchConsultas.css'; // Import the CSS file

const FetchConsultas = () => {
    const [consultas, setConsultas] = useState([]);
    const [showConsultas, setShowConsultas] = useState(true);

    useEffect(() => {
        fetchConsultas().then(setConsultas);
    }, []);

    const toggleConsultas = () => {
        setShowConsultas(!showConsultas);
    };

    return (
        <div className="consultas-container">
            <h2>Consultas</h2>
            <button onClick={toggleConsultas} className="toggle-button">
                {showConsultas ? 'Hide Consultas' : 'Show Consultas'}
            </button>
            {showConsultas && (
                <ul className="consultas-list">
                    {consultas.map(consulta => (
                        <li key={consulta.id} className="consulta-item">
                            <h3>Consulta ID: {consulta.id}</h3>
                            <p><strong>Sexo:</strong> {consulta.sexo}</p>
                            <p><strong>Teléfono:</strong> {consulta.telefono}</p>
                            <p><strong>ID Cita:</strong> {consulta.citaId}</p>
                            <p><strong>ID Doctor:</strong> {consulta.doctorId}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default FetchConsultas;
