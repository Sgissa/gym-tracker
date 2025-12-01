## This is my gym tracker app

## Why

I was using a gym tracker app and they are blocking the features behind a pay wall. So i am building my own to challenge my software dev skills and learn

## entry 1

I started by trying to build the routine feature this lets you add your excercies together for a workout and you can store workouts into a routine.

### problem 1

starting it like this was confusing because i didn't relise i need to have the data ready and accessible to allow the ability to add exercises into their workout.

### idea

Since i am using api. i am going to create a file responsible for fetching the api calls and making that data accessible to the rest of my app. So step 1 connect my web-app to the exercisesDB API

## entry 2

so, i am done building the fetchData.jsx this file deals with connecting me to the ExerciseDb api. That means i have the data. and i also made it to where the results are displayed on the exercises page. next i want to make the info button next to each exercise offer the ability to show a modal that gives more details about that specific excersise.

## entry 3

I added the info button and add button using the icons form lucide and then i created a state for the modal if it's true the modal will show and if it's false the modal will go away

## entry 4

I created the plus button to allow a user to add their excersise into a workout, I made a addExerciseToWorkout function to run when they click the button. the function create an array of the excersises saved in the local storage.
