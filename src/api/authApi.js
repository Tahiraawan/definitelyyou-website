export function createAccount(data){
    return fetch('http://ec2-50-17-231-251.compute-1.amazonaws.com:4001/api/user_auth/signup',
    {
        method: 'POST',
        headers: {
            'Content-Type':'application/json',

        },
        body:JSON.stringify(data)
    });
}

export function loginUser(data){
    return fetch('http://ec2-50-17-231-251.compute-1.amazonaws.com:4001/api/user_auth/login',
    {
        method: 'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify(data)
    });
}