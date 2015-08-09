$(document).ready(function(){
	
	$(function() {
		$( ".accordian" ).accordion({
			collapsible : true,
			active : false
		});
	});
	/* -----------------------------reservation form --------------------------------------*/
	function confirmationMail(){
		var fname= $("#Fname").val();
		var email= $("#email").val();
		if(fname!="" && email!= ""){
			alert("We will send you a confirmation email soon");
		}
	}
	$('#submit').on('click',confirmationMail);
		
		
	/* -----------------------------Cookie setting --------
	function setCookie(cname,cvalue,exdays) {
		var d = new Date();
		d.setTime(d.getTime() + (exdays*24*60*60*1000));
		var expires = "expires=" + d.toGMTString();
		document.cookie = cname+"="+cvalue+"; "+expires;
	}

	function getCookie(cname) {
		var name = cname + "=";
		var ca = document.cookie.split(';');
		for(var i=0; i<ca.length; i++) {
			var c = ca[i];
			while (c.charAt(0)==' ') c = c.substring(1);
			if (c.indexOf(name) == 0) {
				return c.substring(name.length, c.length);
			}
		}
		return "";
	}

	function checkCookie() {
		var user = getCookie("username");
		if (user != "") {
			alert("Welcome again " + user);
		} else if (user != "" && user != null) {		  
			setCookie("username", "#Fname",10);		   
		}
	}
	
	$('#submit').on('click', checkCookie);
	
 /* ---------------------Create An account Form Validation --------------------------------------*/	
 
 	function nameValidation() {
		var x = $("#form2_fname").val();
		if (x == "" || x == null) {
			$("#invalid_1").html("* Name must be filled out");
				return false;
		}
		else{
			return true;
		}
	
	}
	function lengthValidations(){
		var h= $("#form2_pass1").val();
		if (h.length <5 || h.length > 8){
			alert(" Password Minlength is 5 and Maxlength is 8");
				return false;		
		}
		else{
			return true;
		}
	}
	function passwordValidations(){
		var pass1=$("#form2_pass1").val();
		var pass2=$("#form2_pass2").val();
		if (pass1 != pass2){
			$("#invalid_4").html("* Password doesn't match");
				return false;
	    }
		else{
			return true;
		}		
    }
	
	function phoneValidation(){
		var phone=$("#form2_phone").val();
		if(phone ==""){
			$("#invalid_2").html("* Please enter phone number");
				return false;
		}
		else{
			return true;
		}	
	}
	
	function Validation(){
		nameValidation();
		lengthValidations();
		passwordValidations();
		phoneValidation();
	}
	$('#form2_submit').on('click', Validation);


 /*--------------------------------------------- ajax    -------------------------------------------------------------------------------*/
	/*function clearloading(){
        $('#innerResults').html('');
		$.mobile.loading( 'hide', {
			text: 'loading',
			textVisible: false,
			theme: 'z',
			html: ""
		});
		$.mobile.changePage('menu.html');
    } */
	
	function putMenu(data){		
		$.each(data, function(index, item){
			var selector = '#' + item.tag.toLowerCase().replace(' ', '');
			var container = $(selector);
			var header = "<h3>" + item.name + " " + item.price + "</h3>";
			var description = "<div><p>" + item.description + "</p></div>";
			container.append(header + description);
		});
		$('.accordian').accordion('refresh');
	}
	/*
		var menu_appetizer = ["<h3>" + item.name + " " + item.price + "</h3>", "<div><p>" + item.description + "</p></div>"];
		for( var i = 0; i< menu_appetizer.length; i++){
			 return setTimeout ("$('#appetizer').append(menu_appetizer[i]);", 1000)
		}
		var menu_biryani = ["<h3>"+Tag+"</h3>", "<h3>"+Name+Price+"</h3>", "<p>"+Description+"</p>"];
		for( var i = 0; i< menu_biryani.length; i++){
			 return  setTimeout("$('#biryani').append(menu_biryani[i]);" ,1200)
		}
    */   
    
	

	function searchSucceeded(data, textStatus, jqXHR){
		putMenu(data);
		//clearloading();
		//alert("Menu page is loaded");      
    }
    
    function searchFailed(jqXHR, textStatus, errorThrown){
        alert('Failed!');
    }
	
	function runSearch(){
		$.ajax({
			url:"http://menu-items.herokuapp.com/items/json" ,
			success: searchSucceeded,
			error: searchFailed	
		});
	}
	
	if ($('body.menu').length == 1){
		runSearch();
	/*	$.mobile.loading( 'show', {
			text: 'loading',
			textVisible: true,
			theme: 'z',
			html: ""
		});	*/
			
	}
});