
let cards = document.querySelectorAll(".card-wide");
cards.forEach((card) => card.addEventListener("click", function () {
    this.classList.toggle("card-open");
  }));


