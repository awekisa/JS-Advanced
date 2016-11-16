function search(){
    let text = $('#searchText').val();
    let count = 0;

    $('#towns li').each((index, item) => {
        if (item.textContent.includes(text)){
            $(item).css('font-weight', 'bold');
            count++;
        }
        else{
            $(item).css('font-weight', '');
        }
    });
    $('#result').text(count + ' matches found.');
}