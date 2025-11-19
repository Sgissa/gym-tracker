"use client";

import Navbar from "@/components/Navbar";
import { useState } from "react";
import { fetchData, exerciseOptions } from "../lib/FetchData";
import { Info } from "lucide-react";
export default function Exercises() {
  const [search, setSearch] = useState("");
  const [exercises, setExercises] = useState([]);
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
  return (
    <main>
      <Navbar></Navbar>
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
            className="search-btn bg-blue-400 p-2 rounded-r-sm"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
        <div className="">
          <ul>
            {exercises.map((exercise) => (
              <li key={exercise.id} className="flex gap-2 mb-3">
                <Info />
                {exercise.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}
