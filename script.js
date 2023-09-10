// Elements selected by their data-testid attribute
const currentDayOfTheWeek = document.querySelector('[data-testid="currentDayOfTheWeek"]');
const currentUTCTime = document.querySelector('[data-testid="currentUTCTime"]');


// get day of the week
const updateDayOfTheweek = () => {
    const daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const date = new Date();
    const dayOfTheWeek = daysOfTheWeek[date.getUTCDay()];
    currentDayOfTheWeek.textContent = dayOfTheWeek;
}

// get UTC time
const updateUTCTime = () => {
    const UTCTime = Date.now();
    currentUTCTime.textContent = `${UTCTime}ms`;
}

//call functions
updateDayOfTheweek();
updateUTCTime();

// update day of the week and UTC time intervally
setInterval(updateDayOfTheweek, 1000);
setInterval(updateUTCTime, 1000);




