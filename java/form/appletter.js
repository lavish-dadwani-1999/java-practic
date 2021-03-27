// console.log("conected")

// var array =["abcdefghijklmnopqrstuvwxyz"]



// // function deciper(callback,text,key){
// //     for (index = 1;
// //         index<=text.length();
// //         index=index + 1)
// //         {
// //             for(index=1;
// //                 index<=25;
// //                 index=index+1){

// //                 }

// // }

// function deciper(callback,text,key){
//     setTimeout(function(){
              
//     },3000)
// }


var text = prompt("Enter text to be deciphered");
var keyfrmUser = prompt("Enter the key");
var key = parseInt(keyfrmUser);

function decipher(text,key, callBackErr) {
    if((!isNaN(text))){
        callBackErr("You have entered an invalid text", null);      
    } else if (isNaN(key)){
     callBackErr ("You have entered an invalid key. Only numbers allowed", null);
    } else {
        
            var newTextArray = [];
            
            for(i=0; i<text.length; i++){
                console.log(text.charAt(i));
                console.log(text.charCodeAt(i));
                var t = text.charCodeAt(i);
                              
                t = t + key ;

                //small letters
                if((text.charCodeAt(i) >= 97) && (text.charCodeAt(i) <= 122 )){
                    console.log("entering small letters");
                if(t>122) t = ((t-122) + 96);
                }

                //capital letters
                if((text.charCodeAt(i) >= 65) && (text.charCodeAt(i) <= 90 )){
                    console.log("entering capital letters");
                    if(t>90) t = ((t-90) + 64);
                }                

                console.log("t after addition", t);
                var newchar = String.fromCharCode(t)
                console.log(newchar);
                
                newTextArray.push(newchar);
        
            }
        
            console.log("newTextArray", newTextArray);
            var result = newTextArray.join("");
            console.log("Result is" + result);
            callBackErr ( null, "Deciphered code for ( " + text +  " ," + key + ") is " + result );
        
    }
}

function callBackErr (err,result){
    if(err != null) alert(err);
    else{
        console.log("Entering result");
        alert(result);
    }

}

console.log("Just before calling");

//decipher function is being called by the SetTimeout method of 5s
setTimeout(decipher,5000,text,key, callBackErr);

//This process has been added to demonstrate that error message or result will be displayed after this process is over
function process1(){
    for (i=0; i<=100; i++) {
        console.log(i);
    }
   console.log("Process 1 is complete")
}

process1();