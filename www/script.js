let sidebarOpen = false;

function toggleSidebar() {
  const sidebar = document.getElementById("mySidebar");
  const toggleButton = document.querySelector(".dropdown-toggle");

  if (!sidebarOpen) {
    sidebar.style.width = "250px";
    toggleButton.innerHTML = "&times;";
    sidebarOpen = true;
  } else {
    sidebar.style.width = "0";
    toggleButton.innerHTML = "&#9776;";
    sidebarOpen = false;
  }
}

// Dropdown Wisata
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

// Slider
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}

const text = "Let's go to Klungkung";
let index = 0;
let isAdding = true;

function animateText() {
  const target = document.getElementById("text-animation");

  if (isAdding) {
    target.innerText = text.slice(0, index + 1);
    index++;
    if (index === text.length) {
      isAdding = false;
    }
  } else {
    target.innerText = text.slice(0, index - 1);
    index--;
    if (index === 0) {
      isAdding = true;
    }
  }
}

setInterval(animateText, 100);
