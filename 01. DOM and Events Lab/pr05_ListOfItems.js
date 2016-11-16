function addItem(){
    let text = document.getElementById('newItemText').value;
    let newLi = document.createElement('li');
    newLi.appendChild(document.createTextNode(text));
    newLi.textContent = text;
    document.getElementById('items').appendChild(newLi);
    document.getElementById('newItemText').value = '';
}