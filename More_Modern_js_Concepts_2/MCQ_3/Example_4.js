let collegeFee = haveScholarship => {
    let result = haveScholarship ? "20000 rupees" : "50000 rupees";
    return result;
}
console.log(collegeFee(true));