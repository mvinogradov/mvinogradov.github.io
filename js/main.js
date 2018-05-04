$(document).ready(function() {
 
	
//боковая панель 
/*	 $('.button-collapse').sideNav({
      menuWidth: 215, // Default is 300
    }
  );*/
    
    $(document).ready(function(){
    $('.datepicker').datepicker();
  });
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

// 

$('.datepicker').pickadate({
selectMonths: true,//Creates a dropdown to control month
selectYears: 5,//Creates a dropdown of 15 years to control year
firstDay: 1, //First day of week (0: Sunday, 1: Monday etc).  
//The title label to use for the month nav buttons
//labelMonthNext: 'Next Month',
//labelMonthPrev: 'Last Month',
//The title label to use for the dropdown selectors
//labelMonthSelect: 'Select Month',
//labelYearSelect: 'Select Year',
//Months and weekdays
monthsFull: [ 'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь' ],
monthsShort: [ 'Янв', 'Фев', 'Мрт', 'Апр', 'Майr', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Нбр', 'Дек' ],
weekdaysFull: [ 'Воскресение', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота' ],
weekdaysShort: [ 'Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб' ],
//Materialize modified
weekdaysLetter: [ 'В', 'П', 'В', 'С', 'Ч', 'П', 'С' ],
//Today and clear
today: 'Сегодня',
clear: 'Сбросить',
close: 'ОК',
//The format to show on the `input` element
format: 'dd.mm.yyyy',
minDate: 'today'
});

var dt=new Date();
var month = dt.getMonth();
if (month<10) month='0'+month;
var day = dt.getDate();
if (day<10) day='0'+day;
var year = dt.getFullYear();
date_second.value=day+'.'+month+'.'+year;

var dt=new Date();
dt.setMonth(dt.getMonth() - 1);
var month = dt.getMonth();
if (month<10) month='0'+month;
var day = dt.getDate();
if (day<10) day='0'+day;
var year = dt.getFullYear();
date_first.value=day+'.'+month+'.'+year;





























