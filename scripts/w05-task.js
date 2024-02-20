/* W05: Programming Tasks */

/* Declare and initialize global variables */

const templesElement = document.querySelector("#temples");

let templeList = [];

/* async displayTemples Function */

const renderMovies = (listOfTemples) => {
    listOfTemples.forEach((temple) => {
        let article = document.createElement("article");

        let heading3 = document.createElement("h3");
        heading3.innerText = temple.templeName;

        let image = document.createElement("img");
        image.setAttribute("src", temple.imageUrl);
        image.setAttribute("alt", temple.location);

        article.appendChild(heading3);
        article.appendChild(image);

        templesElement.appendChild(article);
    });
}

/* async getTemples Function using fetch()*/
const getTemples = async () => {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    templeList = await response.json();
    console.log(templeList);
    renderMovies(templeList);
}

/* reset Function */

const reset = () => {
    templesElement.innerHTML = "";
}


/* filterTemples Function */

const filterTemples = (temples) => {
    reset();
    let filter = document.querySelector("#filtered").value;

    switch (filter) {
        case "utah":
            renderMovies(
                temples.filter((temple) => {
                    return temple.location.includes("Utah");

                })
            );
            break;
        case "notutah":
            renderMovies(
                temples.filter((temple) => {
                    return !temple.location.includes("Utah")
                })
            );
            break;
        case "older":
            renderMovies(
                temples.filter((temple) => {
                    let dedicationDate = new Date(temple.dedicated);
                    let testDate = new Date(1950, 0, 1);
                    return dedicationDate < testDate;
                })
            );
            break;
        case "all":
            renderMovies(temples);
            break;
    }
}



/* Event Listener */
document.querySelector("#filtered").addEventListener("change", () => {
    filterTemples(templeList);
});

getTemples();
