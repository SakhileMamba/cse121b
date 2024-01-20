/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */


/* Step 2 - Variables */
let fullname = "Sakhile Mamba";
let currentYear = new Date().getFullYear();
let profilePicture = "images/me.png";


/* Step 3 - Element Variables */
const nameElement = document.getElementById("name");
const foodElement = document.getElementById("food");
const yearElement = document.querySelector("#year");
const imageElement = document.querySelector("img");


/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullname}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute("src", profilePicture);
imageElement.setAttribute("alt", `Profile image of ${fullname}`);


/* Step 5 - Array */
let favoriteFoods = ["Pizza", "Hotdog", "Cheese Burger", "Emasi", "Corn Bread"];
foodElement.textContent = favoriteFoods.join(", ");

let anotherFavoriteFood = "Pasta";
favoriteFoods.push(anotherFavoriteFood);

foodElement.innerHTML += `<br>${favoriteFoods.join(", ")}`;

favoriteFoods.shift();
foodElement.innerHTML += `<br>${favoriteFoods.join(", ")}`;

favoriteFoods.pop();
foodElement.innerHTML += `<br>${favoriteFoods.join(", ")}`;




