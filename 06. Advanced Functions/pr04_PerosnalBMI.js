function bmi(name, age, weight, height) {

    let bmi = Math.round(weight /(height/100 * height/100));
    let status = checkStatus(bmi);

    function checkStatus(bmi){
        if (bmi < 18.5){
            return 'underweight';
        }
        else if (bmi < 25){
            return 'normal';
        }
        else if (bmi < 30){
            return 'overweight';
        }
        else{
            return 'obese';
        }
    }

    let patient = {

        name: name,
        personalInfo: {
            age: age,
            weight: weight,
            height: height
        },
        BMI: bmi,
        status: status
    }
    if (status === 'obese'){
        patient.recommendation = 'admission required';
    }
    return patient;
}

console.log(bmi("Honey Boo Boo", 9, 57, 137))