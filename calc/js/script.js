"use strict";

const inputRub = document.querySelector("#rub");
const inputUsd = document.querySelector("#usd");

inputRub.addEventListener("input", () => {
  const request = new XMLHttpRequest();
  //   request.open(method,url,async,login,password);
  request.open("GET", "js/current.json");
  request.setRequestHeader("Content-type", "application/json; charset=utf-8");
  request.send();
  request.addEventListener("load", () => {
    if (request.status === 200) {
      const data = JSON.parse(request.response);
      inputUsd.value = (+inputRub.value / data.current.usd).toFixed(3);
    } else {
      inputUsd.value = "Nu lucreaza";
    }
  }); //when the server answered

  // status - 404(not found), 303, etc.
  //statusText
  //response - the response from server
  //readyState
  //GET- Method for an http server, takes some data from the server
  //URL - get the url to my file
});
