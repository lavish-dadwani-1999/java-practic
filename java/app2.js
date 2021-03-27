// // for(var counter=100; counter>=1; counter=counter-2){
      
// //          console.log(counter);
// //      }

// // array
// var array=[1,2,2,3,6,456,78,6,5];

// for(counter=0;
//     counter<=array.length-1;
//     counter=counter+1){
//         console.log(array[counter],"index"+counter)
//     }

// // of loop
// for(val of array){
//     console.log(val);
// }

// // traversing through object
// var lavish = {
//     name:"lavish dadwani",
//     age:21,
//     location:"raipur",
//     ismacholder:true,
// };
// for (value in lavish){
//     // if (value==="ismacholder"){
//     //     console.log("we have reached the limit")
//     //     break
//     // }
//     console.log(typeof value,lavish[value])
// }

// for(a in array){
//     console.log(typeof a,a)
// }

//  assig w51
//  var players = [
//     { name : "Roger Federer" , rank : 1 },
//     { name : "Rafel Nadal" , rank : 2 },
//     { name : "Nalbandian" , rank : 12 },
//     { name : "Andy Murray" , rank : 14 },
//     { name : "Andy Roddick" , rank : 4 },
//     { name : "Pete Sampras" , rank : 3 },
//     { name : "Rod Laver" , rank : 190 },
//     { name : "Andre Agassi" , rank : 11 },
//     { name : "Novak Djokovic" , rank : 5 },
//     { name : "Arthur Ashe" , rank : 8 },
//     ];
// for(value in players){
//     if(players[value].rank<=10){
//         console.log(players[value].name)
//     }
// }
// assig w52
// function star(starpatten){
// for(value=0;
//     value<=starpatten;
//     value=value+1){
//         console.log("*".repeat(value))}
//     for(counter=starpatten-1;
//     counter>=0;
//     counter=counter-1){
//     console.log("*".repeat(counter))
//             }
//     }


// star(10)
var a=[7,6,6,5]
var b=[7,6,4,5]

for(value of a){
    if (a[value]===b[value]){
        console.log("same")
    }else{console.log("not same")}
}

function person(name,age,profession){
    this.name=name;
    this.age=age;
    this.profession=profession;

}
person.prototype.introduce=function(){
    return ("hi i am" +this.name+"my age is "+ this.age+"and i am a "+this.profession);
}

var lavish=new person("lavish",21,"student")
var karan =new person ("karan " ,20,"student")
console.log(lavish,karan)

function car (cc,isforewheel){
    this.cc=cc;
    this.isforewheel=isforewheel;

}

car.prototype.hunk=function(){
    return("i am honking my");
};

car.prototype.drive=function(){
    return("i am driving my");
};

car.prototype.refule=function(){
    return("i am refuling");
};

function audi(color,model,cc,isforewheel){
    var audi = new car(cc,isforewheel);
    audi.color=color;
    audi.model=model;
    return audi;
}
audi.prototype=car.prototype;

audi.prototype.drl=function(){
    return("i am blowing up the drl");

};
audi.prototype.climatecontrol=function(){
    return("climate control on");
};

var audi8=audi("red","audi8",3000,true);

console.log(audi8)

// assig
function customobject(a,b,c){
    this.a=a;
    this.b=b;
    this.c=c;
}
customobject.prototype.addcola=function(){
    return(this.a+" cola "+this.b+" cola "+this.c+" cola ")
}
var data=new customobject(1,2,3)
console.log(data.addcola())

// assig w53
function phone(color,launchdate){
    this.color=color;
    this.launchdate=launchdate;
    
};
phone.prototype.call=function(){
    return("i am able to CALL");
};
phone.prototype.charge=function(){
    return("charge point at right");
};

function nokiya(name,camera,color,launchdate){
    var nokiya=new phone(color,launchdate);
    nokiya.camera=camera;
    nokiya.name=name;
    return nokiya;
}
nokiya.prototype=phone.prototype

nokiya.prototype.snakegame=function(){
    return("play snake game")
}
nokiya.prototype.spaceinvaders=function(){
    return("play space invader game")
}
var nokiya100=nokiya("nokiya100","back","black",2000)
console.log(nokiya100)


