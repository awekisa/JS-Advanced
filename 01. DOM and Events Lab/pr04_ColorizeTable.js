function colorize(){
    let table = document.querySelectorAll('table tr');
    let i = 1;
    for (let row of table){
        if (i % 2 == 0){
            row.style.background = 'Teal';
        }
        i++;
    }
}