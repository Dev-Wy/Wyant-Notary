/*function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}
    

const myLinks = document.getElementById("myLinks");

myLinks.addEventListener("click", function()
{
    this.classList.add("hidden");
});*/

const x = document.getElementById("myLinks");
function myFunction() {
  // Toggle between adding / removing the responsive class from the menu
  x.classList.toggle("responsive");
}

// We get all the a elements with class "nav-item", and attach a click
// listener to them which removes the responsive class from myTopNav element.
const theLinks = document.querySelectorAll(".nav-item");
theLinks.forEach(link => link.addEventListener("click", ()=>{
  x.classList.remove("responsive");
}))