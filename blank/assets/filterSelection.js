

// Filtra os elementos
function filterSelection(c) {
    var x = document.getElementsByClassName("filterDiv");
    if (c == "all") c = "";
    // Adiciona a classe "show" aos elementos filtrados e remove dos não selecionados
    Array.from(x).forEach(function(element) {
      element.classList.remove("show");
      if (element.className.indexOf(c) > -1) {
        element.classList.add("show");
      }
    });
  }
  
  // Mostra os elementos filtrados
  function w3AddClass(element, name) {
    var arr = name.split(" ");
    arr.forEach(function(cls) {
      if (!element.classList.contains(cls)) {
        element.classList.add(cls);
      }
    });
  }
  
  // Esconde os elementos que não são selecionados
  function w3RemoveClass(element, name) {
    var arr = name.split(" ");
    arr.forEach(function(cls) {
      element.classList.remove(cls);
    });
  }
  
  // Adiciona a classe ativa ao botão atual (destaca-o)
  var btnContainer = document.getElementById("myBtnContainer");
  var btns = btnContainer.getElementsByClassName("btn");
  Array.from(btns).forEach(function(btn) {
    btn.addEventListener("click", function() {
      var current = document.getElementsByClassName("active");
      if (current.length > 0) {
        current[0].classList.remove("active");
      }
      this.classList.add("active");
    });
  });
  