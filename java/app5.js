// // w62 note

// var googlelink = document.querySelector("a")

// googlelink.addEventListener("click",function (event){
//     event.preventDefault()
//     console.log("goggle welcome you");
// });


// var googlelink = document.querySelector("a")

// googlelink.addEventListener("click",function (event){
//     if (event.target.getAttribute("href"))
//     console.log("goggle welcome you");
// });


// var googlelink = document.querySelector("a")

// googlelink.addEventListener("click",function (event){
//     if (event.target.getAttribute("href")==="http://google.com"){
//         event.preventDefault();
//         console.log("you cannot go further")
//         return;
//     }
//     console.log("we have been redirected to google");
// });

// var loginform= document.querySelector("form")

// submit exclusive for form  before .preventdefault() you can see url polluted
// loginform.addEventListener("submit",function(event){
//     event.preventDefault()
//     console.log("form submited")
// }
// )


// ?how you can get value in consle
// loginform.addEventListener("submit",function(event){
//     event.preventDefault()
//     console.log("form submited",event.target)
//     var email= event.target.email;
//     var password= event.target.password
//     console.log(email.value,password.value)

// }
// )


// w62 assig

// 1. Find all h1 elements that are children of a div element and apply a background to them

var divtag =$("div")
console.log(divtag.children().css("background-color","red"))

$("form").hide()

$("div").before("<div><h1 > JQuery Core </h1 ></div>")