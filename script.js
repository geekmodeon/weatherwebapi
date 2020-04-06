var city = "Breda";

function myfunction() {
    var mycity = document.getElementById("myText").value;
    document.getElementById("demo").innerHTML = mycity;
}

// * 
function myfunction() {
    var city = document.getElementById("myText".value);
    document.getElementById("demo").innerHTML = city;
}
// 

function giveCity(myObj){
    city = myObj.value; 
   this.getMessage();
}

function getMessage(){
    alert("Welkom how are you "+ this.city);    
}

$.getJSON("http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&APPID=03b918615b4ecf29005b2a3151cad4dd", function(data) {
    console.log(data);
    var icon = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";        
    var temp = Math.floor(data.main.temp);
    var weather = data.weather[0].main;
    $('.icon').attr('src', icon);
    $('.weather').append(weather);
    $('.temp').append(temp);

});

   





