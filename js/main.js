$(document).ready(function() {
 
	
//боковая панель 
	 $('.button-collapse').sideNav({
      menuWidth: 215, // Default is 300
    }
  );
	
//селект материал
	$('select').material_select();
// маска для инпута "номер телефона"	
    $("#phone-numb").inputmask("+7 (999)-999-99-99");
    
// маска для инпута "РНМ"	
    $("#rnm").inputmask("9999 9999 9999 9999");
    
// маска для инпута "номер ФН"	
    $("#numb_fn").inputmask("9999 9999 9999 9999");
      

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
// клик по tr
    $("tr").on("click", "td", function() {
        if(!$(this).hasClass("table__td_six") && !$(this).parent("tr").hasClass("table__tr_header")){
            window.location = $(this).parent("tr").data("href"); 
        }
    });
     $("tr").on("click", ".table__td_six", function() {
            window.location = $(this).data("href");
    });
// открыть фильтры
    $(".button-filtres").on("click", function(){
       $(".header-top__container_v2").toggleClass("opened") 
    });


































