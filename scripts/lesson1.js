let userNameElement = document.getElementById("user-name");
console.log(userNameElement);
userNameElement.onmouseover = (evt) =>{
  userNameElement.style.color ="green";
};
userNameElement.onmouseout = (evt) =>{
    userNameElement.style.color ="inherit";
};

let userNameInput =  prompt("Welcome to our site\n can we get your Name Please:","");
if(userNameInput === "")
{
    //alert("You didn't supply a valid name, are you Mad?");
}
else{
    userNameElement.innerText = userNameInput;
}
