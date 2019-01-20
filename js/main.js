function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

function toggleDrop(idName){
  var x = document.getElementById(idName);
  if (x.className === "not-showing") {
    x.className = "dropdown-content";
  } else {
    x.className = "not-showing";
  }
}