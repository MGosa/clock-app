function updateTime() {
  let losAngelesElement = document.querySelector("#los-angeles");
  let losAngelesTimeElement = document.querySelector("#los-angeles-time");
  let losAngelesDateElement = document.querySelector("#los-angeles-date");

  let losAngelesTime = moment().tz("America/Los_Angeles");
  losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do, YYYY");
  losAngelesTimeElement.innerHTML = losAngelesTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  let glasgowElement = document.querySelector("#glasgow");
  let glasgowTimeElement = document.querySelector("#glasgow-time");
  let glasgowDateElement = document.querySelector("#glasgow-date");

  let glasgowTime = moment().tz("Europe/London");
  glasgowDateElement.innerHTML = glasgowTime.format("MMMM Do, YYYY");
  glasgowTimeElement.innerHTML = glasgowTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
}

updateTime();
setInterval(updateTime, 1000);
