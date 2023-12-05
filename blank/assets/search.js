 //search bar
 const searchBar = document.getElementById("searchBar");
 const projects = document.querySelectorAll(".project");

 searchBar.addEventListener("input", function () {
     const searchTerm = searchBar
         .value
         .toLowerCase();

     projects.forEach(project => {
         const name = project
             .querySelector(".tags span")
             .textContent
             .toLowerCase();

         if (name.startsWith(searchTerm)) {
             project.style.display = "block";
         } else {
             project.style.display = "none";
         }
     });
 });