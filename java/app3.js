// // w5 4
// var message = "hi there"
// function outerfunction(){
//     message="hello there"
//     function innerfunction(){
//         message ="bye there"
//         console.log("innar function called ",message)
//     }

//     innerfunction();
//     console.log("outer function called "+message)
    
// }
// console.log("window object called " +message);
// outerfunction();
// console.log("still windows object called "+message)

// // currying function
// function a(){
//     return function b(){
//        return function c(){
//             return( "this is the third level ")
//         }
//     }
// }
// console.log(a()()())
// var b=a()
// var c=b()
// var text=c()
// console.log(text)

// // w55
// function checknumber(callback,number){
//     var errmessage = null;
//     if(number < 10){
//         errmessage="the number is less than 10";
//         callback(errmessage,null);


//     } else if(number>20){
//         errmessage="number is more than 20";
//         callback(errmessage,null);
//     } else{
//         callback(null,"the number "+ number +  " is between 10 and 20 ")
//     }
// }

// function callback(err,result){
//     console.log(err,result)
//     if(err !==null){
//         console.log("error "+err)
//     }
// }

// checknumber(callback,21)

// assig w55

// var firstp=document.getElementsByTagName("p");
// console.log(firstp)




// var divhero = document.getElementsByClassName("hero-section")
// console.log(divhero)
// var ptag = document.querySelector("p");
// console.log(ptag)


// var ptag = document.querySelector("h1");
// console.log(ptag)

// var h2element = document.querySelector("h2")
// function clickme(){
//     console.log("i am clicked")
// }
// h2element.addEventListener("click",clickme)

// note w61
console.log("conected")

var h2tag = document.querySelector("h2");

// h2tag.textContent = "hey lavish";

h2tag.innerHTML= "<div>hey lavish</div>";

var ultag =document.createElement("ul")
var litag= document.createElement("li")
var divele=document.createElement("div")
litag.textContent="lavish hear"
ultag.append(litag)
divele.append(ultag)
console.log(divele)
var body=document.querySelector("script")
body.insertAdjacentElement("beforebegin",divele)

var htmlblock=`
<div class="something">
<h2 style="color: green;background-color: grey;">hello worls</h2>
</div>`

document.body.insertAdjacentHTML("afterbegin",htmlblock)

var circle=document.createElement("div")
circle.classList.add("circle")
body.p(circle)


// w62 note
