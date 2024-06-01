import { api } from "./main.js"

async function borrarCarta(elemento) {
    
    // console.log(elemento.target);
    const parent = elemento.target.parentNode;
    // console.log(parent.id)

    await api.dbDELETE(parent.id);    
}

fetch("http://localhost:3001/productos")
    .then(respuesta => {
        const borrar = document.querySelectorAll(".delete");
        
        // console.log(borrar);
        // borrar.forEach(elemento => console.log(elemento.id));

        borrar.forEach(elemento => elemento.addEventListener("click", e => borrarCarta(e)));
    })
    .catch(error => console.log("No se han encontrado datos"));
