let city = [];

let page = 1;
let query = '&query=';
let qStr = 'budapest';

let options = {
	method: 'GET',
	headers: { 'x-api-key': 'FZWxIBwdLLHfGiwqyxVlmay17429U7C8icoXDAf9' },
};
const url = `https://api.api-ninjas.com/v1/city?name=${qStr}`;
const picurl = `https://api.unsplash.com/search/photos?client_id=Ajtp2bCaCXnMcwLDiOGZWtHh1vuCDM6bszAihbOe6g0&page=`;
//document.querySelector(".myBtn").addEventListener("click", renderCity)

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

function fetchCity() {
	fetch(url + qStr, options)
		.then((res) => res.json())
		.then((data) => {
			console.log(data);
			city = data;
			getData(picurl + page + query + qStr, renderCity);
		})
		.catch((err) => {
			console.log(`error ${err}`);
		});

	console.log(city);
}
fetchCity();
const getData = async (url, renderFC) => {
	const response = await fetch(url);
	const data = await response.json();
	renderFC(data);
};

function renderCity(data) {
	document.querySelector('.city-list').innerHTML = '';
	data.results.forEach((obj) => {
		const imageElement = document.createElement('img');
		imageElement.src = obj.urls.small;
		imageElement.alt = obj.alt_description;
		document.querySelector('.city-list').appendChild(imageElement);
	});

	console.log(page);
	page++;
}

document.querySelector('.myBtn').addEventListener('click', searchCity);

function searchCity() {
	qStr = document.querySelector('.myInput').value;
	fetchCity();
	console.log(city[0]);
	if (qStr == city[0].name) {
		document.querySelector('.city-list').innerHTML = '';
		getData(picurl + page + query + qStr, renderCity);
		return;
	}
	console.log('hülye vagy');
}
