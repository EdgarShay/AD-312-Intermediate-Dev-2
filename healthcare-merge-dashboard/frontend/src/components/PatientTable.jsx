export default function PatientTable({
    patients,
}) {

    return (

        <div className="table-card">

            <div className="table-header">

                <h2>
                    Merged Patient Records
                </h2>

            </div>

            <table>

                <thead>

                    <tr>
                        <th>SSN</th>
                        <th>Name</th>
                        <th>Age</th>
                    </tr>

                </thead>

                <tbody>

                    {patients.map((patient) => (

                        <tr key={patient.ssn}>

                            <td>{patient.ssn}</td>

                            <td>{patient.fullName}</td>

                            <td>{patient.age}</td>

                        </tr>
                    ))}

                </tbody>

            </table>

        </div>
    );
}