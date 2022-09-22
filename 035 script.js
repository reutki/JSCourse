const p = document.querySelectorAll("p");
console.log(p);

function loadScript(src) {
  const script = document.createElement("script");

  script.src = src;
  script.async = false; //anulam sa nu fie async ci sa astepte randul sa fie initializat

  document.body.append(script);
}

loadScript("./test.js"); //va initializa scriptul din adresa transferata
