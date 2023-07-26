const convertToObject1 = (item, category) => ({item, category});
const convertToObject2 = (item, category) => {item, category};
console.log(convertToObject1("Face Cream", "Cosmetics"));
console.log(convertToObject2("Cricket Bat", "Sports"));
//{ item: 'Face Cream', category: 'Cosmetics' } undefined