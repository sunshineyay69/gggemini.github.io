let goodNightText =
    "Маша, поздравляем тебя с днём рождения!\n" +
    "А заодно и с женским днём!\n" +
    "Желаем быть всегда такой же 18-летней красоткой, " +
    "отличной мамой, любящей женой и искусной хозяйкой!\n" +
    "Иди по миру с улыбкой и не обращай внимания на трудности, " +
    "мы уверены, что у тебя всегда всё получится!\n" +
    "С праздником от семьи Мараховских!!!";

let images = ["1.JPG", "2.JPG", "3.JPG"];

let i = 0,
    u = 1;

setInterval(() => {
    if (u === images.length) {
        u = 0;
    }

    photo.style.backgroundImage = `url(media/img/${images[u++]})`;
}, 5000);

let interval = setInterval(() => {
    if (i === goodNightText.length) {
        clearInterval(interval);

        return;
    }

    let newChar = goodNightText[i++];

    if (newChar === "\n") {
        text.innerHTML += '<br>';
    } else {
        text.innerHTML += newChar;
    }
}, 10);