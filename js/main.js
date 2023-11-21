"use strict";

// FUNCTIONS

function nextPhoto() {
    if (currentImage < itemsNode.length) {
        itemsNode[currentImage].classList.remove("active");
        thumbnailsNode[currentImage].classList.remove("thumb-active");
        thumbnailsNode[currentImage].classList.add("blacked");
        currentImage++;
        // Funzione loop
        if (currentImage === itemsNode.length) {
            currentImage = 0;
        }
        itemsNode[currentImage].classList.add("active");
        thumbnailsNode[currentImage].classList.add("thumb-active");
        thumbnailsNode[currentImage].classList.remove("blacked");
    }
}

function prevPhoto() {
    if (currentImage >= 0) {
        itemsNode[currentImage].classList.remove("active");
        thumbnailsNode[currentImage].classList.remove("thumb-active");
        thumbnailsNode[currentImage].classList.add("blacked");
        currentImage--;
        // Funzione loop
        if (currentImage === -1) {
            currentImage = itemsNode.length - 1;
        }
        itemsNode[currentImage].classList.add("active");
        thumbnailsNode[currentImage].classList.add("thumb-active");
        thumbnailsNode[currentImage].classList.remove("blacked");
    }
}

function printTeamDOM(array) {
    const fragment = document.createDocumentFragment();
    for (let i = 0; i < array.length; i++) {
        const divElement = document.createElement("li");
        divElement.classList.add("team-member");
        for (let key in array[i]) {
            if (key !== "foto") {
                const divInfo = document.createElement("div");
                divInfo.classList.add(key);
                divInfo.append(`${array[i][key]}`);
                divElement.append(divInfo);
            } else {
                const fotoDiv = document.createElement("img");
                fotoDiv.classList.add(key);
                fotoDiv.src = `img/${array[i][key]}`;
                divElement.append(fotoDiv);
            }
        }

        fragment.append(divElement);
    }
    divContainer.append(fragment);
}

// OPERATIONS

// Definizione variabili globali
const dataList = [{
    name: "Nebulosa dell'Aquila (M16)",
    description: "Situata nella costellazione dell'Aquila, questa nebulosa è famosa per la sua 'Pilastro della Creazione', una colonna di gas e polveri in cui si pensa si stiano formando nuove stelle.",
    photo: "01.jpg"
}, {
    name: "Nebulosa di Orione (M42)",
    description: "Una delle nebulose più brillanti e conosciute nel cielo notturno, visibile anche ad occhio nudo nelle notti limpide. Si trova nella costellazione di Orione e ospita un vivaio stellare ricco di giovani stelle e gas illuminati.",
    photo: "02.jpg"
}, {
    name: "Nebulosa di Tarantola (NGC 2070)",
    description: "Una massiccia nebulosa nella Grande Nube di Magellano, una galassia satellite della Via Lattea. È sede di un'intensa attività di formazione stellare, inclusa la supergigante rossa, la stella R136a1, una delle più massicce conosciute.",
    photo: "03.jpg"
}, {
    name: "Nebulosa del Granchio (M1)",
    description: "Situata nella costellazione di Toro, questa nebulosa è il residuo di una supernova osservata nel 1054. È una delle prime supernove ad essere stata documentata.",
    photo: "04.jpg"
}, {
    name: "Nebulosa di Lupo (Sh2-68)",
    description: "Situata nella costellazione del Lupo, questa nebulosa a emissione è caratterizzata da regioni di gas ionizzato e polveri, tipiche di zone di formazione stellare attiva.",
    photo: "05.jpg"
}, {
    name: "Nebulosa dell'Anello (M57)",
    description: "Conosciuta anche come M57, si trova nella costellazione della Lira. È una nebulosa a anello formata da gas espulso da una stella morente, una nebulosa planetaria che continua a evolversi nel tempo.",
    photo: "06.jpg"
}, {
    name: "Nebulosa della Carena (NGC 2516)",
    description: "Una brillante associazione stellare aperta situata nella costellazione della Carena. Benché non sia una nebulosa a sé stante, questa regione ospita numerose stelle giovani e calde, illuminate dalla radiazione delle stelle più massicce.",
    photo: "07.jpg"
}, {
    name: "Nebulosa dell'Occhio di Gatto (NGC 6543)",
    description: "Conosciuta anche come NGC 6543, questa nebulosa planetaria si trova nella costellazione del Drago. Ha una struttura complessa e presenta un aspetto simile a un occhio nel cielo notturno.",
    photo: "08.jpg"
}];

const itemsElement = document.querySelector(".items");
const itemsThumbnails = document.querySelector(".thumbnails");
const prevChevron = document.querySelector(".prev");
const nextChevron = document.querySelector(".next");
let currentImage = 0;
const playButton = document.getElementById("play-btn");
const stopButton = document.getElementById("stop-btn");
const reverseButton = document.getElementById("reverse-btn");
let autoPlayFn = setInterval(nextPhoto, 3000);


// Ciclo per inserimento dinamico immagini
for (let i = 0; i < dataList.length; i++) {
    const itemImageContainer = document.createElement("div");
    const thumbnailImageContainer = document.createElement("div");
    itemImageContainer.classList.add("item");
    thumbnailImageContainer.classList.add("thumbnail");
    thumbnailImageContainer.classList.add("blacked");
    const imageElement = document.createElement("img");
    const thumbnailElement = document.createElement("img");
    imageElement.src = `./img/${dataList[i]['photo']}`;
    thumbnailElement.src = `./img/${dataList[i]['photo']}`;
    imageElement.alt = `Immagine${i + 1}`;
    thumbnailElement.alt = `Immagine${i + 1}`;
    itemImageContainer.append(imageElement);
    const imageInfo = document.createElement("div");
    imageInfo.classList.add("image-info");
    const imageTitle = document.createElement("h3");
    imageTitle.append(dataList[i]['name']);
    imageInfo.append(imageTitle);
    const imageDescription = document.createElement("p");
    imageDescription.append(dataList[i]['description']);
    imageInfo.append(imageDescription);
    itemImageContainer.append(imageInfo);
    thumbnailImageContainer.append(thumbnailElement);
    itemsElement.append(itemImageContainer);
    itemsThumbnails.append(thumbnailImageContainer);
};

// Dichiarazione NodeList items
const itemsNode = document.querySelectorAll(".item");
const thumbnailsNode = document.querySelectorAll(".thumbnail");

itemsNode[0].classList.add("active");
thumbnailsNode[0].classList.add("thumb-active");
thumbnailsNode[0].classList.remove("blacked");

// Creazione shadow layer
const shadowLayer = document.createElement("div");
shadowLayer.classList.add("shadow-layer");
itemsElement.append(shadowLayer);

// Aggiunta event listener per scorrimento immagini
nextChevron.addEventListener("click", nextPhoto);
prevChevron.addEventListener("click", prevPhoto);

//Aggiunta event listener bottoni
playButton.disabled = true;

playButton.addEventListener("click", function () {
    clearInterval(autoPlayFn);
    autoPlayFn = setInterval(nextPhoto, 3000);
    playButton.disabled = true;
    stopButton.disabled = false;
})

stopButton.addEventListener("click", function () {
    clearInterval(autoPlayFn);
    playButton.disabled = false;
    stopButton.disabled = true;
    reverseButton.disabled = false;
})

reverseButton.addEventListener("click", function () {
    clearInterval(autoPlayFn);
    autoPlayFn = setInterval(prevPhoto, 3000);
    playButton.disabled = false;
    reverseButton.disabled = true;
    stopButton.disabled = false;
})

// Selezione immagine da thumb
let thumbSelectorNode = document.querySelectorAll(".thumbnail");

for (let i = 0; i < thumbSelectorNode.length; i++) {
    thumbSelectorNode[i].addEventListener("click", function () {
        thumbSelectorNode[i].classList.add("thumb-active");
        thumbSelectorNode[i].classList.remove("blacked");
        itemsNode[i].classList.add("active");
        currentImage = i;
        for (let counter = 0; counter < thumbSelectorNode.length; counter++) {
            if (counter != i) {
                thumbSelectorNode[counter].classList.add("blacked");
                thumbSelectorNode[counter].classList.remove("thumb-active");
                itemsNode[counter].classList.remove("active");
            }
        }
    })
}
