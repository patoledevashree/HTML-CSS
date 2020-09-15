var getBtn = document.getElementById("get-Btn");
var postBtn = document.getElementById("post-Btn");

getBtn.addEventListener('click', getData);
postBtn.addEventListener('click', postData);


function sendHttpRequest(method, url, data) {
    var promise = new Promise((resovle, reject) => {
        var xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.responseType = 'json';

        if (data) {
            xhr.setRequestHeader('Content-Type', 'application/json');
        }


        xhr.onload = () => {
            if (xhr.status >= 400) {
                reject(xhr.response);
            } else {
                resovle(xhr.response);
            }

        };
        xhr.send(JSON.stringify(data));
    });
    return promise;
}

function getData() {
    sendHttpRequest('GET', 'https://reqres.in/api/users').then(responseData => {
        console.log(responseData);
    });
}

function postData() {
    sendHttpRequest('POST', 'https://reqres.in/api/register', {
        email: 'eve.holt@reqres.in',
        password: 'pistol'
    }).then(responseData => {
        console.log(responseData);
    }).catch(err => {
        console.log(err);
    })
}