const app = require("./app");

const dotenv = require("dotenv");
const connectDatabase=require("./config/Database");
const { connect } = require("http2");

//Handling Uncaugth Exception

process.on("uncaughtException",(err)=>{
    console.log(`Error:${err.message}`);
    console.log(`Shutting down the server due to Uncaugth Exception`);
    process.exit();

});


 
//config

dotenv.config({path:"./config/config.env"})

//connecting to database

connectDatabase();


const port =process.env.PORT 

const server=app.listen(port, () => {
    
    console.log(`Server is working on http://localhost:${process.env.PORT}`);
}) ;

//Unhandled Promise Rejection

process.on("unhandledRejection",(err)=>{
    console.log(`Error:${err.message}`);
    console.log(`Shutting down the server due to unhandled promise rejection`);

    server.close(()=>{
        process.exit(1);
    }); 
});