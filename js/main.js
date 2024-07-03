document.addEventListener("DOMContentLoaded", function () {
    // Внедрение через внешний файл
    document.getElementById("loginButton").addEventListener("click", function () {
        alert("Вы нажали на кнопку Войти!");
        window.location.href = "log.html"; // Переход на страницу входа
    });

    document.getElementById("registerButton").addEventListener("click", function () {
        alert("Вы нажали на кнопку Зарегистрироваться!");
        window.location.href = "reg.html"; // Переход на страницу регистрации
    });

    document.getElementById("lr10Button").addEventListener("click", function () {
        alert("Вы нажали на кнопку lr10!");
        window.location.href = "lr10.html"; // Переход на страницу lr10
    });

    document.getElementById("lr13Button").addEventListener("click", function () {
        alert("Вы нажали на кнопку lr13!");
        window.location.href = "lr13.html"; // Переход на страницу lr13
    });

    document.getElementById("practButton").addEventListener("click", function () {
        alert("Вы нажали на кнопку практика!");
        window.location.href = "практика.html"; // Переход на страницу практика
    });

    // Добавление обработчиков событий для кнопок в навигации
    document.querySelectorAll("nav button a").forEach(function (anchor) {
        anchor.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
        });
    });

    // Отображение текущей даты в футере
    document.getElementById("currentDate").textContent = "Сегодняшняя дата" + new Date().toLocaleDateString();

    // Пример использования операторов JS
    const today = new Date().getDay();
    switch (today) {
        case 0:
            console.log("Сегодня воскресенье");
            break;
        case 1:
            console.log("Сегодня понедельник");
            break;
        case 2:
            console.log("Сегодня вторник");
            break;
        case 3:
            console.log("Сегодня среда");
            break;
        case 4:
            console.log("Сегодня четверг");
            break;
        case 5:
            console.log("Сегодня пятница");
            break;
        case 6:
            console.log("Сегодня суббота");
            break;
        default:
            console.log("Ошибка определения дня недели");
    }

    // Циклы for, while, do..while
    for (let i = 0; i < 5; i++) {
        console.log("for: " + i);
    }

    let j = 0;
    while (j < 5) {
        console.log("while: " + j);
        j++;
    }

    let k = 0;
    do {
        console.log("do..while: " + k);
        k++;
    } while (k < 5);

    // Операторы break и continue
    for (let m = 0; m < 10; m++) {
        if (m === 3) continue;
        if (m === 7) break;
        console.log("break/continue: " + m);
    }
});

// Пример использования confirm и prompt
function handleConfirm() {
    const userConfirmed = confirm("Вы уверены, что хотите продолжить?");
    if (userConfirmed) {
        const userName = prompt("Введите ваше имя:");
        alert("Привет, " + userName + "!");
    } else {
        alert("Действие отменено.");
    }
}

document.getElementById("confirmButton").addEventListener("click", handleConfirm);
