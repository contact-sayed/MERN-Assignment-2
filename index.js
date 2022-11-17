var fs=require('fs');
var http=require('http');
var server=http.createServer(function (req,res) {

    if(req.url=="/"){
        let data= fs.readFileSync('asia.html', 'utf8');
        res.end(data);
    }

    else if(req.url=="/Bangladesh"){
        let data= fs.readFileSync('bangladesh.html', 'utf8');
        res.end(data);
    }


    else if(req.url=="/India"){
        let data= fs.readFileSync('india.html', 'utf8');
        res.end(data);
    }

    else if(req.url=="/Nepal"){
        let data= fs.readFileSync('nepal.html', 'utf8');
        res.end(data);
    }

    else if(req.url=="/Pakistan"){
        let data= fs.readFileSync('pakistan.html', 'utf8');
        res.end(data);
    }

    else if(req.url=="/Bhutan"){
        let data= fs.readFileSync('bhutan.html', 'utf8');
        res.end(data);
    }

    else if(req.url=="/Myanmar"){
        let data= fs.readFileSync('myanmar.html', 'utf8');
        res.end(data);
    }

});
server.listen(8080);
console.log("Server Run Success");