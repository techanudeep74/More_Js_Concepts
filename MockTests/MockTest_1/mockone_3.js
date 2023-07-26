const myArray = ["x", "y", "z"];
const getLength = (...args) => {
    console.log(args.length);
};
getLength(...myArray);
