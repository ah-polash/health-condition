import React, { useState } from "react";

function App() {
  const [diseases, setDiseases] = useState([]);

  const addDisease = () => {
    setDiseases([...diseases, { name: "", medicines: [] }]);
  };

  const updateDiseaseName = (index, value) => {
    const updated = [...diseases];
    updated[index].name = value;
    setDiseases(updated);
  };

  const addMedicine = (diseaseIndex) => {
    const updated = [...diseases];
    updated[diseaseIndex].medicines.push({ name: "", dosage: "" });
    setDiseases(updated);
  };

  const updateMedicineField = (diseaseIndex, medIndex, field, value) => {
    const updated = [...diseases];
    updated[diseaseIndex].medicines[medIndex][field] = value;
    setDiseases(updated);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted data:", diseases);
    alert("Form submitted! Check console.");
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Medicine & Health Tracker</h2>

      <form onSubmit={handleSubmit}>
        {diseases.map((disease, dIndex) => (
          <div key={dIndex} className="card mb-4 p-3">
            <div className="mb-3">
              <label className="form-label">Disease Name</label>
              <input
                type="text"
                className="form-control"
                value={disease.name}
                onChange={(e) => updateDiseaseName(dIndex, e.target.value)}
                required
              />
            </div>

            {disease.medicines.map((med, mIndex) => (
              <div key={mIndex} className="row mb-3">
                <div className="col-md-6">
                  <label className="form-label">Medicine Name</label>
                  <input
                    type="text"
                    className="form-control"
                    value={med.name}
                    onChange={(e) =>
                      updateMedicineField(
                        dIndex,
                        mIndex,
                        "name",
                        e.target.value
                      )
                    }
                    required
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Dosage</label>
                  <input
                    type="text"
                    className="form-control"
                    value={med.dosage}
                    onChange={(e) =>
                      updateMedicineField(
                        dIndex,
                        mIndex,
                        "dosage",
                        e.target.value
                      )
                    }
                  />
                </div>
              </div>
            ))}

            <button
              type="button"
              className="btn btn-sm btn-outline-primary"
              onClick={() => addMedicine(dIndex)}
            >
              + Add Medicine for this disease
            </button>
          </div>
        ))}

        <div className="mb-3">
          <button
            type="button"
            className="btn btn-outline-success"
            onClick={addDisease}
          >
            + Add Disease
          </button>
        </div>

        <button type="submit" className="btn btn-primary w-100">
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
