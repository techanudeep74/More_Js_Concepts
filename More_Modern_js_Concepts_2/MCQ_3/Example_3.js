let mobiles = [
    {
        name: "Samsung Galaxy S10",
        ram: "128 GB",
        price: 58800.00
    },
    {
        name: "Apple iPhone 7",
        price: 23989.00
    }
];
for(let eachMobile of mobiles){
    let result = eachMobile.price <= 30000 ? "Low" : "High";
    console.log(`The ${eachMobile.name} cost is ${result}.`);
}