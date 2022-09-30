window.addEventListener("DOMContentLoaded", () => {
  //Tabs
  const tabs = document.querySelectorAll(".tabheader__item");
  const tabsContent = document.querySelectorAll(".tabcontent");
  const tabsParent = document.querySelector(".tabheader__items");

  function hideTabContent() {
    tabsContent.forEach((item) => {
      item.classList.add("hide");
      item.classList.remove("show", "fade");
    });
    tabs.forEach((item) => {
      item.classList.remove("tabheader__item_active");
    });
  }

  function showTabContent(i = 0) {
    tabsContent[i].classList.add("show", "fade");
    tabsContent[i].classList.remove("hide");
    tabs[i].classList.add("tabheader__item_active");
  }
  hideTabContent();
  showTabContent();

  tabsParent.addEventListener("click", (e) => {
    const target = e.target;
    if (target && target.classList.contains("tabheader__item")) {
      tabs.forEach((item, i) => {
        if (target == item) {
          hideTabContent();
          showTabContent(i);
        }
      });
    }
  });

  //Timer

  const deadline = "2022-09-30";

  function getTimeRemaining(endtime) {
    const t = Date.parse(endtime) - Date.parse(new Date()),
      days = Math.floor(t / (1000 * 60 * 60 * 24)), //cate zile au ramas
      hours = Math.floor((t / (1000 * 60 * 60)) % 24), //cate ore au ramas
      minutes = Math.floor((t / (1000 / 60)) % 60), //cate minute au ramas
      seconds = Math.floor((t / 1000) % 60); //cate secunde au ramas

    return {
      total: t,
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds,
    };
  }

  function setTimer(selector, endtime) {
    const timer = document.querySelector(selector),
      days = timer.querySelector("#days"),
      hours = timer.querySelector("#hours"),
      minutes = timer.querySelector("#minutes"),
      seconds = timer.querySelector("#seconds");
    timeInterval = setInterval(updateTimer, 1000);
    updateTimer();

    function getZero(num) {
      if (num >= 0 && num < 10) {
        return `0${num}`;
      } else {
        return num;
      }
    }
    function updateTimer() {
      const t = getTimeRemaining(endtime);

      days.innerHTML = getZero(t.days);
      hours.innerHTML = getZero(t.hours);
      minutes.innerHTML = getZero(t.minutes);
      seconds.innerHTML = getZero(t.seconds);
      if (t.total <= 0) {
        clearInterval(timeInterval);
      }
    }
  }
  setTimer(".timer", deadline);

  //Modal-Window

  const modalTriggerBtn = document.querySelectorAll("[data-modal]"),
    modalWindow = document.querySelector(".modal"),
    modalCloseBtn = document.querySelector("[data-close]");

  modalTriggerBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
      modalWindow.classList.toggle("show");
      document.body.style.overflow = "hidden";
    });
  });

  modalCloseBtn.addEventListener("click", () => {
    modalWindow.classList.toggle("show");
    document.body.style.overflow = "";
  });

  modalWindow.addEventListener("click", (e) => {
    if (e.target === modalWindow) {
      modalWindow.classList.toggle("show");
      document.body.style.overflow = "";
    }
  });
});
