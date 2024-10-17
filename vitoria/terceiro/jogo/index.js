function allowDrop(ev) {
    alert("largou");

    console.log("chamou alssssslow");
    ev.preventDefault();
    // console.log("allow ev",ev);
    // console.log("allow id",id);

  }
  
  function drag(ev) {
    console.log("chamou drag");
    
//     // alert("largou");

    ev.dataTransfer.setData("text", ev.target.id);
    // console.log("drag ev",ev);
    // console.log("drag id",id);
  }
  
//   function drop(ev) {
//     // alert("largou");
//     console.log("chamou drop");


//     // if (id=="papelhigienico") console.log("chamou drop");
//     ev.preventDefault();
//     var data = ev.dataTransfer.getData("text");
//     ev.target.appendChild(document.getElementById(data));
//     // console.log("drop ev",ev);
//     // console.log("drop id",id);


//   }