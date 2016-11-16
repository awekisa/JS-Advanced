function deleteByEmail(){
    let email = document.getElementsByName("email")[0].value;
    let tableEmails = document.querySelectorAll('#customers tr td:nth-child(2)');
    for (let td of tableEmails){
        if (td.textContent === email){
            let row = td.parentNode;
            row.parentNode.removeChild(row);
            document.getElementById('result').textContent = 'Deleted.';
            return;
        }
        document.getElementById('result').textContent = "Not found.";
    }
}