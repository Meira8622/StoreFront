import { api } from "./main.js";

const mostrador = document.querySelector(".elements-showcase");

function crearCarta(imagen,nombre,precio) {

    const carta = document.createElement("div");
    carta.className = "element-card";
    carta.innerHTML = `<div class="element-item-1">
                            <img src="${imagen}">
                            <span title="${nombre}">${nombre}</span>
                        </div>
                        
                        <div class="element-item-2">
                            <span title="$ ${precio}">$ ${precio}</span>
                            <button class=""><img src="./assets/trash-can-solid.svg"></button>
                        </div>`;
    
    return  carta;                        
}

async function listar() {
    try{
        const elementos = await api.dbGET();
        // elementos.forEach(elemento => console.log(elemento.imagen, elemento.nombre, elemento.precio));
        elementos.forEach(elemento => mostrador.appendChild(crearCarta(elemento.imagen, elemento.nombre, elemento.precio)));
    }
    catch {
        mostrador.appendChild(document.createElement("<h1>No sea han encontrado datos</h1>"));
    }
}

listar();

/*
<div class="element-card">
    <div class="element-item-1">
        <img src="./assets/031f54f8134390cffc376248b1dae95f.jpg">
        <span>Nombre</span>
    </div>
                            
    <div class="element-item-2">
        <span>$ 100</span>
        <button class=""><img src="./assets/trash-can-solid.svg"></button>
    </div>
</div>
*/

// const mostrador = document.querySelector(".elements-showcase");

// const carta = document.createElement('div');
// carta.className = "element-card";
// carta.innerHTML = `<div class="element-item-1">
//                         <img src="./assets/031f54f8134390cffc376248b1dae95f.jpg">
//                         <span>Nombre</span>
//                     </div>
                        
//                     <div class="element-item-2">
//                         <span>$ 100</span>
//                         <button class=""><img src="./assets/trash-can-solid.svg"></button>  
//                     </div>`;

// mostrador.appendChild(carta);