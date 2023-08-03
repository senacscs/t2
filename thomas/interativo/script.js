var correctPiecesCounter = 0;
    
    function drag(event) {
      event.dataTransfer.setData("text/plain", event.target.id);
    }
    
    function allowDrop(event) {
      event.preventDefault();
    }
    
    function drop(event) {
      event.preventDefault();
      var data = event.dataTransfer.getData("text");
      var target = event.target;
      
      if (target.className === "puzzle-placeholder" && !target.hasChildNodes()) {
        var placeholderId = target.id;
        var pieceId = data;
        
        target.appendChild(document.getElementById(data));
        checkCompletion();
      }
    }
    
    function isCorrectPlacement(placeholderId, pieceId) {
      if (placeholderId === "placeholder1" && pieceId === "piece1") {
        return true;
      }
  
      if (placeholderId === "placeholder2" && pieceId === "piece2") {
        return true;
      }
      if (placeholderId === "placeholder3" && pieceId === "piece3") {
        return true;
      }
      if (placeholderId === "placeholder4" && pieceId === "piece4") {
        return true;
      }
      if (placeholderId === "placeholder5" && pieceId === "piece5") {
        return true;
      }
      if (placeholderId === "placeholder6" && pieceId === "piece6") {
        return true;
      }
      if (placeholderId === "placeholder7" && pieceId === "piece7") {
        return true;
      }
      if (placeholderId === "placeholder8" && pieceId === "piece8") {
        return true;
      }
      if (placeholderId === "placeholder9" && pieceId === "piece9") {
        return true;
      }
      if (placeholderId === "placeholder10" && pieceId === "piece10") {
        return true;
      }
      if (placeholderId === "placeholder11" && pieceId === "piece11") {
        return true;
      }
      if (placeholderId === "placeholder12" && pieceId === "piece12") {
        return true;
      }
      if (placeholderId === "placeholder13" && pieceId === "piece13") {
        return true;
      }
      if (placeholderId === "placeholder14" && pieceId === "piece14") {
        return true;
      }
      if (placeholderId === "placeholder15" && pieceId === "piece15") {
        return true;
      }
      if (placeholderId === "placeholder16" && pieceId === "piece16") {
        return true;
      }
      if (placeholderId === "placeholder17" && pieceId === "piece17") {
        return true;
      }
      if (placeholderId === "placeholder18" && pieceId === "piece18") {
        return true;
      }
      if (placeholderId === "placeholder19" && pieceId === "piece19") {
        return true;
      }
      if (placeholderId === "placeholder20" && pieceId === "piece20") {
        return true;
      }
      
      return false;
    }
    
    function checkCompletion() {
      var totalPieces = 20; // Total de peças
      var puzzlePieces = document.querySelectorAll(".puzzle-piece");
      
      correctPiecesCounter = 0;
      
      puzzlePieces.forEach(function (piece) {
        var pieceId = piece.id;
        var parentPlaceholderId = piece.parentElement.id;
        
        if (isCorrectPlacement(parentPlaceholderId, pieceId)) {
          correctPiecesCounter++;
        }
      });
      
      if (correctPiecesCounter === totalPieces) {
        setTimeout(function() {
          var confirmResult = confirm("Quebra-cabeça completo! Clique em OK para ser redirecionado.");
          if (confirmResult) {
            window.location.href = "https://www.example.com"; // Insira o link desejado aqui
          }
        }, 1000);
      }
    }