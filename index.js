 document.querySelector("#form").addEventListener("submit",function(event){
     event.preventDefault();
     var inputTemp = parseFloat(document.querySelector("#temperature").value);
     var conFrom = document.querySelector("#convert-from").value;
     var conTo = document.querySelector("#convert-to").value;
     var output="";
     if(conFrom ==="Celsius" && conTo==="Fahrenheit"){
         output = (inputTemp*(9/5)+32)+"°F";
    }else if(conFrom ==="Celsius" && conTo ==="Kelvin"){
        output = inputTemp + 273.15 + "K";
    }else if(conFrom==="Fahrenheit" && conTo==="Celsius"){
        output = (inputTemp-32)*(5/9)+"°C";
    }else if(conFrom ==="Fahrenheit" && conTo==="Kelvin"){
        output = (inputTemp - 32) * 5/9 + 273.15 + "K";
    }else if(conFrom ==="Kelvin" && conTo==="Celsius"){
        output = inputTemp - 273.15 + "°C";
        
    }else if(conFrom ==="Kelvin" && conTo ==="Fahrenheit"){
        output = (inputTemp - 273.15) * 9/5 + 32 + "°F";
    }else{
        output = "please select valid units for conversion";
    }
    document.querySelector(".answer p").innerHTML = output;
    });