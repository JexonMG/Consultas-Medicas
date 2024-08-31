// Citas methods
export const fetchCitas = async () => {
    try {
      const response = await fetch('http://localhost:3000/citas');
      
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching citas:', error);
      throw error;
    }
  };

// Consultas methods
export const fetchConsultas = async () => {
    try {
      const response = await fetch('http://localhost:3000/consultas');
      
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching consultas:', error);
      throw error;
    }
  };

export const createConsulta = async (consulta) => {
    try {
        const response = await fetch('http://localhost:3000/consultas', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(consulta)
        });             

        if (!response.ok) {
            throw new Error(`Network response was not ok: ${response.status} - ${response.statusText}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {   
        console.error('Error creating consulta:', error);
        throw error;
    }
};

// Doctores methods
export const fetchDoctores = async () => {
    try {
      const response = await fetch('http://localhost:3000/doctores');
      
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching doctores:', error);
      throw error;
    }
  };

  export const createDoctor = async (doctor) => {
    try {
        // Sending a POST request to create a new doctor
        const response = await fetch('http://localhost:3000/doctores', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'  // Ensure the server knows the request body is JSON
            },
            body: JSON.stringify(doctor)  // Convert the doctor object to a JSON string
        });

        // Check if the response is not OK (status code not in the range 200-299)
        if (!response.ok) {
            throw new Error(`Network response was not ok: ${response.status} - ${response.statusText}`);
        }

        // Parse the JSON response
        const data = await response.json();
        return data;  // Return the created doctor data

    } catch (error) {
        console.error('Error creating doctor:', error);  // Log any errors to the console
        throw error;  // Re-throw the error for further handling upstream
    }
};
