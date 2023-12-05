 //search bar
let searchBar = document.getElementById("searchBar");
let projects = document.querySelectorAll(".project");

 searchBar.addEventListener("input", function () {
     const searchTerm = searchBar
         .value
         .toLowerCase();

     projects.forEach(projectTag => {
         const name = projectTag
             .querySelector(".tags span")
             .textContent
             .toLowerCase();

         if (name.startsWith(searchTerm)) {
             projectTag.style.display = "block";
         } else {
             projectTag.style.display = "none";
         }
     });
 });