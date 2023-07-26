const rohit = {
    runs: 123
};
const virat = rohit;
rohit.runs = 88;
console.log(`Rohit scored ${rohit.runs} runs`);
console.log(`${virat.runs}`);