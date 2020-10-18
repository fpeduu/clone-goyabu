const animesContainer = document.getElementById("animes-container");
const seasonAnimesContainer = document.getElementsByClassName("season-animes")[0];
const newEpisodesContainer = document.getElementsByClassName("new-episodes")[0];

function createAnimeContainer(image, title, genres, father) {
    const animeContainer = document.createElement("div");
    animeContainer.setAttribute("class", "animeContainer");
    animeContainer.style.display = "flex";
    animeContainer.style.width = "205px";

    const imgElement = document.createElement("img");
    imgElement.src = image;
    imgElement.alt = title;
    imgElement.style.width = "100%";
    imgElement.style.height = "120px";
    imgElement.style.paddingTop = "10px";

    const blockWidth = imgElement.style.width

    const titleElement = document.createElement("p");
    titleElement.appendChild(document.createTextNode(title));

    titleElement.style.width = blockWidth
    titleElement.style.color = "#ACACAC"
    titleElement.style.fontSize = "14px"
    titleElement.style.fontWeight =  "500";
    titleElement.style.paddingTop =  "5px";
    titleElement.style.paddingBottom =  "5px";

    const authorElement = document.createElement("p");    
    authorElement.appendChild(document.createTextNode("Kanra"));

    authorElement.style.width = blockWidth;
    authorElement.style.color = "#ACACAC";
    authorElement.style.fontSize = "12px";

    const genresElement = document.createElement("p");
    let genresElementText = "";

    for (let c = 0; c < genres.length; c++) {
        if (!(c == (genres.length - 1))) {
            genresElementText += genres[c] + ", ";
            continue;
        }

        genresElementText += genres[c];
    }
    
    genresElement.appendChild(document.createTextNode(genresElementText));
    genresElement.style.width = blockWidth;
    genresElement.style.color = "#787878";
    genresElement.style.fontSize = "12px";

    const animeTextContainer = document.createElement("div");
    animeTextContainer.style.marginTop = "120px";
    animeTextContainer.style.marginLeft = `-${blockWidth}`;
    animeTextContainer.style.width = blockWidth;

    animeTextContainer.style.display = "flex";
    animeTextContainer.style.flexDirection = "column";

    animeTextContainer.appendChild(titleElement);
    animeTextContainer.appendChild(authorElement);
    animeTextContainer.appendChild(genresElement);

    animeContainer.appendChild(imgElement);
    animeContainer.appendChild(animeTextContainer);

    father.appendChild(animeContainer);
}

imagesPathList = [
    "./src/images/capa-anime-1.jpeg",
    "./src/images/capa-anime-2.jpg",
    "./src/images/capa-anime-3.jpg",
    "./src/images/capa-anime-4.jpg",
    "./src/images/capa-anime-5.jpg",
];

titlesList = [
    "JoJo's Bizarre Adventure",
    "Sword Art Online",
    "The Rising of the Shield Hero",
    "Black Clover",
    "Darwin's Game",
];

genresList = [
    ["Action", "Adventure", "Supernatural", "Vampire", "Shounen"],
    ["Action", "Adventure", "Fantasy", "Jogos", "Shounen"],
    ["Action", "Adventure", "Comedy", "Drama", "Romance", "Fantasy", "Seinen"],
    ["Action", "Comedy", "Magic", "Fantasy", "Shounen"],
    ["Action", "Mistery", "Shounen"],
];

for (let c = 0; c < 5; c++) {
    createAnimeContainer(imagesPathList[c], titlesList[c], genresList[c], seasonAnimesContainer);
    createAnimeContainer(imagesPathList[c], titlesList[c], genresList[c], newEpisodesContainer);
}
