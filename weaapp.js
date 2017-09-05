$("document").ready(function(){
	
	
	$("#tempC").click(function (){
 
		getLocation()
		
		function getLocation() {
			navigator.geolocation.getCurrentPosition(onSuccess);}
	
			function onSuccess(position) {
			 lat = position.coords.latitude;
			 lon = position.coords.longitude;
			 weatherData='https://fcc-weather-api.glitch.me/api/current?lat='+lat+'&lon='+lon;
			
			
			$.getJSON(weatherData,function (data) {
        
			var a=data.weather[0].icon;
      var celciusTemp=Math.round(data.main.temp);
      var celciusSeep=Math.round(data.wind.speed);
			var large= data.name+'</br>Current Temperature:    '+celciusTemp+'&deg;C<img style="padding:0 0 7px 17px;" src='+a+'.png"></br>Wind Speed:   '+celciusSeep+'   m/s' ;
			
			
			$("#info").html(large);
			
			var a = data.weather[0].main;
       
			
			if (a.indexOf("clear")== -1){
				
				$('#name').css('backgroundColor','#FAFAFA')}
				
			else if (a.indexOf("thunderstorm")== -1) {
				$('#name').css('backgroundColor','#8E9FC4')}
			else if(a.indexOf("Rain")!== -1) {
			$('#name').css('backgroundColor','#C0C8DA')}
			else if (a.indexOf("drizzle")== -1) {
			$('#name').css('backgroundColor','#d9dce0')}
        else if (a.indexOf("clouds")== -1) {
			$('#name').css('backgroundColor','#EFEEEE')}
			
			});

			}

});

$("#tempF").click(function(){
if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(onSuccess);}
	
			function onSuccess(position) {
			 lat = position.coords.latitude;
			 lon = position.coords.longitude;
			 weatherData='https://fcc-weather-api.glitch.me/api/current?lat='+lat+'&lon='+lon;
			
			
			$.getJSON(weatherData,function (data) {
			var a=data.weather[0].icon;
      var convertTemp=Math.round(data.main.temp*(9/5)+32);
      var convertSpeed=Math.round((data.wind.speed)/(0.44704));
			var large2= data.name+'</br> Current Temperature:    '+convertTemp+'&deg;F<img style="padding:0 0 7px 17px;" src='+a+'.png"></br>Wind Speed:   '+convertSpeed+'   MPH' ;
					
			
			$("#info").html(large2);
        		var a = data.weather[0].main;
   
			
					
			if (a.indexOf("clear")== -1){
				
				$('#name').css('backgroundColor','#FAFAFA')}
				
			else if (a.indexOf("thunderstorm")== -1) {
				$('#name').css('backgroundColor','#8E9FC4')}
			else if(a.indexOf("Rain")!== -1) {
			$('#name').css('backgroundColor','#C0C8DA')}
			else if (a.indexOf("drizzle")== -1) {
			$('#name').css('backgroundColor','#d9dce0')}
        else if (a.indexOf("clouds")== -1) {
			$('#name').css('backgroundColor','#EFEEEE')}
			
			
			});

			}


});



});