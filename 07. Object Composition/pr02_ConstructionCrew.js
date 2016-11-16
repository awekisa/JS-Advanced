function solve(worker){
    if (worker.handsShaking === true){
        let alcohol = function(weight, experience){return worker.weight * worker.experience * 0.1};
        worker.bloodAlcoholLevel += alcohol((worker.weight, worker.experience));
        worker.handsShaking = false;
    }
    return worker;
}

console.log(solve ({ weight: 120,
    experience: 20,
    bloodAlcoholLevel: 200,
    handsShaking: true }
))

