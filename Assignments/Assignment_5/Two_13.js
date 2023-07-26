function createNewArray(){
    const items = [12, 24, 36];
    const newItem = [];
    items.forEach((item) => newItem.push(item + item + 2));
    console.log(newItem);
}
createNewArray();
// [ 26, 50, 74 ]