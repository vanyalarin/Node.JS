var http = require("http");

http.createServer(function(request, response){
    console.log("Url: " + request.url);
    console.log("Тип запроса: " + request.method);
    console.log("User-Agent: " + request.headers["user-agent"]);
    console.log("Все заголовки");
    console.log(request.headers);
    response.setHeader("UserId", 12);
    response.setHeader("Content-Type", "text/html; charset=utf-8;");
    response.write("<h2>hello world</h2>");
    response.end();

    // response.setHeader("Content-Type", "text/html; charset=utf-8;");
     
    // if(request.url === "/"){
    //     response.statusCode = 302; // временная переадресация
    //     // на адрес localhost:3000/newpage
    //     response.setHeader("Location", "/newpage");
    // }
    // else if(request.url == "/newpage"){
    //     response.write("New address");
    // }
    // else{
    //     response.statusCode = 404; // адрес не найден
    //     response.write("Not Found");
    //}
}).listen(3000);