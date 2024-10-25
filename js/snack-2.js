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

const arrayRandom = [];
for (let i = 1; i <= 5; i++) {
	const numeroRandom = Math.floor(Math.random() * 30);
	arrayRandom.push(numeroRandom);
}

console.log(arrayRandom);

squadreCalcio[0]["fallisubiti"] = arrayRandom[i];
squadreCalcio[1]["fallisubiti"] = arrayRandom[i];
squadreCalcio[2]["fallisubiti"] = arrayRandom[i];
squadreCalcio[3]["fallisubiti"] = arrayRandom[i];
squadreCalcio[4]["fallisubiti"] = arrayRandom[i];

console.log(squadreCalcio);
