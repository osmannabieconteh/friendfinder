 app.get("/api/friends", function (req, res) {

    connection.query("SELECT * FROM friends", function (err, result) {
       if (err) throw err;
   
       var html = "<h1> FRIEND FINDER </h1>";
   
   
       html += "<ul>";
   
   
       for (var i = 0; i < result.length; i++) {
         html += "<li><p> ID: " + result[i].id + "</p>";
         html += "<p>Friends: " + result[i].name + " </p></li>";
       }
   
   
       html += "</ul>";
       res.send(html);
     });
   });
   
   
   app.post("/api/friends", function (req, res) {
     console.log(req)
   
     var newCharacter = req.body;
   
     console.log(newCharacter);
   
     characters.push(newCharacter);
   
     res.json(newCharacter);
   });
   
   
   app.listen(PORT, function () {
   
     console.log("Server listening on: http://localhost:" + PORT);
   });
   
   
   
   
   
   
   
   