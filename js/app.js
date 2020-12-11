const d = document;

import { getApiPeople } from './api.js';

async function showCard() {
  // Data From API
  const dataPerson = await getApiPeople();

  const person = {
    img: dataPerson.picture.large || dataPerson.picture.medium,
    firsName: dataPerson.name.first,
    lastName: dataPerson.name.last,
    age: dataPerson.dob.age,
    country: dataPerson.location.country,
    gender: dataPerson.gender,
    city: dataPerson.location.city,
    street: dataPerson.location.street.name,
  };

  //Global
  const $container = d.querySelector('.flex-container');
  const $article = d.createElement('article');
  $article.classList.add('card');
  const fragment = d.createDocumentFragment();

  $article.innerHTML = `
  <img src="./images/bg-pattern-card.svg" alt="person" class="card-header">
   <div class="card-body">
      <img src="${person.img}" alt="Victor" class="card-body-img">
         <h1 class="card-body-title">
            ${person.firsName} ${person.lastName}
              <span>${person.age}</span>
         </h1>
         <p class="card-body-text">${person.country}</p>
    </div>

   <div class="card-footer">
      <div class="card-footer-social">
        <h3>${person.gender}</h3>
        <p>Gender</p>
      </div>
      <div class="card-footer-social">
        <h3>${person.city}</h3>
        <p>City</p>
      </div>
      <div class="card-footer-social">
        <h3>${person.street}</h3>
        <p>Location</p>
      </div>
  `;

  fragment.appendChild($article);
  $container.appendChild(fragment);
}

d.addEventListener('DOMContentLoaded', () => {
  showCard();
});
