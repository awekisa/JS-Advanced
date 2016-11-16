function createBook(wrapper, title, author, isbn){
    let id = $(wrapper).children().toArray().length + 1;

               let bookDiv = $('<div>');
               bookDiv.attr('id', 'id');

               bookDiv.attr('id', 'book'+id);
               let titlePar = $('<p>').append(title);
               titlePar.addClass('title');
               titlePar.text(title);
               titlePar.appendTo(bookDiv);
               let authorPar = $('<p>').append(author);
               authorPar.addClass('author');
               authorPar.text(author);
               authorPar.appendTo(bookDiv);
               let isbnPar = $('<p>').append(isbn);
               isbnPar.text(isbn);
               isbnPar.addClass('isbn');
               isbnPar.appendTo(bookDiv);
               let selectBtn = $('<button>');
               selectBtn.on('click', function(){
                   bookDiv.css('border', '2px solid blue');
               });
               selectBtn.text('Select');
               selectBtn.appendTo(bookDiv)
               let deselectBtn = $('<button>');
               deselectBtn.on('click', function(){
                   bookDiv.css('border', 'none')
               });
               deselectBtn.text('Deselect');
               deselectBtn.appendTo(bookDiv);


               bookDiv.appendTo(wrapper);

           }




