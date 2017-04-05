var minas = document.getElementsByClassName("celda");
var color = document.getElementsByClassName("empty");
var reiniciarTodo = document.getElementsByTagName("input");
var numero1 = document.getElementsByClassName("num 1");
var numero2 = document.getElementsByClassName("num 2");
var numero3 = document.getElementsByClassName("num 3");
var facilito = document.getElementById("nivel1");
var mediano = document.getElementById("nivel2");
var dificil = document.getElementById("nivel3");

for(var i=0;i<numero1.length;i++){
  numero1[i].addEventListener("click",num1);
};

for(var i=0;i<numero2.length;i++){
  numero2[i].addEventListener("click",num2);
};

for(var i=0;i<numero3.length;i++){
  numero3[i].addEventListener("click",num3);
};

for(var i=0;i<color.length;i++){
  color[i].addEventListener("click",colors);
};

for(var i=0;i<minas.length;i++){
  minas[i].addEventListener("click",bombas);
};

function bombas(){
  this.style.backgroundImage = "url('https://1.bp.blogspot.com/-ubqxxZa5O94/V6hhPFxah8I/AAAAAAABHl8/n3uUT4-rdOgBbv04WPF-Brf7sj0S2nNuACLcB/s70-c/Tsar%2BBomba.png')"
  reiniciar.disabled=true;
  alert("PERDISTEEE!!")
  //location.reload()
  detener(event);
};

function num1(){
  this.style.backgroundImage = "url('https://www.commbank.com.au/content/dam/commbank/assets/personal/credit-cards/campaigns/commbank-checkout-1.png')"
};

function num2(){
  this.style.backgroundImage = "url('https://www.commbank.com.au/content/dam/commbank/assets/personal/credit-cards/campaigns/commbank-checkout-2.png')"
};

function num3(){
  this.style.backgroundImage = "url('https://www.commbank.com.au/content/dam/commbank/assets/personal/credit-cards/campaigns/commbank-checkout-3.png')"
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
  this.style.backgroundColor = "#C64371"
  detener(event)
  };

function detener(event){
  event.stopPropagation();
};
