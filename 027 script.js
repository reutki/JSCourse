// Interview basic questions  and answers

//•	Какое будет выведено значение: let x = 5; alert( x++ ); ?
//! 5
// •	Чему равно такое выражение: [ ] + false - null + true ?
//!  Nan   in this case [ ] = ''      [ ] + false=false  false-null = NaN  NaN+true=NaN
// •	Что выведет этот код: let y = 1; let x = y = 2; alert(x); ?
//!  2
// •	Чему равна сумма [ ] + 1 + 2?
//!  12
// •	Что выведет этот код: alert( "1"[0] )?
//! 1
// •	Чему равно 2 && 1 && null && 0 && undefined ?
console.log(2 && 1 && null && 0 && undefined);
//! null      & - is stopping at false (it compares to false)
// •	Есть ли разница между выражениями? !!( a && b ) и (a && b)?
//! yes    !!( a && b ) - beacuse of !! it transforms it to a boolean. and boolean has to be compared to (a && b) so !!(a && b)&(a && b) = false
// •	Что выведет этот код: alert( null || 2 && 3 || 4 ); ?
//! 3            & - is stopping at true (it compares to true)
// •	a = [1, 2, 3]; b = [1, 2, 3]; Правда ли что a == b ?
//! no
// •	Что выведет этот код: alert( +"Infinity" ); ?
//! Infinity
// •	Верно ли сравнение: "Ёжик" > "яблоко"?
//! false
// •	Чему равно 0 || "" || 2 || undefined || true || falsе ?
//! 2  - because 2 is the first 'true' value.
