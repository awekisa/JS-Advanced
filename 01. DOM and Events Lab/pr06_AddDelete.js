function addItem() {
    let text = document.getElementById('newText').value;
    let newLi = document.createElement('li');
    newLi.appendChild(document.createTextNode(text + " "));
    let span = document.createElement('span');
    span.innerHTML = "<a href='#'>[Delete]</a>";
    span.firstElementChild.addEventListener('click', deleteItem);
    newLi.appendChild(span);
    document.getElementById('items').appendChild(newLi);
    document.getElementById('newText').value = '';
    function deleteItem() {
        let li = this.parentNode.parentNode;
        let ul = li.parentNode;
        ul.removeChild(li);
    }
}