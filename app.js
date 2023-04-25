function updateTime() {
  // LA
  let losAngelesElement = document.querySelector("#los-angeles");
  let losAngelesDate = losAngelesElement.querySelector(".date");
  let losAngelesTime = losAngelesElement.querySelector(".time");
  let losAngelesTimeElement = moment().tz("America/Los_Angeles");

  losAngelesDate.innerHTML = moment().format("MMMM Do YYYY");
  losAngelesTime.innerHTML = `${losAngelesTimeElement.format(
    "h:mm:ss"
  )} <small>${losAngelesTimeElement.format("A")}</small>`;

  // Seoul
  let seoulElement = document.querySelector("#seoul");
  let seoulDate = seoulElement.querySelector(".date");
  let seoulTime = seoulElement.querySelector(".time");
  let seoulTimeElement = moment().tz("Asia/Seoul");

  seoulDate.innerHTML = moment().format("MMMM Do YYYY");
  seoulTime.innerHTML = `${seoulTimeElement.format(
    "h:mm:ss"
  )} <small>${seoulTimeElement.format("A")}</small>`;
}
updateTime();
setInterval(updateTime, 1000);
