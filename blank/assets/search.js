 //search bar
 const searchBar = document.getElementById("searchBar");
 const projects = document.querySelectorAll(".project");

 searchInput.addEventListener("input", function () {
     const searchTerm = searchBar
         .value
         .toLowerCase();

     projects.forEach(projects => {
         const name = projects
             .querySelector(".projects span")
             .textContent
             .toLowerCase();

         if (name.startsWith(searchTerm)) {
             projects.style.display = "block";
         } else {
             projects.style.display = "none";
         }
     });
 });