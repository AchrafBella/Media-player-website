
////////////////////////Noter que les fichiers index.html et style.css doivent se trouver dans un dosiier nommé public qui se trouve dans le meme endroit 
/////////////////////// que le serveur. Les fichiers audio et video à lire doivent se trouver dans le dossier public aussi//////////////////////////////// 


////////////Pour que ca il faut aller au cmd (l'invite de commande) puis aller à l'emplacement du fichier serveur.js puis taper npm.install express
/////////// puis taper node server.js pour lancer le serveur//////////////////////////////////////////////////////////////////////////////////////


var express = require('express');
var app = express();
var fs = require('fs');
var path = require('path');


//La fonction extpath(dir) permet  d'extraire le nom d'un fichier. On élémine toutes les \ avant le nom fu fichier. 
function extpath(dir){
var i = dir.lastIndexOf('\\');
var ch = ''
for(var j=i+1;j<dir.length;j++){
	ch+=dir[j];
}
	return ch
}

//La fonction crawl(dir) permet d'extraire toutes les videos et les audios qui existent dans le serveur et stocker leurs noms dans un fichier JSON
var j=0;
var fil = {};
var chemin = "";
function crawl(dir){
	//console.log('[+]',dir);
	var files = fs.readdirSync(dir);

	try{
	for(var x in files){
			
		var next = path.join(dir,files[x]);
		
		
		if (fs.lstatSync(next).isDirectory()==true){

			crawl(next);

			
			
		}
		else {
			var ext = next[next.length-3]+ next[next.length-2] + next[next.length-1];
			//console.log(ext);
			if(ext=='mp3' || ext=="mp4"){
			
			//console.log(i);
			chemin ="chemin"+j;
			fil[chemin] = extpath(next);
			
			//console.log(typeof next);
			
			j+=1;
			
			//console.log(chemin);
			
		}

		}
		
	
}
}
		catch(error){
			console.log(error);
		}

	
let donnees = JSON.stringify(fil);
fs.writeFile('./public/playlist.json', donnees, function(erreur) {
    if (erreur) {
        console.log(erreur)}
});


console.log(fil);

}

dir = __dirname;
crawl(dir);
/////////////////////On accède au dossier public qui se trouve dans le meme endroit que serveur.js pour afficher le contenu de index.html

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res, next){
  res.render('./public/index.html');
});

///////////On crée un port d'ecoute de notre serveur (ou on va affiché notre media player)
app.listen(8080, function(){
  console.log(' server running ')
})
//

//***************************************************************************************************************************************************
