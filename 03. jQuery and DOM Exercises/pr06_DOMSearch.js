// VIDEO
// function domSearch(selector, cs) {
//
//     function addElement(){
//         let element = $('.add-controls').find('input').val();
//         let item = $(`<li class="list-item>"><a class="button">X</a><strong>${element}</strong></li>`);
//
//         item.find('a').click(deleteElement);
//         $('.items-list').append(item);
//     }
//
//     function deleteElement(){
//         $(this).parent().remove();
//     }
//
//     function search(){
//         let word = $('.search-controls').find('input').val();
//         if (!cs){
//             word = word.toLowerCase();
//         }
//         let items = $('.items-list li');
//
//         for (let i = 0; i < items.length; i++){
//             let item = items.eq(i);
//             let compWord = item.find('strong').text();
//             if(!cs){
//                 compWord = compWord.toLowerCase();
//             }
//             if (!compWord.includes(word)){
//                 items.eq(i).css('display', 'none');
//             }
//             else{
//                 items.eq(i).removeAttr('style');
//             }
//
//         }
//     }
//
//     function generateHTML(selector) {
//         let add_controls = $(`<div class="add-controls"><label>Enter text: <input></label><a class="button" style="display: inline-block;">Add</a></div>`);
//         let search_controls = $(`<div class="search-controls"><label>Search: <input></label></div>`);
//         let result_controls = $(`<div class="result-controls"><ul class="items-list"></ul></div>`);
//
//         add_controls.find('a').click(addElement)
//         search_controls.find('input').change(search);
//
//         $(selector).append(add_controls);
//         $(selector).append(search_controls);
//         $(selector).append(result_controls);
//     }
//     generateHTML(selector, cs);
// }

function domSearch(selector, caseType) {
    let addControls = $('<div>')
        .addClass('add-controls')
        .append($('<label>').text('Enter text:').append($('<input>')))
        .append($('<a>')
            .addClass('button')
            .css('display', 'inline-block')
            .text('Add')
            .click(function () {
                let elementText = $('label input');
                let newElement = $('<li>')
                    .addClass('list-item')
                    .append($('<a>').addClass('button').text('X').click(function () {
                        $(this).parent().remove();
                    }))
                    .append($('<strong>').text(elementText.val().trim()));

                $('ul.items-list').append(newElement);
                elementText.val('');
            }));

    let searchControls = $('<div>')
        .addClass('search-controls')
        .append($('<label>').text('Search:').append($('<input>')
            .on('input', function () {
                let needle = $(this).val();
                let items = $('.list-item strong').toArray();
                for (let item of items) {
                    let current = $(item);

                    if (caseType) {
                        if (current.text().indexOf(needle) < 0) {
                            current.parent().css('display', 'none')
                        } else {
                            current.parent().css('display', '')
                        }
                    } else {
                        if (current.text().toLowerCase().indexOf(needle.toLowerCase()) < 0) {
                            current.parent().css('display', 'none')
                        } else {
                            current.parent().css('display', '')
                        }
                    }

                }
            })));

    let resultControls = $('<div>').addClass('result-controls')
        .append($('<ul>').addClass('items-list'));

    $(selector)
        .append(addControls)
        .append(searchControls)
        .append(resultControls);
}