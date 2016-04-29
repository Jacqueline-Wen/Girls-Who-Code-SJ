var catOpen = document.getElementById("")

var catClosed = dicument.getElementById("catClosed")

catOpen.addListener("mousedown",closeTheCatsEyes);

catClosed.addListener("mouseup", openTheCatsEyes);

function closeTheCatsEyes(){
    //make the CatOpen display disappeat
    catOpen.styl.display = 'none';
    //make the catClosed appear
    catOpen.style.display='block';
}

function openTheCatsEyes(){
   catOpen.style.display = 
    'block';
    catOpen.style.display = 
      'none';
}
