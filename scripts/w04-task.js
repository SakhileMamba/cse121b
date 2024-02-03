/* LESSON 3 - Programming Tasks */

/* Profile Object  */

let myProfile = {
    name: "Sakhile Mamba",
    photo: "/images/me.png",
    favoriteFoods: ["Pizza", "Cheese Burger", "Emasi", "Ox Tail", "Steak"],
    hobbies: ["Computer Programming", "Movies", "Computer Games", "Reading"],
    placesLived: [],

};

/* Populate Profile Object with placesLive objects */

myProfile.placesLived.push({place: "Manzini", length: "20 Years"});
myProfile.placesLived.push({place: "Mhlambanyatsi", length: "6 Years"});
myProfile.placesLived.push({place: "Mbabane", length: "2 Years"});

/* DOM Manipulation - Output */

/* Name */

document.querySelector("#name").textContent = myProfile.name;

/* Photo with attributes */

document.querySelector("#photo").setAttribute("src", myProfile.photo);
document.querySelector("#photo").setAttribute("alt", myProfile.name);

/* Favorite Foods List*/

myProfile.favoriteFoods.forEach((item)=>{
    let element = document.createElement("li");
    element.textContent = item;
    document.querySelector("#favorite-foods").appendChild(element);
});

/* Hobbies List */

myProfile.hobbies.forEach((item)=>{
    let element = document.createElement("li");
    element.textContent = item;
    document.querySelector("#hobbies").appendChild(element);
});

/* Places Lived DataList */

myProfile.placesLived.forEach((item)=>{
    let dt = document.createElement("dt");
    dt.innerHTML = item.place;
    
    let dd = document.createElement("dd");
    dd.innerHTML = item.length;

    document.querySelector("#places-lived").append(dt, dd);
});

