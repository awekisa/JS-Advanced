class CheckingAccount{
    constructor(clientId, email, firstName, lastName){
        let idRegex = /^\d{6}$/;
        if (!idRegex.test(clientId)){
            throw TypeError('Client ID must be a 6-digit number');
        }
        let emailRegex = /^[a-zA-Z]+@[a-zA-Z.]+$/;
        if (!emailRegex.test(email)){
            throw TypeError('Invalid e-mail');
        }
        let nameRegex = /^[a-zA-Z]+$/;
        if (firstName.length < 3 || firstName.length > 20){
            throw TypeError('First name must be between 3 and 20 characters long')
        }
        else if(!nameRegex.test(firstName)){
            throw TypeError('First name must contain only Latin characters');
        }
        if (lastName.length < 3 || lastName.length > 20){
            throw TypeError('Last name must be between 3 and 20 characters long')
        }
        else if(!nameRegex.test(lastName)){
            throw TypeError('Last name must contain only Latin characters');
        }

        this.clientId = clientId;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
        this.products = [];
    }
}


let c = new CheckingAccount('123456', 'a@a', 'ssssssssssssssssssss', 'sss')