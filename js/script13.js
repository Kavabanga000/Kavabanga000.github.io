// 1. Получить информацию о дате и размере html-документа
let docInfo = `Document size: ${document.documentElement.scrollWidth}x${document.documentElement.scrollHeight}`;
let date = new Date();

// 2. Вывести информацию многократно через каждые 5 секунд
setInterval(() => {
  console.log(docInfo);
  console.log(`Current date: ${date.toLocaleString()}`);
}, 5000);

// 3. Удалить элемент №1 при щелчке по нему
document.getElementById("fio").addEventListener("click", () => {
  document.getElementById("fio").remove();
});

// Обьектная модель DOM+обьект Style
document.getElementById("date").addEventListener("click", () => {
  document.getElementById("date").style.color = "red";
  document.getElementById("date").style.backgroundColor = "yellow";
  document.getElementById("date").style.fontWeight = "bold";
  document.getElementById("date").style.fontFamily = "Arial";
  document.getElementById("date").style.fontSize = "14px";
  document.getElementById("date").style.border = "2px solid blue";
});

// Обьектная модель браузера
console.log(`Cookies enabled: ${navigator.cookieEnabled}`);

// Закрыть текущее окно браузера через 2 секунды
setTimeout(() => {
  window.close();
}, 2000);