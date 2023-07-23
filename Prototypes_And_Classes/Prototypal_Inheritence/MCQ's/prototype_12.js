function Hospital(name, patientsCount){
    this.name = name;
    this.patientsCount = patientsCount;
    this.getPaitentCount = function(){
        return this.patientsCount;
    };
}
Hospital.prototype.getHospitalName = function(){
    return this.name;
}
const hospital1 = new Hospital("Apolo", 50);
console.log(Object.getOwnPropertyNames(hospital1));