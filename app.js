function updateTime() {
  // LA

  let losAngelesElement = document.querySelector("#los-angeles");
  if (losAngelesElement) {
    let losAngelesDate = losAngelesElement.querySelector(".date");
    let losAngelesTime = losAngelesElement.querySelector(".time");
    let losAngelesTimeElement = moment().tz("America/Los_Angeles");

    losAngelesDate.innerHTML = moment().format("MMMM Do YYYY");
    losAngelesTime.innerHTML = `${losAngelesTimeElement.format(
      "h:mm:ss"
    )} <small>${losAngelesTimeElement.format("A")}</small>`;
  }

  // Tokyo
  let tokyoElement = document.querySelector("#tokyo");
  if (tokyoElement) {
    let tokyoDate = tokyoElement.querySelector(".date");
    let tokyoTime = tokyoElement.querySelector(".time");
    let tokyoTimeElement = moment().tz("Asia/Tokyo");

    tokyoDate.innerHTML = moment().format("MMMM Do YYYY");
    tokyoTime.innerHTML = `${tokyoTimeElement.format(
      "h:mm:ss"
    )} <small>${tokyoTimeElement.format("A")}</small>`;
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  console.log(cityTimeZone);
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }

  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  console.log(cityTime.format("MMMM Do YYYY"));

  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
   <div class="city">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
          </div>
          <div class="time">${cityTime.format(
            "h:mm:ss"
          )}<small> ${cityTime.format("A")}</small></div>
        </div>`;
}

let citiesSelectElement = document.querySelector("#citySelect");
citiesSelectElement.addEventListener("change", updateCity);

updateTime();
setInterval(updateTime, 1000);
