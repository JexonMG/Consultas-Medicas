import { useEffect, useState } from "react";
import { fetchDoctores } from "../../utils/api";
import './FetchDoctores.css'; // Import the CSS file

const FetchDoctores = () => {
    const [doctores, setDoctores] = useState([]);
    const [showDoctors, setShowDoctors] = useState(false); // State to toggle visibility

    useEffect(() => {
        fetchDoctores().then(setDoctores);
    }, []);

    return (
        <div className="container">
            <button className="toggle-button" onClick={() => setShowDoctors(!showDoctors)}>
                {showDoctors ? 'Hide Doctors' : 'Show Doctors'}
            </button>
            {showDoctors && (
                <div className="doctor-list">
                    {doctores.map(doctor => (
                        <div key={doctor.id} className="doctor-card">
                            <h3 className="doctor-name">{doctor.nombre}</h3>
                            <p className="doctor-lastname">{doctor.apellido}</p>
                            <p className="doctor-specialty">{doctor.especialidad}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default FetchDoctores;
