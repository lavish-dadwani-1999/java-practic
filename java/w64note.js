// w64 notes syn and async

// function addtwonumber(callback , a,b){
//     setTimeout(function(){
//         var sum=a+b
//         if(sum>=20){
//             callback(" the number is greater than 20",null)
//         }
//         else{
//             callback(null,sum);
//         }

//     },5000);

// }

// function callback(err,result){
//     if(err==null){
//         console.log(`process is sucessful hear is the result ${result}`)

//     }
//     else if(err!=null){
//         alert(`error${err}`)
//     }
// }
// addtwonumber(callback,10,10)

function addtwonumberpromise(a,b){
   return new Promise(function(resolve,reject){
        setTimeout(function(){
           var sum =a+b
           if(sum > 20){
               reject("the number is greater than 20")
           }
           else{resolve(`process sucessful hear is the result ${sum}`)}


        },5000)
    })
}

// you can use more than 1 .then() or .catch() to chain the promise  see the result first understand

addtwonumberpromise(11,4)
.then(function(result){
    return(`hello ${result}`)
})
.then(function(frestlt){
    return(`hey ${frestlt}`)

})
.then(function(sresult){
    throw new Error ("error: this sucks")
    console.log(sresult)
})
.catch(function(error){
    alert(`error: ${error}`)

})