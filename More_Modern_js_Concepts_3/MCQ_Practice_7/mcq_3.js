let teacher = {
    name: "Vijay",
    age: 45, 
    subject: "Physcis",
    getSubject: () => {
        console.log(this.subject);
    }
};
teacher.getSubject();