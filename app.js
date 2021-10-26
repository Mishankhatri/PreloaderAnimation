var preloader = document.getElementById("preloader")
window.addEventListener('click', ()=>{
    preloader.style.display = "none";
})


function nav() {
    var x = document.getElementById("nav-container");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
