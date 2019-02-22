$(document).ready(function () {


    //боковая панель 
    $('.button-collapse').sideNav({
        menuWidth: 215, // Default is 300
    });

    //селект материал
    $('select').material_select();
    // ввод только цыфр в инпуты
    $('input#fns, input#kpp, input#rnm, input#nfn, input#numb_zn').keypress(function (event) {
        var key, keyChar;
        if (!event) var event = window.event;
        if (event.keyCode) key = event.keyCode;
        else if (event.which) key = event.which;
        if (key == null || key == 0 || key == 8 || key == 13 || key == 9 || key == 46 || key == 37 || key == 39) return true;
        keyChar = String.fromCharCode(key);
        if (!/\d/.test(keyChar)) return false;
    });

    /*    var type = "ADDRESS";
       var token = "46b596b5f2a9e6ac40c145ac5660dfbde050411b";
       var $address = $('#address');
       var $region = $("#region");
       var $area = $("#area");
       var $city = $("#city");
       var $city_district = $("#city_district");
       var $settlement = $("#settlement");
       var $street = $("#street");
       var $house = $("#house");
       var $block = $("#block");
       var $flat = $("#flat");

      // адрес одной строкой 
       $address.suggestions({
           token: token,
           type: type,
           hint: false,
           onSelect: 
           function (suggestion) {
               $area.suggestions().setSuggestion(suggestion);
               $city.suggestions().setSuggestion(suggestion);
               $street.suggestions().setSuggestion(suggestion);
               $house.suggestions().setSuggestion(suggestion);
               $block.suggestions().setSuggestion(suggestion);
           }
       });


       // регион
       $region.suggestions({
           token: token,
           type: type,
           hint: false,
           bounds: "region"
       });

       // район
       $area.suggestions({
           token: token,
           type: type,
           hint: false,
           bounds: "area",
           constraints: $region
       });

       // город
       $city.suggestions({
           token: token,
           type: type,
           hint: false,
           bounds: "city",
           constraints: $area
       });

       // район города
       $city_district.suggestions({
           token: token,
           type: type,
           hint: false,
           bounds: "city_district",
           constraints: $city
       });

       // geolocateCity($city);

       // населенный пункт
       $settlement.suggestions({
           token: token,
           type: type,
           hint: false,
           bounds: "settlement",
           constraints: $city_district
       });

       // улица
       $street.suggestions({
           token: token,
           type: type,
           hint: false,
           bounds: "street",
           constraints: $settlement
       });

       // дом
       $house.suggestions({
           data: "block",
           token: token,
           type: type,
           hint: false,
           noSuggestionsHint: false,
           bounds: "house",
           constraints: $street,
       });

       // корпус
       $block.suggestions({
           token: token,
           type: type,
           hint: false,
           noSuggestionsHint: false,
           bounds: "block",
           constraints: $house
       });  */


    function join(arr /*, separator */ ) {
        var separator = arguments.length > 1 ? arguments[1] : ", ";
        return arr.filter(function (n) {
            return n
        }).join(separator);
    }


    function showRegion(address) {
        $("#area").val(join([
    join([address.area_type, address.area], " ")
  ]));
    }

    function showCity(address) {
        $("#city").val(join([
    join([address.city_type, address.city], " ")
  ]));
    }
    
    function showSettlement(address) {
        $("#settlement").val(join([
    join([address.settlement_type, address.settlement], " ")
  ]));
    }

    function showStreet(address) {
        $("#street").val(
            join([address.street_type, address.street], " ")
        );
    }
    
    
    
    

    function showHouse(address) {
        $("#house").val(join([
    join([address.house_type, address.house], " ")
  ]));
    }
    function showBlock(address) {
        $("#block").val(join([
    join([address.block_type, address.block], " ")
  ]));
    }

    function showFlat(address) {
        $("#flat").val(
            join([address.flat_type, address.flat], " ")
        );
    }


    function showSelected(suggestion) {
        var address = suggestion.data;
        showRegion(address);
        showCity(address);
        showStreet(address);
        showHouse(address);
        showFlat(address);
        showBlock(address);
        showSettlement(address)
    }

    $("#address").suggestions({
        token: "46b596b5f2a9e6ac40c145ac5660dfbde050411b",
        type: "ADDRESS",
        onSelect: showSelected
    });

});
