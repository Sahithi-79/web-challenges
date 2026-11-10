console.clear();

const url = "https://swapi.py4e.com/api/people";

async function fetchData() {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);

  console.log(data.results);

  // Log Luke Skywalker's information
  console.log(data.results[0]);

  // Log Luke Skywalker's name
  console.log(data.results[0].name);

  // Log R2-D2's information
  console.log(data.results[2]);

  // Bonus: Log R2-D2's eye color
  console.log(data.results[2].eye_color);
}

fetchData();
