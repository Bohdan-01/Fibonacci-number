
let n1 = parseFloat(prompt('Введіть номер числа Фібоначчі'));

while (Number.isNaN(n1)) {
    alert('Введіть номер числа Фібоначчі');
    n1 = parseFloat(prompt('Введіть номер числа Фібоначчі'));
}
function fibRec(n1) {
  return n1 <= 2 ? 1 : fibRec(n1 - 1) + fibRec(n1 - 2);
}
alert(fibRec(n1));

//function fibRec(n1) {
//  if (n1 <= 2) return 1;
//  return fibRec(n1 - 1) + fibRec(n1 - 2);
//}


let n2 = parseFloat(prompt('Введіть номер числа Фібоначчі'));

while (Number.isNaN(n2)) {
    alert('Введіть номер числа Фібоначчі');
    n2 = parseFloat(prompt('Введіть номер числа Фібоначчі'));
}    
function fibLoop(n2) {
  let a = 1, b = 1, f = 1;
  for (let i = 3; i <= n2; i++) {
    f = a + b;
    a = b;
    b = f;
  }
  return f;
} 
alert(fibLoop(n2));
