import app from "./app";
import env from "./env";

app.listen(env.PORT,()=>{
    console.log("server is running in http://localhost:"+env.PORT)
})