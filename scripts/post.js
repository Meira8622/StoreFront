import { api } from "./main.js";

const form = document.querySelector("[data-form]")

async function carta(form) {
    form.preventDefault();

    const imagen = document.querySelector("[data-img]").value;
    const nombre = document.querySelector("[data-name]").value;
    const precio = document.querySelector("[data-price]").value;

    console.log(nombre,precio)

    try {      
        await api.dbPOST(imagen,nombre,precio);
    }
    catch {
        console.log("POST error");
    }
}

form.addEventListener("submit", e => carta(e))
