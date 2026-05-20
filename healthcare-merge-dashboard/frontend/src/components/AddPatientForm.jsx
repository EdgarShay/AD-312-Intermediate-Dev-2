export default function AddPatientForm() {

    return (

        <div className="form-card">

            <h2>Add New Patient</h2>

            <div className="form-grid">

                <input
                    type="text"
                    placeholder="Full Name"
                />

                <input
                    type="number"
                    placeholder="SSN"
                />

                <input
                    type="number"
                    placeholder="Age"
                />

            </div>

            <button className="add-btn">
                Add Patient
            </button>

        </div>
    );
}