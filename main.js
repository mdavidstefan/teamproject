import { getData } from "./getData.js";

let url = "https://api.api-ninjas.com/v1/caloriesburned?activity=skiing"

getData(url, renderCaloriesburned);

function renderCaloriesburned(data) {
  console.log(data);
}

let options = {
  method: "GET",
  headers: {
    "X-Api-Key":
      "x46+dxwVH52IMjtNWCWV4w==GKWtPXu8qgu8X0en",
  },
};


fetch(url, options)
  .then(res => res.json())
  .then(data => {
    console.log(data);
  })
  .catch(err => {
    console.log('err');
  })
