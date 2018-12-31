function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

function toggleDrop(){
  var x = document.getElementById("myDropdown");
  if (x.className === "not-showing") {
    x.className = "dropdown-content";
    console.log("a");
  } else {
    x.className = "not-showing";
    console.log("b");
  }
}