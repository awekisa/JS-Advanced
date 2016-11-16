function calc(){
    let num1 = document.getElementById('num1');
    let num2 = document.getElementById('num2');
    console.log(num1 + ' ' + num2)
    let sum = num1 + num2;
    document.getElementById('sum').value = sum;
}