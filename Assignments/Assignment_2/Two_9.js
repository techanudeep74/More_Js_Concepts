function createNotes(){
    return {
        book : "Classmate",
        pen: "Reynolds",
        start: () => {
            return 'Write';
        }
    };
}
const notes = createNotes();
console.log(notes.start());