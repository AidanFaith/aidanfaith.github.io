// --------- JAVASCRIPT ---------

// --------- 
function openTab(tabName, event) {
  // Hide all tab contents
  document.querySelectorAll(".tabcontent").forEach(tab => tab.classList.remove("active"));
  
  // Remove "active" class from all buttons
  document.querySelectorAll(".bar-item").forEach(btn => btn.classList.remove("active"));
  
  // Show the selected tab
  document.getElementById(tabName).classList.add("active");
  
  // Highlight the clicked button
  event.currentTarget.classList.add("active");
}


    
// --------- 
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
});
  
// --------- 
// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

    
// --------- 
function openCity(cityName) {
  var i;
  var x = document.getElementsByClassName("city");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  document.getElementById(cityName).style.display = "block";  
}

