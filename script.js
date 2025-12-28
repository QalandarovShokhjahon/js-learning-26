document.addEventListener("DOMContentLoaded", () => {
  let tabContents = document.querySelectorAll("#tabContainer > div");
  let tabButtons = document.querySelectorAll("#locationTabs button");

  // Hide tab content
  let hideTabContent = () => {
    tabContents.forEach((country) => {
      country.classList.add("hidden");
    });

    tabButtons.forEach((btn) => {
      btn.classList.remove("bg-yellow-500", "text-white");
      btn.classList.add("text-yellow-500");
    });
  };
  hideTabContent();

  // Show tab content
  let showTabContent = (index) => {
    tabContents[index].classList.remove("hidden");
    tabButtons[index].classList.remove("text-yellow-500");
    tabButtons[index].classList.add("bg-yellow-500", "text-white");
  };
  showTabContent(0);

  // Button click
  tabButtons.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      hideTabContent();
      showTabContent(index);
    });
  });

  // Loader
  let loaderWrapper = document.querySelector("#loaderWrapper");
  setTimeout(() => {
    loaderWrapper.remove();
  }, 1500);

  // Timer
  let deadline = "2025-11-4";

  let getTimeRemaining = (endtime) => {
    let time = Date.parse(endtime) - Date.parse(new Date()),
      days = Math.floor(time / (1000 * 60 * 60 * 24)),
      hours = Math.floor((time / (1000 * 60 * 60)) % 24),
      minutes = Math.floor((time / (1000 * 60)) % 60),
      seconds = Math.floor((time / 1000) % 60);

    return {
      totalTime: time,
      days,
      hours,
      minutes,
      seconds,
    };
  };

  let setClock = (selector, endtime) => {
    let timer = document.querySelector(selector);
    let days = timer.querySelector("#days");
    let hours = timer.querySelector("#hours");
    let minutes = timer.querySelector("#minutes");
    let seconds = timer.querySelector("#seconds");

    let updateClock = () => {
      let time = getTimeRemaining(endtime);

      days.textContent = time.days;
      hours.textContent = time.hours;
      minutes.textContent = time.minutes;
      seconds.textContent = time.seconds;

      if (time.totalTime <= 0) {
        clearInterval(timeInterval);
      }
    };
    let timeInterval = setInterval(updateClock, 1000);
  };

  setClock("#timer", deadline);
});
