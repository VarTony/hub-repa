

var fortunes = [
"Победи свои страхи, или они победят тебя.",
"Рекам нужны истоки.",
"Не бойся неведомого.",
"Тебя ждет приятный сюрприз.",
"Будь проще везде, где только можно.",
"Ветер вдохновляет огонь.",
"У всего есть начало и конец.",
"Иногда сложно не взобраться, а спуститься.",
"Нет зла без добра, но не наоборот.",
]

exports.getFortune = function() {
    var idx = Math.floor(Math.random() * fortunes.length);
    return fortunes[idx];
}
