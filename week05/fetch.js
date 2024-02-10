let sect = document.createElement("section");
sect.setAttribute("id", "output");
document.body.appendChild(sect);

let list = document.createElement("ul");
list.setAttribute("id", "outputList");
document.body.appendChild(list);

const url = "https://pokeapi.co/api/v2/pokemon/ditto";
const urlList = "https://pokeapi.co/api/v2/pokemon";


let results = null;
async function getPokemon(url) {
    const response = await fetch(url);
    //check to see if the fetch was successful
    if (response.ok) {
        // the API will send us JSON...but we have to convert the response before we can use it
        // .json() also returns a promise...so we await it as well.
        const data = await response.json();
        doStuff(data);
    }
}


function doStuff(data) {
    results = data;
    console.log("first: ", results);

    let output = `<table style = "border: 1px solid black;">
        <tr>
            <th>Name</th>
            <th>Height</th>
            <th>Image</th>
        </tr>
        <tr>
            <td>${results.name}</td>
            <td>${results.height}</td>
            <td><img src="${results.sprites.front_default}"></img></td>
        </tr>
    </table>`

    document.querySelector("#output").innerHTML = output;
    document.querySelectorAll("th").forEach((item) => { item.setAttribute("style", "border: 1px solid black;"); });
    document.querySelectorAll("td").forEach((item) => { item.setAttribute("style", "border: 1px solid black;"); });
    document.querySelector("table").setAttribute("style", "text-align:center")

}

function doStuffList(data) {
    console.log(data);

    let pokeList = data.results;

    pokeList.forEach((poke)=>{ list.innerHTML += `<li>${poke.name}</li>`;})
}


async function getPokemonList(url) {
    const response = await fetch(url);
    //check to see if the fetch was successful
    if (response.ok) {
        // the API will send us JSON...but we have to convert the response before we can use it
        // .json() also returns a promise...so we await it as well.
        const data = await response.json();
        doStuffList(data);
    }
}

getPokemon(url);
console.log("second: ", results);

getPokemonList(urlList);

