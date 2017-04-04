var minas = document.getElementsByClassName("celda");
var color = document.getElementsByClassName("empty");
var reiniciarTodo = document.getElementsByTagName("input");


for(var i=0;i<color.length;i++){
  color[i].addEventListener("click",colors);
};

for(var i=0;i<minas.length;i++){
  minas[i].addEventListener("click",bombas);
};

function bombas(){
  alert("PERDISTEEE!!")
  this.style.backgroundImage = "url('http://www.dafont.com/img/df_avatar.png')"
  this.style.backgroundImage.size = "10px"
  reiniciar.disabled=true;
  detener();
};

function reiniciar (){
  for(var i=0;i<reiniciarTodo.length;i++){
    reiniciarTodo[i].innerHTML = null;
    reiniciarTodo[i].style.backgroundColor = null;
    reiniciarTodo[i].style.backgroundImage = null;
    reiniciarTodo[i].disabled = false;
  }
};

function colors(){
  this.style.backgroundColor = "#F10226"
  detener()
  };

function detener(){
  event.stopPropagation();
};
