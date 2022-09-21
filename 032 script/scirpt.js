// console.log(document.body); // body-ul
// console.log(document.documentElement); //*tot html-ul
// console.log(document.body.childNodes); //*toate nodurile din acest parinte
// console.log(document.body.firstChild); //*primul nod din acest parinte
// console.log(document.body.lastChild); //*ultimul nod din acest parinte

// console.log(document.querySelector("#current").parentNode); //*primim nodul parinte al elementului din querySelector
// console.log(document.querySelector('[data-current="3"]').nextSibling); //*vecinul urmator Node(text -enter)
// console.log(document.querySelector('[data-current="3"]').previousSibling); //*vecinul trecut Node(text-enter)
// console.log(document.querySelector('[data-current="3"]').nextElementSibling); //*vecinul urmator Element (li)
// console.log(
//   document.querySelector('[data-current="3"]').previousElementSibling
// ); //*vecinul trecut Element (li)

for (let node of document.body.childNodes) {
  if (node.nodeName == "#text") {
    continue;
  }
  console.log(node);
}
