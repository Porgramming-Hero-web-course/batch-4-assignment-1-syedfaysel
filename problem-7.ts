{
  class Car {
    make: string;
    model: string;
    year: number;

    constructor(make: string, model: string, year: number) {
      this.make = make;
      this.model = model;
      this.year = year;
    }

    getCarAge(): number {
      const currYear = new Date().getFullYear();
      const age = currYear - this.year;
      // console.log(age);
      return age;
    }
  }

  const car = new Car("Honda", "Civic", 2018);
  console.log(car.getCarAge());
}
