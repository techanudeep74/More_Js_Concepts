let oscarWinner1 = ["Satyajit Ray", "A.R Rahman", "Gulzar"];
let oscarWinner2 = ["Bhanu Autaiya", "A.R Rahman", ...oscarWinner1];
let lastOccurenceOfRahman = oscarWinner2.lastIndexOf("A.R Rahman");
console.log(lastOccurenceOfRahman);

// Output : 3
