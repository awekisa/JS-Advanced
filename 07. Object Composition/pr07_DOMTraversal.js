function domHighlight(selector){
    let start = $(selector);
    let maxDepth = 0;
    let maxDepthElement = '';

    function setDepth(depth, element){
        if (depth > maxDepth){
            maxDepth = depth;
            maxDepthElement = element;
        }
        let children = $(element).children();
        children.each((index, element) => setDepth(depth+1, element));
    }

    setDepth(1, start);
    let jQueryElement = $(maxDepthElement)
    jQueryElement.addClass('highlight');
    while (maxDepth){
        maxDepth--;
        jQueryElement.addClass('highlight');
        jQueryElement = jQueryElement.parent();
    }
}

domHighlight('#wrapper')