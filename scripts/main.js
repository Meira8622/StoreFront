// aiudaan

async function dbGET() {
    const database = await fetch("http://localhost:3001/productos");
    const dbConversion = await database.json();
    // console.log(conversion)
    return dbConversion
}

async function dbPOST(imagen,nombre,precio,id) {
    const database = await fetch("http://localhost:3001/productos", {
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

export const api = {
    dbGET, dbPOST
}