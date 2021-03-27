var btnsubmit=$(".btn")

var form = $(".form-")
var namei = $("#name")
var emaili = $("email")
var passwordi = $("password")

form.submit(function(event){
    event.preventDefault()
    console.log("submited")
    var name= event.target.name.value
    var email= event.target.email.value
    var password= event.target.password.value
    console.log(name,email,password)
    
   
})
$("p").hide()

$(document).ready(function() {
    $(':input[type="submit"]').prop('disabled', true);
    $('input[type="text"]').keyup(function() {
       if($(this).val() != '') {
          $(':input[type="submit"]').prop('disabled', false);
          $(".p1").hide()
          namei.css("border","2px solid green");
          namei.css("outline","green")
       }
       else if($(this).val()==''){
           $("input[type='submit']").prop("disabled",true);

        namei.css("border","2px solid red");
        namei.css("outline","red")
        $(".p1").show()

       }
    });
});

$(document).ready(function(){
    $("input[type='submit']").prop("disabled",true)
    $("input[type='email']").keyup(function(){
        if($(this).val() != ''){
            $("input[type='submit']").prop("disabled",false);
            emaili.css("border","2px solid green")
            emaili.css("outline","2px solid green")
            $(".p2").hide()
        }
        else if($(this).val()==""){
            $("input[type='submit']").prop("disabled",true);
            emaili.css("border","2px solid red");
            emaili.css("border","2px solid red");
            $(".p2").show()
        }
    })
})


$(document).ready(function(){
    $("input[type='submit']").prop("disabled",true)
    $("input[type='password']").keyup(function(){
        if($(this).length()>=8){
            passwordi.css("border","2px solid green")
            passwordi.css("outline","green")
            $("p3").hide
        }
        else if ($(this).length()<8){
            $("input[type='submit']").prop("disabled",true);
            passwordi.css("border","2px solid red")
            passwordi.css("outline","red")
        }
    })
})



// namei.click(function(event){
//    if($("input[type='text']").val()==''){
//     namei.css("border","2px solid red")
//     namei.css("outline","red")
//     $("p").show() 
//    }else if($("input[type='text']").val()!=''){
//        namei.css("border","2px solid green")
//    }
// })

// emaili.click(function(event){
//     emaili.css("border", " 2px solid red ")
//     emaili.css("outline","red")
//     $("p").show()
    
// })

// passwordi.click(function(event){
//     emaili.css("border", " 2px solid red ")
//     emaili.css("outline","red")
//     $("P").show()

// })