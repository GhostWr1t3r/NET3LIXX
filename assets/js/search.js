function myFunction() {
    var input, filter, cards, cardContainer, title, i;
    input = document.getElementById("myFilter");
    banner = document.getElementById("banner");
    filter = input.value.toUpperCase();
    cardContainer = document.getElementById("movies-grid");
    cards = cardContainer.getElementsByClassName("movie-card");
    for (i = 0; i < cards.length; i++) {
    title = cards[i].querySelector(".card-body h3.card-title");
    if (title.innerText.toUpperCase().indexOf(filter) > -1) {
        cards[i].style.display = "";
	banner.style.display = "none";
} else {
        cards[i].style.display = "none";
}
    }
}
