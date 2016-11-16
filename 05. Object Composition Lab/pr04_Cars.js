function cars(commands){
    let map = new Map();
    let commandProcessor = {
        create: function([object, ,parentObject]){
            let parObj = parentObject ? map.get(parentObject) : null;
            let obj = Object.create(parObj);
            map.set(object, obj);
        },
        set: function([name, key, value]){
           let obj = map.get(name);
            obj[key] = value;
        },
        print: function([name]){
            let obj = map.get(name);
            let objects = [];
            for(let key in obj){
                objects.push(`${key}:${obj[key]}`);
            }
            console.log(objects.join(', '));
        }

    }
    for (let line of commands){
        let arr = line.split(' ');
        let command = arr.shift();
        commandProcessor[command](arr);
    }
}

cars(['create c1',
    'create c2 inherit c1',
    'set c1 color red',
    'set c2 model new',
    'print c1',
    'print c2']
)