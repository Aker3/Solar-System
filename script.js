"use strict";
const planetsContainer = document.querySelector(".container");

const getData = async () => {
  const res = await fetch("planets.json");
  const data = await res.json();
  // console.log(data);
  // let lengthData = data.length;
  // console.log(lengthData);
  let html = ``;
  data.forEach((element, index) => {
    html += `<div class="planet" id="${element.name}">
        <div class="img_container">
          <img class="planet_img" src="${element.image}" />
        </div>
        <div class="propiertyPlanet">
          <h3 class="titlePlanet">${element.name}</h3>
          <p class="factsPlanet">
          <span class="attributeCard">radius</span>: <br /><span class=>${element.radius}
          </p>
          
          <p class="factsPlanet">
            <span class="attributeCard">distance</span>: <br />${element.distance}
          </p>
        </div>
      </div>`;
  });

  //Listener for mouseover  Event delegation in planets container
  planetsContainer.addEventListener("mouseover", (e) => {
    if (e.target.classList.contains("planet")) {
      e.target.getElementsByClassName("planet_img")[0].style.transform =
        "scale(1.2,1.2)";
      e.target.getElementsByClassName("planet_img")[0].style.transform =
        "pointer";
    }
  });

  planetsContainer.addEventListener("mouseout", (e) => {
    if (e.target.classList.contains("planet")) {
      e.target.getElementsByClassName("planet_img")[0].style.transform =
        "scale(1,1)";
    }
  });
  let lastClickedElement;

  //Listener for click  Event delegation in planets container
  planetsContainer.addEventListener("click", (e) => {
    e.stopPropagation;

    let target = e.target.classList.contains("planet_img")
      ? e.target.parentElement.parentElement
      : e.target.classList.contains("planet")
      ? e.target
      : false;

    if (target && !target.classList.contains("planetClicked")) {
      console.log(target);
      target.classList.add("planetClicked");
      let result = data.filter((obj) => {
        return obj.name === target.getAttribute("id");
      });
      console.log(result);

      if (lastClickedElement)
        lastClickedElement.classList.remove("planetClicked");

      lastClickedElement = target;
      changeDescription(result[0]);
    }
  });

  planetsContainer.insertAdjacentHTML("beforeend", html);
};

const changeDescription = (element) => {
  let elDesc = document.querySelector(".description");
  console.log(elDesc);

  elDesc.innerHTML = `<div class="container_desc">
      <img class="planet_img_large" src="${element.image}" />
      <div class="textDescription2">
        <div class="titleDesc">${element.name}   ${element.symbol}</div>
        <p>${element.description}</p>
        
      </div>
      <br>
      <div class="textDescription2">
      <p>${element.description2}</p>
      </div>
      <br>
      <div class="textDescription2">
      <p>${element.description3}</p>
      </div>
    </div>
    
   
    
    `;
};

getData();
