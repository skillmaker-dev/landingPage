

 var x = window.matchMedia("(min-width: 769px)")

function myFunction(x) {
    if (x.matches) { 
        let cardHeight = document.getElementById("cardLong").offsetHeight;
        console.log(cardHeight);
        let cards = document.getElementById("cards");
        cards.style.height = +cardHeight*2 + 170 + 'px';
        console.log(cards.offsetHeight);
    }
  }
  
 
  myFunction(x) ;
  x.addEventListener("change",myFunction);