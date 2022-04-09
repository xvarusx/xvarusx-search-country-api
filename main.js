var countryContainer = document.querySelector(".countries");

function countryFlag(name) {
  var xhttp = new XMLHttpRequest();
  xhttp.open("GET", `https://countryflagsapi.com/png/${name}`, false);

  document.getElementById("result").addEventListener("load", function () {
    const [dataxhttp] = JSON.parse(responseText);
    console.log(dataxhttp);
  });
  xhttp.send();
}
window.addEventListener("load", getCountry);
function getCountry() {
  var name = document.getElementById("input").value;
  console.log(name);
  var xhttp = new XMLHttpRequest();
  xhttp.open("GET", `https://restcountries.com/v3.1/name/${name}`, false);
  xhttp.addEventListener("load", function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);
    const html = `  <article class="country">
    <img class="country__img" src="${data.flags.svg}" />
    <div class="country__data">
        <h3 class="country__name">${data.altSpellings[1]}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${data.population}</p>
        <p class="country__row"><span>🗣️</span>${Object.values(
          data.languages
        )}</p>
        <p class="country__row"><span>💰</span>${
          Object.keys(data.currencies)[0]
        }</p>
    </div>
</article>`;
    countryContainer.innerHTML = html;
    countryContainer.style.opacity = 1;
  });
  xhttp.send();
}
//console.log(myArray.map((el, index) => test(el, index)));
