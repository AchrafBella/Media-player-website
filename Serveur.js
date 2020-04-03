
// importing packages
var http = require('http'),
ms = require('mediaserver');

//*************************************************************************************************************************************

http.createServer(function (req, res) {

    ms.pipe(req, res, "C:\\Users\\mesda\\Documents\\MUSIC\\Maître Gims - Sapés comme jamais (Clip officiel) f(MP3_128K).mp3");

}).listen(8080, '127.0.0.1');
