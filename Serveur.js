
var express = require('express');
var app = express();


var fs = require('fs');
var path = require('path');

function extname(dir){
var i = dir.lastIndexOf('\\');
var ch = ''
for(var j=i+1;j<dir.length-4;j++){
	ch+=dir[j];
}
	return ch
}

function extraire_path(dir){
	var i = dir.indexOf('\\',dir.indexOf('\\',dir.indexOf('\\')+1)+1);
	ch = ''
	for(j=0;j<i;j++){
		ch += dir[j];
	}
	ch.replace(/\\/g,"\\");
	return(ch);
}
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
			if(ext=='mp3'){
			
			//console.log(i);
			chemin ="chemin"+j;
			fil[chemin] = extname(next);
			
			//console.log(typeof next);
			
			//tab = tab + [next];
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
fs.writeFile('./public/playlist6.json', donnees, function(erreur) {
    if (erreur) {
        console.log(erreur)}
});

//var filtered_tab = array.filter(function (el) {
//  return el != null;
//});
//var filtered_tab = array.filter(el => el!=null);

//console.log(filtered_tab);
//console.log(typeof fil);
//.log(fil);
console.log(fil);

}

//var dir = 'C:\\Users\\mesda\\Documents\\ECL\\Electifs\\APP_WEB\\project\\public\\';
dir = __dirname;
//var che = extraire_path(dir);

crawl(dir);


app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res, next){
  res.render('./public/index.html');
});

app.listen(8080, function(){
  console.log(' server running ')
})
//

//***************************************************************************************************************************************************
