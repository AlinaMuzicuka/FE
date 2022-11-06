//Level 1
let server_url = "https://gorest.co.in/public/v2/users/30";

fetch(server_url, {
    method: 'PUT',
    headers: {
        "Content-type" : "application/json",
        "authorization" : "Bearer 405d36c7bccc375c423be2fcc058b9d7299d142e7f911c8a00e1d5686a11c24b"
    },
    body: JSON.stringify({
        "name": "Alina",
        "email": "alina.muzicuka@gmail.com",
        "status": "active"
    }),
})
.then(function(res){ return res.json(); })
.then((data) => {console.log(data);
    if(data.status == "200"){
        console.log(data);
    }
});
fetch(server_url, {
    method: 'GET',
    headers: {
        "Content-type" : "application/json",
        "authorization" : "Bearer 405d36c7bccc375c423be2fcc058b9d7299d142e7f911c8a00e1d5686a11c24b"
    }
})
.then(function(res){ return res.json(); })
.then((data) => {console.log(data);
    if(data.status == "200"){
        console.log(data);
    }
    else {
        alert('SUCCESS!');
    }
});

