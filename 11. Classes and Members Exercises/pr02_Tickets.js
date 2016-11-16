function solve(arr, criteria){
    class Ticket{
        constructor(destination, price, status){
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }
    let finalArr = [];
    for (let line of arr){
        let ticketInfo = line.split('|');
        let destination = ticketInfo[0];
        let price = Number(ticketInfo[1]);
        let status = ticketInfo[2];
        let ticket = new Ticket(destination, price, status);
        finalArr.push(ticket);
    }

    finalArr.sort((a, b) => {
        if(criteria === 'price'){
            return a[criteria] - b[criteria];
        }
            return a[criteria].localeCompare(b[criteria]);
    });

    return finalArr;
}

console.log(solve(['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'],
    'destination'))