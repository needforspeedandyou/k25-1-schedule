const langButton = document.getElementById("langChange")

var lang = localStorage.getItem("language")
if (!lang) {
    var lang = localStorage.setItem("language", "ru")
}
console.log(lang)

const translations = {
  ru: {
    title1: "K25-1 Расписание",
    title2: "Расписание группы К25-1. I семестр",
    schedule: "Расписание",
    rest: "Остальное",

    "day-1": "Понедельник",
    "day-2": "Вторник",
    "day-3": "Среда",
    "day-4": "Четверг",
    "day-5": "Пятница",

    "lesson-1": "Компьютерная дискретная математика",
    "lesson-2": "Физ. Воспитание",
    "lesson-3": "Линейная алгебра и аналитическая геометрия",
    "lesson-4": "Основы разработки программного обеспечения",
    "lesson-5": "Информационные технологии",
    "lesson-56": "Деловой украинский язык | Информационные технологии",
    "lesson-5n": "Деловой украинский язык | ...",
    "lesson-s": "Самостоятельная работа"
  },
  ua: {
    title1: "K25-1 Розклад",
    title2: "Розклад групи К25-1. I семестр",
    schedule: "Розклад",
    rest: "Інше",

    "day-1": "Понеділок",
    "day-2": "Вівторок",
    "day-3": "Середа",
    "day-4": "Четвер",
    "day-5": "Пʼятниця",

    "lesson-1": "Комп'ютерна дискретна математика",
    "lesson-2": "Фізичне виховання",
    "lesson-3": "Лінійна алгебра та аналітична геометрія",
    "lesson-4": "Основи розробки програмного забезпечення",
    "lesson-5": "Інформаційні технології",
    "lesson-56": "Ділова українська мова | Інформаційні технології",
    "lesson-5n": "Ділова українська мова | ...",
    "lesson-s": "Самостійна робота"
  }
};

document.querySelectorAll("[data-i18n]").forEach(el => {
    el.textContent = translations[lang][el.dataset.i18n]
})

langButton.addEventListener("click", () => {
    if (lang === "ru") {
        localStorage.setItem("language", "ua")
    } else {
        localStorage.setItem("language", "ru")
    }
    location.reload();
})