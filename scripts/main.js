// const apiURL = "http://localhost:3001/productos";
const apiURL = "https://665cf951e88051d6040526f3.mockapi.io/api/:endpoint";

async function dbGET() {
    const database = await fetch(apiURL);
    const dbConversion = await database.json();
    // console.log(conversion)
    return dbConversion
}

async function dbPOST(imagen,nombre,precio,id) {
    const database = await fetch(apiURL, {
        method:"POST",
        headers:{"content-type":"application/json"},
        body: JSON.stringify({
            imagen:imagen,
            nombre:nombre,
            precio:precio
        })
    });
    const dbConversion = await database.json();
    return dbConversion;
}

async function dbDELETE(elementId) {
    const database = await fetch(`${apiURL}/${elementId}`, {
        method: "DELETE",
        headers:{"content-type":"application/json"}
    })
}

export const api = {
    dbGET, dbPOST, dbDELETE, apiURL
}