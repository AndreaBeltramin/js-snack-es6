// Snack 3 (Bonus)
// Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.

const numberArray = [1, 10, 20, 30, 50, 75, 87, 93];

const newArray = [];

function myFunction(array, a, b) {
	array.forEach((element) => {
		if (element > a && element < b) {
			newArray.push(element);
		}
	});
}

myFunction(numberArray, 1, 93);
console.log(newArray);
