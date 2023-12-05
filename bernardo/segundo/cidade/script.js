const box = document.getElementById("box");
const cal = document.getElementById("calendar");

function openBox() {
  box.style.display = "flex";
}

function closeBox() {
  box.style.display = "none";
}

function openCalendar() {
  calendar.style.display = "flex";
  closeBox()
}

function closeBoxCal() {
  calendar.style.display = "none";
}

function clearStorage() {
    localStorage.clear();
    loadItens()
  }  

const ul = document.getElementById("list");
var localList = [];

function add() {
  const data = document.getElementById("data").value;
  const hora = document.getElementById("hora").value;
  const local = document.getElementById("local").value;
  if(localList.length < 5) {
    localList.push({
      data: data,
      hora: hora,
      local: local,
    });
    updateList();
  } 
  else {
    alert("Lista cheia");
  }
}

function updateList() {
  localStorage.setItem("agendlist", JSON.stringify(localList));
  loadItens();
}

function loadItens() {
  ul.innerHTML = "";
  localList = JSON.parse(localStorage.getItem("agendlist")) ?? [];
  localList.forEach((item) => {
    addItemScreen(item.data, item.hora, item.local);
  });
}

function addItemScreen(data, hora, local) {
  const li = document.createElement("li");

  li.innerHTML = `
  <div class="text-center pb-3 w-full text-base sm:text-lg md:text-xl">
    <h1>Agendamento dia ${data} as ${hora} em ${local}</h1>
  </div>
    `;
  ul.appendChild(li);
}

loadItens()



