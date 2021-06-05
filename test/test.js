// document.write('<p> hello from head tag</p>');
/*alert('hello from javascript');
let x= 10,
    y=20,
    z=100;
    document.getElementById('Anas').innerHTML=y;

    if (x + y== 30) {

        console.log('good')
    }else {
        console.log('Bad')
    };
let myOldPrice = 500,
    myNewPrice = 454,
    myDiscount = myOldPrice - myNewPrice + 600;


let myPrice = 450,
    mySmallDiscount = 50;
    myMediumDiscount = 100;
    myBigDiscount = 250;

    document.getElementById('price').innerHTML= myPrice;
    
    document.getElementById('product 1').innerHTML= myPrice - mySmallDiscount;

    document.getElementById('product 2').innerHTML= myPrice - myMediumDiscount;

    document.getElementById('product 3').innerHTML= myPrice - myBigDiscount;*/

//let myInfo = {firstName: 'Anas', lastName:'Alsmadi'};

/*let myName = 'Anas',
    myAge = 27,
    myCountry = 'Syria' 

document.getElementById('price').innerHTML =

    '<span style = "color : red">My name Is </span> : <span style = "color : blue "> Anas Alsmadi </span>' +'<br>'+
    ' my age Is: ' + myAge + '<br>' +
    '  im from ' + myCountry ;
    */

// Lecture 10: 

/*let myName = 'Anas',

    myAge = 27,
    myDiv = document.getElementById('test');
    myDiv.innerHTML= 'Hello my name is ' + myName + ' and im ' + myAge;
    */
    // lecture 11:

    /*let x = 100,
        y = 35, 
        z = x % y;
    document.getElementById('test').innerHTML = z ;
    
let x =50 ;
console.log(x);
*/

// lecture 12 :

/*
let ticketPreice = 200;
if (ticketPreice < 1500){
    console.log('its cheap')
} else {
    console.log(' the ticket is expensive')
}

let myAge = prompt (' whats your age ?');
if (myAge < 18){
    document.getElementById('test').innerHTML= 
        'sorry your age is ' +myAge+ ' your not allowed to be here';
} else {
    document.getElementById('test').innerHTML = 
    ' your age ' +myAge+'  meets the requirements and your welcome here'
}

let myAge = 27 ;
if ( myAge  === '27'){
    alert('Good');
} else {
    alert('Bad');
}
*/

// lecrure 13:
/*
let
     Anas =  50,
     age = 27,
     address = 'irbid'; 

if ( Anas == 50  && age == 27 && address == 'Irbid' ) {

    alert ('good');
}else {
    alert ('bad');
}
*/


/*
function sayHi(){

    'use strict';
    let myName = 'Anas';
    if (myName === 'Anas'){
        alert('hello ' + myName + ' your welcome' )
    } else {
        alert('hello ' + myName + ' your not welcome')
    }
}
sayHi();
*/

// lecture 15:

/*

function myAgeinDays(){

    'use strict';
    let 
         myName = 'Anas',
         myAge = prompt( 'write down your Age');
    return myAge * 365
}
document.getElementById('test').innerHTML = ' your age in days is ' + myAgeinDays() + ' day';
*/
// lecture 16 :
/*
function myAgeInDays(myAge){

    'use strict'; 
    return myAge * 365;
}
// document.getElementById('test').innerHTML = ' your age in days is ' + myAgeInDays(2) + ' day';

function sayHello (firstName , middleName){

    'use strict';
    return 'Hello ' +  firstName + ' ' + middleName+ ' how are you'
}
// document.getElementById('test').innerHTML = sayHello('Anas' , 'alsmadi');

function makeDiscount (price){

    'use strict';
    let discount = 100;
    return price - discount;
}
// document.getElementById('test').innerHTML = makeDiscount(500);
*/
/*
function calcAge( myAge){

    'use strict';
    let year = 365;
    return myAge * year;

}
let dynamicAge = prompt('write your age')
document.getElementById('test').innerHTML = calcAge(dynamicAge);
*/



// lecture 17 :


/*function convertUsdToLirah(){

   let amount = document.getElementById('Dollar').value,
       result = amount * 50;
document.getElementById('message');
if (amount === ""){
    message.innerHTML = " this feild cant be empty"
}
else if (isNaN(amount)){

    message.innerHTML = 'this field accept numbers only'

} else if(amount === '0'){

    message.innerHTML = 'the amount cant be 0'

}  else if(amount < 0){

    message.innerHTML= 'tf are you doing asshole'
}else {
    message.innerHTML = amount + ' Dollar is worthy of ' + result + ' lirah'
}

}*/