// const fetchURL = "http://localhost:3001/productos";
const fetchURL = "https://diverse-spaniel-53614.upstash.io/set/user_1_session/session_token_value";

async function dbGET() {
    const database = await fetch(fetchURL);
    const dbConversion = await database.json();
    // console.log(conversion)
    return dbConversion
}

async function dbPOST(imagen,nombre,precio,id) {
    const database = await fetch(fetchURL, {
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
    const database = await fetch(`${fetchURL}/${elementId}`, {
        method: "DELETE",
        headers:{"content-type":"application/json"}
    })
}

export const api = {
    dbGET, dbPOST, dbDELETE, fetchURL
}