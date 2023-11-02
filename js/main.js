const imgSrc = [
    "./img/01.webp",
    "./img/02.webp",
    "./img/03.webp",
    "./img/04.webp",
    "./img/05.webp"
];
    // inserisco le immagini nell'HTML
    for (i = 0; i < imgSrc.length; i++) {
        let immagineDaInserire = `<img src="${imgSrc[i]}">`;

        document.getElementById("carousel").innerHTML += immagineDaInserire;
    }

    function next() {
        console.log("hai cliccato");
    }