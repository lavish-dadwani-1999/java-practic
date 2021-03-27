//ass w61
// var array=[]

// var body=document.querySelector(".some-1")
// // var buttontag=`<button style="border-radius: 5px ; background: blue;color: #fff;">POP</button>`
// // body.insertAdjacentHTML("beforebegin",buttontag)

// for (var index=0;
//     index <=10;
//     index = index +1){
//     valu=prompt("enter the number")
//     array.push(valu)
//     if (array.length===9){
//         console.log("the limit reached")
//         break
//     }else if(valu==="enough"){
//         break
//     }
//     var postitem=` <div style="font-size: 30px;font: roboto;color: red;font: bold;height: 50px;
//     width: 400px;border: 3px solid red;background: yellow;margin: 10px 0;text-align: center;justify-content: center;"
//     <p>${valu}</p>
    
//     </div>`
//     body.insertAdjacentHTML("afterbegin",postitem)
    

// }
// console.log(array)

// var buttontag =document.querySelector("button")

// function callback (event){
//     array.pop()
//     body.children[0].remove();
// }

// buttontag.addEventListener("click",callback)

// w63 jquery version
var array=[]

var divtag= $(".some-1")

for (index=0;
    index<=4;
    index=index+1){
        value=prompt("Enter The Number  ")
        array.push(value)
        if (array.length===10){
            console.log("limit reached")
            break
        }else if(value=="enough"){
            break
        }
        var postitem=` <div style="font-size: 30px;font: roboto;color: red;font: bold;height: 50px;
           width: 400px;border: 3px solid red;background: yellow;margin: 10px 0;text-align: center;justify-content: center;"
             <p>${value}</p>
                 </div>`

   
     divtag.after(postitem)
    }
console.log(array)

$("button").click(function(){
    array.pop();
    
    
   
})
