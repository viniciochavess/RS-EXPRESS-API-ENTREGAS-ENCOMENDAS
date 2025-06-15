import express from "express";
const app = express();

app.use(express.json());


app.use("/",(resquest, response)=>{
    response.status(200).json({
        status: "ok"
    })
})

export default app;
