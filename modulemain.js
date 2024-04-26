<<<<<<< HEAD
let airline = [];

let page = 1;
let query = '&query=';
let qStr = 'Budapest';

let options = {
	method: 'GET',
	headers: { 'x-api-key': 'FZWxIBwdLLHfGiwqyxVlmay17429U7C8icoXDAf9' },
=======
let city = [];

let page = 1;
let query = "&query=";
let qStr = "";

let options = {
  method: "GET",
  headers: { "x-api-key": "FZWxIBwdLLHfGiwqyxVlmay17429U7C8icoXDAf9" },
>>>>>>> f3f42b18fc06579b9bfb14a0eb52b01bdfc85931
};
const url = `https://api.api-ninjas.com/v1/city?name=${qStr}`;
const picurl = `https://api.unsplash.com/search/photos?client_id=Ajtp2bCaCXnMcwLDiOGZWtHh1vuCDM6bszAihbOe6g0&page=`;
//document.querySelector(".myBtn").addEventListener("click", renderCity)

<<<<<<< HEAD
document.querySelector('#prevpage').addEventListener('click', prevPage);
document.querySelector('#nextpage').addEventListener('click', nextPage);

function prevPage() {
	document.querySelector('.city-list').innerHTML = '';
	page = page - 2;
	getData(picurl + page + query + qStr, renderCity);
}

function nextPage() {
	document.querySelector('.city-list').innerHTML = '';
	getData(picurl + page + query + qStr, renderCity);
}

fetch(url, options)
	.then((res) => res.json())
	.then((data) => {
		console.log(data);
		airline = data;
		showPictures();
	})
	.catch((err) => {
		console.log(`error ${err}`);
	});

console.log(airline);

const getData = async (url, renderFC) => {
	const response = await fetch(url);
	const data = await response.json();
	renderFC(data);
};

function showPictures(data) {
	getData(picurl + page + query + qStr, renderCity);
}

function renderCity(data) {
	data.results.forEach((obj) => {
		const imageElement = document.createElement('img');
		imageElement.src = obj.urls.small;
		imageElement.alt = obj.alt_description;
		document.querySelector('.city-list').appendChild(imageElement);
	});

	console.log(page);
	page++;
}
=======
document.querySelector("#prevpage").addEventListener("click", prevPage);
document.querySelector("#nextpage").addEventListener("click", nextPage);
document.querySelector(".myBtn").addEventListener("click", searchCity);

function prevPage() {
  document.querySelector(".city-list").innerHTML = "";
  page = page - 2;
  getData(picurl + page + query + qStr, renderCity);
}

function nextPage() {
  document.querySelector(".city-list").innerHTML = "";
  getData(picurl + page + query + qStr, renderCity);
}

fetch(url, options)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    city = data;
    showPictures();
  })
  .catch((err) => {
    console.log(`error ${err}`);
  });

console.log(city);

const getData = async (url, renderFC) => {
  const response = await fetch(url);
  const data = await response.json();
  renderFC(data);
};

function showPictures(data) {
  getData(picurl + page + query + qStr, renderCity);
}

function renderCity(data) {
  document.querySelector(".city-list").innerHTML = "";
  data.results.forEach((obj) => {
    const imageElement = document.createElement("img");
    imageElement.src = obj.urls.small;
    imageElement.alt = obj.alt_description;
    document.querySelector(".city-list").appendChild(imageElement);
  });       

  console.log(page);
  page++;
}

function searchCity() {
  qStr = document.querySelector(".myInput").value;
  console.log(qStr);
  showPictures();
}
>>>>>>> f3f42b18fc06579b9bfb14a0eb52b01bdfc85931
