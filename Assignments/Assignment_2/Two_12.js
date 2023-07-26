const passengers = [
    {
        name: "Rahul",
        destination: "Hyderbad"
    },
    {
        name: "Varakumar",
        destination: "Vijayawada"
    }
];
function BusTicket(passenger){
    this.passengerName = passenger.name;
    this.destination = passenger.destination;
    this.getDetails = function(){
        return `${this.passengerName} ${this.destination}`;
    }
}
const passenger1 = new BusTicket(passengers[1]);
console.log(passenger1.getDetails());