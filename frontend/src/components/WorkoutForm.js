import { useState } from "react";

const WorkoutForm = () => {
  const [title, setTitle] = useState("");
  const [load, setLoad] = useState("");
  const [reputation, setReputation] = useState("");
  const [error, setError] = useState(null);
  const handleSubmit = async (e) => {
    e.preventDefault(); //default action is to refresh the page
    const workout = { title, load, reputation }; // create a dummy workout object
    const response = await fetch("/api/workouts", {
      method: "POST",
      body: JSON.stringify(workout), //convert the dummy workout object into JSON string and put it in body
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
    }
    if (response.ok) {
      setTitle("");
      setLoad("");
      setReputation("");
      setError(null);
      console.log("New workout added", json);
    }
  };

  return (
    <form className="create" onSubmit={handleSubmit}>
      <h3>Add A New Workout</h3>

      <label>Exercise Title: </label>
      <input
        type="text"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        value={title}
      />

      <label>Load (in kg): </label>
      <input
        type="number"
        onChange={(e) => {
          setLoad(e.target.value);
        }}
        value={load}
      />

      <label>Reputations: </label>
      <input
        type="number"
        onChange={(e) => {
          setReputation(e.target.value);
        }}
        value={reputation}
      />

      <button>Add Workout</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default WorkoutForm;
