var priceChange += randomPriceChange();
var priceCurrent = 0




function randomNumber(min, max) {
	return Math.floor(Math.random() * (1 + max - min) + min);
}

//Generates random starting price for Fruit
function randomStartPrice() {
	return (Math.random() * (0.5 - 9.99) + 9.99).toFixed(2);
	// between .50
}
randomStartPrice();

function randomPriceChange() {
	return (Math.random() * (0.01 - 0.5) + 0.5).toFixed(2);
}
randomPriceChange();


for (var i = 0; i <2; i++) {
	priceChange += randomNumber(0, 9);
	console.log(priceChange);
}
