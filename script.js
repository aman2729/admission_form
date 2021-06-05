function display(){
	var sname=document.getElementById('sname').value;
	var deptname = document.getElementById("deptname").value;
    var hostel = document.getElementById("hostel").value;
    var firstGraduate = document.getElementById("firstGraduate").value;
    var result=document.getElementById('result');
    
    
	

	if(deptname=="MBBS"){
		var admissionfee=2300000;
		var tutionfee=90000;
	}
	else if(deptname=="BDS"){
		var admissionfee=1500000;
		var tutionfee=80000;
	}
	else if(deptname=="BHMS"){
		var admissionfee=1235000;
		var tutionfee=95000;
	}
	 if (document.getElementById('yes').checked) {
       
       var hostelfee=96000;
     }

     else if (document.getElementById('no').checked) {
    
       var hostelfee=0;
     }

     var collegefee=admissionfee+tutionfee+hostelfee;

     if (document.getElementById('firstGraduate').checked) {
       
       var collegefee=collegefee-25000;
     }

     else if(!document.getElementById('firstGraduate').checked){
     	var collegefee;
      }

      

    
      
      

	result.innerHTML=`Hi ${sname}<br>Your Admission Fee is Rs ${admissionfee}<br>Tution Fee is Rs ${tutionfee}<br>Hostel Fee is Rs ${hostelfee}<br>Total College Fee is Rs ${collegefee}`;

    
    

	return false;
}

