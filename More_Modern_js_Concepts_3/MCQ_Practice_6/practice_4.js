let driver = {
    name: "John",
    age: 30,
    vechile: "Bus",
    getVechile: () => {
        console.log(this.vechile);
    }
};
driver.getVechile();