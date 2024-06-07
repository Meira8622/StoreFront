import { api } from "./main.js";
import { crearCarta } from "./get.js";
import { borrarCarta } from "./delete.js";

const form = document.querySelector("[data-form]")
const mostrador = document.querySelector(".elements-showcase");

async function cartaNueva(form) {
    form.preventDefault();

    const imagen = document.querySelector("[data-img]").value;
    const nombre = document.querySelector("[data-name]").value;
    const precio = document.querySelector("[data-price]").value;
    const id = `${await card()}`;

    console.log(nombre,precio,id);


    try {      
        await api.dbPOST(imagen,nombre,precio);
    }
    catch {
        console.log("POST error");
    }

    try {
        // const id = await card();
        console.log(id)

        mostrador.appendChild(crearCarta(imagen,nombre,precio,id));

        const botonBorrar = document.getElementById(`${id}`);
        console.log(botonBorrar);

        botonBorrar.addEventListener("click", e => borrarCarta(e));
    }
    catch {
        console.log("fuck");
    }

    // fetch(api.apiURL)
    // .then(() => {
    //     console.log(document.getElementById(`${id}`));
    // })
}

async function card() {
    const db = await api.dbGET();
    // console.log(db);
    
    const dbLength = Object.keys(db).length;
    console.log(dbLength);

    // console.log(db[dbLength-1].id);

    // const elemento = await fetch(`${api.apiURL}/${db[dbLength-1].id}`)
    // const conversion = await elemento.json();
    // console.log(conversion);
    // console.log(conversion.nombre)

    // console.log(db[dbLength-1].id);

    // return db[dbLength-1].id;
    if(dbLength>0) {
        console.log("db length>0");
        console.log(db[dbLength-1].id);
        console.log(db[dbLength-1]);

        const nextId = parseInt(db[dbLength-1].id)
        console.log(nextId+1)

        // return (db[dbLength-1].id)+1;

        return nextId+1;
    } else {
        console.log("no hay elementos");
        return 1;
    }
}

card();

form.addEventListener("submit", e => cartaNueva(e))

document.querySelector("[data-clear-button]").addEventListener("click", event => {
    document.querySelector("[data-img]").value = "";
    document.querySelector("[data-name]").value = "";
    document.querySelector("[data-price]").value = "";
})