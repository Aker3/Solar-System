"use strict";
const planetsContainer = document.querySelector(".container");
const getData = async () => {
  const res = await fetch("planets.json");
  const data = await res.json();
  console.log(data);
  let lengthData = data.length;
  console.log(lengthData);

  let html = "";
  data.forEach((element, index) => {
    // element = index === 0 ? data[lengthData - 1] : data[index - 1];

    html += `<div class="planet"><div class="img_container"><img class="planet_img" src="${element.image}" /></div>
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
      e.target.style.transform = "scale(1.2,1.2)";
      e.target.style.cursor = "pointer";
    }
  });

  planetsContainer.addEventListener("mouseout", (e) => {
    if (e.target.classList.contains("planet_img")) {
      e.target.style.transform = "scale(1,1)";
      e.target.style.width = "9rem";
    }
  });
  planetsContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("planet_img")) {
      // let nameSelected = e.target.nextElementSibling.textContent
      //   .split("\n")[1]
      //   .trim();
      console.log(e.target);
      let result = data.filter((obj) => {
        return obj.image === e.target.getAttribute("src");
      });
      console.log(result);

      changeDescription(result[0]);
    }
  });

  planetsContainer.insertAdjacentHTML("beforeend", html);
};
const changeDescription = (element) => {
  let elDesc = document.querySelector(".description");
  console.log(elDesc);
  const regex = /.*/;
  elDesc.innerHTML = elDesc.innerHTML.replace(
    regex,
    `<div class="container"><img class="planet_img_large" src="${element.image}" /><div class="textDescription"><h3>${element.name}</h3><p>${element.description}</p><div></div>`
  );
};
getData();
