"use client";

import Navbar from "@/components/Navbar";
import { useState } from "react";
import { fetchData, exerciseOptions } from "../lib/FetchData";
import { Info, CirclePlus, CircleX } from "lucide-react";
export default function Exercises() {
  const [search, setSearch] = useState("");
  const [exercises, setExercises] = useState([]);
  const [selectedExercise, setSelectedExercise] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleSearch = async () => {
    if (search) {
      const exerciseData = await fetchData(
        `https://exercisedb.p.rapidapi.com/exercises/name/${search}`,
        exerciseOptions
      );

      console.log(exerciseData);
      setExercises(exerciseData);
    }
  };
  const addExerciseToWorkout = (excercise) => {
    const saved = JSON.parse(localStorage.getItem("workout")) || [];

    saved.push(excercise);

    localStorage.setItem("workout", JSON.stringify(saved));

    alert(`${excercise.name} added to your workout`);
  };

  const openInfo = (exercise) => {
    setSelectedExercise(exercise);
    setShowModal(true);
  };
  let modalContent = null;
  if (showModal && selectedExercise) {
    modalContent = (
      <div className="fixed inset-0 bg-transparent bg-opacity-50 flex items-center justify-center">
        <div className="bg-white p-6 rounded-lg w-80 shadow-lg">
          <h2 className="text-xl font-bold mb-2">{selectedExercise.name}</h2>
          <p>
            <strong>Body Part:</strong>
            {selectedExercise.bodyPart}
          </p>
          <p>
            <strong>Target:</strong>
            {selectedExercise.target}
          </p>
          <p>
            <strong>Equipment:</strong>
            {selectedExercise.equipment}
          </p>
          <button onClick={() => setShowModal(false)}>
            <CircleX />
          </button>
        </div>
      </div>
    );
  }

  return (
    <main>
      <Navbar></Navbar>
      {/* search and list  */}
      <div className="flex flex-col items-center justify-center min-h-screen gap-4">
        <h2>Search Exercises</h2>
        <div>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value.toLowerCase())}
            className=" border border-gray-300 p-2"
          />
          <button
            className="search-btn cursor-pointer bg-blue-400 p-2 rounded-r-sm"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
        <div className="">
          <ul>
            {exercises.map((exercise) => (
              <li key={exercise.id} className="flex gap-2 mb-3">
                <button onClick={() => addExerciseToWorkout(exercise)}>
                  <CirclePlus className="cursor-pointer" />
                </button>
                <button onClick={() => openInfo(exercise)}>
                  <Info className="cursor-pointer text-blue-400" />
                </button>

                {exercise.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* modal code */}
      {modalContent}
    </main>
  );
}
