/* Задания на урок:

1)//? Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4)//? Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5)//? Фильмы должны быть отсортированы по алфавиту */

"use strict";
document.addEventListener("DOMContentLoaded", () => {
  const movieDB = {
    movies: [
      "Логан",
      "Лига справедливости",
      "Ла-ла лэнд",
      "Одержимость",
      "Скотт Пилигрим против...",
    ],
  };

  const advertising = document.querySelectorAll(".promo__adv img");
  const genres = document.querySelector(".promo__genre");
  const movieList = document.querySelector(".promo__interactive-list");
  const bg = document.querySelector(".promo__bg");
  const form = document.querySelector("form.add");
  const formInput = document.querySelector(".adding__input");
  const checkbox = document.querySelector('[type="checkbox"]');

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    let newMovie = formInput.value;
    const favourite = checkbox.checked;
    if (newMovie) {
      if (newMovie.length > 21) {
        newMovie = `${newMovie.substring(0, 22)}...`;
        //substring(change from (initial,final))
      }
      movieDB.movies.push(newMovie);
      createMovieList(movieDB.movies, movieList);
      sortArr(movieDB.movies);
      e.target.reset();
      console.log(movieDB.movies);
      if (favourite) {
        console.log("added favourite movie!");
      }
    }
  });

  const sortArr = (arr) => {
    arr = arr.sort();
  };
  const deleteAdv = (arr) => {
    arr.forEach((item) => {
      item.remove();
    });
  };

  const makeChanges = () => {
    genres.textContent = "комедия";

    bg.style.backgroundImage = "url(./img/bg.jpg)";
  };

  function createMovieList(films, parent) {
    parent.innerHTML = "";

    films.forEach((movie, i) => {
      parent.innerHTML += `<li class="promo__interactive-item">
          ${i + 1} ${movie} 
      <div class="delete"></div>
    </li>`;
    });
    document.querySelectorAll(".delete").forEach((btn, i) => {
      btn.addEventListener("click", () => {
        btn.parentElement.remove();
        movieDB.movies.splice(i, 1);
        createMovieList(films, parent);
      });
    });
  }

  makeChanges();
  createMovieList(movieDB.movies, movieList);
  console.log(movieDB.movies);
  deleteAdv(advertising);
});
