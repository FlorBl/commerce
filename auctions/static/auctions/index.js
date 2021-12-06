/* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
  document.body.style.opacity = 0.3;
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
  document.body.style.backgroundColor = "white";

  
  
}

document.addEventListener('click', function(){   
window.addEventListener('click', function(e){   
  if (document.getElementById('navBurger').contains(e.target)){
    // Clicked in box
    
  } 
  else{
    // Clicked outside the box
   closeNav();
  }
});

});