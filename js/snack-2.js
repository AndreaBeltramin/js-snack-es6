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
	squadreCalcio[i][fallisubiti] = numeroRandom;
}
console.log(arrayRandom);

// for (let i = 0; i < squadreCalcio; i++) {
// 	for (let i = 0; i < arrayRandom; i++) {
// 		squadreCalcio[i]["fallisubiti"] = arrayRandom[i];
// 	}
// }

console.log(squadreCalcio);

// squadreCalcio[i]["fallisubiti"] = arrayRandom[i];
// squadreCalcio[i]["fallisubiti"] = arrayRandom[i];
// squadreCalcio[i]["fallisubiti"] = arrayRandom[i];
// squadreCalcio[i]["fallisubiti"] = arrayRandom[i];
// squadreCalcio[i]["fallisubiti"] = arrayRandom[i];
