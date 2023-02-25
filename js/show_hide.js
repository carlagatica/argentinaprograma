function openCard(evt, linkname) {
    var i, card, cardlinks;
    card = document.getElementsByClassName("card2");
    for (i = 0; i < card.length; i++) {
      card[i].style.display = "none";
      
    }
    document.getElementById(linkname).style.display = "block";
  }