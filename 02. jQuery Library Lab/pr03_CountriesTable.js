function initializeTable(){
    $('#createLink').click(createCountry);
    appendCountryToTable('Bulgaria', "Sofia");
    appendCountryToTable("Germany", 'Berlin');
    appendCountryToTable('Russia', 'Moscow');
    fixRowLinks();

    function createCountry(){
        let country = $('#newCountryText').val();
        let capital = $('#newCapitalText').val();

        appendCountryToTable(country, capital, true);
        $('#newCountryText').val('');
        $('#newCapitalText').val('');
        fixRowLinks();
    }

    function appendCountryToTable(countryName, countryCapital) {
        let row = $('<tr>')
            .append($('<td>').text(countryName))
            .append($('<td>').text(countryCapital))
            .append($('<td>')
                .append($("<a href='#'>[Up]</a>").click(moveRowUp))
                .append(' ')
                .append($("<a href='#'>[Down]</a>").click(moveRowDown))
                .append(' ')
                .append($("<a href='#'>[Delete]</a>").click(deleteRow))
            );
        row.css('display', 'none');
        $('#countriesTable').append(row);
        row.fadeIn();
    }

    function moveRowUp() {
        let row = $(this).parent().parent();
        row.fadeOut(function(){
            row.insertBefore(row.prev());
            row.fadeIn();
            fixRowLinks();
        });

    }

    function moveRowDown() {
        let row = $(this).parent().parent();
        row.fadeOut(function(){
            row.insertAfter(row.next());
            row.fadeIn();
            fixRowLinks();
        });
    }

    function deleteRow() {
        let row = $(this).parent().parent();
        row.fadeOut(function(){
            row.remove();
            fixRowLinks();
        });
    }

    function fixRowLinks(){
        $('#countriesTable a').css('display', 'inline');

        // hide up if first data row
        let tableRows = $('#countriesTable tr');
        $(tableRows[2]).find("a:contains('Up')").css('display', 'none');

        // hide Down if last row
        $(tableRows[tableRows.length-1]).find("a:contains('Down')").css('display', 'none');
    }
}