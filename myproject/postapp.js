let _headers = {
  "Content-type": "application/json",
  "Access-Control-Allow-Origin": "*",
  "User-Agent": "telran",
  "ngrok-skip-browser-warning": "69420",
  "x-access-token": localStorage.getItem("token"),
};
let url = "http://65.109.13.139:9191";
const posts = document.querySelectorAll(".gallery-item");

posts.forEach((post) => {
  post.addEventListener("click", () => {
    //Get original image URL
    const imgUrl = post.firstElementChild.src.split("?")[0];
    //Open image in new tab
    window.open(imgUrl, "_blank");
  });
});
document.getElementById("logout").addEventListener("click", function () {
  try {
    new Promise((resolve, reject) => {
      resolve();
    })
      .then(function () {
        return logOut();
      })
      .then(function () {
        location.href = "login.html";
      });
  } catch (error) {
    location.href = "404.html";
  }
});
document.getElementById("delete").addEventListener("click", function () {
  try {
    new Promise((resolve, reject) => {
      resolve();
    })
      .then(function () {
        return deleteAccount();
      })
      .then(function () {
        location.href = "login.html";
      });
  } catch (error) {
    location.href = "404.html";
  }
});
document.getElementById("edit").addEventListener("click", function () {
  try {
    newInfo();
  } catch (error) {
    location.href = "404.html";
  }
});
document.getElementById("_posts").addEventListener("click", function () {
  try {
    _posts();
  } catch (error) {
    location.href = "404.html";
  }
});
function newInfo() {
  fetch(url + "/me", {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "User-Agent": "telran",
      "ngrok-skip-browser-warning": "69420",
      "x-access-token": localStorage.getItem("token"),
    },
    body: JSON.stringify({
      avatar:
        "https://gravatar.com/avatar/a91426f0e0178ab184d31c537fa434ed?s=400&d=robohash&r=x",
      age: "23",
      bio: "Am student in Tel-Ran",
      fullName: "Volodymyr Ziubrytskyi",
    }),
  })
    .then((data) => data.json())
    .then((data) => {
      console.log("ID is: ", data._id);
      console.log("Name is: ", data.username);
      console.log("Age is: ", data.age);
      console.log("Avatar is: ", data.avatar);
    });
}
(function () {
  requests.prototype.get(`${url}/me`, showMe);
  requests.prototype.get(`${url}/posts`, postShow);
})();
async function logOut() {
  await fetch(url + "/destroy-session", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "User-Agent": "telran",
      "ngrok-skip-browser-warning": "69420",
      "x-access-token": localStorage.getItem("token"),
    },
  }).then((data) => {
    localStorage.clear();
  });
}
async function deleteAccount() {
  await fetch(url + "/me", {
    method: "DELETE",
    headers: {
      "Content-type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "User-Agent": "telran",
      "ngrok-skip-browser-warning": "69420",
      "x-access-token": localStorage.getItem("token"),
    },
  }).then((data) => {
    localStorage.clear();
  });
}
function _posts() {
  fetch(url + "/post", {
    method: "POST",
    headers: _headers,
    body: JSON.stringify({
      title: "Post 9",
      description: "blablallajztfdtc",
      status: "active",
      image:
        "https://gravatar.com/avatar/b26c0003d0c13d0176f4465d6c94ea49?s=400&d=robohash&r=x",
    }),
  }).then((data) => {});
}
