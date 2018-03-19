// In this example we will discuss destructing...
var sandwich = {
	bread: "dutch crunch",
	meat: "tuna",
	cheese: "swiss",
	toppings: ["lettuce", "tomato", "mustard"]
}
var {bread, meat} = sandwich
console.log(bread, meat) // dutch crunch tuna

var {cheese,toppings} = sandwich;
console.log(cheese,toppings);

// declarative vs imperative programming...
// Imperative Approach
var string = "This is the midday show with Cheryl Waters";
var urlFriendly = "";
for (var i=0; i<string.length; i++) {
if (string[i] === " ") {
urlFriendly += "-";
} else {
urlFriendly += string[i];
}
}
console.log(urlFriendly);

// Declarative Programming

const String = "This is the mid day show with Cheryl Waters"
const urlFriendly2 = String.replace(/ /g, "-")
console.log(urlFriendly2)

console.log('----------------------------------')

// Immutablility In JavaScript..
let color_lawn = {
	title: "lawn",
	color: "#9012F1",
	rate :2 
}

function rateColor (color,rating){
	// color.rate = rating;
	// return color;
	return Object.assign({},color,{rate:rating})
}
console.log(rateColor(color_lawn,12).rate);
console.log(color_lawn.rate);

console.log("---------------------");

console.log(Array(5));
[...Array(5)].map(function(n,i) {
	console.log(i);
});