//I am using the getElementID to call the items (time, welcome etc)
const time = document.getElementById('time'),
welcome = document.getElementById('welcome'),
name = document.getElementById('name'),
plan = document.getElementById('plan');


//Options
const showAmPM = true;

// Using the function method to get todays date, time, hour, mins, sec
function showTime() {
    let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();

    //Set AM or PM using const
    const amPm = hour >= 12 ? 'PM' : 'AM';

    // 12hr Format saying its 12 hours in AM and PM
    hour = hour % 12 || 12;

    // Output time to add Zeros to mins and secs
    time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)} ${showTime ? amPm : ''}`;

    setTimeout(showTime, 1000);
}
//Add Zeros
function addZero(n){
    return(parseInt(n,10) <10 ? '0' : '' ) + n
}

// Set Background and Greeting messages and pictures
function setBackGreet(){
    let today = new Date(),
    hour = today.getHours();

    if(hour < 12) {
        //Morning
        document.body.style.backgroundImage = "url('../img/morning.jpg')";
        welcome.textContent = 'Good Morning';
    } else if(hour < 18) {
        //Afternoon
        document.body.style.backgroundImage = "url('../img/Afternoon.jpg')";
        welcome.textContent = 'Good Afternoon';
    }else {
        //Evening
        document.body.style.backgroundImage = "url('../img/evening.jpg')";
        welcome.textContent = 'Good Evening';
        document.body.style.color = 'light Blue';
    }
}

// Using a function Get name to check if any names are in loacl storage and if not have user input any name
function getName() {
    if(localStorage.getItem('name') === null){
        name.textContent = '{Enter Name}';
    } else {
        name.textContent = localStorage.getItem('name');
    }
}

//Using a function Set Name to ensure enter is being used after entering name
function setName(e) {
    if(e.type === 'keypress'){
        //Making sure enter is used to complete input 
    if(e.which == 13 || e.keyCode == 13){
        localStorage.setItem('name', e.target.innetText);
        name.blur();
    }
    } else{
        localStorage.setItem('name', e.target.innetText);
    }
}

// Using a function Get plan to check if any plans are in loacl storage and if not have user input any name
function getPlan() {
    if(localStorage.getItem('plan') === null){
        plan.textContent = '{Enter Plan}';
    } else {
        plan.textContent = localStorage.getItem('plan');
    }
}

//Using a function Set Plan to ensure enter is being used after entering name
function setPlan(e) {
    if(e.type === 'keypress'){
        //Making sure enter is used to complete input 
    if(e.which == 13 || e.keyCode == 13){
        localStorage.setItem('plan', e.target.innetText);
        plan.blur();
    }
    } else{
        localStorage.setItem('plan', e.target.innetText);
    }
}

 // Using eventlisteners to help resolve problem of inputting without using the enter button after entry
name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
 // Using eventlisteners to help resolve problem of inputting without using the enter button after entry
 plan.addEventListener('keypress', setPlan);
 plan.addEventListener('blur', setPlan);
 

// Run
showTime ();
setBackGreet();
getName();
getPlan();