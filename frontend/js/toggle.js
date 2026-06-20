
var users = [
    {
        "name": "John Doe",
        "gender": "male",
        "image": "../images/john.png"
    },
    {
        "name": "Jane Doe",
        "gender": "female",
        "image": "../images/jane.png"
    }
]

var curId = 0;

function toggle() {
    // toggle curId from 0 to 1 and 1 to 0
    curId = (curId + 1) % 2;

    //toggle renered user details
    //image
    var user = users[curId];
    document.getElementById("user-img").src = user.image;
    document.getElementById("user-name").innerText = user.name;
    document.getElementById("user-gender").innerText = user.gender;
}