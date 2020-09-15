const getBtn = document.getElementById("get-Btn");
const postBtn = document.getElementById("post-Btn");

getBtn.addEventListener('click', getData);
postBtn.addEventListener('click', postData);

function getData() {
    sendHttpRequest('GET','https://reqres.in/api/users')
    .then(responseData =>{
        console.log(responseData);
    });
}

function postData() {
 sendHttpRequest('POST','https://reqres.in/api/register',{
    email: 'eve.holt@reqres.in',
    //password: 'pistol'
 }).then(responseData =>{
     console.log(responseData);
 }).catch(err =>{
     console.log(err,err.data);
 })
}

function sendHttpRequest (method,url,data){
    return fetch(url,{
        method: method,
        body: JSON.stringify(data),
        headers : data ? {'Content-Type' : 'application/json'} : {}
    })
    .then(response =>{
        if(response.status >= 400){
            return response.json().then(errData=> {
                const error = new Error('Something went wrong');
                error.data = errData;
                throw error;
            })
        }
        return response.json();
    })
    
}