// Запросить у пользователя его возраст и определить, кем он
// является: ребенком(0–2), подростком(12–18), взрослым
//   (18_60) или пенсионером(60– ...).



let years;
let btn = document.querySelector('.button');
let num = document.querySelector('.number');


btn.onclick = () => {
  num = num.value;

  switch (true) {
    case (num >= 0 && num <= 2):
      years = "ребенком";
      break;
    case (num >= 12 && num <= 18):
      years = "подростоком";
      break;
    case (num >= 18 && num <= 60):
      years = "взрослым";
      break;
    default:
      years = "пенсионером";
      break;
  }
    alert("Вы являетесь " + years);
}


// . Запросить у пользователя число от 0 до 9 и вывести ему
// спецсимвол, который расположен на этой клавише(1–!,
//   2–@, 3–# и т.д).


function specialCharacter() {
  let numbers = prompt('Введите от 0 до 9');
  if (numbers == 0) {
    alert('спецсимвол, который расположен на этой клавише  )')
  } else if (numbers == 1) {
    alert('спецсимвол, который расположен на этой клавише  !')
  } else if (numbers == 2) {
    alert('спецсимвол, который расположен на этой клавише  @')
  } else if (numbers == 3) {
    alert('спецсимвол, который расположен на этой клавише  #')
  } else if (numbers == 4) {
    alert('спецсимвол, который расположен на этой клавише  $')
  } else if (numbers == 5) {
    alert('спецсимвол, который расположен на этой клавише  %')
  } else if (numbers == 6) {
    alert('спецсимвол, который расположен на этой клавише  ^')
  } else if (numbers == 7) {
    alert('спецсимвол, который расположен на этой клавише  &')
  } else if (numbers == 8) {
    alert('спецсимвол, который расположен на этой клавише  *')
  } else if (numbers == 9) {
    alert('спецсимвол, который расположен на этой клавише  (')
  } else if (numbers > 9) {
    alert('Больше 9 вводить нельзя !')
  } 
}
specialCharacter()


// Запросить у пользователя год и проверить, високосный он
// или нет.Високосный год либо кратен 400, либо кратен 4 и
// при этом не кратен 100.



function checkYear(year) {

  
  if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
    alert('Это Високосный год');
  } else {
    alert('Это не Високосный год');
  }
}

const year = prompt('Введите год:');
checkYear(year);



// Запросить у пользователя сумму покупки и вывести сумму
// к оплате со скидкой: от 200 до 300 – скидка будет 3 %, от 300
// до 500 – 5 %, от 500 и выше – 7 %.

let check_sale = Math.abs(+prompt("Введите сумму вашей покупки: "));
let sale = Number(0);
if (check_sale >= 200 && check_sale <= 300) {
  sale = 3;
  check_sale = check_sale - (check_sale * sale) / 100;
}
if (check_sale > 300 && check_sale <= 500) {
  sale = 5;
  check_sale = check_sale - (check_sale * sale) / 100;
}
if (check_sale > 500) {
  sale = 7;
  check_sale = check_sale - (check_sale * sale) / 100;
}

alert(
  `Вы купили товары на сумму ${check_sale / (1 - sale / 100)
  } рублей. Ваша скидка ${sale}% - ${((check_sale / (1 - sale / 100)) * sale) / 100
  } рублей. Всего к оплате ${check_sale} рублей.`
);