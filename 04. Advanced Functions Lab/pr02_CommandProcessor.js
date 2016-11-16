function processCommands (commands){
    let process = (function () {
        let result = '';

        return{
            'append': (value) => result += value,
            'removeStart': (value) => result = result.slice(Number(value)),
            'removeEnd': (value) => result = result.slice(0, result.length - Number(value)),
            'print': () => console.log(result)
        }
    })();
    for (let line of commands) {
        [command, value] = line.split(' ');
        process[command](value);
    }
}

processCommands(['append hello',
    'append again',
    'removeStart 3',
    'removeEnd 4',
    'print']
)






