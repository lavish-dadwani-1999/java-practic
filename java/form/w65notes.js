// w65 notes

// 

// var data =[
//     {number:3,  load:5000},
//     {number:5, load:3000},
//     {number:4, load:1000}
          
// ]
// function product(numberdata){
//     console.log("function called");
//      var promise= new Promise(function(resolve,rejected){
//         setTimeout(function(){
//             if(numberdata.number ** 2 > 30){
//                 rejected("the square is more than 30")

//             }else {
//                 resolve(numberdata.number ** 2)
//             }

//         },numberdata.load)
        
//     });return promise
// }
//  option 1
//  we just want  the array of square like [20 , 25 ,36]  but we are geting the array  one by  one  added
// form the first option of the promise   
//  var promises =[]

// for (var numberdata of data){
//     product(numberdata)
//     .then(function(result){
//         promises.push(result)
//         console.log(promises)
//     })
//     .catch(function(err){
//         alert(err)
//     })
// }
// console.log(promises)

// if we console.log() the line 45 ti 51 we will get all the promises in an array   and then we will print promise.all()
// this is option 2

// var promises = []

// for (var numberdata of data){
//     var pro = product(numberdata);
//     promises.push(pro)
// }
// console.log(promises)

// // Promise.all()
// // if the promise stop in sec. no. the entire promise will stop in bettween
// Promise.all(promises)
// .then(function(result){
//     console.log(result)
// })
// .catch(function(err){
//     console.log(err)
// })

// option 3 promise.Settled()


// Promise.allSettled(promises)
// .then(function(result){
//     console.log(result)
// })
// .catch(function(err){
//     console.log(err)
// })




// http request 

var proxy ='https://corsanywhere.herokuapp.com/'

//this is how you get data from github as promise and convert to text  


// fetch(proxy+"https://github.com")
// .then(function(result){
//     return result.text()
// })
// .then(function(rest){
//     console.log(rest)
// })
// .catch(function(err){
//     console.log(err)
// })

// this is how we get data and convert to a json formate
// pahala sa get par set hota h , you  can change ti get ,post ,delet....etc 


//getting user
var baseurl=`https://reqres.in`


fetch(`${baseurl}/api/users`,{
    method:"GET"
})
.then(function(result){
    return result.json()
})
.then(function(rest){
    console.log(rest.data)

})
.catch(function(err){
    console.log(err)
})

// creating user

var newuser={ name:"lavish" ,  job:"student"}

fetch(`${baseurl}/api/users`,{
  method:"POST",
  body: JSON.stringify(newuser),
  headers:{
      "content-type":"application/json"

  }
})
.then(function(result){
    return result.json()
})
.then(function(rest){
    console.log(rest)
})
.catch(function(err){
    console.log(err)
})


// var updateuser={name:"ronit", job:"CA"}

// fetch(`${baseurl}/api/users/649`,{
//     method:"PUT",
//     body:JSON.stringify(updateuser),
//     headers:{
//         'content-Type':'application/json'
//     }  
// })
// .then(function(result){
//     return result.json()

// })
// .then(function(rest){
//     console.log(rest)

// })
// .catch(function(err){
//     console.log(err)
// })

fetch(`${baseurl}/api/users/802`,{
    method:"DELETE"
})
.then(function(rest){
    console.log(rest)
})
.catch(function(err){
    console.log(err)
})