import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";

import PatientTable from "./components/PatientTable";

import SearchBar from "./components/SearchBar";

import AddPatientForm from "./components/AddPatientForm";

import StatsCard from "./components/StatsCard";

function App() {

  const [patients, setPatients] =
    useState([]);

  const [search, setSearch] =
    useState("");

  useEffect(() => {

    fetch("http://localhost:5000/patients")

      .then((res) => res.json())

      .then((data) =>
        setPatients(data)
      );

  }, []);

  const filteredPatients =
    patients.filter((patient) =>
      patient.ssn
        .toString()
        .includes(search)
    );

  return (

    <div className="dashboard">

      <Navbar />

      <div className="content">

        <div className="top-grid">

          <StatsCard
            total={patients.length}
          />

          <SearchBar
            search={search}
            setSearch={setSearch}
          />

        </div>

        <AddPatientForm />

        <PatientTable
          patients={filteredPatients}
        />

      </div>

    </div>
  );
}

export default App;