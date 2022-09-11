const app = require("./app.js");

require("dotenv").config();// needed for the code below to work

const PORT = process.env.PORT;// this pulls in the port into the .env file


//Next turn the server on

app.listen(PORT, () => {
    console.log(`app is live on port ${PORT}`)
})