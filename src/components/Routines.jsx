"use client";
import { useState, useEffect } from "react";
import { X } from "lucide-react";

export default function Routines() {
  const [workout, setWorkout] = useState([]);
  const [workoutName, setWorkoutName] = useState("");
  const [savedWorkouts, setSavedWorkouts] = useState([]);

  useEffect(() => {
    let saved = localStorage.getItem("workout");

    if (saved === null) {
      saved = [];
    } else {
      saved = JSON.parse(saved);
    }

    setWorkout(saved);
  }, []);

  useEffect(() => {
    let saved = localStorage.getItem("workouts");
    if (saved === null) {
      saved = [];
    } else {
      saved = JSON.parse(saved);
    }
    setSavedWorkouts(saved);
  }, []);

  function removeExercise(index) {
    const currentWorkouts = [...workout];
    currentWorkouts.splice(index, 1);
    setWorkout(currentWorkouts);
    localStorage.setItem("workout", JSON.stringify(currentWorkouts));
  }

  function clearWorkout() {
    const noWorkout = [];
    setWorkout(noWorkout);
    localStorage.setItem("workout", JSON.stringify(noWorkout));
  }

  function saveWorkout() {
    if (workout.length === 0) {
      alert("No exercises added");
      return;
    }
    if (!workoutName.trim()) {
      alert("Please enter a workout name");
      return;
    }

    const workoutSet = {
      name: workoutName,
      exercises: workout,
    };

    const workoutLibrary = localStorage.getItem("workouts");

    let savedWorkouts;

    if (workoutLibrary === null) {
      savedWorkouts = [];
    } else {
      savedWorkouts = JSON.parse(workoutLibrary);
    }

    savedWorkouts.push(workoutSet);

    localStorage.setItem("workouts", JSON.stringify(savedWorkouts));

    setWorkout([]);
    setWorkoutName("");
    localStorage.setItem("workout", JSON.stringify([]));
    console.log(savedWorkouts);
  }

  return (
    <>
      {/* The Section for drafting your workout */}
      <div className="rounded-xl bg-white shadow-lg p-5 border border-gray-100">
        <h2 className="text-xl font-semibold mb-3">Current Workout Draft</h2>

        {workout.length === 0 ? (
          <p className="text-gray-500">No exercises added yet.</p>
        ) : null}

        <div className="space-y-3">
          {workout.map((exercise, index) => (
            <div
              key={index}
              className="p-3 rounded-lg bg-gray-50 border border-gray-200 flex gap-1.5 shadow-md"
            >
              <p className="font-medium">{exercise.name}</p>
              <button
                onClick={() => removeExercise(index)}
                className="cursor-pointer"
              >
                <X />
              </button>
            </div>
          ))}
          <button
            onClick={() => clearWorkout()}
            className="bg-gray-300 p-1.5 cursor-pointer shadow-sm"
          >
            Clear All Excercies
          </button>
          <h3 className="font-semibold">Workout Name</h3>
          <input
            placeholder="type name..."
            value={workoutName}
            onChange={(e) => setWorkoutName(e.target.value)}
            className="mb-2"
          ></input>
        </div>
        <button
          className="bg-gray-300 p-1.5 cursor-pointer shadow-sm

          "
          onClick={() => saveWorkout()}
        >
          Save Workout
        </button>
      </div>
      {/* The Section for displaying your workouts */}
      <div className="rounded-xl bg-white shadow-lg p-5 border border-gray-100">
        <h2 className="text-xl font-semibold mb-3">Workouts</h2>
        {savedWorkouts.length === 0 ? (
          <p>No Workouts</p>
        ) : (
          savedWorkouts.map((workout, index) => (
            <p key={index}>{workout.name}</p>
          ))
        )}
      </div>
    </>
  );
}
