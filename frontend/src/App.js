import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [status, setStatus] = useState("");
  const [location, setLocation] = useState("");
  const [machines, setMachines] = useState([]);
  const [editId, setEditId] = useState(null);

  // GET machines
  const fetchMachines = async () => {
    const res = await axios.get("http://127.0.0.1:8000/machines");
    setMachines(res.data);
  };

  useEffect(() => {
    fetchMachines();
  }, []);

  // ADD machine
  const addMachine = async () => {
    await axios.post("http://127.0.0.1:8000/machines", {
      name,
      status,
      location,
    });

    setName("");
    setStatus("");
    setLocation("");
    fetchMachines();
  };

  // DELETE machine
  const deleteMachine = async (id) => {
    await axios.delete(`http://127.0.0.1:8000/machines/${id}`);
    fetchMachines();
  };

  // START EDIT
  const startEdit = (machine) => {
    setName(machine.name);
    setStatus(machine.status);
    setLocation(machine.location);
    setEditId(machine.id);
  };

  // UPDATE machine
  const updateMachine = async () => {
    await axios.put(`http://127.0.0.1:8000/machines/${editId}`, {
      name,
      status,
      location,
    });

    setName("");
    setStatus("");
    setLocation("");
    setEditId(null);
    fetchMachines();
  };

  return (
    <div className="container">
      <h1>Machine Maintenance Tracker</h1>

      {/* FORM */}
      <div className="form">
        <input
          type="text"
          placeholder="Machine Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="text"
          placeholder="Status (Working / Fault)"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        />

        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />

        {editId ? (
          <button onClick={updateMachine} className="update-btn">
            Update Machine
          </button>
        ) : (
          <button onClick={addMachine} className="add-btn">
            Add Machine
          </button>
        )}
      </div>

      {/* TABLE */}
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Status</th>
            <th>Location</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {machines.map((m) => (
            <tr key={m.id}>
              <td>{m.id}</td>
              <td>{m.name}</td>
              <td>{m.status}</td>
              <td>{m.location}</td>

              <td>
                <button onClick={() => startEdit(m)} className="edit-btn">
                  Edit
                </button>

                <button
                  onClick={() => deleteMachine(m.id)}
                  className="delete-btn"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;