"use strict";
const planetsContainer = document.querySelector(".container");
const getData = async (planetSearch) => {
  const res = await fetch("planets.json");
  const data = await res.json();
  console.log(data);
  let result = data.filter((obj) => {
    return obj.name === planetSearch;
  });
  let lengthData = data.length;
  console.log(lengthData);

  let html = "";
  let element;
  data.forEach((el, index) => {
    element = index === 0 ? data[lengthData - 1] : data[index - 1];

    html += `<div class="planet"><img class="planet_img" src="${element.image}" />
    <div class="propiertyPlanet">
    <h3>${element.name}</h3>
    <p> velocity: ${element.velocity}</p>
    <p> distance: ${element.distance}</p>
    <p> symbol: ${element.symbol}</p>
    </div>
    </div>
    `;
  });
  //Event delegation in planets container
  planetsContainer.addEventListener("mouseover", (e) => {
    if (e.target.classList.contains("planet_img")) {
      e.target.style.height = "11rem";
      e.target.style.width = "11rem";
    }
  });

  planetsContainer.addEventListener("mouseout", (e) => {
    if (e.target.classList.contains("planet_img")) {
      e.target.style.height = "9rem";
      e.target.style.width = "9rem";
    }
  });

  planetsContainer.insertAdjacentHTML("beforeend", html);
};

getData("Venus");
const renderPlanet = function (planets) {
  let result = planets.filter((obj) => {
    return obj.name === "Mercury";
  });
  let html = `
  <img class="country__img" src="${result.image}" />;
`;
  countriesContainer.insertAdjacentHTML("beforeend", html);
};
