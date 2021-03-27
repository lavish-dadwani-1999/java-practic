

// weak 7 1

// if(navigator.geolocation){
//     navigator.geolocation.getCurrentPosition(successcallback,errcallback)
// }
// else{
//     console.log("opps.. my bad:() ")
// }   


// function successcallback(rest){
//     // console.log(rest.coords.latitud,rest.coords.longitude);
//     console.log(rest)
// }
// function errcallback(err){
//     console.log( err)
// }


// storage

// local storage
// does not remove even if you close windows

localStorage.setItem("name","lavish")


var crosserr ="https://corsanywhere.herokuapp.com/"
var reqres ="https://reqres.in/api/users"

// default method is "GET"
// fetch(crosserr+reqres)
// .then(function(rest){
//     // convert into json foprmat
//     return (rest.json())
// })
// .then(function(responce){
//     return (responce.data)
// })
// .then(function(result){
//     console.log( typeof result)
//     console.log(result)
//     //  convert to json.strinify
  
//     var resultJSON=JSON.stringify(result)
//     //  store into local storage
//     localStorage.setItem("user",resultJSON)
// })
// .catch(function(err){
//     console.log(err)
// })


// returning from cach

function fetchpost(){
    // hear we are fetching from local storage or catch
    var users =localStorage.getItem("user")

    if(users !==null){
        console.log("fetching from catch")
        var userarray =JSON.parse(users)
        return new Promise (function(resolve){
            resolve(userarray)
        })
//     hear we are 
    }else{
        console.log("fetching from local storage")
       var userdata= fetch(crosserr+reqres)
        .then(function(rest){
            return rest.json()
        })
        .then(function(result){
            return result.data
        })
        .then(function(results){
            var resultsJSON= JSON.stringify(results)
            localStorage.setItem("user",resultsJSON)
            return results
        })
        .catch(function(err){
            console.log(err)
        })
       return userdata
    }
}

fetchpost()
.then(function(result){
    console.log(result)
})
.catch(function(err){
    console.log(err)
})