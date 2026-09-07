const fotos = [
    "2015-01-28 11.20.15.jpg",
    "Avenida Marítima vaya foto.jpg",
    "Chicas .JPG",
    "Costa hacia Papagayo 08.jpg",
    "DSCF1299.JPG",
    "DSCF1300.JPG",
    "DSCF1302.JPG",
    "DSCF1303.JPG",
    "DSCF1304.JPG",
    "DSCF1305.JPG",
    "DSCF1306.JPG",
    "DSCF1307.JPG",
    "DSCF1308.JPG",
    "DSCF1309.JPG",
    "DSCF1311.JPG",
    "DSCF1312.JPG",
    "DSCF1313.JPG",
    "DSCF1315.JPG",
    "DSCF1316.JPG",
    "DSCF1317.JPG",
    "DSCF1318.JPG",
    "DSCF1319.JPG",
    "DSCF1320.JPG",
    "DSCF1321.JPG",
    "DSCF1322.JPG",
    "DSCF1323.JPG",
    "DSCF1324.JPG",
    "DSCF1325.JPG",
    "DSCF1326.JPG",
    "DSCF1327.JPG",
    "DSCF1328.JPG",
    "DSCF1329.JPG",
    "DSCF1330.JPG",
    "DSCF1331.JPG",
    "DSCF1332.JPG",
    "DSCF1333.JPG",
    "DSCF1334.JPG",
    "DSCF1335.JPG",
    "DSCF1336.JPG",
    "DSCF1337.JPG",
    "DSCF1339.JPG",
    "DSCF1340.JPG",
    "DSCF1341.JPG",
    "DSCF1343.JPG",
    "DSCF1344.JPG",
    "DSCF1345.JPG",
    "DSCF1346.JPG",
    "DSCF1347.JPG",
    "DSCF1348.JPG",
    "DSCF1349.JPG",
    "DSCF1350.JPG",
    "DSCF1352.JPG",
    "DSCF1353.JPG",
    "DSCF1354.JPG",
    "DSCF1355.JPG",
    "DSCF1356.JPG",
    "DSCF1357.JPG",
    "DSCF1358.JPG",
    "DSCF1359.JPG",
    "DSCF1360.JPG",
    "DSCF1361.JPG",
    "DSCF1362.JPG",
    "DSCF1363.JPG",
    "DSCF1364.JPG",
    "DSCF1365.JPG",
    "DSCF1366.JPG",
    "DSCF1367.JPG",
    "DSCF1368.JPG",
    "DSCF1369.JPG",
    "DSCF1370.JPG",
    "DSCF1371.JPG",
    "Hotel 10.jpg",
    "Hotel 18.jpg",
    "Interior cueva 02.JPG",
    "Interior cueva 04.JPG",
    "Interior cueva lago 03.JPG",
    "Isla Cristina. Puerto y pueblo.JPG",
    "Jose Ramón 01.JPG",
    "Jose Ramón 02.JPG",
    "Las chicas pueblerinas .jpg",
    "Los Jameos 05 Pili en la cueva.JPG",
    "Los Jameos 38 muchas Totes.JPG",
    "Los Jameos 39 las chicas en manada.JPG",
    "Obus con Tote y Jose R.JPG",
    "P1010026.JPG",
    "Parque Timanfaya 13 asador.JPG",
    "Parque Timanfaya 16 viendo asar pollos.JPG",
    "Parque Timanfaya 17 viendo asar pollos.JPG",
    "Parque Timanfaya 18 JR, Tote, Pili.JPG",
    "Parque Timanfaya 19 Tote y Pili.JPG",
    "Paseo marítimo Tote y JR.JPG",
    "Pili, Tote y Jose Ramon en Mirador del Río.JPG",
    "Piscina Lago agua salada y panoramica hotel.JPG",
    "Piscina Lago y comedor 05.JPG",
    "Pissssss.JPG",
    "Puente acceso Castillo San Gabriel.JPG",
    "Recorrido en camello 01.jpg",
    "Recorrido en camello 02 Jose R.JPG",
    "Rest Juan el Majorero 04, trompis.jpg",
    "Restaurante Juan el Majorero 01.jpg",
    "Volcán de la Corona, panorámica.JPG",
    "Yaiza, los tres .jpg",
    "nuestras habitaciones.JPG",
    "piscina agua dulce climatizada 01.JPG",
    "playa piedras 01.jpg"
];

const galeria = document.getElementById("galeria");
const numeroFotos = document.getElementById("numeroFotos");

const visor = document.getElementById("visor");
const fotoGrande = document.getElementById("fotoGrande");
const contador = document.getElementById("contador");

const cerrar = document.getElementById("cerrar");
const anterior = document.getElementById("anterior");
const siguiente = document.getElementById("siguiente");

let fotoActual = 0;


/* CONTADOR DE FOTOS */

numeroFotos.textContent = fotos.length;


/* CREAR GALERÍA */

fotos.forEach((nombre, indice) => {

    const img = document.createElement("img");

    img.src = "./" + nombre;
    img.alt = "Foto " + (indice + 1);

    img.addEventListener("click", () => {
        abrirVisor(indice);
    });

    galeria.appendChild(img);
});


/* ABRIR VISOR */

function abrirVisor(indice) {

    fotoActual = indice;

    fotoGrande.src = "./" + fotos[fotoActual];

    contador.textContent =
        (fotoActual + 1) + " / " + fotos.length;

    visor.classList.add("activo");
}


/* CERRAR VISOR */

function cerrarVisor() {
    visor.classList.remove("activo");
}

cerrar.addEventListener("click", cerrarVisor);


/* FOTO SIGUIENTE */

siguiente.addEventListener("click", () => {

    fotoActual++;

    if (fotoActual >= fotos.length) {
        fotoActual = 0;
    }

    fotoGrande.src = "./" + fotos[fotoActual];

    contador.textContent =
        (fotoActual + 1) + " / " + fotos.length;
});


/* FOTO ANTERIOR */

anterior.addEventListener("click", () => {

    fotoActual--;

    if (fotoActual < 0) {
        fotoActual = fotos.length - 1;
    }

    fotoGrande.src = "./" + fotos[fotoActual];

    contador.textContent =
        (fotoActual + 1) + " / " + fotos.length;
});


/* CERRAR TOCANDO FUERA DE LA FOTO */

visor.addEventListener("click", (e) => {

    if (e.target === visor) {
        cerrarVisor();
    }
});


/* TECLADO */

document.addEventListener("keydown", (e) => {

    if (!visor.classList.contains("activo")) {
        return;
    }

    if (e.key === "ArrowRight") {
        siguiente.click();
    }

    if (e.key === "ArrowLeft") {
        anterior.click();
    }

    if (e.key === "Escape") {
        cerrarVisor();
    }
});


/* DESLIZAR CON EL DEDO */

let inicioX = 0;

visor.addEventListener("touchstart", (e) => {

    inicioX = e.touches[0].clientX;

});


visor.addEventListener("touchend", (e) => {

    const finalX = e.changedTouches[0].clientX;

    const diferencia = finalX - inicioX;

    if (Math.abs(diferencia) < 50) {
        return;
    }

    if (diferencia < 0) {
        siguiente.click();
    } else {
        anterior.click();
    }

});
