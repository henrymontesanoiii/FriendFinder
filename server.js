const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

//set up middleware

app.use(express.urlencoded({extended: true}));
app.use(express.json());

//import routes 
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

app.listen(PORT, function(){
  console.log(`App is now running on http://localhost:${PORT}`);
});

