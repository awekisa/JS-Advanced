function requestValidator(obj) {
    let uriCheck = /^([a-zA-z0-9.]+)$|^(\*)$/g.test(obj.uri);
    if (!obj.hasOwnProperty('method') || !/^(GET|POST|DELETE|CONNECT)$/g.test(obj.method)) {
        throw new Error('Invalid request header: Invalid Method');
    }
    if (!obj.hasOwnProperty('uri') || !uriCheck) {
        throw new Error('Invalid request header: Invalid URI');
    }
    if (!obj.hasOwnProperty('version') || !/HTTP\/0.9|HTTP\/1.0|HTTP\/1.1|HTTP\/2.0/g.test(obj.version)) {
        throw new Error('Invalid request header: Invalid Version');
    }
    if (!obj.hasOwnProperty('message') || !/^[^<>&'"\\]*$/g.test(obj.message)) {
        throw new Error('Invalid request header: Invalid Message');
    }
    return obj;
}

console.log(requestValidator(
    {
        method: 'GET ',
        uri: 'sd',
        message: '',
        version: 'HTTP/1.1'
    }
))