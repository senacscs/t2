localStorage.setItem("stopFunction", false);

function playAudio() {
    var audio = document.getElementById("audio");
    audio.currentTime = 0;
    audio.play();
}

function openBox() {
    const box = document.getElementById('box');
    box.style.display = 'flex';
}

function closeBox() {
    const box = document.getElementById('box');
    box.style.display = 'none';
}   
  

  function verificar() {
    const senhaCorreta = "666"; 
    const senhaInserida = document.getElementById("input").value;
    if (senhaCorreta === senhaInserida) {
        $('body').fadeOut('slow', function() {
            window.location.href = "hall.html";
        }).css("background-color", "black");
    } else {
      Swal.fire({
        title: 'Senha incorreta!',
        text: 'Tente novamente',
        confirmButtonColor: '#ff0000',
        customClass: {
          title: 'font',
          popup: 'font',
          confirmButton: 'alertbt',
        },
        background: '#1b1c1c'
        })
    }
}
  
function openPaper() {
    const paper = document.getElementById('paper');
    
    if (paper.style.display === 'block') {
      paper.style.display = 'none';
    } else {
      paper.style.display = 'block';
    }
  }

  function openSafe() {
    const safe = document.getElementById('safe');
    safe.style.display = 'flex';
}

function closeSafe() {
    const safe = document.getElementById('safe');
    safe.style.display = 'none';
} 

  function verificarSafe() {
    const safe = document.getElementById('safe');
    const btsafe = document.getElementById('btsafe');
    const porta = localStorage.getItem("porta");
    const codigo = localStorage.getItem("codigo");
    const botao = localStorage.getItem("botao");
    const senhaCorreta = "diabo"; 
    const senhaInserida = document.getElementById("input").value;
    if (senhaCorreta === senhaInserida) {       
    localStorage.setItem("porta", "aberta");
    const porta = localStorage.getItem("porta");
          reward.style.display = 'block';
          setTimeout(function() {
            reward.style.display = 'none';
            safe.style.display = 'none';
            btsafe.style.display = 'none';
          }, 1500);
    } else {
      Swal.fire({
        title: 'Senha incorreta!',
        text: 'Tente novamente',
        confirmButtonColor: '#ff0000',
        customClass: {
          title: 'font',
          popup: 'font',
          confirmButton: 'alertbt',
        },
        background: '#1b1c1c'
        })
      localStorage.setItem("porta", "fechado");
      const porta = localStorage.getItem("porta");
    }
  }

  function noneForever() {
    const porta = localStorage.getItem("porta");
    const btsafe = document.getElementById('btsafe');

    if (porta === "aberta") {       
      btsafe.style.display = 'none';
    }
    else {
        btsafe.style.display = 'block';

    }
  }

  function openDoor() {
    const porta = localStorage.getItem("porta");
    if (porta==="aberta"){
      $('body').fadeOut('slow', function() {
        window.location.href = "../../public/end-room/main.html";
    }).css("background-color", "black");
    }
    else{
      Swal.fire({
        title: 'Porta trancada!',
        text: 'Encontre a chave',
        confirmButtonColor: '#ff0000',
        customClass: {
          title: 'font',
          popup: 'font',
          confirmButton: 'alertbt',
        },
        background: '#1b1c1c'
        })
    }
}

$(document).ready(function() {
    $(".out").click(function() {
      $('body').fadeOut(500, function() {
        window.location.href = "../../public/first-room/hall.html";
      }).css("background-color", "black");
    });
  });

  $(document).ready(function() {
    var roomName = $('#room-name');
    setTimeout(function() {
      roomName.fadeOut(600);
    }, 1000);
  });

  function insanity() {
    const sanityBar = document.getElementById("sanity-bar");
    let barHeight = parseInt(localStorage.getItem("barHeight")) || 0;
    sanityBar.style.height = `${barHeight}%`;
    const maxHeight = 80;
    
    const animate = () => {
      let stopFunction = JSON.parse(localStorage.getItem("stopFunction"));
      if (!stopFunction) {
        barHeight++;
        if (barHeight > maxHeight) {
          barHeight = maxHeight;
        }
        sanityBar.style.height = `${barHeight}%`;
        localStorage.setItem("barHeight", barHeight);
      }
    };
    
    let intervalID = setInterval(() => {
      if (barHeight === 50) {
        clearInterval(intervalID);
        $('body').fadeOut('slow', function() {
          window.location.href = "../public/finals/first.html";
      }).css("background-color", "black");
      } else {
        animate();
      }
    }, 6000);
  }

function talk() {
  const dialogue = document.getElementById("dialogue");
  const endbox = document.getElementById('endbox');
  dialogue.style.display = 'flex';
  setTimeout(function() {
    endbox.style.display = 'flex';
  },5000);

  // Store data in localStorage
  localStorage.setItem('talk_data', JSON.stringify({ dialogueDisplayed: true }));
}

// Retrieve data from localStorage and execute the function if necessary
const talkData = JSON.parse(localStorage.getItem('talk_data'));
if (talkData && talkData.dialogueDisplayed) {
  const text = document.getElementById("text");
  const dialogue = document.getElementById("dialogue");
  const endbox = document.getElementById('endbox');
  dialogue.style.display = 'flex';
  text.style.animation = 'none';
  endbox.style.display = 'flex';
}

function verificarEnd() {
  let stopFunction = JSON.parse(localStorage.getItem("stopFunction"));
    const secondDialogue = document.getElementById("seconddialogue");
    const chose = document.getElementById("chosebox");
    const dialogue = document.getElementById("dialogue");
    const endbox = document.getElementById('endbox');
    const senhaCorreta = "gehenna"; 
    const senhaInserida = document.getElementById("input").value;
    const som = document.getElementById('some');


    if (senhaCorreta === senhaInserida) {
       dialogue.style.display = 'none';
       endbox.style.display = 'none';
       seconddialogue.style.display = 'flex';
       som.style.display = 'none';
       localStorage.setItem("stopFunction", "true");
       setTimeout(function() {
      chosebox.style.display = 'flex';
      document.getElementById("btalk").onclick = null;
      },500);
    } else {
      Swal.fire({
        title: 'Senha incorreta!',
        text: 'Tente novamente',
        confirmButtonColor: '#ff0000',
        customClass: {
          title: 'font',
          popup: 'font',
          confirmButton: 'alertbt',
        },
        background: '#1b1c1c'
        })
    }
  }

function clear(){
    localStorage.clear();
  }

  function second() {
    $('body').fadeOut('slow', function() {
          window.location.href = "../public/finals/second.html";
      }).css("background-color", "black");
  }

  function first() {
    $('body').fadeOut('slow', function() {
          window.location.href = "../public/finals/third.html";
      }).css("background-color", "black");
  }

  $(document).ready(function() {
    $('#final').hide().fadeIn(2300); // 2000 é a duração da animação em milissegundos
  })
  




  

  
  
  
  
