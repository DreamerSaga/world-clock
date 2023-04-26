function updateTime() {
  // LA

  let reykjavikElement = document.querySelector("#reykjavik");
  if (reykjavikElement) {
    let reykjavikDate = reykjavikElement.querySelector(".date");
    let reykjavikTime = reykjavikElement.querySelector(".time");
    let reykjavikTimeElement = moment().tz("Atlantic/Reykjavik");

    reykjavikDate.innerHTML = moment().format("MMMM Do YYYY");
    reykjavikTime.innerHTML = `${reykjavikTimeElement.format("HH:MM:SS")} `;
  }

  // Mauritius
  let mauritiusElement = document.querySelector("#mauritius");
  if (mauritiusElement) {
    let mauritiusDate = mauritiusElement.querySelector(".date");
    let mauritiusTime = mauritiusElement.querySelector(".time");
    let mauritiusTimeElement = moment().tz("Indian/Mauritius");

    mauritiusDate.innerHTML = moment().format("MMMM Do YYYY");
    mauritiusTime.innerHTML = `${mauritiusTimeElement.format("HH:MM:SS")} `;
  }

  // Tokyo
  let tokyoElement = document.querySelector("#tokyo");
  if (tokyoElement) {
    let tokyoDate = tokyoElement.querySelector(".date");
    let tokyoTime = tokyoElement.querySelector(".time");
    let tokyoTimeElement = moment().tz("Asia/Tokyo");

    tokyoDate.innerHTML = moment().format("MMMM Do YYYY");
    tokyoTime.innerHTML = `${tokyoTimeElement.format("HH:MM:SS")} `;
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
          <div class="time">${cityTime.format("HH:MM:SS")}</div>
        </div>
        <a href="index.html">⬅️ All cities</a>`;
}

let citiesSelectElement = document.querySelector("#citySelect");
citiesSelectElement.addEventListener("change", updateCity);

updateTime();
setInterval(updateTime, 1000);
