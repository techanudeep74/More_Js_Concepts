function book(author, title){
    return {
        author: author,
        title: title,
        red: function(){
            console.log(this);
        }
    };
}
const book1 = book("Stan Lee", "The Fantastic Four");
book1.red();
function blog(author, title){
    return {
        author,
        title,
        save: () => {
            console.log(this);
        }
    };
}
/*
Statement 1: In the read method, this refers to the book1 object.
Statement 2: In the save method, this refers to the window object.
*/