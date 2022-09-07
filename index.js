const equiposGrupoC = ["Argentina", "Arabia Saudita", "Mexico", "Polonia"];

const fixture =

// PRIMERA FECHA: ARGENTINA VS ARABIA SAUDITA

partido1 = equiposGrupoC[0]+" vs. "+equiposGrupoC[1];
alert("Primera fecha:"+" "+partido1);

equipo0 = prompt(equiposGrupoC[0])
equipo1 = prompt(equiposGrupoC[1])

if (equipo0 > equipo1) {
    resultadoequipo0PrimerPartido = 3;
    resultadoequipo1PrimerPartido = 0;
    alert("Ganó "+equiposGrupoC[0]);
}
else if (equipo0 < equipo1) {
    resultadoequipo0PrimerPartido = 0;
    resultadoequipo1PrimerPartido = 3;
    alert("Ganó "+equiposGrupoC[1]);
}
else if (equipo0 === equipo1) {
    resultadoequipo0PrimerPartido = 1;
    resultadoequipo1PrimerPartido = 1;
    alert("Empate");
}

// PRIMERA FECHA: MEXICO VS POLONIA

partido2 = equiposGrupoC[2]+" vs. "+equiposGrupoC[3];
alert("Primera fecha:"+" "+partido2);

equipo2 = prompt(equiposGrupoC[2])
equipo3 = prompt(equiposGrupoC[3])

if (equipo2 > equipo3) {
resultadoequipo2PrimerPartido = 3;
resultadoequipo3PrimerPartido = 0;
alert("Ganó "+equiposGrupoC[2]);
}
else if (equipo2 < equipo3) {
resultadoequipo2PrimerPartido = 0;
resultadoequipo3PrimerPartido = 3;
alert("Ganó "+equiposGrupoC[3]);
}
else if (equipo2 === equipo3) {
resultadoequipo2PrimerPartido = 1;
resultadoequipo3PrimerPartido = 1;
alert("Empate");
}

//POSICIONES PRIMERA FECHA
totalArgentinaPrimeraFecha = resultadoequipo0PrimerPartido
totalArabiaPrimeraFecha = resultadoequipo1PrimerPartido
totalMexicoPrimeraFecha = resultadoequipo2PrimerPartido
totalPoloniaPrimeraFecha = resultadoequipo3PrimerPartido

alert("Puntos Primera Fecha:"+" "+
    (equiposGrupoC[0]+" "+ totalArgentinaPrimeraFecha)+" / "+
    (equiposGrupoC[1]+" "+ totalArabiaPrimeraFecha)+" / "+
    (equiposGrupoC[2]+" "+ totalMexicoPrimeraFecha)+" / "+
    (equiposGrupoC[3]+" "+ totalPoloniaPrimeraFecha));


//Segunda fecha: Argentina - Mexico
partido3 = equiposGrupoC[0]+" vs. "+equiposGrupoC[2];
alert("Segunda fecha:"+" "+partido3);

equipo00 = prompt(equiposGrupoC[0])
equipo22 = prompt(equiposGrupoC[2])

if (equipo00 > equipo22) {
resultadoequipo0SegundoPartido = 3;
resultadoequipo2SegundoPartido = 0;
alert("Ganó "+equiposGrupoC[0]);
}
else if (equipo00 < equipo22) {
resultadoequipo0PrimerPartido = 0;
resultadoequipo2PrimerPartido = 3;
alert("Ganó "+equiposGrupoC[2]);
}
else if (equipo00 === equipo22) {
resultadoequipo0PrimerPartido = 1;
resultadoequipo2PrimerPartido = 1;
alert("Empate");
}

//Segunda fecha: Arabia Saudita - Polonia
partido4 = equiposGrupoC[1]+" vs. "+equiposGrupoC[3];
alert("Segunda fecha:"+" "+partido4);

equipo11 = prompt(equiposGrupoC[1])
equipo33 = prompt(equiposGrupoC[3])

if (equipo11 > equipo33) {
resultadoequipo1SegundoPartido = 3;
resultadoequipo3SegundoPartido = 0;
alert("Ganó "+equiposGrupoC[1]);
}
else if (equipo11 < equipo33) {
resultadoequipo1SegundoPartido = 0;
resultadoequipo3SegundoPartido = 3;
alert("Ganó "+equiposGrupoC[3]);
}
else if (equipo11 === equipo33) {
resultadoequipo1SegundoPartido = 1;
resultadoequipo3SegundoPartido = 1;
alert("Empate");
}

//POSICIONES SEGUNDA FECHA
totalArgentinaSegundaFecha = resultadoequipo0PrimerPartido + resultadoequipo0SegundoPartido
totalArabiaSegundaFecha = resultadoequipo1PrimerPartido + resultadoequipo1SegundoPartido
totalMexicoSegundaFecha = resultadoequipo2PrimerPartido + resultadoequipo2SegundoPartido
totalPoloniaSegundaFecha = resultadoequipo3PrimerPartido + resultadoequipo3SegundoPartido

alert("Puntos Segunda Fecha:"+" "+
    (equiposGrupoC[0]+" "+ totalArgentinaSegundaFecha)+" / "+
    (equiposGrupoC[1]+" "+ totalArabiaSegundaFecha)+" / "+
    (equiposGrupoC[2]+" "+ totalMexicoSegundaFecha)+" / "+
    (equiposGrupoC[3]+" "+ totalPoloniaSegundaFecha));


//Tercera fecha: Argentina - Polonia
partido5 = equiposGrupoC[0]+" vs. "+equiposGrupoC[3];
alert("Quinto partido:"+" "+partido5);

equipo000 = prompt(equiposGrupoC[0])
equipo333 = prompt(equiposGrupoC[3])

if (equipo000 > equipo333) {
resultadoequipo0TercerPartido = 3;
resultadoequipo3TercerPartido = 0;
alert("Ganó "+equiposGrupoC[0]);
}
else if (equipo000 < equipo333) {
resultadoequipo0TercerPartido = 0;
resultadoequipo3TercerPartido = 3;
alert("Ganó "+equiposGrupoC[3]);
}
else if (equipo000 === equipo333) {
resultadoequipo0TercerPartido = 1;
resultadoequipo3TercerPartido = 1;
alert("Empate");
}

//Tercera fecha: Arabia Saudita vs. Mexico
partido6 = equiposGrupoC[1]+" vs. "+equiposGrupoC[2];
alert("Sexto partido:"+" "+partido6);

equipo111 = prompt(equiposGrupoC[1])
equipo222 = prompt(equiposGrupoC[2])

if (equipo111 > equipo222) {
resultadoequipo1TercerPartido = 3;
resultadoequipo2TercerPartido = 0;
alert("Ganó "+equiposGrupoC[1]);
}
else if (equipoequipo111 < equipo222) {
resultadoequipo1TercerPartido = 0;
resultadoequipo2TercerPartido = 3;
alert("Ganó "+equiposGrupoC[2]);
}
else if (equipo111 === equipo222) {
resultadoequipo1TercerPartido = 1;
resultadoequipo2TercerPartido = 1;
alert("Empate");
}

//POSICIONES TERCERA FECHA
totalArgentinaTerceraFecha = resultadoequipo0PrimerPartido + resultadoequipo0SegundoPartido + resultadoequipo0TercerPartido
totalArabiaTerceraFecha = resultadoequipo1PrimerPartido + resultadoequipo1SegundoPartido + resultadoequipo1TercerPartido
totalMexicoTerceraFecha = resultadoequipo2PrimerPartido + resultadoequipo2SegundoPartido + resultadoequipo2TercerPartido
totalPoloniaTerceraFecha = resultadoequipo3PrimerPartido + resultadoequipo3SegundoPartido + resultadoequipo3TercerPartido

alert("Puntos Tercera Fecha:"+" "+
    (equiposGrupoC[0]+" "+ totalArgentinaTerceraFecha)+" / "+
    (equiposGrupoC[1]+" "+ totalArabiaTerceraFecha)+" / "+
    (equiposGrupoC[2]+" "+ totalMexicoTerceraFecha)+" / "+
    (equiposGrupoC[3]+" "+ totalPoloniaTerceraFecha));
    

let posicionesFinales = [totalArgentinaTerceraFecha, totalArabiaTerceraFecha, totalArabiaTerceraFecha, totalPoloniaTerceraFecha];
posicionesFinales.sort();
alert(posicionesFinales)

/* 
alert(Math.max(55, 13, 0, -25, 93, 4))


 */
  /*  &&
    || */
