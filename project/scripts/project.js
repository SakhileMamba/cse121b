let movies = [];

async function fetchMovies() {
    const url = 'https://imdb-top-100-movies.p.rapidapi.com/';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '72a5a0d6b7mshd2eb8363567c79cp1d3d58jsn11ea75092f8c',
            'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        movies = await response.json();
        console.log(movies);
        renderMovies(movies);

    } catch (error) {
        main.innerHTML = `<h1>Error!</h1>`;
    }
}

let main = document.querySelector("#main");
let sort = document.querySelector("#sort");

async function renderMovies(movieList) {
    movieList.forEach((movie) => {



        let movieHTML =
            `<div>
            <img src="${movie.big_image}">
            <h3>${movie.rank}. ${movie.title} (${movie.year})</h3>
            <p>
                ${movie.genre.join(", ")} <br>
                &#x2605 ${movie.rating} <br>
            </p>
        </div>`
        main.innerHTML += movieHTML;

    });
    console.log(main);

}

function clear() {
    main.innerHTML = "";
}

function sortMovies(movieList) {
    clear();
    let sort = document.querySelector("#sort").value;

    switch (sort) {
        case "rankUp":
            renderMovies(
                movieList.sort((movie1, movie2) => {
                    if (
                        movie1.rank < movie2.rank) {
                        return -1;
                    }
                    else return 0;
                }
                ));

            break;
        case "rankDown":
            renderMovies(
                movieList.sort((movie1, movie2) => {
                    if (
                        movie1.rank > movie2.rank) {
                        return -1;
                    }
                    else return 0;
                }
                ));
            break;
        case "dateUp":
            renderMovies(
                movieList.sort((movie1, movie2) => {
                    if (
                        movie1.year < movie2.year) {
                        return -1;
                    }
                    else return 0;
                }
                ));
            break;
        case "dateDown":
            renderMovies(
                movieList.sort((movie1, movie2) => {
                    if (
                        movie1.year > movie2.year) {
                        return -1;
                    }
                    else return 0;
                }
                ));
            break;
    }
}

document.querySelector("#sort").addEventListener("change", () => {
    sortMovies(movies);
});

fetchMovies();