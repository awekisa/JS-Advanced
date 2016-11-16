function processCommands(commands){
    let comProcessor = (function(){
        let list = [];
        return {
            add: (str) => list.push(str),
            remove: (str) => list = list.filter(x => x != str),
            print: () => console.log(list.join(','))
        }
    })();

    for (let line of commands){
        [command, str] = line.split(' ');
        comProcessor[command](str);
    }
}

processCommands(['add hello', 'add again', 'remove hello', 'add again', 'print'])