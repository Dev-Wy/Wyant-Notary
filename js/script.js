function myFunction() {
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
})
