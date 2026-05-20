export default function StatsCard({
    total,
}) {

    return (

        <div className="stats-card">

            <h2>Total Patients</h2>

            <p>{total}</p>

        </div>
    );
}