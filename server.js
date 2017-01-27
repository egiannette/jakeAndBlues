// Requiring dependencies
const express = require('express');
const app = express();

// Set our port to 3000
const PORT = 3000;

app.use("/", express.static("./"));
app.use("/js", express.static("build"));

app.get('*', function(req, res) {
	res.sendFile('./index.html');
})

// Starts our server.
app.listen(PORT, function() {
  console.log("Server is listening on PORT: " + PORT);
});
