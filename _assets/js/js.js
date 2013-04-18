// JavaScript Document





function validate(form) {

var mes = "";

 

	if (document.contactme.name.value == "") {

	mes = mes+"\nA name is required";	

	} 

	if (document.contactme.email.value == "") {

	mes = mes+"\nAn email address is required";	

	}	

	if (document.contactme.message.value == "") {

	mes = mes+"\nA message is required";	

	}

	 

  

 	

	if (mes) {

	 

		alert(mes+"\n\nPlease complete before continuing.");

		return false;

		

	}  else {

		return true;

	}

}



function validate_erg(form) {

var mes = "";

 

	if (document.appform.Surname.value == "") {

	mes = mes+"\nA Surname is required";	

	}  

	 	if (document.appform.Forename.value == "") {

	mes = mes+"\nA Forename is required";	

	}  

  	 	if (document.appform.Email.value == "") {

	mes = mes+"\nAn Email Address is required";	

	}  

  
	 	if (document.appform.tc.checked == false) {

	mes = mes+"\nPlease tick to agree to terms and conditions";	

	}  

	

	if (mes) {

	 

		alert(mes+"\n\nPlease complete before continuing.");

		return false;

		

	}  else {

		return true;

	}

}



 



	

	function do_cb(value) {

	

	// alert(value);

	

	}

	

	function callbackdesk(sIDValue) {
		

	

	var img;

	temp = document.getElementById(sIDValue).src.split('/');


	img = temp[5];
 

	img_col = img.substr(0,1);

	img_file = img.substr(2,99); 

	

	from = document.getElementById('from').value; 

	hours = document.getElementById('hours').value; 
	 

	 
	

	if (img_col == "g") {

	document.getElementById(sIDValue).src = "/images/tables/w-"+img_file;

	x_desk_cart(sIDValue+"_"+from+"_"+hours,'0',  do_cb);
	
	 

	} 

	if (img_col == "w") {

	document.getElementById(sIDValue).src = "/images/tables/g-"+img_file;
	
	

	x_desk_cart(sIDValue+"_"+from+"_"+hours,'1', do_cb);
	
	 

	} 

	

	

	}

	