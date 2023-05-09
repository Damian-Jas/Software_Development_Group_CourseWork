import React, { useState } from 'react';

const PatientRecord = () => {
    const [patientData, setPatientData] = useState({
        name: '',
        dob: '',
        address: '',
        phoneNumber: '',
        email: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPatientData({ ...patientData, [name]: value });
    };

    return (
        <div>
            <h1 className="govuk-heading-l">Patient Record</h1>
            <form>
                <div className="govuk-form-group">
                    <label className="govuk-label" htmlFor="name">
                        Name
                    </label>
                    <input
                        className="govuk-input"
                        id="name"
                        name="name"
                        type="text"
                        value={patientData.name}
                        onChange={handleChange}
                    />
                </div>
                <button className="govuk-button" type="submit">
                    Save Changes
                </button>
            </form>
        </div>
    );
};

export default PatientRecord;
