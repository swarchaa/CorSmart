var constant = 220; 
var lower;
var upper;
var scoremhr;
var lower_rounded;
var upper_rounded;

function validation() {
    var age = document.getElementById("cAge").value;
    var heartrate = document.getElementById("chrate").value;
    if (age.length == 0 || heartrate.length==0) {
        alert("please fill on all the information correctly");
        ageValidation();
        chrateValidation()
        $("#cal").attr('data-target', '');
    }
    else {
        var score1 = Object();
        document.getElementById("total_points").innerHTML = 'Maximum heart rate: ' +  scoremhr ;
        document.getElementById("total_points2").innerHTML = 'Target heart rate zone for vigorous exercise: ' + lower_rounded + ' to ' + upper_rounded;
        
        score1.Heat_mhr = parseInt(document.getElementById("total_points").innerHTML);
        score1.Heart_range = parseInt(document.getElementById("total_points2").innerHTML);

         $("#cal").attr('data-target', '#exampleModal');
    }
}

function ageValidation() {
    var age = document.getElementById("cAge").value;
    var error = document.getElementById("age_error");
    if(age.length == 0) {
        error.innerHTML = "*This field is required";
        document.querySelector("#cAge").style.border = "2px solid #ff7373";
        document.querySelector("#cAge").focus();
    }
    else 
    {
        if (age < 18 || age > 90)
        {
            error.innerHTML = "*Age should be between 18 and 90";
            document.querySelector("#chrate").style.border = "2px solid #ff7373";
            document.querySelector("#chrate").focus();
        }
    }
};


function chrateValidation() {
    var heartrate = document.getElementById("chrate").value;
    var error = document.getElementById("hrate_error");
    if (heartrate.length == 0) {
        error.innerHTML = "*This fields are required";
        document.querySelector("#chrate").style.border = "2px solid #ff7373";
        document.querySelector("#chrate").focus();
    }
    else if (heartrate < 50 || heartrate > 120 )
    {
        error.innerHTML = "*Heart Rate either too low or too high. Normal Heart ranges from 60-120.";
        document.querySelector("#chrate").style.border = "2px solid #ff7373";
        document.querySelector("#chrate").focus();
    }
   
}; 

function testCalculation() {
    
    age = parseFloat(document.getElementById("cAge").value);
    heartrate = parseFloat(document.getElementById("chrate").value);
    upper = 0; //heart rate zone for vigorous exercise - range - upper and lower
    lower = 0;
    scoremhr = calculatemhr(age); 
    scorehrr = calculatehrr(scoremhr,heartrate);
    upper = calculateUpper(scorehrr,heartrate);
    upper_rounded = round(upper,0);
    lower = calculateLower(scorehrr,heartrate);
    lower_rounded = round (lower,0);
    validation();
}

function calculatemhr(age){
    scoremhr = constant - age; 
    return scoremhr; 
}

function calculatehrr(scoremhr,heartrate){
    scorehrr = scoremhr - heartrate; 
    return scorehrr; 
}

function calculateUpper(scorehrr,heartrate){
    upper = scorehrr * 0.85; 
    upper = upper + heartrate;
    return upper; 
}

function calculateLower(scorehrr,heartrate){
    lower = scorehrr * 0.70; 
    lower = lower + heartrate;
    return lower; 
}

function round(value, decimals) {
  return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
}


function onModalClose(){
   document.getElementById("heartrate").reset();
}
