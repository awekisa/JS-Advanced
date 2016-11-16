function solve(order){
    // engines
    let engines = {
        small: {power: 90, volume: 1800},
        normal: {power: 120, volume: 2400},
        monster: {power: 200, volume: 3500}
    }
    // carriage
    let carriage = {
        hatchback: {type: 'hatchback', color: ''},
        coupe: {type: 'coupe', color: ''}
    }

    //compose car
    let car = {};

    let orderModel = order.model;
    let orderedPower = order.power;
    let orderedColor = order.color;
    let orderCarriage = order.carriage;
    let orderWheelsize = order.wheelsize;

    car.model = orderModel;
    car.engine = pickEngine(orderedPower);
    car.carriage = {type: orderCarriage, color: orderedColor};
    car.wheels = pickTyres(orderWheelsize);

    function pickEngine(minPower){
        let engine = {};
        if (minPower <= 90){
            engine = JSON.parse(JSON.stringify(engines.small));
        }
        else if (minPower <= 120){
            engine = JSON.parse(JSON.stringify(engines.normal));
        }
        else{
            engine = JSON.parse(JSON.stringify(engines.monster));
        }
        return engine;
    }

    function pickTyres(wheelSize){
        let size = (wheelSize % 2 === 1)? wheelSize : wheelSize - 1;
        return [size, size, size, size]
    }
    return car;
}

console.log(solve({ model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17 }

))