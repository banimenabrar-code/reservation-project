let countrySelectbox = document.querySelector(".countrySelect");
let cityselector= document.querySelector(".citySelect");
let counterydate = {
    herat:["sharnaw","darb malk", " parktariqi" , "mostafet", " jakan" ],
    Kabul:["kabul","khairKhana", "sharnaw","kotasangei", "sinam pamira"],
    esfahan:["esfahan", " najaf abad" , "Kashan", " shareza"]
}


countrySelectbox.addEventListener("change" , function(){
    if(countrySelectbox.value == "Please Select ..."){
        cityselector.innerHTML= "";
        cityselector.innerHTML=" <option> Select City ... </option> ";
    }else{
       let maincouername = countrySelectbox.value;
       let maincoutercity = counterydate[maincouername];

       cityselector.innerHTML="";
maincoutercity.forEach(function(city){
    cityselector.innerHTML +=" <option> " + city + "</option>"
    
})
    }
})