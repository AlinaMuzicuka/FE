function postShow(data){
    for (let i = 0; i <= data.length-1; i++) {
        let post = `<div class='gallery-item' tabindex='0'><img class='gallery-image' src='${data[i].image}' /><div class='gallery-item-type'><p>${data[i].title}</p></div></div>`;
        document.getElementById("items").innerHTML += post; 
    }
}
function showMe(data){
    console.log(data);
        document.getElementById("userAvatar").src = data.avatar;
        document.getElementById("username").innerHTML = data.username;
        document.getElementById("userBio").innerHTML = data.bio;
        document.getElementById("fullname").innerHTML = data.fullName;
        localStorage.setItem("id", data._id);
}