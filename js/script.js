
var xmlhttp = new XMLHttpRequest();
var filmesArray = ["tt0451279", "tt5013056", "tt3896198", "tt3469046", 
					"tt3890160", "tt2316204", "tt2250912", "tt2406566", 
					"tt2239822", "tt1648190", "tt3315342", "tt1856101"];
var rand = filmesArray[Math.floor(Math.random() * filmesArray.length)];
var url = "http://www.theimdbapi.org/api/movie?movie_id="+rand;

xmlhttp.onreadystatechange = function(){
	if(this.readyState == 4 && this.status == 200) {
		var myObj = JSON.parse(this.responseText);				
		var i =1;

		$('.img').attr('src', myObj.poster.thumb); 
		$('#btn-ajuda').click(function(){
			$('.txt-modal').html(myObj.storyline);
		});		
		$('#enviar').click(function(){
			var diretor = myObj.director;
			var resposta = $('#resposta-quiz').val();
			if(i <= 10){
				if(diretor === resposta){				
					$('.pontuacao').append('<li class="acertou">' + i + '</li>');
									
					i++;				
				} else{
					$('.pontuacao').append('<li class="errou">' + i + '</li>');
					i++;							
				}
			}else{
				alert("Suas chances acabaram meu xovem")
			}				
		});		
	}
}



xmlhttp.open("GET",url, true);
xmlhttp.send();





