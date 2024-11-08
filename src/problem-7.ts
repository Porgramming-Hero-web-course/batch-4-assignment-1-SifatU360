{
    //
    
    class Car  {
        constructor(
            public make: string,
            public model: string,
            public year: number,
        ) {}
    
        getCarAge(): number {
            let currentYear = new Date().getFullYear();
            return currentYear - this.year;
             
        }
    }
    
    // const car = new Car('Honda', 'Civic', 2016);
    // console.log(car.getCarAge());

    
    
    //
}