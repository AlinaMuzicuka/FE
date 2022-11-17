let url = "https://1ae0-37-186-127-62.eu.ngrok.io";
const posts = document.querySelectorAll('.gallery-item');

posts.forEach(post => {
	post.addEventListener('click', () => {
		//Get original image URL
		const imgUrl = post.firstElementChild.src.split("?")[0];
		//Open image in new tab
		window.open(imgUrl, '_blank');
	});
});

(function (){
    
    fetch(url + "/me",
    {
        method: 'GET',
        headers:
        {
            "Content-type" : "application/json",
            "Access-Control-Allow-Origin": "*",
            "User-Agent" : "telran",
            "ngrok-skip-browser-warning": "69420",
            "x-access-token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzZhYjU1Y2U0NjQ4NzEzYTc1NGZjZDkiLCJpYXQiOjE2Njg1NDQ4MDQsImV4cCI6MTY2ODU1MjAwNH0.GUOnoge13TABlTesiItx2pFVieluH6QMuXR8JrJ82DU"
        }
    }).then (data => data.json())
    .then(data => { 
        console.log(data);
        document.getElementById("userAvatar").src = data.avatar;
        document.getElementById("username").innerHTML = data.username;
        document.getElementById("userBio").innerHTML = data.bio;
        document.getElementById("fullname").innerHTML = data.fullName;
    });
    fetch(url + "/posts", {
        method: 'GET',
        headers:
        {
            "Content-type" : "application/json",
            "Access-Control-Allow-Origin": "*",
            "User-Agent" : "telran",
            "ngrok-skip-browser-warning": "69420",
            "x-access-token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzZhYjU1Y2U0NjQ4NzEzYTc1NGZjZDkiLCJpYXQiOjE2Njg1NDQ4MDQsImV4cCI6MTY2ODU1MjAwNH0.GUOnoge13TABlTesiItx2pFVieluH6QMuXR8JrJ82DU"
        }
    }).then (data => data.json())
    .then(data => {
        console.log(data);
        for (let i = 0; i < data.length-1; i++) {
            let post = `<div class='gallery-item' tabindex='0'><img class='gallery-image' src='${data[i].image}' /><div class='gallery-item-type'><p>${data[i].title}</p></div></div>`;
            document.getElementById("items").innerHTML += post;
        }
    })
}())