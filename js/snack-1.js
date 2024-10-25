//Snack 1
// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore.

//creo un array di oggetti
const biciDaCorsa = [
	//oggetto bici a
	{
		nome: "biciA",
		peso: "1kg",
	},
	//oggetto bici b
	{
		nome: "biciB",
		peso: "2kg",
	},
	//oggetto bici c
	{
		nome: "biciC",
		peso: "3kg",
	},
	//oggetto bici d
	{
		nome: "biciD",
		peso: "4kg",
	},
];

//stampo l'array con tutti gli oggetti
console.log(biciDaCorsa);

//stampo l'oggetto bici con peso minore
console.log(biciDaCorsa[0]);
