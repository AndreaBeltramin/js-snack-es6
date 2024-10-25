// Snack 2
// Creare un array di oggetti di squadre di calcio.
//  Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l'unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà "punti" fatti e "falli subiti".
// Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

//creo un array di oggetti di squadre di calcio
const squadreCalcio = [
	(milan = {
		nome: "milan",
		puntifatti: 0,
		fallisubiti: 0,
	}),
	(inter = {
		nome: "inter",
		puntifatti: 0,
		fallisubiti: 0,
	}),
	(juventus = {
		nome: "juventus",
		puntifatti: 0,
		fallisubiti: 0,
	}),
	(napoli = {
		nome: "napoli",
		puntifatti: 0,
		fallisubiti: 0,
	}),
	(fiorentina = {
		nome: "fiorentina",
		puntifatti: 0,
		fallisubiti: 0,
	}),
];

// squadreCalcio[0].fallisubiti = Math.floor(Math.random() * 30);
// squadreCalcio[1].fallisubiti = Math.floor(Math.random() * 30);
// squadreCalcio[2].fallisubiti = Math.floor(Math.random() * 30);
// squadreCalcio[3].fallisubiti = Math.floor(Math.random() * 30);
// squadreCalcio[4].fallisubiti = Math.floor(Math.random() * 30);

// squadreCalcio[0].puntifatti = Math.floor(Math.random() * 30);
// squadreCalcio[1].puntifatti = Math.floor(Math.random() * 30);
// squadreCalcio[2].puntifatti = Math.floor(Math.random() * 30);
// squadreCalcio[3].puntifatti = Math.floor(Math.random() * 30);
// squadreCalcio[4].puntifatti = Math.floor(Math.random() * 30);

//uso un foreach per assegnare un numero random ai punti fatti e ai falli subiti
squadreCalcio.forEach((squadra) => {
	squadra.puntifatti = Math.floor(Math.random() * 30);
	squadra.fallisubiti = Math.floor(Math.random() * 30);
});

console.log(squadreCalcio);

//compongo un nuovo array conntenente i nomi delle squadra e i falli
const newArray = squadreCalcio.map((squadra) => {
	return { nome: squadra.nome, fallisubiti: squadra.fallisubiti };
});

//stampo il nuovo array
console.log(newArray);
