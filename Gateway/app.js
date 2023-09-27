const express = require("express")
const {createProxyMiddleware} = require("http-proxy-middleware");

const app = express();

app.use("/characters", createProxyMiddleware({
    target:"http://localhost:3001/",
    changeOrigin:true
}))
app.use("/films", createProxyMiddleware({
    target:"http://localhost:3002/",
    changeOrigin:true
}))
app.use("/planets", createProxyMiddleware({
    target:"http://localhost:3003/",
    changeOrigin:true
}))

const PORT = 8000
app.listen(PORT, ()=>{
    console.log("Gateway Operative 100%");
} )