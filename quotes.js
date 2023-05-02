function onResponse(response){
	console.log('risposta ricevuta');
	return response.json();
}


function onJsonShutter(json){
	console.log('Json ricevuto');
	console.log(json);
	const titolo = json.Speaker;
	const frase = json.Quote;
	
	const nome = document.createElement('h1');
	nome.textContent = 'Il SuperEroe ' + titolo + ' una volta ha detto: ';
	
	const paragrafo = document.createElement('p');
	paragrafo.textContent = frase;

	const etichetta = document.querySelector('#result');
	 etichetta.innerHTML = '';
	 etichetta.appendChild(nome);
	 etichetta.appendChild(paragrafo);
	

	
}

function onSnap(event){
	event.preventDefault();
	const etichetta = document.querySelector('#result');
	etichetta.classList.remove('hidden');

fetch("https://marvel-quote-api.p.rapidapi.com/", {
	"method": "GET",
	"headers": {
		"X-RapidAPI-Host": "marvel-quote-api.p.rapidapi.com",
		"X-RapidAPI-Key": "c44e90d529msh759d8c18a550f1cp115ad6jsn8f3d9d1546dd"
	}

}).then(onResponse).then(onJsonShutter)
.catch(err => {
	console.error(err);
});



}

const button = document.querySelector('button');
button.addEventListener('click', onSnap);














