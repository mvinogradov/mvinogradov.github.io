$(document).ready(function() {
 
	
//боковая панель 
	 $('.button-collapse').sideNav({
      menuWidth: 215, // Default is 300
    }
  );
    
//селект материал
	$('select').material_select();
// ввод только цыфр в инпуты
    $('input#fns, input#kpp, input#rnm, input#nfn, input#numb_zn').keypress(function(event){
		var key, keyChar;
		if(!event) var event = window.event;
		if (event.keyCode) key = event.keyCode;
		else if(event.which) key = event.which;
		if(key==null || key==0 || key==8 || key==13 || key==9 || key==46 || key==37 || key==39 ) return true;
		keyChar=String.fromCharCode(key);
		if(!/\d/.test(keyChar))	return false;	
        });
    });
    































