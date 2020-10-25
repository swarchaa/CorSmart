var systolic;
var diastolic;
var systolic1;
var diastolic1;
var systolicf;
var diastolicf;
var riskLevel;
var score = 0; 


function testCalculation() {
    
    systolic = parseFloat(document.getElementById("cSystolic").value);
    diastolic = parseFloat(document.getElementById("cDiastolic").value);
    systolic1 = parseFloat(document.getElementById("cSystolic1").value);
    diastolic1 = parseFloat(document.getElementById("cDiastolic1").value);
    score = 0; //total points

    score = calculateRisk(systolic, diastolic, systolic1, diastolic1); //for calculating total points
    getRiskLevel(score) //for calculating level of risk ie, low,moderate,high
    riskLevel = getRiskLevel(score);
    validation();
}

function calculateRisk(systolic, diastolic, systolic1, diastolic1) {
    systolicf = (systolic + systolic1)/2
    diastolicf = (diastolic + diastolic1)/2
    score = getBloodPressureScore(systolicf, diastolicf)
    return score; 
}


function getBloodPressureScore(systolicf, diastolicf) 
{
    if  (diastolicf <= 80)
    {
        if  (systolicf <= 120)
            return 0; 
        else if (systolicf <= 129 && systolicf > 120)
            return 1; 
     }
    else 
    {
        if (diastolicf <= 89 && diastolicf > 80 || systolicf <= 139 && systolicf > 129 )
         {   return 2;   }
        else 
        {
                if (systolicf <= 180 || diastolicf <= 140)
                {   return 3;   }
                else 
                    return 4;
        }
    }
}


function getRiskLevel(score) {
    if (isNaN(score)) {
        document.getElementById('low-risk').style.display = 'none';
        document.getElementById('high-risk').style.display = 'none';
        document.getElementById('moderate-risk').style.display = 'none';
    }
    if (score ==0 ) {
        document.getElementById('low-risk').style.display = 'inline-block';
        document.getElementById('high-risk').style.display = 'none';
        document.getElementById('moderate-risk').style.display = 'none';
        document.getElementById('random-values').style.display = 'none';
        return 'Low Risk';
    }
    if (score ==1 ) {
        document.getElementById('low-risk').style.display = 'inline-block';
        document.getElementById('high-risk').style.display = 'none';
        document.getElementById('moderate-risk').style.display = 'none';
        document.getElementById('random-values').style.display = 'none';
        return 'Low Risk';
    }
    if (score ==4 ) {
        document.getElementById('high-risk').style.display = 'inline-block';
        document.getElementById('low-risk').style.display = 'none';
        document.getElementById('moderate-risk').style.display = 'none';
        document.getElementById('random-values').style.display = 'none';
        return 'High Risk';
    }
    if (score ==3 ) {
        document.getElementById('high-risk').style.display = 'inline-block';
        document.getElementById('low-risk').style.display = 'none';
        document.getElementById('moderate-risk').style.display = 'none';
        document.getElementById('random-values').style.display = 'none';
        return 'High Risk';
    }
    if (score ==2 ) {
        document.getElementById('moderate-risk').style.display = 'inline-block';
        document.getElementById('high-risk').style.display = 'none';
        document.getElementById('low-risk').style.display = 'none';
        document.getElementById('random-values').style.display = 'none';
        return 'Moderate Risk';
    }
    if(score == 5 ) {
        document.getElementById('moderate-risk').style.display = 'none';
        document.getElementById('high-risk').style.display = 'none';
        document.getElementById('low-risk').style.display = 'none';
        document.getElementById('random-values').style.display = 'inline-block';
        return 'Please enter correct values';
    }
}



function validation() {
    var systolicBp1 = document.getElementById("cSystolic").value;
    var systolicBp2 = document.getElementById("cSystolic1").value;
    var diastolicBp1 = document.getElementById("cDiastolic").value;
    var diastolicBp2 = document.getElementById("cDiastolic1").value;
    if (systolicBp1 == 0 || systolicBp2.length == 0 || diastolicBp1.length == 0 || diastolicBp2.length == 0) {
        alert("please fill on all the information correctly");
        systolicValidationam();
        diastolicValidationam();
        systolicValidationpm();
        diastolicValidationpm();
        $("#cal").attr('data-target', '');
    }
    else {
        var score1 = Object();
        document.getElementById("total_points").innerHTML = 'Your average Systolic/diastolic reading is : ' +  systolicf + '/' + diastolicf;
        document.getElementById("risk_level").innerHTML = 'Your blood pressure risk level is : ' + riskLevel;
        score1.bp_Total_points = parseInt(document.getElementById("total_points").innerHTML);
        score1.Risk_level = document.getElementById("risk_level").innerHTML
         $("#cal").attr('data-target', '#exampleModal');
    }
    
}


function systolicValidationam() {
    var sbp = document.getElementById("cSystolic").value;
    var error = document.getElementById("systolic_error");
    if (sbp.length == 0) {
        error.innerHTML = "*These fields are required"; 
        document.querySelector("#cSystolic").style.border = "2px solid #ff7373";
        document.querySelector("#cSystolic").focus();
    }
    else{
    		if (Number(sbp) < 30) {
    			error.innerHTML = "*Please make sure both Systolic values are greater than 30";
    		}
    		else {
        		error.innerHTML = "";	
        		document.querySelector("#cSystolic").style.border = "1px solid #5c4d46";
    		}
    }
    
}

function diastolicValidationam() {
    var bpd = document.getElementById("cDiastolic").value;
    var error = document.getElementById("diastolic_error");
    if (bpd.length == 0) {
        error.innerHTML = "*These fields are required";
        document.querySelector("#cDiastolic").style.border = "2px solid #ff7373";
        document.querySelector("#cDiastolic").focus();
    }
    else{
    		if (Number(bpd) < 30) {
    			error.innerHTML = "*Please make sure both Diastolic values are greater than 30";
    		}
    		else {
        		error.innerHTML = "";
        		document.querySelector("#cDiastolic").style.border = "1px solid #5c4d46";
    		}
    }
}

function systolicValidationpm() {
    var sbp1 = document.getElementById("cSystolic1").value;
    var error1 = document.getElementById("systolic_error1");
    if (sbp1.length == 0) {
        error1.innerHTML = "*These fields are required";
        document.querySelector("#cSystolic1").style.border = "2px solid #ff7373";
        document.querySelector("#cSystolic1").focus();
    }
    else{
            if (Number(sbp1)<30 ) {
                error1.innerHTML = "*Please make sure both Systolic values are greater than 30";
            }
            else {
                error1.innerHTML = "";
                document.querySelector("#cSystolic1").style.border = "1px solid #5c4d46";
            }
    }
    
}

function diastolicValidationpm() {
    var bpd1 = document.getElementById("cDiastolic1").value;
    var error1 = document.getElementById("diastolic_error1");
    if (bpd1.length == 0) {
        error1.innerHTML = "*These fields are required";
        document.querySelector("#cDiastolic1").style.border = "2px solid #ff7373";
        document.querySelector("#cDiastolic1").focus();
    }
    else{
            if (Number(bpd1)<30 ) {
                error1.innerHTML = "*Please make sure both Diastolic values are greater than 30";
            }
            else {
                error1.innerHTML = "";
                document.querySelector("#cDiastolic1").style.border = "1px solid #5c4d46";
            }
    }
}


function onModalClose(){
    document.getElementById("bloodpressure").reset();
}


