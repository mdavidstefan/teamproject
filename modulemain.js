let airline = []

let page = 1
let query = "&query="
let qStr = "San Francisco"

let options = {
    method: 'GET',
    headers: { 'x-api-key': 'FZWxIBwdLLHfGiwqyxVlmay17429U7C8icoXDAf9' }
}
const url = `https://api.api-ninjas.com/v1/city?name=San Francisco`
const picurl = `https://api.unsplash.com/search/photos?client_id=Ajtp2bCaCXnMcwLDiOGZWtHh1vuCDM6bszAihbOe6g0&page=`
//document.querySelector(".myBtn").addEventListener("click", renderCity)


document.querySelector('#prevpage').addEventListener("click", prevPage)
document.querySelector('#nextpage').addEventListener("click", nextPage)

function prevPage() {
    document.querySelector(".city-list").innerHTML = ""
    page = page - 2
    getData(picurl + page + query + qStr, renderCity)
}

function nextPage() {
    document.querySelector(".city-list").innerHTML = ""
    getData(picurl + page + query + qStr, renderCity)
}

fetch(url, options)
    .then(res => res.json())
    .then(data => {
        console.log(data);
        airline = data;
        showPictures()

    })
    .catch(err => {
        console.log(`error ${err}`);
    })

console.log(airline);

const getData = async (url, renderFC) => {
    const response = await fetch(url)
    const data = await response.json()
    renderFC(data)
}

function showPictures(data) {
    airline.forEach(item => {
        document.querySelector('.city-list').innerHTML += `
        <div class=" card"><img class="img-fluid" src="${item.logo_url}" alt="image of San Francisco"></div>
        `
    })
    getData(picurl + page + query + qStr, renderCity)

}

function renderCity(data) {
    data.results.forEach(obj => {
        const imageElement = document.createElement("img")
        imageElement.src = obj.urls.small
        imageElement.alt = obj.alt_description
        document.querySelector(".city-list").appendChild(imageElement)
    });

    console.log(page);
    page++
}




