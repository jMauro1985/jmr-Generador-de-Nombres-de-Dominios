
import "bootstrap";
import "./style.css";


window.onload = function () {
  console.log(" Generador de Nombres de Dominios cargado!");

  
  let pronombres = ["the", "our"];
  let adjetivos = ["great", "big"];
  let sustantivos = ["jogger", "racoon"];

 
  let extensiones = [".com", ".net", ".us", ".io"];

  
  let hacks = {
    "er": ".er",
    "on": ".on",
    "es": ".es",
    "io": ".io"
  };

  
  let resultadoDiv = document.getElementById("result");

  
  function generarDominios() {
    resultadoDiv.innerHTML = ""; 

    for (let p of pronombres) {
      for (let a of adjetivos) {
        for (let s of sustantivos) {
          
          
          for (let ext of extensiones) {
            agregarDominio(`${p}${a}${s}${ext}`);
          }

          
          for (let hack in hacks) {
            if (s.endsWith(hack)) {
              let base = s.slice(0, -hack.length); 
              agregarDominio(`${p}${a}${base}${hacks[hack]}`);
            }
          }
        }
      }
    }
  }

  
  function agregarDominio(nombre) {
    let p = document.createElement("p");
    p.textContent = nombre;
    p.classList.add("fw-bold", "text-success"); 
    resultadoDiv.appendChild(p);
  }

  
  generarDominios();
};
